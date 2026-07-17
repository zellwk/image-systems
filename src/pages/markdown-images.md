---
layout: '@/layouts/OneColumn.astro'
title: Images in Markdown
---

The image below is written with plain Markdown syntax. Astro routes it through
the `Image` component automatically, so it gets optimized — but without
`widths`, `formats`, or any other enhancement.

![A very cool penguin!](../assets/penguin.png)

To use those enhancements inside content, you need MDX —
[see the MDX version of this page](/mdx-images/).

[Back to the examples →](/)
