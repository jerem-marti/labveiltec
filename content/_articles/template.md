---
title: "Template"
description: "A short summary of what the article is about."
image: 
  src: "cover.jpg"
  alt: "TBD"
head:
  meta:
    - name: 'keywords'
      content: 'nuxt, vue, content'
    - name: 'estimate-reading-time'
      content: 'XXmin'
    - name: 'robots'
      content: 'index, follow'
    - name: 'author'
      content: 'Jérémy Martin'
    - name: 'copyright'
      content: '© 2024 Jérémy Martin'
    - name: 'source'
      content: 'link to the source'
draft: true
---

# {{ title }}

> {{ description }}

🗝️ Keywords: **{{ $doc.head.meta[0].content }}**  
🕒 Estimated Reading Time: **{{ $doc.head.meta[1].content }}**

🧑‍🏫 Original author: **{{ $doc.head.meta[3].content }}**  
📜 Original article: [**{{ $doc.head.meta[5].content }}**](link to copy paste)

---

## Introduction

Start with an engaging introduction that summarizes what the article will cover.

## Key Section 1

Detailed content for the first section. Use examples, explanations, or key points here.

### Subsection 1.1

Expand on specifics in a subsection if needed. 
![cover image](/cover.jpg)

## Key Section 2

Another main section to cover additional topics or ideas.

- **Bullet points** can help in listing ideas.
- Use **bold text** to emphasize important points.

## Conclusion

Wrap up the article with a summary of key takeaways or a call to action.

---

### Additional Notes

- Replace `"cover.jpg"` in the `image.src` field with the actual path to your article cover image.
- Set `draft: false` when the article is ready for publishing.
- The `head.meta` fields are set up for SEO and author attribution.

---

With this template, you now have a structured, SEO-optimized article format that includes a dynamic keywords section. Let me know if you'd like further customization!





