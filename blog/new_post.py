#!/usr/bin/env python3
"""Create today's AI Daily post.

Usage:
  python3 blog/new_post.py "Post title" --source "What I read" --url https://... --tags llm,agents --summary "One-line gist"

Creates blog/posts/<date>-<slug>.md and adds an entry to blog/posts.json.
Then open the .md file, write your take, commit and push.
"""
import argparse
import datetime
import json
import pathlib
import re

BLOG = pathlib.Path(__file__).resolve().parent

ap = argparse.ArgumentParser()
ap.add_argument("title")
ap.add_argument("--source", default="", help="Title of what you read")
ap.add_argument("--url", default="", help="Link to what you read")
ap.add_argument("--tags", default="", help="Comma-separated tags")
ap.add_argument("--summary", default="", help="One-line summary shown on the list page")
ap.add_argument("--date", default=datetime.date.today().isoformat(), help="YYYY-MM-DD (default: today)")
a = ap.parse_args()

slug = f"{a.date}-" + (re.sub(r"[^a-z0-9]+", "-", a.title.lower()).strip("-")[:60] or "post")
md_path = BLOG / "posts" / f"{slug}.md"
if md_path.exists():
    raise SystemExit(f"Already exists: {md_path}")

md_path.parent.mkdir(exist_ok=True)
md_path.write_text(
    "## The gist\n\nWhat the piece says, in two or three lines.\n\n"
    "## My take\n\nWhat I think about it.\n\n"
    "## Why it matters\n\nWho should care, and what changes.\n"
)

manifest = BLOG / "posts.json"
posts = json.loads(manifest.read_text()) if manifest.exists() else []
posts.insert(0, {
    "slug": slug,
    "title": a.title,
    "date": a.date,
    "source": {"title": a.source, "url": a.url},
    "tags": [t.strip() for t in a.tags.split(",") if t.strip()],
    "summary": a.summary,
})
manifest.write_text(json.dumps(posts, indent=2) + "\n")

print(f"Created {md_path.relative_to(BLOG.parent)}\nNow write your take, then: git add blog && git commit -m 'AI Daily: {a.title}' && git push")

