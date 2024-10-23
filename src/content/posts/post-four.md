---
title: 'Post Four'
pubDate: 2024-10-23
description: 'This is post number four for this digital garden theme'
image: 
    url: 'https://docs.astro.build/assets/rose.webp'
    alt: 'The astro logo'
tags: ["astro", "blog", "digital garden", "four"]
---
Dynamically display a list of posts
Add the following code to blog.astro to return information about all your Markdown files. Astro.glob() will return an array of objects, one for each blog post.
```
src/pages/blog.astro
---
import BaseLayout from '../layouts/BaseLayout.astro'
const allPosts = await Astro.glob('./posts/*.md');
const pageTitle = "My Astro Learning Blog";
---
<BaseLayout pageTitle={pageTitle}>
  <p>This is where I will post about my journey learning Astro.</p>
  <ul>
    <li><a href="/posts/post-1/">Post 1</a></li>
    <li><a href="/posts/post-2/">Post 2</a></li>
    <li><a href="/posts/post-3/">Post 3</a></li>
  </ul>
</BaseLayout>
```
To generate the entire list of posts dynamically, using the post titles and URLs, replace your individual <li> tags with the following Astro code:
```
src/pages/blog.astro
---
import BaseLayout from '../layouts/BaseLayout.astro'
const allPosts = await Astro.glob('./posts/*.md');
const pageTitle = "My Astro Learning Blog";
---
<BaseLayout pageTitle={pageTitle}>
  <p>This is where I will post about my journey learning Astro.</p>
  <ul>
    <li><a href="/posts/post-1/">Post 1</a></li>
    <li><a href="/posts/post-2/">Post 2</a></li>
    <li><a href="/posts/post-3/">Post 3</a></li>

    {allPosts.map((post) => <li><a href={post.url}>{post.frontmatter.title}</a></li>)}
  </ul>
</BaseLayout>
```
Your entire list of blog posts is now being generated dynamically, by mapping over the array returned by Astro.glob().

Add a new blog post by creating a new post-4.md file in src/pages/posts/ and adding some Markdown content. Be sure to include at least the frontmatter properties used below.

```
---
layout: ../../layouts/MarkdownPostLayout.astro
title: My Fourth Blog Post
author: Astro Learner
description: "This post will show up on its own!"
image:
url: "https://docs.astro.build/default-og-image.png"
alt: "The word astro against an illustration of planets and stars."
pubDate: 2022-08-08
tags: ["astro", "successes"]
---
```
This post should show up with my other blog posts, because `Astro.glob()` is returning a list of all my posts in order to create my list.

Revisit your blog page in your browser preview at http://localhost:4321/blog and look for an updated list with four items, including your new blog post!