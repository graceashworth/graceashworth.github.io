# graceashworth.com

A letter to the reader. Plain HTML + CSS + a little vanilla JavaScript.
No build tools, no frameworks: open the folder in your IDE, edit, refresh the browser.

## The files

| File | What it is |
|---|---|
| `index.html` | About: the envelope, postmark, letter, and Cube photos |
| `work.html` | Work: four enclosures + the press clipping |
| `play.html` | Play: mixtape, concert note card, four postcards |
| `style.css` | All styling. Colors are variables at the very top |
| `script.js` | Postmark date + envelope animation |
| `images/` | Photos |

Every editable spot in the HTML is marked with a `═══ EDIT ═══` comment.

## Common edits

**Change the letter text** - `index.html`, inside `<div class="letter">`.

**Change the colors** - top of `style.css`. Edit `--ink`, `--pink`, `--paper`
and the whole site follows.

**Add a city postcard** - `play.html`: copy any
`<article class="postcard">...</article>` block, paste it inside
`<div class="postcards">`, edit the text.

**Add a photo to a postcard** - each postcard has a commented-out `<img>` line.
Drop your photo in `images/`, uncomment the line, update the filename.

**Swap an album** - in Spotify: Share > Embed album > copy the iframe `src` URL.
In `play.html`, replace the `src` on that album's iframe, then update the
side label and fav track lines.

**Add a work entry** - `work.html`: copy a `<section class="enclosure">` block
plus the `<hr class="perforation">` above it, edit the text.

**Remove the envelope animation** - delete the `#envelope-overlay` div in
`index.html` and the matching ENVELOPE OPENING section in `style.css`.

**Make the envelope open on every visit** (it currently shows once per
browser session) - in `script.js`, delete the two lines that mention
`sessionStorage`.

## Publishing to GitHub Pages

Push these files to the repo root (or `/docs`), then in the repo:
Settings > Pages > deploy from branch. Since the site uses a custom domain,
keep the existing `CNAME` file from your old repo, or add one containing
`graceashworth.com`.
