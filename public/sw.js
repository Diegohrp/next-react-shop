if(!self.define){let e,s={};const t=(t,n)=>(t=new URL(t+".js",n).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(n,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const o=e=>t(e,i),r={module:{uri:i},exports:c,require:o};s[i]=Promise.all(n.map((e=>r[e]||o(e)))).then((e=>(a(...e),c)))}}define(["./workbox-6316bd60"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next//static/media/bt_add_to_cart.fb1463ea.svg",revision:"aNb4kg-om3oKSct2-B08u"},{url:"/_next//static/media/bt_added_to_cart.45632f53.svg",revision:"aNb4kg-om3oKSct2-B08u"},{url:"/_next//static/media/flechita.1c152575.svg",revision:"aNb4kg-om3oKSct2-B08u"},{url:"/_next//static/media/icon_close.e791344b.png",revision:"aNb4kg-om3oKSct2-B08u"},{url:"/_next//static/media/icon_menu.b70fc14a.svg",revision:"aNb4kg-om3oKSct2-B08u"},{url:"/_next//static/media/icon_shopping_cart.665a6046.svg",revision:"aNb4kg-om3oKSct2-B08u"},{url:"/_next//static/media/logo_yard_sale.ab5a49e4.svg",revision:"aNb4kg-om3oKSct2-B08u"},{url:"/_next/server/middleware-build-manifest.js",revision:"aNb4kg-om3oKSct2-B08u"},{url:"/_next/server/middleware-manifest.json",revision:"aNb4kg-om3oKSct2-B08u"},{url:"/_next/server/middleware-react-loadable-manifest.js",revision:"aNb4kg-om3oKSct2-B08u"},{url:"/_next/static/aNb4kg-om3oKSct2-B08u/_buildManifest.js",revision:"aNb4kg-om3oKSct2-B08u"},{url:"/_next/static/aNb4kg-om3oKSct2-B08u/_middlewareManifest.js",revision:"aNb4kg-om3oKSct2-B08u"},{url:"/_next/static/aNb4kg-om3oKSct2-B08u/_ssgManifest.js",revision:"aNb4kg-om3oKSct2-B08u"},{url:"/_next/static/chunks/647-a74c75161136ebca.js",revision:"aNb4kg-om3oKSct2-B08u"},{url:"/_next/static/chunks/framework-fc97f3f1282ce3ed.js",revision:"aNb4kg-om3oKSct2-B08u"},{url:"/_next/static/chunks/main-55e41520f0bf01c1.js",revision:"aNb4kg-om3oKSct2-B08u"},{url:"/_next/static/chunks/pages/_app-0a6b4e34f74bdb67.js",revision:"aNb4kg-om3oKSct2-B08u"},{url:"/_next/static/chunks/pages/_error-1995526792b513b2.js",revision:"aNb4kg-om3oKSct2-B08u"},{url:"/_next/static/chunks/pages/checkout-e4531d81aa7516be.js",revision:"aNb4kg-om3oKSct2-B08u"},{url:"/_next/static/chunks/pages/index-406df54f54db699f.js",revision:"aNb4kg-om3oKSct2-B08u"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"aNb4kg-om3oKSct2-B08u"},{url:"/_next/static/chunks/webpack-9b312e20a4e32339.js",revision:"aNb4kg-om3oKSct2-B08u"},{url:"/_next/static/css/13113cdcc1db793c.css",revision:"aNb4kg-om3oKSct2-B08u"},{url:"/_next/static/css/39d541cfd996de1b.css",revision:"aNb4kg-om3oKSct2-B08u"},{url:"/_next/static/css/8452630831ba1ab7.css",revision:"aNb4kg-om3oKSct2-B08u"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icon-192x192.png",revision:"7daafa28183f4a3e825150b875ee6099"},{url:"/icon-256x256.png",revision:"616e737eff357ec0f31162de2eb8f0c1"},{url:"/icon-384x384.png",revision:"04dbcf9ab842cc5e0200363983079b56"},{url:"/icon-512x512.png",revision:"129d57ef39665eea01c3d79ad4b3c576"},{url:"/manifest.json",revision:"ae0894fe33ab15a46c30952c12f88ff1"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:t,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
