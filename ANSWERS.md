# Assignment 2: Your First Next.js App — Answers

**Name:** Christian G. Babatuan
**Course:** BSIT-3, Section 2
**Term:** Midterm

## 1. Monday (React) vs. Today (Next.js): what is inside `<body>`?

On Monday, when I viewed the page source of my React app, the `<body>` was almost empty. It only had an empty `<div id="root"></div>` and a `<script>` tag, with none of my actual content. In my Next.js app today, the `<body>` already contains the full page, including the `<main>`, the headings, my name, the mission briefing and the objectives list. The difference is that React sent an empty shell and built the page later in the browser, while Next.js sent the finished HTML from the server.

## 2. Did I find my name in the Next.js page source? Why was it already in the HTML?

Yes, I searched for my name with Ctrl + F in View Page Source and found "Christian G. Babatuan" in the HTML. It was already there because `app/page.tsx` is a Server Component, so Next.js ran it on the server and wrote the result as plain HTML. The HTML file was generated at build time, so the browser received my name before any JavaScript ran.

## 3. With JavaScript turned off: React app vs. Next.js app

When I turned JavaScript off and reloaded my React app, it showed a blank page, because React needs JavaScript to build the page inside the empty `<div id="root">`. When I did the same with my Next.js app, the whole page still appeared with my name, the briefing and the objectives. This happened because the content was already in the HTML and did not need JavaScript to display.

## 4. Which rendering approach does my React app use? What does `npm run build` say about my Next.js page?

My React app uses CSR (Client-Side Rendering), because the browser downloads JavaScript and then builds the page on the user's device. For my Next.js app, `npm run build` printed `○ /` with the legend `○ (Static) prerendered as static content`. This means Next.js uses SSG (Static Site Generation): it created the HTML for the page once during the build, and the server just hands out that finished file for every visitor.

## 5. One benefit of having the content already in the HTML

One benefit is better SEO, because search engine bots can read the content straight from the HTML without running JavaScript. Another is a faster first paint, because the browser can show the page as soon as the HTML arrives instead of waiting for JavaScript to download and run.
