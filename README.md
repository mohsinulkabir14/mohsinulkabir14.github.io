# mohsinulkabir14.github.io

Personal academic website of **Mohsinul Kabir**, ELLIS PhD student at the University of Manchester.
Live at <https://mohsinulkabir14.github.io>.

Built on [al-folio](https://github.com/alshedivat/al-folio) (Jekyll) with a custom skin in
[`_sass/_modern.scss`](_sass/_modern.scss). Pushing to `main` builds the site with GitHub Actions
([`deploy.yml`](.github/workflows/deploy.yml)) and publishes it to the `gh-pages` branch.

## Where things live

| What | File |
| --- | --- |
| Bio, research interests, home page | [`_pages/about.md`](_pages/about.md) |
| Publications | [`_bibliography/papers.bib`](_bibliography/papers.bib) |
| Research domains (publication groups) | [`_data/domains.yml`](_data/domains.yml) |
| Venue badge links | [`_data/venues.yml`](_data/venues.yml) |
| News items | [`_news/`](_news/) (one Markdown file per item) |
| Social links in the sidebar | [`_data/socials.yml`](_data/socials.yml) |
| CV link | [`_pages/cv.md`](_pages/cv.md) (points to the PDF on Google Drive) |
| Site settings | [`_config.yml`](_config.yml) |

## Adding a paper

Add a BibTeX entry to `_bibliography/papers.bib`. Besides the usual fields, the site uses:

```bibtex
  abbr     = {EMNLP},            % venue badge (add a link for new venues in _data/venues.yml)
  domain   = {culture},          % which section it appears in (keys in _data/domains.yml)
  tldr     = {One-sentence summary shown under the authors.},
  abstract = {...},              % "Abstract" button
  arxiv    = {2601.14063},       % "arXiv" button
  pdf      = {https://...},      % "PDF" button
  code     = {https://github.com/...},
  html     = {https://aclanthology.org/...},  % "Paper" button (landing page)
  additional_info = {. <strong>Findings</strong>},  % adds a Findings / Main tag
  selected = {true},             % also show on the home page
  bibtex_show = {true},
```

These fields are stripped from the BibTeX that visitors copy. Within each domain, papers are sorted by year and month, newest first.

Domains: `culture`, `trust`, `mental-health`, `figurative`, `bangla`, `reasoning`, `hci`, `applied-ml`.

## Adding news

Create `_news/YYYY-MM-DD-short-title.md`:

```markdown
---
layout: post
date: 2026-09-03 14:30:00-0400
inline: true
related_posts: false
---

🎉 Short announcement with a [link](https://...).
```

The home page shows the latest five; `/news/` shows all.

## Running locally

Needs Ruby 3.x (e.g. `brew install ruby@3.3`).

```bash
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>. Responsive images use ImageMagick. If it isn't installed, set
`imagemagick: enabled: false` in a local config override instead of editing `_config.yml`.
