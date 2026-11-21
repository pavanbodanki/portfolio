#!/usr/bin/env node
// Sets up email + password sign-in for the AI Daily editor (blog/admin.html).
//
// Run from the portfolio folder:   node blog/tools/set-editor-password.mjs
//
// It asks for your GitHub access key and a password (nothing is echoed or sent anywhere
// except GitHub, to check the key works), encrypts the key with the password
// (PBKDF2-SHA256, 600k iterations -> AES-256-GCM), writes blog/editor-key.json,
// and commits + pushes it. Only the encrypted key is published.
//
// Non-interactive (for testing): EDITOR_TOKEN=... EDITOR_PASSWORD=... node ... --out <file> --no-push --no-check
import { pbkdf2Sync, randomBytes, createCipheriv } from 'node:crypto';
import { writeFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const EMAIL = 'pavanbodanki@gmail.com';
const LOGIN = 'pavanbodanki';
const REPO = 'pavanbodanki/portfolio';
const ITERATIONS = 600000;
const args = process.argv.slice(2);
const outArg = args.includes('--out') ? args[args.indexOf('--out') + 1] : null;
const here = path.dirname(fileURLToPath(import.meta.url));
const OUT = outArg || path.join(here, '..', 'editor-key.json');

function askHidden(question) {
    return new Promise(resolve => {
        const stdin = process.stdin;
        process.stdout.write(question);
        let value = '';
        stdin.setRawMode(true); stdin.resume(); stdin.setEncoding('utf8');
        const onData = ch => {
            if (ch === '\u0003') { process.stdout.write('\n'); process.exit(1); }            // Ctrl+C
            if (ch === '\r' || ch === '\n' || ch === '\u0004') {
                stdin.setRawMode(false); stdin.pause(); stdin.off('data', onData);
                process.stdout.write('\n'); resolve(value); return;
            }
            if (ch === '\u007f' || ch === '\b') { if (value) { value = value.slice(0, -1); process.stdout.write('\b \b'); } return; }
            value += ch; process.stdout.write('•'.repeat(ch.length));
        };
        stdin.on('data', onData);
    });
}

async function checkToken(token) {
    const h = { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json' };
    const user = await fetch('https://api.github.com/user', { headers: h });
    if (!user.ok) throw new Error(`GitHub did not accept this access key (${user.status}). Check you copied it fully.`);
    const u = await user.json();
    if (u.login.toLowerCase() !== LOGIN) throw new Error(`This key belongs to "${u.login}", not "${LOGIN}".`);
    const repo = await fetch(`https://api.github.com/repos/${REPO}`, { headers: h });
    if (!repo.ok) throw new Error(`The key can't see ${REPO} (${repo.status}). Set Repository access → Only select repositories → portfolio.`);
    const r = await repo.json();
    if (!r.permissions?.push) throw new Error('The key needs Contents: Read and write on the portfolio repository.');
}

const token = (process.env.EDITOR_TOKEN || await askHidden('Paste your GitHub access key (hidden): ')).trim();
if (!token) { console.error('No access key entered.'); process.exit(1); }
if (!args.includes('--no-check')) {
    process.stdout.write('Checking the key with GitHub… ');
    try { await checkToken(token); console.log('OK'); }
    catch (e) { console.log(''); console.error('✗ ' + e.message); process.exit(1); }
}

let password = process.env.EDITOR_PASSWORD;
if (!password) {
    console.log('\nChoose an editor password. Use something long, e.g. 4–5 random words (at least 12 characters).');
    password = await askHidden('Password (hidden): ');
    const again = await askHidden('Repeat password: ');
    if (password !== again) { console.error('✗ Passwords did not match.'); process.exit(1); }
}
if (password.length < 12) { console.error('✗ Password must be at least 12 characters.'); process.exit(1); }

const salt = randomBytes(16), iv = randomBytes(12);
const key = pbkdf2Sync(password, salt, ITERATIONS, 32, 'sha256');
const cipher = createCipheriv('aes-256-gcm', key, iv);
const data = Buffer.concat([cipher.update(token, 'utf8'), cipher.final(), cipher.getAuthTag()]); // WebCrypto expects ciphertext||tag
writeFileSync(OUT, JSON.stringify({
    v: 1, email: EMAIL, kdf: 'PBKDF2-SHA256', iterations: ITERATIONS,
    salt: salt.toString('base64'), iv: iv.toString('base64'), data: data.toString('base64')
}, null, 2) + '\n');
console.log(`\n✓ Saved the encrypted key to ${path.relative(process.cwd(), OUT)}`);

if (!args.includes('--no-push')) {
    try {
        const repoDir = path.join(here, '..', '..');
        execSync('git pull --ff-only --quiet', { cwd: repoDir, stdio: 'inherit' });
        execSync(`git add "${OUT}" && git commit -m "Editor: update encrypted sign-in key" --quiet && git push --quiet`, { cwd: repoDir, stdio: 'inherit' });
        console.log('✓ Published. In ~2 minutes, sign in at https://pavanbodanki.github.io/portfolio/blog/admin.html');
        console.log(`  Email: ${EMAIL}   Password: the one you just chose`);
    } catch (e) {
        console.error('✗ Could not push automatically. Run: git add blog/editor-key.json && git commit -m "Editor key" && git push');
    }
}
