---
id: navigations
title: "Navigations"
---

Playwright can navigate to URLs and handle navigations caused by page interactions. This guide covers common scenarios to wait for page navigations and loading to complete.

- [Navigation lifecycle](#navigation-lifecycle)
- [Scenarios initiated by browser UI](#scenarios-initiated-by-browser-ui)
- [Scenarios initiated by page interaction](#scenarios-initiated-by-page-interaction)
- [Advanced patterns](#advanced-patterns)

## Navigation lifecycle

Playwright splits the process of showing a new document in a page into **navigation** and **loading**.

**Navigations** can be initiated by changing the page URL or by interacting with the page (e.g., clicking a link). Navigation ends when response headers have been parsed and session history is updated. The navigation intent may be canceled, for example, on hitting an unresolved DNS address or transformed into a file download. Only after the navigation succeeds, page starts **loading** the document.

**Loading** covers getting the remaining response body over the network, parsing, executing the scripts and firing load events:
- [page.url](./api/class-page.md#pageurl) is set to the new url
- document content is loaded over network and parsed
- [page.on("domcontentloaded")](./api/class-page.md#pageondomcontentloaded) event is fired
- page executes some scripts and loads resources like stylesheets and images
- [page.on("load")](./api/class-page.md#pageonload) event is fired
- page executes dynamically loaded scripts
- `networkidle` is fired when no new network requests are made for 500 ms

## Scenarios initiated by browser UI

Navigations can be initiated by changing the URL bar, reloading the page or going back or forward in session history.

### Auto-wait

Navigating to a URL auto-waits for the page to fire the `load` event. If the page does a client-side redirect before `load`, `page.goto` will auto-wait for the redirected page to fire the `load` event.

```py
# async

# Navigate the page
await page.goto("https://example.com")
```

```py
# sync

# Navigate the page
page.goto("https://example.com")
```

### Custom wait

Override the default behavior to wait until a specific event, like `networkidle`.

```py
# async

# Navigate and wait until network is idle
await page.goto("https://example.com", wait_until="networkidle")
```

```py
# sync

# Navigate and wait until network is idle
page.goto("https://example.com", wait_until="networkidle")
```

### Wait for element

In lazy-loaded pages, it can be useful to wait until an element is visible with [page.wait_for_selector(selector, **options)](./api/class-page.md#pagewait_for_selectorselector-options). Alternatively, page interactions like [page.click(selector, **options)](./api/class-page.md#pageclickselector-options) auto-wait for elements.

```py
# async

# Navigate and wait for element
await page.goto("https://example.com")
await page.wait_for_selector("text=example domain")

# Navigate and click element
# Click will auto-wait for the element
await page.goto("https://example.com")
await page.click("text=example domain")
```

```py
# sync

# Navigate and wait for element
page.goto("https://example.com")
page.wait_for_selector("text=example domain")

# Navigate and click element
# Click will auto-wait for the element
page.goto("https://example.com")
page.click("text=example domain")
```

#### API reference
- [page.goto(url, **options)](./api/class-page.md#pagegotourl-options)
- [page.reload(**options)](./api/class-page.md#pagereloadoptions)
- [page.go_back(**options)](./api/class-page.md#pagego_backoptions)
- [page.go_forward(**options)](./api/class-page.md#pagego_forwardoptions)

## Scenarios initiated by page interaction

In the scenarios below, [page.click(selector, **options)](./api/class-page.md#pageclickselector-options) initiates a navigation and then waits for the navigation to complete.

### Auto-wait

By default, [page.click(selector, **options)](./api/class-page.md#pageclickselector-options) will wait for the navigation step to complete. This can be combined with a page interaction on the navigated page which would auto-wait for an element.

```py
# async

# Click will auto-wait for navigation to complete
await page.click("text=Login")

# Fill will auto-wait for element on navigated page
await page.fill("#username", "John Doe")
```

```py
# sync

# Click will auto-wait for navigation to complete
page.click("text=Login")

# Fill will auto-wait for element on navigated page
page.fill("#username", "John Doe")
```

### Custom wait

`page.click` can be combined with [page.wait_for_load_state(**options)](./api/class-page.md#pagewait_for_load_stateoptions) to wait for a loading event.

```py
# async

await page.click("button"); # Click triggers navigation
await page.wait_for_load_state("networkidle"); # This waits for the "networkidle"
```

```py
# sync

page.click("button"); # Click triggers navigation
page.wait_for_load_state("networkidle"); # This waits for the "networkidle"
```

### Wait for element

In lazy-loaded pages, it can be useful to wait until an element is visible with [page.wait_for_selector(selector, **options)](./api/class-page.md#pagewait_for_selectorselector-options). Alternatively, page interactions like [page.click(selector, **options)](./api/class-page.md#pageclickselector-options) auto-wait for elements.

```py
# async

# Click triggers navigation
await page.click("text=Login")
# Click will auto-wait for the element
await page.wait_for_selector("#username", "John Doe")

# Click triggers navigation
await page.click("text=Login")
# Fill will auto-wait for element
await page.fill("#username", "John Doe")
```

```py
# sync

# Click triggers navigation
page.click("text=Login")
# Click will auto-wait for the element
page.wait_for_selector("#username", "John Doe")

# Click triggers navigation
page.click("text=Login")
# Fill will auto-wait for element
page.fill("#username", "John Doe")
```

### Asynchronous navigation

Clicking an element could trigger asychronous processing before initiating the navigation. In these cases, it is recommended to explicitly call [page.wait_for_navigation(**options)](./api/class-page.md#pagewait_for_navigationoptions). For example:
* Navigation is triggered from a `setTimeout`
* Page waits for network requests before navigation

```py
# async

# Waits for the next navigation. Using Python context manager
# prevents a race condition between clicking and waiting for a navigation.
async with page.expect_navigation():
    # Triggers a navigation after a timeout
    await page.click("a")
```

```py
# sync

# Waits for the next navigation. Using Python context manager
# prevents a race condition between clicking and waiting for a navigation.
with page.expect_navigation():
    # Triggers a navigation after a timeout
    page.click("a")
```

### Multiple navigations

Clicking an element could trigger multiple navigations. In these cases, it is recommended to explicitly [page.wait_for_navigation(**options)](./api/class-page.md#pagewait_for_navigationoptions) to a specific url. For example:
* Client-side redirects issued after the `load` event
* Multiple pushes to history state

```py
# async

# Using Python context manager prevents a race condition
# between clicking and waiting for a navigation.
async with page.expect_navigation(url="**/login"):
    # Triggers a navigation with a script redirect
    await page.click("a")
```

```py
# sync

# Using Python context manager prevents a race condition
# between clicking and waiting for a navigation.
with page.expect_navigation(url="**/login"):
    # Triggers a navigation with a script redirect
    page.click("a")
```

### Loading a popup

When popup is opened, explicitly calling [page.wait_for_load_state(**options)](./api/class-page.md#pagewait_for_load_stateoptions) ensures that popup is loaded to the desired state.

```py
# async

async with page.expect_popup() as popup_info:
    await page.click('a[target="_blank"]') # Opens popup
popup = await popup_info.value
await popup.wait_for_load_state("load")
```

```py
# sync

with page.expect_popup() as popup_info:
    page.click('a[target="_blank"]') # Opens popup
popup = popup_info.value
popup.wait_for_load_state("load")
```

#### API reference
- [page.click(selector, **options)](./api/class-page.md#pageclickselector-options)
- [page.wait_for_load_state(**options)](./api/class-page.md#pagewait_for_load_stateoptions)
- [page.wait_for_selector(selector, **options)](./api/class-page.md#pagewait_for_selectorselector-options)
- [page.wait_for_navigation(**options)](./api/class-page.md#pagewait_for_navigationoptions)
- [page.wait_for_function(expression, **options)](./api/class-page.md#pagewait_for_functionexpression-options)

## Advanced patterns

For pages that have complicated loading patterns, [page.wait_for_function(expression, **options)](./api/class-page.md#pagewait_for_functionexpression-options) is a powerful and extensible approach to define a custom wait criteria.

```py
# async

await page.goto("http://example.com")
await page.wait_for_function("() => window.amILoadedYet()")
# Ready to take a screenshot, according to the page itself.
await page.screenshot()
```

```py
# sync

# FIXME
page.goto("http://example.com")
page.wait_for_function("() => window.amILoadedYet()")
# Ready to take a screenshot, according to the page itself.
page.screenshot()
```

#### API reference
- [page.wait_for_function(expression, **options)](./api/class-page.md#pagewait_for_functionexpression-options)

[Accessibility]: ./api/class-accessibility.md "Accessibility"
[Browser]: ./api/class-browser.md "Browser"
[BrowserContext]: ./api/class-browsercontext.md "BrowserContext"
[BrowserType]: ./api/class-browsertype.md "BrowserType"
[CDPSession]: ./api/class-cdpsession.md "CDPSession"
[ChromiumBrowserContext]: ./api/class-chromiumbrowsercontext.md "ChromiumBrowserContext"
[ConsoleMessage]: ./api/class-consolemessage.md "ConsoleMessage"
[Dialog]: ./api/class-dialog.md "Dialog"
[Download]: ./api/class-download.md "Download"
[ElementHandle]: ./api/class-elementhandle.md "ElementHandle"
[FileChooser]: ./api/class-filechooser.md "FileChooser"
[Frame]: ./api/class-frame.md "Frame"
[JSHandle]: ./api/class-jshandle.md "JSHandle"
[Keyboard]: ./api/class-keyboard.md "Keyboard"
[Mouse]: ./api/class-mouse.md "Mouse"
[Page]: ./api/class-page.md "Page"
[Playwright]: ./api/class-playwright.md "Playwright"
[Request]: ./api/class-request.md "Request"
[Response]: ./api/class-response.md "Response"
[Route]: ./api/class-route.md "Route"
[Selectors]: ./api/class-selectors.md "Selectors"
[TimeoutError]: ./api/class-timeouterror.md "TimeoutError"
[Touchscreen]: ./api/class-touchscreen.md "Touchscreen"
[Video]: ./api/class-video.md "Video"
[WebSocket]: ./api/class-websocket.md "WebSocket"
[Worker]: ./api/class-worker.md "Worker"
[Element]: https://developer.mozilla.org/en-US/docs/Web/API/element "Element"
[Evaluation Argument]: ./core-concepts.md#evaluationargument "Evaluation Argument"
[Promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise"
[iterator]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols "Iterator"
[origin]: https://developer.mozilla.org/en-US/docs/Glossary/Origin "Origin"
[selector]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors "selector"
[Serializable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description "Serializable"
[UIEvent.detail]: https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail "UIEvent.detail"
[UnixTime]: https://en.wikipedia.org/wiki/Unix_time "Unix Time"
[xpath]: https://developer.mozilla.org/en-US/docs/Web/XPath "xpath"

[Any]: https://docs.python.org/3/library/typing.html#typing.Any "Any"
[bool]: https://docs.python.org/3/library/stdtypes.html "bool"
[Callable]: https://docs.python.org/3/library/typing.html#typing.Callable "Callable"
[EventContextManager]: https://docs.python.org/3/reference/datamodel.html#context-managers "Event context manager"
[EventEmitter]: https://pyee.readthedocs.io/en/latest/#pyee.BaseEventEmitter "EventEmitter"
[Dict]: https://docs.python.org/3/library/typing.html#typing.Dict "Dict"
[float]: https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex "float"
[int]: https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex "int"
[List]: https://docs.python.org/3/library/typing.html#typing.List "List"
[NoneType]: https://docs.python.org/3/library/constants.html#None "None"
[Pattern]: https://docs.python.org/3/library/re.html "Pattern"
[URL]: https://en.wikipedia.org/wiki/URL "URL"
[pathlib.Path]: https://realpython.com/python-pathlib/ "pathlib.Path"
[str]: https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str "str"
[Union]: https://docs.python.org/3/library/typing.html#typing.Union "Union"