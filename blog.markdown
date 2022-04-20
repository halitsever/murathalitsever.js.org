---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: Blog
description: Thats page contains and listing my all of blog/article posts
---

{% include header.html %}

<div class="container">
<div id="blog-container">
  <div style="text-align:center;" class="post-blog">
    {% for post in site.posts %}
    <div class="post-card">
      <article>
<br>
  <div class="card bg-dark" >
  <h5 class="card-header" > {{ post.title }}</h5>
  <div class="card-body" >

    <p class="card-text">  {{ post.excerpt | strip_html | strip_newlines | truncate: 156 }}</p>
    <a href="{{post.url}}" class="btn btn-primary bg-warning">Read more</a>
  </div>
</div>
      </article>
    </div>
    {% endfor %}
  </div>
</div>
</div>
