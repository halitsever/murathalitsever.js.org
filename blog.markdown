---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: Blog
description: Thats page contains and listing my all of blog/article posts

---

{% include header.html %}

<div id="blog-container">
  <div style="text-align:center;" class="post-blog">
    {% for post in site.posts %}
    <div class="post-card">
      <article>
        <div id="title-post-blog">
          <a
            style="text-decoration:none; color:black; font-size:140%;"
            href="{{ post.url }}"
          >
            {{ post.title }}
          </a>
        </div>
        <div id="desc-post-blog">
          {{ post.excerpt | strip_html | strip_newlines | truncate: 156 }}<br />
        </div>
      </article>
    </div>
    {% endfor %}
  </div>

  {% include footer.html %}
</div>
