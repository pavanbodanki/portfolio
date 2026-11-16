// Futuristic effects: neural-network particle background, scroll reveal, card spotlight, typing tagline.
(function () {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ---- Particle network background ----
    const canvas = document.createElement('canvas');
    canvas.id = 'bg-canvas';
    document.body.prepend(canvas);
    const ctx = canvas.getContext('2d');
    let w, h, dpr, nodes = [];
    const mouse = { x: -9999, y: -9999 };

    function resize() {
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        w = canvas.width = innerWidth * dpr;
        h = canvas.height = innerHeight * dpr;
        const count = Math.min(90, Math.floor((innerWidth * innerHeight) / 16000));
        nodes = Array.from({ length: count }, () => ({
            x: Math.random() * w, y: Math.random() * h,
            vx: (Math.random() - 0.5) * 0.3 * dpr, vy: (Math.random() - 0.5) * 0.3 * dpr,
            r: (Math.random() * 1.6 + 0.6) * dpr
        }));
    }

    function draw() {
        ctx.clearRect(0, 0, w, h);
        const maxD = 140 * dpr;
        for (let i = 0; i < nodes.length; i++) {
            const a = nodes[i];
            if (!reduce) {
                a.x += a.vx; a.y += a.vy;
                if (a.x < 0 || a.x > w) a.vx *= -1;
                if (a.y < 0 || a.y > h) a.vy *= -1;
            }
            for (let j = i + 1; j < nodes.length; j++) {
                const b = nodes[j];
                const d = Math.hypot(a.x - b.x, a.y - b.y);
                if (d < maxD) {
                    ctx.strokeStyle = `rgba(120,170,255,${0.18 * (1 - d / maxD)})`;
                    ctx.lineWidth = dpr * 0.6;
                    ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
                }
            }
            const md = Math.hypot(a.x - mouse.x, a.y - mouse.y);
            if (md < maxD * 1.4) {
                ctx.strokeStyle = `rgba(34,211,238,${0.35 * (1 - md / (maxD * 1.4))})`;
                ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
            }
            ctx.fillStyle = i % 3 === 0 ? 'rgba(167,139,250,0.8)' : 'rgba(34,211,238,0.8)';
            ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2); ctx.fill();
        }
        if (!reduce) requestAnimationFrame(draw);
    }

    addEventListener('resize', resize);
    addEventListener('mousemove', e => { mouse.x = e.clientX * dpr; mouse.y = e.clientY * dpr; });
    addEventListener('mouseout', () => { mouse.x = mouse.y = -9999; });
    resize(); draw();

    // ---- Card spotlight follows cursor ----
    document.addEventListener('mousemove', e => {
        const card = e.target.closest && e.target.closest('.card');
        if (!card) return;
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${e.clientX - r.left}px`);
        card.style.setProperty('--my', `${e.clientY - r.top}px`);
    });

    // ---- Scroll reveal ----
    window.revealCards = function () {
        const els = document.querySelectorAll('.card:not(.reveal), .post-card:not(.reveal)');
        if (!('IntersectionObserver' in window) || reduce) return;
        const io = new IntersectionObserver(entries => entries.forEach(en => {
            if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); }
        }), { threshold: 0.08 });
        els.forEach(el => { el.classList.add('reveal'); io.observe(el); });
    };
    window.revealCards();

    // ---- Typing tagline ----
    const tag = document.querySelector('.hero-tagline');
    if (tag) {
        const phrases = JSON.parse(tag.dataset.phrases || '[]');
        const out = document.createElement('span');
        const cur = document.createElement('span');
        cur.className = 'cursor'; cur.innerHTML = '&nbsp;';
        tag.textContent = ''; tag.append('> ', out, cur);
        if (reduce) { out.textContent = phrases[0] || ''; return; }
        let p = 0, c = 0, del = false;
        (function tick() {
            const s = phrases[p] || '';
            out.textContent = s.slice(0, c);
            if (!del && c < s.length) c++;
            else if (del && c > 0) c--;
            else if (!del) { del = true; return setTimeout(tick, 1800); }
            else { del = false; p = (p + 1) % phrases.length; }
            setTimeout(tick, del ? 30 : 60);
        })();
    }
})();

