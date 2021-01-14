(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{136:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return r})),t.d(a,"toc",(function(){return p})),t.d(a,"default",(function(){return s}));var n=t(3),i=t(7),o=(t(0),t(147)),c={id:"navigations",title:"Navigations"},r={unversionedId:"navigations",id:"navigations",isDocsHomePage:!1,title:"Navigations",description:"Playwright can navigate to URLs and handle navigations caused by page interactions. This guide covers common scenarios to wait for page navigations and loading to complete.",source:"@site/docs/navigations.md",slug:"/navigations",permalink:"/python/docs/navigations",version:"current",sidebar:"docs",previous:{title:"Multi-page scenarios",permalink:"/python/docs/multi-pages"},next:{title:"Network",permalink:"/python/docs/network"}},p=[{value:"Navigation lifecycle",id:"navigation-lifecycle",children:[]},{value:"Scenarios initiated by browser UI",id:"scenarios-initiated-by-browser-ui",children:[{value:"Auto-wait",id:"auto-wait",children:[]},{value:"Custom wait",id:"custom-wait",children:[]},{value:"Wait for element",id:"wait-for-element",children:[]}]},{value:"Scenarios initiated by page interaction",id:"scenarios-initiated-by-page-interaction",children:[{value:"Auto-wait",id:"auto-wait-1",children:[]},{value:"Custom wait",id:"custom-wait-1",children:[]},{value:"Wait for element",id:"wait-for-element-1",children:[]},{value:"Asynchronous navigation",id:"asynchronous-navigation",children:[]},{value:"Multiple navigations",id:"multiple-navigations",children:[]},{value:"Loading a popup",id:"loading-a-popup",children:[]}]},{value:"Advanced patterns",id:"advanced-patterns",children:[]}],l={toc:p};function s(e){var a=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:a,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Playwright can navigate to URLs and handle navigations caused by page interactions. This guide covers common scenarios to wait for page navigations and loading to complete."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#navigation-lifecycle"}),"Navigation lifecycle")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#scenarios-initiated-by-browser-ui"}),"Scenarios initiated by browser UI")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#scenarios-initiated-by-page-interaction"}),"Scenarios initiated by page interaction")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#advanced-patterns"}),"Advanced patterns"))),Object(o.b)("h2",{id:"navigation-lifecycle"},"Navigation lifecycle"),Object(o.b)("p",null,"Playwright splits the process of showing a new document in a page into ",Object(o.b)("strong",{parentName:"p"},"navigation")," and ",Object(o.b)("strong",{parentName:"p"},"loading"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Navigations")," can be initiated by changing the page URL or by interacting with the page (e.g., clicking a link). Navigation ends when response headers have been parsed and session history is updated. The navigation intent may be canceled, for example, on hitting an unresolved DNS address or transformed into a file download. Only after the navigation succeeds, page starts ",Object(o.b)("strong",{parentName:"p"},"loading")," the document."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Loading")," covers getting the remaining response body over the network, parsing, executing the scripts and firing load events:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-page#pageurl"}),"page.url")," is set to the new url"),Object(o.b)("li",{parentName:"ul"},"document content is loaded over network and parsed"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-page#pageondomcontentloaded"}),'page.on("domcontentloaded")')," event is fired"),Object(o.b)("li",{parentName:"ul"},"page executes some scripts and loads resources like stylesheets and images"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-page#pageonload"}),'page.on("load")')," event is fired"),Object(o.b)("li",{parentName:"ul"},"page executes dynamically loaded scripts"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"networkidle")," is fired when no new network requests are made for 500 ms")),Object(o.b)("h2",{id:"scenarios-initiated-by-browser-ui"},"Scenarios initiated by browser UI"),Object(o.b)("p",null,"Navigations can be initiated by changing the URL bar, reloading the page or going back or forward in session history."),Object(o.b)("h3",{id:"auto-wait"},"Auto-wait"),Object(o.b)("p",null,"Navigating to a URL auto-waits for the page to fire the ",Object(o.b)("inlineCode",{parentName:"p"},"load")," event. If the page does a client-side redirect before ",Object(o.b)("inlineCode",{parentName:"p"},"load"),", ",Object(o.b)("inlineCode",{parentName:"p"},"page.goto")," will auto-wait for the redirected page to fire the ",Object(o.b)("inlineCode",{parentName:"p"},"load")," event."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# async\n\n# Navigate the page\nawait page.goto("https://example.com")\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# sync\n\n# Navigate the page\npage.goto("https://example.com")\n')),Object(o.b)("h3",{id:"custom-wait"},"Custom wait"),Object(o.b)("p",null,"Override the default behavior to wait until a specific event, like ",Object(o.b)("inlineCode",{parentName:"p"},"networkidle"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# async\n\n# Navigate and wait until network is idle\nawait page.goto("https://example.com", wait_until="networkidle")\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# sync\n\n# Navigate and wait until network is idle\npage.goto("https://example.com", wait_until="networkidle")\n')),Object(o.b)("h3",{id:"wait-for-element"},"Wait for element"),Object(o.b)("p",null,"In lazy-loaded pages, it can be useful to wait until an element is visible with ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/api/class-page#pagewait_for_selectorselector-options"}),"page.wait_for_selector(selector, **options)"),". Alternatively, page interactions like ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/api/class-page#pageclickselector-options"}),"page.click(selector, **options)")," auto-wait for elements."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# async\n\n# Navigate and wait for element\nawait page.goto("https://example.com")\nawait page.wait_for_selector("text=example domain")\n\n# Navigate and click element\n# Click will auto-wait for the element\nawait page.goto("https://example.com")\nawait page.click("text=example domain")\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# sync\n\n# Navigate and wait for element\npage.goto("https://example.com")\npage.wait_for_selector("text=example domain")\n\n# Navigate and click element\n# Click will auto-wait for the element\npage.goto("https://example.com")\npage.click("text=example domain")\n')),Object(o.b)("h4",{id:"api-reference"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-page#pagegotourl-options"}),"page.goto(url, **options)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-page#pagereloadoptions"}),"page.reload(**options)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-page#pagego_backoptions"}),"page.go_back(**options)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-page#pagego_forwardoptions"}),"page.go_forward(**options)"))),Object(o.b)("h2",{id:"scenarios-initiated-by-page-interaction"},"Scenarios initiated by page interaction"),Object(o.b)("p",null,"In the scenarios below, ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/api/class-page#pageclickselector-options"}),"page.click(selector, **options)")," initiates a navigation and then waits for the navigation to complete."),Object(o.b)("h3",{id:"auto-wait-1"},"Auto-wait"),Object(o.b)("p",null,"By default, ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/api/class-page#pageclickselector-options"}),"page.click(selector, **options)")," will wait for the navigation step to complete. This can be combined with a page interaction on the navigated page which would auto-wait for an element."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# async\n\n# Click will auto-wait for navigation to complete\nawait page.click("text=Login")\n\n# Fill will auto-wait for element on navigated page\nawait page.fill("#username", "John Doe")\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# sync\n\n# Click will auto-wait for navigation to complete\npage.click("text=Login")\n\n# Fill will auto-wait for element on navigated page\npage.fill("#username", "John Doe")\n')),Object(o.b)("h3",{id:"custom-wait-1"},"Custom wait"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"page.click")," can be combined with ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/api/class-page#pagewait_for_load_stateoptions"}),"page.wait_for_load_state(**options)")," to wait for a loading event."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# async\n\nawait page.click("button"); # Click triggers navigation\nawait page.wait_for_load_state("networkidle"); # This waits for the "networkidle"\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# sync\n\npage.click("button"); # Click triggers navigation\npage.wait_for_load_state("networkidle"); # This waits for the "networkidle"\n')),Object(o.b)("h3",{id:"wait-for-element-1"},"Wait for element"),Object(o.b)("p",null,"In lazy-loaded pages, it can be useful to wait until an element is visible with ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/api/class-page#pagewait_for_selectorselector-options"}),"page.wait_for_selector(selector, **options)"),". Alternatively, page interactions like ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/api/class-page#pageclickselector-options"}),"page.click(selector, **options)")," auto-wait for elements."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# async\n\n# Click triggers navigation\nawait page.click("text=Login")\n# Click will auto-wait for the element\nawait page.wait_for_selector("#username", "John Doe")\n\n# Click triggers navigation\nawait page.click("text=Login")\n# Fill will auto-wait for element\nawait page.fill("#username", "John Doe")\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# sync\n\n# Click triggers navigation\npage.click("text=Login")\n# Click will auto-wait for the element\npage.wait_for_selector("#username", "John Doe")\n\n# Click triggers navigation\npage.click("text=Login")\n# Fill will auto-wait for element\npage.fill("#username", "John Doe")\n')),Object(o.b)("h3",{id:"asynchronous-navigation"},"Asynchronous navigation"),Object(o.b)("p",null,"Clicking an element could trigger asychronous processing before initiating the navigation. In these cases, it is recommended to explicitly call ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/api/class-page#pagewait_for_navigationoptions"}),"page.wait_for_navigation(**options)"),". For example:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Navigation is triggered from a ",Object(o.b)("inlineCode",{parentName:"li"},"setTimeout")),Object(o.b)("li",{parentName:"ul"},"Page waits for network requests before navigation")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# async\n\n# Waits for the next navigation. Using Python context manager\n# prevents a race condition between clicking and waiting for a navigation.\nasync with page.expect_navigation():\n    # Triggers a navigation after a timeout\n    await page.click("a")\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# sync\n\n# Waits for the next navigation. Using Python context manager\n# prevents a race condition between clicking and waiting for a navigation.\nwith page.expect_navigation():\n    # Triggers a navigation after a timeout\n    page.click("a")\n')),Object(o.b)("h3",{id:"multiple-navigations"},"Multiple navigations"),Object(o.b)("p",null,"Clicking an element could trigger multiple navigations. In these cases, it is recommended to explicitly ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/api/class-page#pagewait_for_navigationoptions"}),"page.wait_for_navigation(**options)")," to a specific url. For example:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Client-side redirects issued after the ",Object(o.b)("inlineCode",{parentName:"li"},"load")," event"),Object(o.b)("li",{parentName:"ul"},"Multiple pushes to history state")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# async\n\n# Using Python context manager prevents a race condition\n# between clicking and waiting for a navigation.\nasync with page.expect_navigation(url="**/login"):\n    # Triggers a navigation with a script redirect\n    await page.click("a")\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# sync\n\n# Using Python context manager prevents a race condition\n# between clicking and waiting for a navigation.\nwith page.expect_navigation(url="**/login"):\n    # Triggers a navigation with a script redirect\n    page.click("a")\n')),Object(o.b)("h3",{id:"loading-a-popup"},"Loading a popup"),Object(o.b)("p",null,"When popup is opened, explicitly calling ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/api/class-page#pagewait_for_load_stateoptions"}),"page.wait_for_load_state(**options)")," ensures that popup is loaded to the desired state."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# async\n\nasync with page.expect_popup() as popup_info:\n    await page.click(\'a[target="_blank"]\') # Opens popup\npopup = await popup_info.value\nawait popup.wait_for_load_state("load")\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# sync\n\nwith page.expect_popup() as popup_info:\n    page.click(\'a[target="_blank"]\') # Opens popup\npopup = popup_info.value\npopup.wait_for_load_state("load")\n')),Object(o.b)("h4",{id:"api-reference-1"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-page#pageclickselector-options"}),"page.click(selector, **options)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-page#pagewait_for_load_stateoptions"}),"page.wait_for_load_state(**options)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-page#pagewait_for_selectorselector-options"}),"page.wait_for_selector(selector, **options)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-page#pagewait_for_navigationoptions"}),"page.wait_for_navigation(**options)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-page#pagewait_for_functionexpression-options"}),"page.wait_for_function(expression, **options)"))),Object(o.b)("h2",{id:"advanced-patterns"},"Advanced patterns"),Object(o.b)("p",null,"For pages that have complicated loading patterns, ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/api/class-page#pagewait_for_functionexpression-options"}),"page.wait_for_function(expression, **options)")," is a powerful and extensible approach to define a custom wait criteria."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# async\n\nawait page.goto("http://example.com")\nawait page.wait_for_function("() => window.amILoadedYet()")\n# Ready to take a screenshot, according to the page itself.\nawait page.screenshot()\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# sync\n\n# FIXME\npage.goto("http://example.com")\npage.wait_for_function("() => window.amILoadedYet()")\n# Ready to take a screenshot, according to the page itself.\npage.screenshot()\n')),Object(o.b)("h4",{id:"api-reference-2"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-page#pagewait_for_functionexpression-options"}),"page.wait_for_function(expression, **options)"))))}s.isMDXComponent=!0},147:function(e,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return u}));var n=t(0),i=t.n(n);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),s=function(e){var a=i.a.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},b=function(e){var a=s(e.components);return i.a.createElement(l.Provider,{value:a},e.children)},g={inlineCode:"code",wrapper:function(e){var a=e.children;return i.a.createElement(i.a.Fragment,{},a)}},d=i.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(t),d=n,u=b["".concat(c,".").concat(d)]||b[d]||g[d]||o;return t?i.a.createElement(u,r(r({ref:a},l),{},{components:t})):i.a.createElement(u,r({ref:a},l))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=d;var r={};for(var p in a)hasOwnProperty.call(a,p)&&(r[p]=a[p]);r.originalType=e,r.mdxType="string"==typeof e?e:n,c[1]=r;for(var l=2;l<o;l++)c[l]=t[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);