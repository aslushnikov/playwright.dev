(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{125:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return s}));var r=a(3),n=a(7),i=(a(0),a(147)),o={id:"class-playwright",title:"Playwright"},c={unversionedId:"api/class-playwright",id:"api/class-playwright",isDocsHomePage:!1,title:"Playwright",description:"Playwright module provides a method to launch a browser instance. The following is a typical example of using Playwright to drive automation:",source:"@site/docs/api/class-playwright.md",slug:"/api/class-playwright",permalink:"/python/docs/api/class-playwright",version:"current",sidebar:"api",next:{title:"Accessibility",permalink:"/python/docs/api/class-accessibility"}},p=[{value:"playwright.start()",id:"playwrightstart",children:[]},{value:"playwright.stop()",id:"playwrightstop",children:[]},{value:"playwright.chromium",id:"playwrightchromium",children:[]},{value:"playwright.devices",id:"playwrightdevices",children:[]},{value:"playwright.firefox",id:"playwrightfirefox",children:[]},{value:"playwright.selectors",id:"playwrightselectors",children:[]},{value:"playwright.webkit",id:"playwrightwebkit",children:[]}],l={toc:p};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Playwright module provides a method to launch a browser instance. The following is a typical example of using Playwright to drive automation:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),'# async\n\nimport asyncio\nfrom playwright.async_api import async_playwright\n\nasync def run(playwright):\n    chromium = playwright.chromium # or "firefox" or "webkit".\n    browser = await chromium.launch()\n    page = await browser.new_page()\n    await page.goto("http://example.com")\n    # other actions...\n    await browser.close()\n\nasync def main():\n    async with async_playwright() as playwright:\n        await run(playwright)\nasyncio.run(main())\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),'# sync\n\nfrom playwright.sync_api import sync_playwright\n\ndef run(playwright):\n    chromium = playwright.chromium # or "firefox" or "webkit".\n    browser = chromium.launch()\n    page = browser.new_page()\n    page.goto("http://example.com")\n    # other actions...\n    browser.close()\n\nwith sync_playwright() as playwright:\n    run(playwright)\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/api/class-playwright#playwrightstart"}),"playwright.start()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/api/class-playwright#playwrightstop"}),"playwright.stop()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/api/class-playwright#playwrightchromium"}),"playwright.chromium")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/api/class-playwright#playwrightdevices"}),"playwright.devices")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/api/class-playwright#playwrightfirefox"}),"playwright.firefox")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/api/class-playwright#playwrightselectors"}),"playwright.selectors")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/api/class-playwright#playwrightwebkit"}),"playwright.webkit"))),Object(i.b)("h2",{id:"playwrightstart"},"playwright.start()"),Object(i.b)("p",null,"Starts a new instance of Playwright without using the Python context manager. This is useful in REPL applications. Requires ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/python/docs/api/class-playwright#playwrightstop"}),"playwright.stop()")," to be called to cleanup resources."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),'>>> from playwright.sync_api import sync_playwright\n\n>>> playwright = sync_playwright().start()\n\n>>> browser = playwright.chromium.launch()\n>>> page = browser.newPage()\n>>> page.goto("http://whatsmyuseragent.org/")\n>>> page.screenshot(path="example.png")\n>>> browser.close()\n\n>>> playwright.stop()\n')),Object(i.b)("h2",{id:"playwrightstop"},"playwright.stop()"),Object(i.b)("p",null,"Terminates this instance of Playwright in case it was created bypassing the Python context manager. This is useful in REPL applications."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),'>>> from playwright.sync_api import sync_playwright\n\n>>> playwright = sync_playwright().start()\n\n>>> browser = playwright.chromium.launch()\n>>> page = browser.newPage()\n>>> page.goto("http://whatsmyuseragent.org/")\n>>> page.screenshot(path="example.png")\n>>> browser.close()\n\n>>> playwright.stop()\n')),Object(i.b)("h2",{id:"playwrightchromium"},"playwright.chromium"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"type: <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/api/class-browsertype",title:"BrowserType"}),"BrowserType"),">")),Object(i.b)("p",null,"This object can be used to launch or connect to Chromium, returning instances of ","[ChromiumBrowser]","."),Object(i.b)("h2",{id:"playwrightdevices"},"playwright.devices"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"type: <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"}),"Dict"),">")),Object(i.b)("p",null,"Returns a dictionary of devices to be used with ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/python/docs/api/class-browser#browsernew_contextoptions"}),"browser.new_context(**options)")," or ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/python/docs/api/class-browser#browsernew_pageoptions"}),"browser.new_page(**options)"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),'# async\n\nimport asyncio\nfrom playwright.async_api import async_playwright\n\nasync def run(playwright):\n    webkit = playwright.webkit\n    iphone = playwright.devices["iPhone 6"]\n    browser = await webkit.launch()\n    context = await browser.new_context(**iphone)\n    page = await context.new_page()\n    await page.goto("http://example.com")\n    # other actions...\n    await browser.close()\n\nasync def main():\n    async with async_playwright() as playwright:\n        await run(playwright)\nasyncio.run(main())\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),'# sync\n\nfrom playwright.sync_api import sync_playwright\n\ndef run(playwright):\n    webkit = playwright.webkit\n    iphone = playwright.devices["iPhone 6"]\n    browser = webkit.launch()\n    context = browser.new_context(**iphone)\n    page = context.new_page()\n    page.goto("http://example.com")\n    # other actions...\n    browser.close()\n\nwith sync_playwright() as playwright:\n    run(playwright)\n')),Object(i.b)("h2",{id:"playwrightfirefox"},"playwright.firefox"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"type: <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/api/class-browsertype",title:"BrowserType"}),"BrowserType"),">")),Object(i.b)("p",null,"This object can be used to launch or connect to Firefox, returning instances of ","[FirefoxBrowser]","."),Object(i.b)("h2",{id:"playwrightselectors"},"playwright.selectors"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"type: <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/api/class-selectors",title:"Selectors"}),"Selectors"),">")),Object(i.b)("p",null,"Selectors can be used to install custom selector engines. See ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/python/docs/selectors#working-with-selectors"}),"Working with selectors")," for more information."),Object(i.b)("h2",{id:"playwrightwebkit"},"playwright.webkit"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"type: <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/api/class-browsertype",title:"BrowserType"}),"BrowserType"),">")),Object(i.b)("p",null,"This object can be used to launch or connect to WebKit, returning instances of ","[WebKitBrowser]","."))}s.isMDXComponent=!0},147:function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return w}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),s=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},h=function(e){var t=s(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},y=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),h=s(a),y=r,w=h["".concat(o,".").concat(y)]||h[y]||b[y]||i;return a?n.a.createElement(w,c(c({ref:t},l),{},{components:a})):n.a.createElement(w,c({ref:t},l))}));function w(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=y;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}y.displayName="MDXCreateElement"}}]);