---
layout: page
permalink: /publications/
title: Publications
description: Papers grouped by research area, newest first.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<p class="pub-note">For citation counts, see my <a href="https://scholar.google.com/citations?user={{ site.data.socials.scholar_userid }}">Google Scholar profile</a>.</p>

<div class="pub-toolbar">
  <div class="domain-filter" role="toolbar" aria-label="Filter by research area">
    <button type="button" class="domain-chip active" data-domain="all">All <span class="chip-count"></span></button>
    {% for d in site.data.domains %}
      <button type="button" class="domain-chip" data-domain="{{ d.key }}"><i class="{{ d.icon }}"></i> {{ d.short }} <span class="chip-count"></span></button>
    {% endfor %}
  </div>
  <div class="pub-search">
    <i class="fa-solid fa-magnifying-glass"></i>
    <input type="search" id="pub-search" spellcheck="false" autocomplete="off" placeholder="Search titles, authors, venues…" aria-label="Search publications">
  </div>
</div>

<p class="pub-empty" hidden>No papers match your search.</p>

<div class="publications">
{% for d in site.data.domains %}
  <section class="domain-section" id="{{ d.key }}" data-domain="{{ d.key }}">
    <header class="domain-header">
      <h2><i class="{{ d.icon }}"></i> {{ d.title }}</h2>
      <p>{{ d.description }}</p>
    </header>
    {% bibliography --group_by none --query @*[domain={{ d.key }}]* %}
  </section>
{% endfor %}
</div>

<script src="{{ '/assets/js/publications.js' | relative_url | bust_file_cache }}" defer></script>
