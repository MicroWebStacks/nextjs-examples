# 03_ssr-counter

shared global var demo. reload the page to increment the counter. All pages share the same counter

* using `getServerSideProps()` to execute code on server side
* same page code executes twice one on server, once on client, except `getServerSideProps()` is ignored on client and so are ignored all of its related imports

## vercel deployment
* https://ssr-counter.vercel.app/
