(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return i}));var a=n(3),r=n(7),o=(n(0),n(147)),c={id:"verification",title:"Verification"},s={unversionedId:"verification",id:"verification",isDocsHomePage:!1,title:"Verification",description:"- Videos",source:"@site/docs/verification.md",slug:"/verification",permalink:"/python/docs/verification",version:"current",sidebar:"docs",previous:{title:"Page Object Models",permalink:"/python/docs/pom"},next:{title:"Test Runners",permalink:"/python/docs/test-runners-python"}},p=[{value:"Videos",id:"videos",children:[]},{value:"Screenshots",id:"screenshots",children:[]},{value:"Console logs",id:"console-logs",children:[]},{value:"Page errors",id:"page-errors",children:[]},{value:"Page events",id:"page-events",children:[]}],l={toc:p};function i(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#videos"}),"Videos")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#screenshots"}),"Screenshots")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#console-logs"}),"Console logs")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#page-errors"}),"Page errors")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#page-events"}),"Page events"))),Object(o.b)("h2",{id:"videos"},"Videos"),Object(o.b)("p",null,"Playwright can record videos for all pages in a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/python/docs/core-concepts#browser-contexts"}),"browser context"),". Videos are saved upon context closure, so make sure to await ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/python/docs/api/class-browsercontext#browser_contextclose"}),"browser_context.close()"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'# async\n\n# With browser.new_context()\ncontext = await browser.new_context(record_video_dir="videos/")\n# Make sure to await close, so that videos are saved.\nawait context.close()\n\n# With browser.new_page()\npage = await browser.new_page(record_video_dir="videos/")\n# Make sure to await close, so that videos are saved.\nawait page.close()\n\n# [Optional] specify video size; defaults to viewport size\ncontext = await browser.new_context(\n    record_video_dir="videos/",\n    record_video_size={"width": 800, "height": 600}\n)\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'# sync\n\n# With browser.new_context()\ncontext = browser.new_context(record_video_dir="videos/")\n# Make sure to close, so that videos are saved.\ncontext.close()\n\n# With browser.new_page()\npage = browser.new_page(record_video_dir="videos/")\n# Make sure to close, so that videos are saved.\npage.close()\n\n# [Optional] specify video size; defaults to viewport size\ncontext = browser.new_context(\n    record_video_dir="videos/",\n    record_video_size={"width": 800, "height": 600}\n)\n')),Object(o.b)("h4",{id:"api-reference"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-browser#browsernew_contextoptions"}),"browser.new_context(**options)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-browser#browsernew_pageoptions"}),"browser.new_page(**options)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-browsercontext#browser_contextclose"}),"browser_context.close()"))),Object(o.b)("h2",{id:"screenshots"},"Screenshots"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'# async\n\n# Save to file\nawait page.screenshot(path="screenshot.png")\n\n# Capture full page\nawait page.screenshot(path="screenshot.png", full_page=True)\n\n# Capture into Image\nscreenshot_bytes = await page.screenshot()\nimage = Image.open(io.BytesIO(screenshot_bytes))\n\n# Capture given element\nelement_handle = await page.query_selector(".header")\nawait element_handle.screenshot(path="screenshot.png")\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'# sync\n\n# Save to file\npage.screenshot(path="screenshot.png")\n\n# Capture full page\npage.screenshot(path="screenshot.png", full_page=True)\n\n# Capture into Image\nscreenshot_bytes = page.screenshot()\nimage = Image.open(io.BytesIO(screenshot_bytes))\n\n# Capture given element\nelement_handle = page.query_selector(".header")\nelement_handle.screenshot(path="screenshot.png")\n')),Object(o.b)("h4",{id:"api-reference-1"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-page#pagescreenshotoptions"}),"page.screenshot(**options)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-elementhandle#element_handlescreenshotoptions"}),"element_handle.screenshot(**options)"))),Object(o.b)("br",null),Object(o.b)("h2",{id:"console-logs"},"Console logs"),Object(o.b)("p",null,"Console messages logged in the page can be brought into the Node.js context."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'# async\n\n# Listen for all console logs\npage.on("console", msg => print(msg.text))\n\n# Listen for all console events and handle errors\npage.on("console", lambda msg: print(f"error: {msg.text}") if msg.type == "error" else None)\n\n# Get the next console log\nasync with page.expect_console_message() as msg_info:\n    # Issue console.log inside the page\n    await page.evaluate("console.log(\'hello\', 42, { foo: \'bar\' })")\nmsg = await msg_info.value\n\n# Deconstruct print arguments\nawait msg.args[0].json_value() # hello\nawait msg.args[1].json_value() # 42\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'# sync\n\n# Listen for all console logs\npage.on("console", msg => print(msg.text))\n\n# Listen for all console events and handle errors\npage.on("console", lambda msg: print(f"error: {msg.text}") if msg.type == "error" else None)\n\n# Get the next console log\nwith page.expect_console_message() as msg_info:\n    # Issue console.log inside the page\n    page.evaluate("console.log(\'hello\', 42, { foo: \'bar\' })")\nmsg = msg_info.value\n\n# Deconstruct print arguments\nmsg.args[0].json_value() # hello\nmsg.args[1].json_value() # 42\n')),Object(o.b)("h4",{id:"api-reference-2"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-consolemessage",title:"ConsoleMessage"}),"ConsoleMessage")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-page",title:"Page"}),"Page")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-page#pageonconsole"}),'page.on("console")'))),Object(o.b)("br",null),Object(o.b)("h2",{id:"page-errors"},"Page errors"),Object(o.b)("p",null,"Listen for uncaught exceptions in the page with the ",Object(o.b)("inlineCode",{parentName:"p"},"pagerror")," event."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'# async\n\n# Log all uncaught errors to the terminal\npage.on("pageerror", lambda exc: print(f"uncaught exception: {exc}"))\n\n# Navigate to a page with an exception.\nawait page.goto("data:text/html,<script>throw new Error(\'test\')<\/script>")\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'# sync\n\n# Log all uncaught errors to the terminal\npage.on("pageerror", lambda exc: print(f"uncaught exception: {exc}"))\n\n# Navigate to a page with an exception.\npage.goto("data:text/html,<script>throw new Error(\'test\')<\/script>")\n')),Object(o.b)("h4",{id:"api-reference-3"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-page",title:"Page"}),"Page")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-page#pageonpageerror"}),'page.on("pageerror")'))),Object(o.b)("br",null),Object(o.b)("h2",{id:"page-events"},"Page events"),Object(o.b)("h4",{id:"requestfailed"},Object(o.b)("inlineCode",{parentName:"h4"},'"requestfailed"')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'page.on("requestfailed", lambda request: print(request.url + " " + request.failure.error_text))\n')),Object(o.b)("h4",{id:"dialog---handle-alert-confirm-prompt"},Object(o.b)("inlineCode",{parentName:"h4"},'"dialog"')," - handle alert, confirm, prompt"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'page.on("dialog", lambda dialog: dialog.accept())\n')),Object(o.b)("h4",{id:"popup---handle-popup-windows"},Object(o.b)("inlineCode",{parentName:"h4"},'"popup"')," - handle popup windows"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'# async\n\nasync with page.expect_popup() as popup_info:\n    await page.click("#open")\npopup = await popup_info.value\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'# sync\n\nwith page.expect_popup() as popup_info:\n    page.click("#open")\npopup = popup_info.value\n')),Object(o.b)("h4",{id:"api-reference-4"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-page",title:"Page"}),"Page")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-page#pageonrequestfailed"}),'page.on("requestfailed")')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-page#pageondialog"}),'page.on("dialog")')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-page#pageonpopup"}),'page.on("popup")'))))}i.isMDXComponent=!0},147:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),i=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=i(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=i(n),u=a,d=b["".concat(c,".").concat(u)]||b[u]||g[u]||o;return n?r.a.createElement(d,s(s({ref:t},l),{},{components:n})):r.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);