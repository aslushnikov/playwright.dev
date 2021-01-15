---
id: class-jshandle
title: "JSHandle"
---


JSHandle represents an in-page JavaScript object. JSHandles can be created with the [page.evaluate_handle(expression, **options)](./api/class-page.md#pageevaluate_handleexpression-options) method.

```py
# async

window_handle = await page.evaluate_handle("window")
# ...
```

```py
# sync

window_handle = page.evaluate_handle("window")
# ...
```

JSHandle prevents the referenced JavaScript object being garbage collected unless the handle is exposed with [js_handle.dispose()](./api/class-jshandle.md#js_handledispose). JSHandles are auto-disposed when their origin frame gets navigated or the parent context gets destroyed.

JSHandle instances can be used as an argument in [page.eval_on_selector(selector, expression, **options)](./api/class-page.md#pageeval_on_selectorselector-expression-options), [page.evaluate(expression, **options)](./api/class-page.md#pageevaluateexpression-options) and [page.evaluate_handle(expression, **options)](./api/class-page.md#pageevaluate_handleexpression-options) methods.


- [js_handle.as_element()](./api/class-jshandle.md#js_handleas_element)
- [js_handle.dispose()](./api/class-jshandle.md#js_handledispose)
- [js_handle.evaluate(expression, **options)](./api/class-jshandle.md#js_handleevaluateexpression-options)
- [js_handle.evaluate_handle(expression, **options)](./api/class-jshandle.md#js_handleevaluate_handleexpression-options)
- [js_handle.get_properties()](./api/class-jshandle.md#js_handleget_properties)
- [js_handle.get_property(property_name)](./api/class-jshandle.md#js_handleget_propertyproperty_name)
- [js_handle.json_value()](./api/class-jshandle.md#js_handlejson_value)

## js_handle.as_element()
- returns: <[NoneType]|[ElementHandle]>

Returns either `null` or the object handle itself, if the object handle is an instance of [ElementHandle].

## js_handle.dispose()

The `jsHandle.dispose` method stops referencing the element handle.

## js_handle.evaluate(expression, **options)
- `arg` <[EvaluationArgument]> Optional argument to pass to `page_function`
- `expression` <[str]> JavaScript expression to be evaluated in the browser context. If it looks like a function declaration, it is interpreted as a function. Otherwise, evaluated as an expression.
- `force_expr` <[bool]> Whether to treat given `expression` as JavaScript evaluate expression, even though it looks like an arrow function. Optional.
- returns: <[Serializable]>

Returns the return value of `page_function`

This method passes this handle as the first argument to `page_function`.

If `page_function` returns a [Promise], then `handle.evaluate` would wait for the promise to resolve and return its value.

Examples:

```py
# async

tweet_handle = await page.query_selector(".tweet .retweets")
assert await tweet_handle.evaluate("node => node.innerText") == "10 retweets"
```

```py
# sync

tweet_handle = page.query_selector(".tweet .retweets")
assert tweet_handle.evaluate("node => node.innerText") == "10 retweets"
```

## js_handle.evaluate_handle(expression, **options)
- `arg` <[EvaluationArgument]> Optional argument to pass to `page_function`
- `expression` <[str]> JavaScript expression to be evaluated in the browser context. If it looks like a function declaration, it is interpreted as a function. Otherwise, evaluated as an expression.
- `force_expr` <[bool]> Whether to treat given `expression` as JavaScript evaluate expression, even though it looks like an arrow function. Optional.
- returns: <[JSHandle]>

Returns the return value of `page_function` as in-page object (JSHandle).

This method passes this handle as the first argument to `page_function`.

The only difference between `jsHandle.evaluate` and `jsHandle.evaluateHandle` is that `jsHandle.evaluateHandle` returns in-page object (JSHandle).

If the function passed to the `jsHandle.evaluateHandle` returns a [Promise], then `jsHandle.evaluateHandle` would wait for the promise to resolve and return its value.

See [page.evaluate_handle(expression, **options)](./api/class-page.md#pageevaluate_handleexpression-options) for more details.

## js_handle.get_properties()
- returns: <[Map]\[[str], [JSHandle]\]>

The method returns a map with **own property names** as keys and JSHandle instances for the property values.

```py
# async

handle = await page.evaluate_handle("{window, document}")
properties = await handle.get_properties()
window_handle = properties.get("window")
document_handle = properties.get("document")
await handle.dispose()
```

```py
# sync

handle = page.evaluate_handle("{window, document}")
properties = handle.get_properties()
window_handle = properties.get("window")
document_handle = properties.get("document")
handle.dispose()
```

## js_handle.get_property(property_name)
- `property_name` <[str]> property to get
- returns: <[JSHandle]>

Fetches a single property from the referenced object.

## js_handle.json_value()
- returns: <[Serializable]>

Returns a JSON representation of the object. If the object has a `toJSON` function, it **will not be called**.

:::note
The method will return an empty JSON object if the referenced object is not stringifiable. It will throw an error if the object has circular references.
:::


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