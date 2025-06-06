---
title: Blog
templateEngine: [vto, md]
---

{{ for post of search.pages("type=blog draft=false", "order id=desc") }}
  <a href="blog/{{ post.id}}">{{ post.id }}. {{ post.title }}</a>
{{ /for }}