---
layout: page
title: teaching
permalink: /teaching/
description: 
nav: true
nav_order: 6
horizontal: false
---

<!-- pages/teaching.md -->
<div class="teaching">

<!-- Display projects without categories -->

{% assign sorted_courses = site.teaching | sort: "importance" %}

  <!-- Generate cards for each course -->

{% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for course in sorted_courses %}
      {% include teaching_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
{% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for course in sorted_courses %}
      {% include teaching.liquid %}
    {% endfor %}
  </div>
{% endif %}
</div>