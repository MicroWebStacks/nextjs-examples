# nextjs-examples
a sample set of basic patterns for nextjs evaluation and benchmarking

# 01_basics

* Nextjs now forbids full page refresh transitions : https://nextjs.org/docs/messages/no-html-link-for-pages
* Next executes page 2 get static props even if the page is not called, a sort of prefetch
* build requires to disable images optimization `images.unoptimized: true` in `next.config.js`
* export in `out` in addition to `next start`, does not run with vs code live server but runs with
    ```cmd
    python3 -m http.server 8000 --directory out
    ```
* `getStaticProps` is fetching the data on build time, but then result in needless refetch of the resulting json structure on every client page load. If that is an issue, it is necessary to fall back on client side load and caching. json Data is even loaded two times once on hover prefetch and then on Link click

* vercel deployment : https://basic-static.vercel.app/

