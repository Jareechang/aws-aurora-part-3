INSERT INTO social_accounts (username, social_type) VALUES ('Jareechang', 'Github');
INSERT INTO users (name, email, password, user_type, social_id) VALUES ('Jerry', 'jerry@world.com', 'test123', 'author', 1);
INSERT INTO users (name, email, password, user_type) VALUES ('Bob', 'bob@world.com', 'test123', 'guest');
INSERT INTO users (name, email, password, user_type) VALUES ('Susan', 'susan@world.com', 'test123', 'guest');

INSERT INTO posts (title, content, image_url, slug, user_id) VALUES (
    'Two Forms of Pre-rendering',
    '
Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.
',
    'https://images.unsplash.com/photo-1502759683299-cdcd6974244f?auto=format&fit=crop&w=440&h=220&q=60',
    'pre-rendering',
    1
);
INSERT INTO comments (content, user_id, post_id) VALUES ('What about Incremental Static Regeneration (ISR) ? Can you write about that ?', 2, 1);
INSERT INTO comments (content, user_id, post_id) VALUES ('When should I know to use SSG over SSR ? ', 3, 1);


INSERT INTO posts (title, content, image_url, slug, user_id) VALUES (
    'When to Use Static Generation v.s. Server-side Rendering',
    'We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

You can use Static Generation for many types of pages, including:

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

You should ask yourself: "Can I pre-render this page **ahead** of a users request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user''s request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.',
    'https://images.unsplash.com/photo-1502759683299-cdcd6974244f?auto=format&fit=crop&w=440&h=220&q=60',
    'ssr-vs-ssg',
    1
);

INSERT INTO comments (content, user_id, post_id) VALUES ('Great post', 2, 1);
