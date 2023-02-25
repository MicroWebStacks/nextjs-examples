# nextjs-examples
a sample set of basic patterns for nextjs evaluation and benchmarking

# 01_basics

* Nextjs no longer allows full page refresh transitions : https://nextjs.org/docs/messages/no-html-link-for-pages
* Next executes page 2 get static props even if the page is not called, a sort of prefetch
* build requires to disable images optimization `images.unoptimized: true` in `next.config.js`
* export in `out` in addition to `next start`, does not run with vs code live server but runs with
    ```cmd
    python3 -m http.server 8000 --directory out
    ```
* `getStaticProps` is fetching the data on build time, but then result in needless refetch of the resulting json structure on every client page load. If that is an issue, it is necessary to fall back on client side load and caching. json Data is even loaded two times once on hover prefetch and then on Link click

## vercel deployment
* https://basic-static.vercel.app/

# 02_streaming-app

* using the new beta feature app directory

https://nextjs.org/docs/advanced-features/react-18/streaming
https://nextjs.org/docs/advanced-features/react-18/server-components
https://beta.nextjs.org/docs/upgrade-guide

# 03_ssr-counter

shared global var demo. reload the page to increment the counter. All pages share the same counter

* using `getServerSideProps()` to execute code on server side
* same page code executes twice one on server, once on client, except `getServerSideProps()` is ignored on client and so are ignored all of its related imports

## vercel deployment
* https://ssr-counter.vercel.app/

# More Nextjs examples

## Next MDX ToC
remote mdx with in memory rehype plugins for generation of ToC. Using React components inside MDX

* https://github.com/MicroWebStacks/next_mdx_toc

