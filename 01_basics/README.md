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
