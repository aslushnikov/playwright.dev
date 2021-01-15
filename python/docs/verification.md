---
id: verification
title: "Verification"
---

- [Videos](#videos)
- [Screenshots](#screenshots)
- [Console logs](#console-logs)
- [Page errors](#page-errors)
- [Page events](#page-events)

## Videos

Playwright can record videos for all pages in a [browser context](./core-concepts.md#browser-contexts). Videos are saved upon context closure, so make sure to await [browser_context.close()](./api/class-browsercontext.md#browser_contextclose).

```py
# async

# With browser.new_context()
context = await browser.new_context(record_video_dir="videos/")
# Make sure to await close, so that videos are saved.
await context.close()

# With browser.new_page()
page = await browser.new_page(record_video_dir="videos/")
# Make sure to await close, so that videos are saved.
await page.close()

# [Optional] specify video size; defaults to viewport size
context = await browser.new_context(
    record_video_dir="videos/",
    record_video_size={"width": 800, "height": 600}
)
```

```py
# sync

# With browser.new_context()
context = browser.new_context(record_video_dir="videos/")
# Make sure to close, so that videos are saved.
context.close()

# With browser.new_page()
page = browser.new_page(record_video_dir="videos/")
# Make sure to close, so that videos are saved.
page.close()

# [Optional] specify video size; defaults to viewport size
context = browser.new_context(
    record_video_dir="videos/",
    record_video_size={"width": 800, "height": 600}
)
```

#### API reference
- [BrowserContext]
- [browser.new_context(**options)](./api/class-browser.md#browsernew_contextoptions)
- [browser.new_page(**options)](./api/class-browser.md#browsernew_pageoptions)
- [browser_context.close()](./api/class-browsercontext.md#browser_contextclose)

## Screenshots

```py
# async

# Save to file
await page.screenshot(path="screenshot.png")

# Capture full page
await page.screenshot(path="screenshot.png", full_page=True)

# Capture into Image
screenshot_bytes = await page.screenshot()
image = Image.open(io.BytesIO(screenshot_bytes))

# Capture given element
element_handle = await page.query_selector(".header")
await element_handle.screenshot(path="screenshot.png")
```

```py
# sync

# Save to file
page.screenshot(path="screenshot.png")

# Capture full page
page.screenshot(path="screenshot.png", full_page=True)

# Capture into Image
screenshot_bytes = page.screenshot()
image = Image.open(io.BytesIO(screenshot_bytes))

# Capture given element
element_handle = page.query_selector(".header")
element_handle.screenshot(path="screenshot.png")
```

#### API reference
- [page.screenshot(**options)](./api/class-page.md#pagescreenshotoptions)
- [element_handle.screenshot(**options)](./api/class-elementhandle.md#element_handlescreenshotoptions)

<br/>

## Console logs

Console messages logged in the page can be brought into the Node.js context.

```py
# async

# Listen for all console logs
page.on("console", msg => print(msg.text))

# Listen for all console events and handle errors
page.on("console", lambda msg: print(f"error: {msg.text}") if msg.type == "error" else None)

# Get the next console log
async with page.expect_console_message() as msg_info:
    # Issue console.log inside the page
    await page.evaluate("console.log('hello', 42, { foo: 'bar' })")
msg = await msg_info.value

# Deconstruct print arguments
await msg.args[0].json_value() # hello
await msg.args[1].json_value() # 42
```

```py
# sync

# Listen for all console logs
page.on("console", msg => print(msg.text))

# Listen for all console events and handle errors
page.on("console", lambda msg: print(f"error: {msg.text}") if msg.type == "error" else None)

# Get the next console log
with page.expect_console_message() as msg_info:
    # Issue console.log inside the page
    page.evaluate("console.log('hello', 42, { foo: 'bar' })")
msg = msg_info.value

# Deconstruct print arguments
msg.args[0].json_value() # hello
msg.args[1].json_value() # 42
```

#### API reference
- [ConsoleMessage]
- [Page]
- [page.on("console")](./api/class-page.md#pageonconsole)

<br/>

## Page errors

Listen for uncaught exceptions in the page with the `pagerror` event.

```py
# async

# Log all uncaught errors to the terminal
page.on("pageerror", lambda exc: print(f"uncaught exception: {exc}"))

# Navigate to a page with an exception.
await page.goto("data:text/html,<script>throw new Error('test')</script>")
```

```py
# sync

# Log all uncaught errors to the terminal
page.on("pageerror", lambda exc: print(f"uncaught exception: {exc}"))

# Navigate to a page with an exception.
page.goto("data:text/html,<script>throw new Error('test')</script>")
```

#### API reference
- [Page]
- [page.on("pageerror")](./api/class-page.md#pageonpageerror)

<br/>

## Page events

#### `"requestfailed"`

```py
page.on("requestfailed", lambda request: print(request.url + " " + request.failure.error_text))
```

#### `"dialog"` - handle alert, confirm, prompt

```py
page.on("dialog", lambda dialog: dialog.accept())
```

#### `"popup"` - handle popup windows

```py
# async

async with page.expect_popup() as popup_info:
    await page.click("#open")
popup = await popup_info.value
```

```py
# sync

with page.expect_popup() as popup_info:
    page.click("#open")
popup = popup_info.value
```

#### API reference
- [Page]
- [page.on("requestfailed")](./api/class-page.md#pageonrequestfailed)
- [page.on("dialog")](./api/class-page.md#pageondialog)
- [page.on("popup")](./api/class-page.md#pageonpopup)

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