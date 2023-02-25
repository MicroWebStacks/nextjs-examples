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
* https://examples-basics.vercel.app/

## lifecycle log
* during build
```log
Hello from home page body
Hello from page2 body
Hello from page2 getStaticProps 'on build time'
Hello from home page function
Hello from page2 function
```
* in the browser on home load
```log
Hello from home page body
Hello from home page function
```
* on page 2 link hover
```log
Hello from page2 body
```
* on click page 2 load
```log
Hello from page 2 function
```

# 02_streaming-app

* using the new beta feature app directory
* nexted layout
* `React Server Components` by default

https://beta.nextjs.org/docs
https://app-dir.vercel.app/
https://nextjs.org/docs/advanced-features/react-18/streaming
https://nextjs.org/docs/advanced-features/react-18/server-components
https://beta.nextjs.org/docs/upgrade-guide

## lifecycle log
* build
```log
Hello from page2 body
Hello from page2 body
Hello from home page function
Hello from page2 function
Hello from home page function
Hello from page2 function
```
* on fetching all pages : No log output, neither on the server nor on the browser
# 03_ssr-counter

shared global var demo. reload the page to increment the counter. All pages share the same counter

* using `getServerSideProps()` to execute code on server side
* same page code executes twice one on server, once on client, except `getServerSideProps()` is ignored on client and so are ignored all of its related imports

## vercel deployment
* https://ssr-counter.vercel.app/

# 04_server-cookie-counter

Work In Progress

* using `src/app`
* using `cookies()` `next/headers` but only has get, set not yet available. https://beta.nextjs.org/docs/api-reference/cookies#good-to-know

# More Nextjs examples

## Next MDX ToC
remote mdx with in memory rehype plugins for generation of ToC. Using React components inside MDX

* https://github.com/MicroWebStacks/next_mdx_toc

