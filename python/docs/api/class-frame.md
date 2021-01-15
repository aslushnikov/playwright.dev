---
id: class-frame
title: "Frame"
---


At every point of time, page exposes its current frame tree via the [page.main_frame](./api/class-page.md#pagemain_frame) and [frame.child_frames](./api/class-frame.md#framechild_frames) methods.

[Frame] object's lifecycle is controlled by three events, dispatched on the page object:
* [page.on("frameattached")](./api/class-page.md#pageonframeattached) - fired when the frame gets attached to the page. A Frame can be attached to the page only once.
* [page.on("framenavigated")](./api/class-page.md#pageonframenavigated) - fired when the frame commits navigation to a different URL.
* [page.on("framedetached")](./api/class-page.md#pageonframedetached) - fired when the frame gets detached from the page.  A Frame can be detached from the page only once.

An example of dumping frame tree:

```py
# async

import asyncio
from playwright.async_api import async_playwright

async def run(playwright):
    firefox = playwright.firefox
    browser = await firefox.launch()
    page = await browser.new_page()
    await page.goto("https://www.theverge.com")
    dump_frame_tree(page.main_frame, "")
    await browser.close()

def dump_frame_tree(frame, indent):
    print(indent + frame.name + '@' + frame.url)
    for child in frame.child_frames:
        dump_frame_tree(child, indent + "    ")

async def main():
    async with async_playwright() as playwright:
        await run(playwright)
asyncio.run(main())
```

```py
# sync

from playwright.sync_api import sync_playwright

def run(playwright):
    firefox = playwright.firefox
    browser = firefox.launch()
    page = browser.new_page()
    page.goto("https://www.theverge.com")
    dump_frame_tree(page.main_frame, "")
    browser.close()

def dump_frame_tree(frame, indent):
    print(indent + frame.name + '@' + frame.url)
    for child in frame.child_frames:
        dump_frame_tree(child, indent + "    ")

with sync_playwright() as playwright:
    run(playwright)
```


- [frame.add_script_tag(**options)](./api/class-frame.md#frameadd_script_tagoptions)
- [frame.add_style_tag(**options)](./api/class-frame.md#frameadd_style_tagoptions)
- [frame.check(selector, **options)](./api/class-frame.md#framecheckselector-options)
- [frame.child_frames](./api/class-frame.md#framechild_frames)
- [frame.click(selector, **options)](./api/class-frame.md#frameclickselector-options)
- [frame.content()](./api/class-frame.md#framecontent)
- [frame.dblclick(selector, **options)](./api/class-frame.md#framedblclickselector-options)
- [frame.dispatch_event(selector, type, **options)](./api/class-frame.md#framedispatch_eventselector-type-options)
- [frame.eval_on_selector(selector, expression, **options)](./api/class-frame.md#frameeval_on_selectorselector-expression-options)
- [frame.eval_on_selector_all(selector, expression, **options)](./api/class-frame.md#frameeval_on_selector_allselector-expression-options)
- [frame.evaluate(expression, **options)](./api/class-frame.md#frameevaluateexpression-options)
- [frame.evaluate_handle(expression, **options)](./api/class-frame.md#frameevaluate_handleexpression-options)
- [frame.expect_navigation(**options)](./api/class-frame.md#frameexpect_navigationoptions)
- [frame.fill(selector, value, **options)](./api/class-frame.md#framefillselector-value-options)
- [frame.focus(selector, **options)](./api/class-frame.md#framefocusselector-options)
- [frame.frame_element()](./api/class-frame.md#frameframe_element)
- [frame.get_attribute(selector, name, **options)](./api/class-frame.md#frameget_attributeselector-name-options)
- [frame.goto(url, **options)](./api/class-frame.md#framegotourl-options)
- [frame.hover(selector, **options)](./api/class-frame.md#framehoverselector-options)
- [frame.inner_html(selector, **options)](./api/class-frame.md#frameinner_htmlselector-options)
- [frame.inner_text(selector, **options)](./api/class-frame.md#frameinner_textselector-options)
- [frame.is_checked(selector, **options)](./api/class-frame.md#frameis_checkedselector-options)
- [frame.is_detached()](./api/class-frame.md#frameis_detached)
- [frame.is_disabled(selector, **options)](./api/class-frame.md#frameis_disabledselector-options)
- [frame.is_editable(selector, **options)](./api/class-frame.md#frameis_editableselector-options)
- [frame.is_enabled(selector, **options)](./api/class-frame.md#frameis_enabledselector-options)
- [frame.is_hidden(selector, **options)](./api/class-frame.md#frameis_hiddenselector-options)
- [frame.is_visible(selector, **options)](./api/class-frame.md#frameis_visibleselector-options)
- [frame.name](./api/class-frame.md#framename)
- [frame.page](./api/class-frame.md#framepage)
- [frame.parent_frame](./api/class-frame.md#frameparent_frame)
- [frame.press(selector, key, **options)](./api/class-frame.md#framepressselector-key-options)
- [frame.query_selector(selector)](./api/class-frame.md#framequery_selectorselector)
- [frame.query_selector_all(selector)](./api/class-frame.md#framequery_selector_allselector)
- [frame.select_option(selector, **options)](./api/class-frame.md#frameselect_optionselector-options)
- [frame.set_content(html, **options)](./api/class-frame.md#frameset_contenthtml-options)
- [frame.set_input_files(selector, files, **options)](./api/class-frame.md#frameset_input_filesselector-files-options)
- [frame.tap(selector, **options)](./api/class-frame.md#frametapselector-options)
- [frame.text_content(selector, **options)](./api/class-frame.md#frametext_contentselector-options)
- [frame.title()](./api/class-frame.md#frametitle)
- [frame.type(selector, text, **options)](./api/class-frame.md#frametypeselector-text-options)
- [frame.uncheck(selector, **options)](./api/class-frame.md#frameuncheckselector-options)
- [frame.url](./api/class-frame.md#frameurl)
- [frame.wait_for_function(expression, **options)](./api/class-frame.md#framewait_for_functionexpression-options)
- [frame.wait_for_load_state(**options)](./api/class-frame.md#framewait_for_load_stateoptions)
- [frame.wait_for_navigation(**options)](./api/class-frame.md#framewait_for_navigationoptions)
- [frame.wait_for_selector(selector, **options)](./api/class-frame.md#framewait_for_selectorselector-options)
- [frame.wait_for_timeout(timeout)](./api/class-frame.md#framewait_for_timeouttimeout)

## frame.add_script_tag(**options)
- `content` <[str]> Raw JavaScript content to be injected into frame.
- `path` <[Union]\[[str], [pathlib.Path]\]> Path to the JavaScript file to be injected into frame. If `path` is a relative path, then it is resolved relative to the current working directory.
- `type` <[str]> Script type. Use 'module' in order to load a Javascript ES6 module. See [script](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) for more details.
- `url` <[str]> URL of a script to be added.
- returns: <[ElementHandle]>

Returns the added tag when the script's onload fires or when the script content was injected into frame.

Adds a `<script>` tag into the page with the desired url or content.

## frame.add_style_tag(**options)
- `content` <[str]> Raw CSS content to be injected into frame.
- `path` <[Union]\[[str], [pathlib.Path]\]> Path to the CSS file to be injected into frame. If `path` is a relative path, then it is resolved relative to the current working directory.
- `url` <[str]> URL of the `<link>` tag.
- returns: <[ElementHandle]>

Returns the added tag when the stylesheet's onload fires or when the CSS content was injected into frame.

Adds a `<link rel="stylesheet">` tag into the page with the desired url or a `<style type="text/css">` tag with the content.

## frame.check(selector, **options)
- `selector` <[str]> A selector to search for element. If there are multiple elements satisfying the selector, the first will be used. See [working with selectors](./selectors.md#working-with-selectors) for more details.
- `force` <[bool]> Whether to bypass the [actionability](./actionability.md) checks. Defaults to `false`.
- `no_wait_after` <[bool]> Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to `false`.
- `timeout` <[float]> Maximum time in milliseconds, defaults to 30 seconds, pass `0` to disable timeout. The default value can be changed by using the [browser_context.set_default_timeout(timeout)](./api/class-browsercontext.md#browser_contextset_default_timeouttimeout) or [page.set_default_timeout(timeout)](./api/class-page.md#pageset_default_timeouttimeout) methods.

This method checks an element matching `selector` by performing the following steps:
1. Find an element match matching `selector`. If there is none, wait until a matching element is attached to the DOM.
1. Ensure that matched element is a checkbox or a radio input. If not, this method rejects. If the element is already checked, this method returns immediately.
1. Wait for [actionability](./actionability.md) checks on the matched element, unless `force` option is set. If the element is detached during the checks, the whole action is retried.
1. Scroll the element into view if needed.
1. Use [page.mouse](./api/class-page.md#pagemouse) to click in the center of the element.
1. Wait for initiated navigations to either succeed or fail, unless `no_wait_after` option is set.
1. Ensure that the element is now checked. If not, this method rejects.

When all steps combined have not finished during the specified `timeout`, this method rejects with a [TimeoutError]. Passing zero timeout disables this.

## frame.child_frames
- returns: <[List]\[[Frame]\]>

## frame.click(selector, **options)
- `selector` <[str]> A selector to search for element. If there are multiple elements satisfying the selector, the first will be used. See [working with selectors](./selectors.md#working-with-selectors) for more details.
- `button` <"left"|"right"|"middle"> Defaults to `left`.
- `click_count` <[int]> defaults to 1. See [UIEvent.detail].
- `delay` <[float]> Time to wait between `mousedown` and `mouseup` in milliseconds. Defaults to 0.
- `force` <[bool]> Whether to bypass the [actionability](./actionability.md) checks. Defaults to `false`.
- `modifiers` <[List]\["Alt"|"Control"|"Meta"|"Shift"\]> Modifier keys to press. Ensures that only these modifiers are pressed during the operation, and then restores current modifiers back. If not specified, currently pressed modifiers are used.
- `no_wait_after` <[bool]> Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to `false`.
- `position` <[Dict]> A point to use relative to the top-left corner of element padding box. If not specified, uses some visible point of the element.
  - `x` <[float]>
  - `y` <[float]>
- `timeout` <[float]> Maximum time in milliseconds, defaults to 30 seconds, pass `0` to disable timeout. The default value can be changed by using the [browser_context.set_default_timeout(timeout)](./api/class-browsercontext.md#browser_contextset_default_timeouttimeout) or [page.set_default_timeout(timeout)](./api/class-page.md#pageset_default_timeouttimeout) methods.

This method clicks an element matching `selector` by performing the following steps:
1. Find an element match matching `selector`. If there is none, wait until a matching element is attached to the DOM.
1. Wait for [actionability](./actionability.md) checks on the matched element, unless `force` option is set. If the element is detached during the checks, the whole action is retried.
1. Scroll the element into view if needed.
1. Use [page.mouse](./api/class-page.md#pagemouse) to click in the center of the element, or the specified `position`.
1. Wait for initiated navigations to either succeed or fail, unless `no_wait_after` option is set.

When all steps combined have not finished during the specified `timeout`, this method rejects with a [TimeoutError]. Passing zero timeout disables this.

## frame.content()
- returns: <[str]>

Gets the full HTML contents of the frame, including the doctype.

## frame.dblclick(selector, **options)
- `selector` <[str]> A selector to search for element. If there are multiple elements satisfying the selector, the first will be used. See [working with selectors](./selectors.md#working-with-selectors) for more details.
- `button` <"left"|"right"|"middle"> Defaults to `left`.
- `delay` <[float]> Time to wait between `mousedown` and `mouseup` in milliseconds. Defaults to 0.
- `force` <[bool]> Whether to bypass the [actionability](./actionability.md) checks. Defaults to `false`.
- `modifiers` <[List]\["Alt"|"Control"|"Meta"|"Shift"\]> Modifier keys to press. Ensures that only these modifiers are pressed during the operation, and then restores current modifiers back. If not specified, currently pressed modifiers are used.
- `no_wait_after` <[bool]> Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to `false`.
- `position` <[Dict]> A point to use relative to the top-left corner of element padding box. If not specified, uses some visible point of the element.
  - `x` <[float]>
  - `y` <[float]>
- `timeout` <[float]> Maximum time in milliseconds, defaults to 30 seconds, pass `0` to disable timeout. The default value can be changed by using the [browser_context.set_default_timeout(timeout)](./api/class-browsercontext.md#browser_contextset_default_timeouttimeout) or [page.set_default_timeout(timeout)](./api/class-page.md#pageset_default_timeouttimeout) methods.

This method double clicks an element matching `selector` by performing the following steps:
1. Find an element match matching `selector`. If there is none, wait until a matching element is attached to the DOM.
1. Wait for [actionability](./actionability.md) checks on the matched element, unless `force` option is set. If the element is detached during the checks, the whole action is retried.
1. Scroll the element into view if needed.
1. Use [page.mouse](./api/class-page.md#pagemouse) to double click in the center of the element, or the specified `position`.
1. Wait for initiated navigations to either succeed or fail, unless `no_wait_after` option is set. Note that if the first click of the `dblclick()` triggers a navigation event, this method will reject.

When all steps combined have not finished during the specified `timeout`, this method rejects with a [TimeoutError]. Passing zero timeout disables this.

:::note
`frame.dblclick()` dispatches two `click` events and a single `dblclick` event.
:::

## frame.dispatch_event(selector, type, **options)
- `selector` <[str]> A selector to search for element. If there are multiple elements satisfying the selector, the first will be used. See [working with selectors](./selectors.md#working-with-selectors) for more details.
- `type` <[str]> DOM event type: `"click"`, `"dragstart"`, etc.
- `event_init` <[EvaluationArgument]> Optional event-specific initialization properties.
- `timeout` <[float]> Maximum time in milliseconds, defaults to 30 seconds, pass `0` to disable timeout. The default value can be changed by using the [browser_context.set_default_timeout(timeout)](./api/class-browsercontext.md#browser_contextset_default_timeouttimeout) or [page.set_default_timeout(timeout)](./api/class-page.md#pageset_default_timeouttimeout) methods.

The snippet below dispatches the `click` event on the element. Regardless of the visibility state of the elment, `click` is dispatched. This is equivalend to calling [element.click()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/click).

```py
# async

await frame.dispatch_event("button#submit", "click")
```

```py
# sync

frame.dispatch_event("button#submit", "click")
```

Under the hood, it creates an instance of an event based on the given `type`, initializes it with `event_init` properties and dispatches it on the element. Events are `composed`, `cancelable` and bubble by default.

Since `event_init` is event-specific, please refer to the events documentation for the lists of initial properties:
* [DragEvent](https://developer.mozilla.org/en-US/docs/Web/API/DragEvent/DragEvent)
* [FocusEvent](https://developer.mozilla.org/en-US/docs/Web/API/FocusEvent/FocusEvent)
* [KeyboardEvent](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/KeyboardEvent)
* [MouseEvent](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent)
* [PointerEvent](https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/PointerEvent)
* [TouchEvent](https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent/TouchEvent)
* [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event/Event)

You can also specify `JSHandle` as the property value if you want live objects to be passed into the event:

```py
# async

# note you can only create data_transfer in chromium and firefox
data_transfer = await frame.evaluate_handle("new DataTransfer()")
await frame.dispatch_event("#source", "dragstart", { "dataTransfer": data_transfer })
```

```py
# sync

# note you can only create data_transfer in chromium and firefox
data_transfer = frame.evaluate_handle("new DataTransfer()")
frame.dispatch_event("#source", "dragstart", { "dataTransfer": data_transfer })
```

## frame.eval_on_selector(selector, expression, **options)
- `selector` <[str]> A selector to query for. See [working with selectors](./selectors.md#working-with-selectors) for more details.
- `arg` <[EvaluationArgument]> Optional argument to pass to `page_function`
- `expression` <[str]> JavaScript expression to be evaluated in the browser context. If it looks like a function declaration, it is interpreted as a function. Otherwise, evaluated as an expression.
- `force_expr` <[bool]> Whether to treat given `expression` as JavaScript evaluate expression, even though it looks like an arrow function. Optional.
- returns: <[Serializable]>

Returns the return value of `page_function`

The method finds an element matching the specified selector within the frame and passes it as a first argument to `page_function`. See [Working with selectors](./selectors.md#working-with-selectors) for more details. If no elements match the selector, the method throws an error.

If `page_function` returns a [Promise], then `frame.$eval` would wait for the promise to resolve and return its value.

Examples:

```py
# async

search_value = await frame.eval_on_selector("#search", "el => el.value")
preload_href = await frame.eval_on_selector("link[rel=preload]", "el => el.href")
html = await frame.eval_on_selector(".main-container", "(e, suffix) => e.outerHTML + suffix", "hello")
```

```py
# sync

search_value = frame.eval_on_selector("#search", "el => el.value")
preload_href = frame.eval_on_selector("link[rel=preload]", "el => el.href")
html = frame.eval_on_selector(".main-container", "(e, suffix) => e.outerHTML + suffix", "hello")
```

## frame.eval_on_selector_all(selector, expression, **options)
- `selector` <[str]> A selector to query for. See [working with selectors](./selectors.md#working-with-selectors) for more details.
- `arg` <[EvaluationArgument]> Optional argument to pass to `page_function`
- `expression` <[str]> JavaScript expression to be evaluated in the browser context. If it looks like a function declaration, it is interpreted as a function. Otherwise, evaluated as an expression.
- `force_expr` <[bool]> Whether to treat given `expression` as JavaScript evaluate expression, even though it looks like an arrow function. Optional.
- returns: <[Serializable]>

Returns the return value of `page_function`

The method finds all elements matching the specified selector within the frame and passes an array of matched elements as a first argument to `page_function`. See [Working with selectors](./selectors.md#working-with-selectors) for more details.

If `page_function` returns a [Promise], then `frame.$$eval` would wait for the promise to resolve and return its value.

Examples:

```py
# async

divs_counts = await frame.eval_on_selector_all("div", "(divs, min) => divs.length >= min", 10)
```

```py
# sync

divs_counts = frame.eval_on_selector_all("div", "(divs, min) => divs.length >= min", 10)
```

## frame.evaluate(expression, **options)
- `arg` <[EvaluationArgument]> Optional argument to pass to `page_function`
- `expression` <[str]> JavaScript expression to be evaluated in the browser context. If it looks like a function declaration, it is interpreted as a function. Otherwise, evaluated as an expression.
- `force_expr` <[bool]> Whether to treat given `expression` as JavaScript evaluate expression, even though it looks like an arrow function. Optional.
- returns: <[Serializable]>

Returns the return value of `page_function`

If the function passed to the [frame.evaluate(expression, **options)](./api/class-frame.md#frameevaluateexpression-options) returns a [Promise], then [frame.evaluate(expression, **options)](./api/class-frame.md#frameevaluateexpression-options) would wait for the promise to resolve and return its value.

If the function passed to the [frame.evaluate(expression, **options)](./api/class-frame.md#frameevaluateexpression-options) returns a non-[Serializable] value, then[ method: `Frame.evaluate`] returns `undefined`. DevTools Protocol also supports transferring some additional values that are not serializable by `JSON`: `-0`, `NaN`, `Infinity`, `-Infinity`, and bigint literals.

```py
# async

result = await frame.evaluate("([x, y]) => Promise.resolve(x * y)", [7, 8])
print(result) # prints "56"
```

```py
# sync

result = frame.evaluate("([x, y]) => Promise.resolve(x * y)", [7, 8])
print(result) # prints "56"
```

A string can also be passed in instead of a function.

```py
# async

print(await frame.evaluate("1 + 2")) # prints "3"
x = 10
print(await frame.evaluate(f"1 + {x}")) # prints "11"
```

```py
# sync

print(frame.evaluate("1 + 2")) # prints "3"
x = 10
print(frame.evaluate(f"1 + {x}")) # prints "11"
```

[ElementHandle] instances can be passed as an argument to the [frame.evaluate(expression, **options)](./api/class-frame.md#frameevaluateexpression-options):

```py
# async

body_handle = await frame.query_selector("body")
html = await frame.evaluate("([body, suffix]) => body.innerHTML + suffix", [body_handle, "hello"])
await body_handle.dispose()
```

```py
# sync

body_handle = frame.query_selector("body")
html = frame.evaluate("([body, suffix]) => body.innerHTML + suffix", [body_handle, "hello"])
body_handle.dispose()
```

## frame.evaluate_handle(expression, **options)
- `arg` <[EvaluationArgument]> Optional argument to pass to `page_function`
- `expression` <[str]> JavaScript expression to be evaluated in the browser context. If it looks like a function declaration, it is interpreted as a function. Otherwise, evaluated as an expression.
- `force_expr` <[bool]> Whether to treat given `expression` as JavaScript evaluate expression, even though it looks like an arrow function. Optional.
- returns: <[JSHandle]>

Returns the return value of `page_function` as in-page object (JSHandle).

The only difference between [frame.evaluate(expression, **options)](./api/class-frame.md#frameevaluateexpression-options) and [frame.evaluate_handle(expression, **options)](./api/class-frame.md#frameevaluate_handleexpression-options) is that[ method: Fframe.evaluateHandle`] returns in-page object (JSHandle).

If the function, passed to the [frame.evaluate_handle(expression, **options)](./api/class-frame.md#frameevaluate_handleexpression-options), returns a [Promise], then[ method: Fframe.evaluateHandle`] would wait for the promise to resolve and return its value.

```py
# async

# FIXME
a_window_handle = await frame.evaluate_handle("Promise.resolve(window)")
a_window_handle # handle for the window object.
```

```py
# sync

a_window_handle = frame.evaluate_handle("Promise.resolve(window)")
a_window_handle # handle for the window object.
```

A string can also be passed in instead of a function.

```py
# async

a_handle = await page.evaluate_handle("document") # handle for the "document"
```

```py
# sync

a_handle = page.evaluate_handle("document") # handle for the "document"
```

[JSHandle] instances can be passed as an argument to the [frame.evaluate_handle(expression, **options)](./api/class-frame.md#frameevaluate_handleexpression-options):

```py
# async

a_handle = await page.evaluate_handle("document.body")
result_handle = await page.evaluate_handle("body => body.innerHTML", a_handle)
print(await result_handle.json_value())
await result_handle.dispose()
```

```py
# sync

a_handle = page.evaluate_handle("document.body")
result_handle = page.evaluate_handle("body => body.innerHTML", a_handle)
print(result_handle.json_value())
result_handle.dispose()
```

## frame.expect_navigation(**options)
- `timeout` <[float]> Maximum operation time in milliseconds, defaults to 30 seconds, pass `0` to disable timeout. The default value can be changed by using the [browser_context.set_default_navigation_timeout(timeout)](./api/class-browsercontext.md#browser_contextset_default_navigation_timeouttimeout), [browser_context.set_default_timeout(timeout)](./api/class-browsercontext.md#browser_contextset_default_timeouttimeout), [page.set_default_navigation_timeout(timeout)](./api/class-page.md#pageset_default_navigation_timeouttimeout) or [page.set_default_timeout(timeout)](./api/class-page.md#pageset_default_timeouttimeout) methods.
- `url` <[str]|[Pattern]|[Callable]\[[URL]\]:[bool]> A glob pattern, regex pattern or predicate receiving [URL] to match while waiting for the navigation.
- `wait_until` <"load"|"domcontentloaded"|"networkidle"> When to consider operation succeeded, defaults to `load`. Events can be either:
  * `'domcontentloaded'` - consider operation to be finished when the `DOMContentLoaded` event is fired.
  * `'load'` - consider operation to be finished when the `load` event is fired.
  * `'networkidle'` - consider operation to be finished when there are no network connections for at least `500` ms.
- returns: <[EventContextManager[Response]]>

Performs action and waits for the next navigation. In case of multiple redirects, the navigation will resolve with the response of the last redirect. In case of navigation to a different anchor or navigation due to History API usage, the navigation will resolve with `null`.

This resolves when the page navigates to a new URL or reloads. It is useful for when you run code which will indirectly cause the page to navigate. e.g. The click target has an `onclick` handler that triggers navigation from a `setTimeout`. Consider this example:

```py
# async

async with frame.expect_navigation():
    await frame.click("a.delayed-navigation") # Clicking the link will indirectly cause a navigation
# Context manager waited for the navigation to happen.
```

```py
# sync

with frame.expect_navigation():
    frame.click("a.delayed-navigation") # Clicking the link will indirectly cause a navigation
# Context manager waited for the navigation to happen.
```

:::note
Usage of the [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API) to change the URL is considered a navigation.
:::

## frame.fill(selector, value, **options)
- `selector` <[str]> A selector to search for element. If there are multiple elements satisfying the selector, the first will be used. See [working with selectors](./selectors.md#working-with-selectors) for more details.
- `value` <[str]> Value to fill for the `<input>`, `<textarea>` or `[contenteditable]` element.
- `no_wait_after` <[bool]> Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to `false`.
- `timeout` <[float]> Maximum time in milliseconds, defaults to 30 seconds, pass `0` to disable timeout. The default value can be changed by using the [browser_context.set_default_timeout(timeout)](./api/class-browsercontext.md#browser_contextset_default_timeouttimeout) or [page.set_default_timeout(timeout)](./api/class-page.md#pageset_default_timeouttimeout) methods.

This method waits for an element matching `selector`, waits for [actionability](./actionability.md) checks, focuses the element, fills it and triggers an `input` event after filling. If the element matching `selector` is not an `<input>`, `<textarea>` or `[contenteditable]` element, this method throws an error. Note that you can pass an empty string to clear the input field.

To send fine-grained keyboard events, use [frame.type(selector, text, **options)](./api/class-frame.md#frametypeselector-text-options).

## frame.focus(selector, **options)
- `selector` <[str]> A selector to search for element. If there are multiple elements satisfying the selector, the first will be used. See [working with selectors](./selectors.md#working-with-selectors) for more details.
- `timeout` <[float]> Maximum time in milliseconds, defaults to 30 seconds, pass `0` to disable timeout. The default value can be changed by using the [browser_context.set_default_timeout(timeout)](./api/class-browsercontext.md#browser_contextset_default_timeouttimeout) or [page.set_default_timeout(timeout)](./api/class-page.md#pageset_default_timeouttimeout) methods.

This method fetches an element with `selector` and focuses it. If there's no element matching `selector`, the method waits until a matching element appears in the DOM.

## frame.frame_element()
- returns: <[ElementHandle]>

Returns the `frame` or `iframe` element handle which corresponds to this frame.

This is an inverse of [element_handle.content_frame()](./api/class-elementhandle.md#element_handlecontent_frame). Note that returned handle actually belongs to the parent frame.

This method throws an error if the frame has been detached before `frameElement()` returns.

```py
# async

frame_element = await frame.frame_element()
content_frame = await frame_element.content_frame()
assert frame == content_frame
```

```py
# sync

frame_element = frame.frame_element()
content_frame = frame_element.content_frame()
assert frame == content_frame
```

## frame.get_attribute(selector, name, **options)
- `selector` <[str]> A selector to search for element. If there are multiple elements satisfying the selector, the first will be used. See [working with selectors](./selectors.md#working-with-selectors) for more details.
- `name` <[str]> Attribute name to get the value for.
- `timeout` <[float]> Maximum time in milliseconds, defaults to 30 seconds, pass `0` to disable timeout. The default value can be changed by using the [browser_context.set_default_timeout(timeout)](./api/class-browsercontext.md#browser_contextset_default_timeouttimeout) or [page.set_default_timeout(timeout)](./api/class-page.md#pageset_default_timeouttimeout) methods.
- returns: <[NoneType]|[str]>

Returns element attribute value.

## frame.goto(url, **options)
- `url` <[str]> URL to navigate frame to. The url should include scheme, e.g. `https://`.
- `referer` <[str]> Referer header value. If provided it will take preference over the referer header value set by [page.set_extra_http_headers(headers)](./api/class-page.md#pageset_extra_http_headersheaders).
- `timeout` <[float]> Maximum operation time in milliseconds, defaults to 30 seconds, pass `0` to disable timeout. The default value can be changed by using the [browser_context.set_default_navigation_timeout(timeout)](./api/class-browsercontext.md#browser_contextset_default_navigation_timeouttimeout), [browser_context.set_default_timeout(timeout)](./api/class-browsercontext.md#browser_contextset_default_timeouttimeout), [page.set_default_navigation_timeout(timeout)](./api/class-page.md#pageset_default_navigation_timeouttimeout) or [page.set_default_timeout(timeout)](./api/class-page.md#pageset_default_timeouttimeout) methods.
- `wait_until` <"load"|"domcontentloaded"|"networkidle"> When to consider operation succeeded, defaults to `load`. Events can be either:
  * `'domcontentloaded'` - consider operation to be finished when the `DOMContentLoaded` event is fired.
  * `'load'` - consider operation to be finished when the `load` event is fired.
  * `'networkidle'` - consider operation to be finished when there are no network connections for at least `500` ms.
- returns: <[NoneType]|[Response]>

Returns the main resource response. In case of multiple redirects, the navigation will resolve with the response of the last redirect.

`frame.goto` will throw an error if:
* there's an SSL error (e.g. in case of self-signed certificates).
* target URL is invalid.
* the `timeout` is exceeded during navigation.
* the remote server does not respond or is unreachable.
* the main resource failed to load.

`frame.goto` will not throw an error when any valid HTTP status code is returned by the remote server, including 404 "Not Found" and 500 "Internal Server Error".  The status code for such responses can be retrieved by calling [response.status](./api/class-response.md#responsestatus).

:::note
`frame.goto` either throws an error or returns a main resource response. The only exceptions are navigation to `about:blank` or navigation to the same URL with a different hash, which would succeed and return `null`.
:::

:::note
Headless mode doesn't support navigation to a PDF document. See the [upstream issue](https://bugs.chromium.org/p/chromium/issues/detail?id=761295).
:::

## frame.hover(selector, **options)
- `selector` <[str]> A selector to search for element. If there are multiple elements satisfying the selector, the first will be used. See [working with selectors](./selectors.md#working-with-selectors) for more details.
- `force` <[bool]> Whether to bypass the [actionability](./actionability.md) checks. Defaults to `false`.
- `modifiers` <[List]\["Alt"|"Control"|"Meta"|"Shift"\]> Modifier keys to press. Ensures that only these modifiers are pressed during the operation, and then restores current modifiers back. If not specified, currently pressed modifiers are used.
- `position` <[Dict]> A point to use relative to the top-left corner of element padding box. If not specified, uses some visible point of the element.
  - `x` <[float]>
  - `y` <[float]>
- `timeout` <[float]> Maximum time in milliseconds, defaults to 30 seconds, pass `0` to disable timeout. The default value can be changed by using the [browser_context.set_default_timeout(timeout)](./api/class-browsercontext.md#browser_contextset_default_timeouttimeout) or [page.set_default_timeout(timeout)](./api/class-page.md#pageset_default_timeouttimeout) methods.

This method hovers over an element matching `selector` by performing the following steps:
1. Find an element match matching `selector`. If there is none, wait until a matching element is attached to the DOM.
1. Wait for [actionability](./actionability.md) checks on the matched element, unless `force` option is set. If the element is detached during the checks, the whole action is retried.
1. Scroll the element into view if needed.
1. Use [page.mouse](./api/class-page.md#pagemouse) to hover over the center of the element, or the specified `position`.
1. Wait for initiated navigations to either succeed or fail, unless `noWaitAfter` option is set.

When all steps combined have not finished during the specified `timeout`, this method rejects with a [TimeoutError]. Passing zero timeout disables this.

## frame.inner_html(selector, **options)
- `selector` <[str]> A selector to search for element. If there are multiple elements satisfying the selector, the first will be used. See [working with selectors](./selectors.md#working-with-selectors) for more details.
- `timeout` <[float]> Maximum time in milliseconds, defaults to 30 seconds, pass `0` to disable timeout. The default value can be changed by using the [browser_context.set_default_timeout(timeout)](./api/class-browsercontext.md#browser_contextset_default_timeouttimeout) or [page.set_default_timeout(timeout)](./api/class-page.md#pageset_default_timeouttimeout) methods.
- returns: <[str]>

Returns `element.innerHTML`.

## frame.inner_text(selector, **options)
- `selector` <[str]> A selector to search for element. If there are multiple elements satisfying the selector, the first will be used. See [working with selectors](./selectors.md#working-with-selectors) for more details.
- `timeout` <[float]> Maximum time in milliseconds, defaults to 30 seconds, pass `0` to disable timeout. The default value can be changed by using the [browser_context.set_default_timeout(timeout)](./api/class-browsercontext.md#browser_contextset_default_timeouttimeout) or [page.set_default_timeout(timeout)](./api/class-page.md#pageset_default_timeouttimeout) methods.
- returns: <[str]>

Returns `element.innerText`.

## frame.is_checked(selector, **options)
- `selector` <[str]> A selector to search for element. If there are multiple elements satisfying the selector, the first will be used. See [working with selectors](./selectors.md#working-with-selectors) for more details.
- `timeout` <[float]> Maximum time in milliseconds, defaults to 30 seconds, pass `0` to disable timeout. The default value can be changed by using the [browser_context.set_default_timeout(timeout)](./api/class-browsercontext.md#browser_contextset_default_timeouttimeout) or [page.set_default_timeout(timeout)](./api/class-page.md#pageset_default_timeouttimeout) methods.
- returns: <[bool]>

Returns whether the element is checked. Throws if the element is not a checkbox or radio input.

## frame.is_detached()
- returns: <[bool]>

Returns `true` if the frame has been detached, or `false` otherwise.

## frame.is_disabled(selector, **options)
- `selector` <[str]> A selector to search for element. If there are multiple elements satisfying the selector, the first will be used. See [working with selectors](./selectors.md#working-with-selectors) for more details.
- `timeout` <[float]> Maximum time in milliseconds, defaults to 30 seconds, pass `0` to disable timeout. The default value can be changed by using the [browser_context.set_default_timeout(timeout)](./api/class-browsercontext.md#browser_contextset_default_timeouttimeout) or [page.set_default_timeout(timeout)](./api/class-page.md#pageset_default_timeouttimeout) methods.
- returns: <[bool]>

Returns whether the element is disabled, the opposite of [enabled](./actionability.md#enabled).

## frame.is_editable(selector, **options)
- `selector` <[str]> A selector to search for element. If there are multiple elements satisfying the selector, the first will be used. See [working with selectors](./selectors.md#working-with-selectors) for more details.
- `timeout` <[float]> Maximum time in milliseconds, defaults to 30 seconds, pass `0` to disable timeout. The default value can be changed by using the [browser_context.set_default_timeout(timeout)](./api/class-browsercontext.md#browser_contextset_default_timeouttimeout) or [page.set_default_timeout(timeout)](./api/class-page.md#pageset_default_timeouttimeout) methods.
- returns: <[bool]>

Returns whether the element is [editable](./actionability.md#editable).

## frame.is_enabled(selector, **options)
- `selector` <[str]> A selector to search for element. If there are multiple elements satisfying the selector, the first will be used. See [working with selectors](./selectors.md#working-with-selectors) for more details.
- `timeout` <[float]> Maximum time in milliseconds, defaults to 30 seconds, pass `0` to disable timeout. The default value can be changed by using the [browser_context.set_default_timeout(timeout)](./api/class-browsercontext.md#browser_contextset_default_timeouttimeout) or [page.set_default_timeout(timeout)](./api/class-page.md#pageset_default_timeouttimeout) methods.
- returns: <[bool]>

Returns whether the element is [enabled](./actionability.md#enabled).

## frame.is_hidden(selector, **options)
- `selector` <[str]> A selector to search for element. If there are multiple elements satisfying the selector, the first will be used. See [working with selectors](./selectors.md#working-with-selectors) for more details.
- `timeout` <[float]> Maximum time in milliseconds, defaults to 30 seconds, pass `0` to disable timeout. The default value can be changed by using the [browser_context.set_default_timeout(timeout)](./api/class-browsercontext.md#browser_contextset_default_timeouttimeout) or [page.set_default_timeout(timeout)](./api/class-page.md#pageset_default_timeouttimeout) methods.
- returns: <[bool]>

Returns whether the element is hidden, the opposite of [visible](./actionability.md#visible).

## frame.is_visible(selector, **options)
- `selector` <[str]> A selector to search for element. If there are multiple elements satisfying the selector, the first will be used. See [working with selectors](./selectors.md#working-with-selectors) for more details.
- `timeout` <[float]> Maximum time in milliseconds, defaults to 30 seconds, pass `0` to disable timeout. The default value can be changed by using the [browser_context.set_default_timeout(timeout)](./api/class-browsercontext.md#browser_contextset_default_timeouttimeout) or [page.set_default_timeout(timeout)](./api/class-page.md#pageset_default_timeouttimeout) methods.
- returns: <[bool]>

Returns whether the element is [visible](./actionability.md#visible).

## frame.name
- returns: <[str]>

Returns frame's name attribute as specified in the tag.

If the name is empty, returns the id attribute instead.

:::note
This value is calculated once when the frame is created, and will not update if the attribute is changed later.
:::

## frame.page
- returns: <[Page]>

Returns the page containing this frame.

## frame.parent_frame
- returns: <[NoneType]|[Frame]>

Parent frame, if any. Detached frames and main frames return `null`.

## frame.press(selector, key, **options)
- `selector` <[str]> A selector to search for element. If there are multiple elements satisfying the selector, the first will be used. See [working with selectors](./selectors.md#working-with-selectors) for more details.
- `key` <[str]> Name of the key to press or a character to generate, such as `ArrowLeft` or `a`.
- `delay` <[float]> Time to wait between `keydown` and `keyup` in milliseconds. Defaults to 0.
- `no_wait_after` <[bool]> Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to `false`.
- `timeout` <[float]> Maximum time in milliseconds, defaults to 30 seconds, pass `0` to disable timeout. The default value can be changed by using the [browser_context.set_default_timeout(timeout)](./api/class-browsercontext.md#browser_contextset_default_timeouttimeout) or [page.set_default_timeout(timeout)](./api/class-page.md#pageset_default_timeouttimeout) methods.

`key` can specify the intended [keyboardEvent.key](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key) value or a single character to generate the text for. A superset of the `key` values can be found [here](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values). Examples of the keys are:

`F1` - `F12`, `Digit0`- `Digit9`, `KeyA`- `KeyZ`, `Backquote`, `Minus`, `Equal`, `Backslash`, `Backspace`, `Tab`, `Delete`, `Escape`, `ArrowDown`, `End`, `Enter`, `Home`, `Insert`, `PageDown`, `PageUp`, `ArrowRight`, `ArrowUp`, etc.

Following modification shortcuts are also supported: `Shift`, `Control`, `Alt`, `Meta`, `ShiftLeft`.

Holding down `Shift` will type the text that corresponds to the `key` in the upper case.

If `key` is a single character, it is case-sensitive, so the values `a` and `A` will generate different respective texts.

Shortcuts such as `key: "Control+o"` or `key: "Control+Shift+T"` are supported as well. When speficied with the modifier, modifier is pressed and being held while the subsequent key is being pressed.

## frame.query_selector(selector)
- `selector` <[str]> A selector to query for. See [working with selectors](./selectors.md#working-with-selectors) for more details.
- returns: <[NoneType]|[ElementHandle]>

Returns the ElementHandle pointing to the frame element.

The method finds an element matching the specified selector within the frame. See [Working with selectors](./selectors.md#working-with-selectors) for more details. If no elements match the selector, returns `null`.

## frame.query_selector_all(selector)
- `selector` <[str]> A selector to query for. See [working with selectors](./selectors.md#working-with-selectors) for more details.
- returns: <[List]\[[ElementHandle]\]>

Returns the ElementHandles pointing to the frame elements.

The method finds all elements matching the specified selector within the frame. See [Working with selectors](./selectors.md#working-with-selectors) for more details. If no elements match the selector, returns empty array.

## frame.select_option(selector, **options)
- `selector` <[str]> A selector to query for. See [working with selectors](./selectors.md#working-with-selectors) for more details.
- `no_wait_after` <[bool]> Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to `false`.
- `timeout` <[float]> Maximum time in milliseconds, defaults to 30 seconds, pass `0` to disable timeout. The default value can be changed by using the [browser_context.set_default_timeout(timeout)](./api/class-browsercontext.md#browser_contextset_default_timeouttimeout) or [page.set_default_timeout(timeout)](./api/class-page.md#pageset_default_timeouttimeout) methods.
- `element` <[ElementHandle]|[List]\[[ElementHandle]\]> Option elements to select. Optional.
- `index` <[int]|[List]\[[int]\]> Options to select by index. Optional.
- `value` <[str]|[List]\[[str]\]> Options to select by value. If the `<select>` has the `multiple` attribute, all given options are selected, otherwise only the first option matching one of the passed options is selected. Optional.
- `label` <[str]|[List]\[[str]\]> Options to select by label. If the `<select>` has the `multiple` attribute, all given options are selected, otherwise only the first option matching one of the passed options is selected. Optional.
- returns: <[List]\[[str]\]>

Returns the array of option values that have been successfully selected.

Triggers a `change` and `input` event once all the provided options have been selected. If there's no `<select>` element matching `selector`, the method throws an error.

```py
# async

# single selection matching the value
await frame.select_option("select#colors", "blue")
# single selection matching the label
await frame.select_option("select#colors", label="blue")
# multiple selection
await frame.select_option("select#colors", value=["red", "green", "blue"])
```

```py
# sync

# single selection matching the value
frame.select_option("select#colors", "blue")
# single selection matching both the label
frame.select_option("select#colors", label="blue")
# multiple selection
frame.select_option("select#colors", value=["red", "green", "blue"])
```

## frame.set_content(html, **options)
- `html` <[str]> HTML markup to assign to the page.
- `timeout` <[float]> Maximum operation time in milliseconds, defaults to 30 seconds, pass `0` to disable timeout. The default value can be changed by using the [browser_context.set_default_navigation_timeout(timeout)](./api/class-browsercontext.md#browser_contextset_default_navigation_timeouttimeout), [browser_context.set_default_timeout(timeout)](./api/class-browsercontext.md#browser_contextset_default_timeouttimeout), [page.set_default_navigation_timeout(timeout)](./api/class-page.md#pageset_default_navigation_timeouttimeout) or [page.set_default_timeout(timeout)](./api/class-page.md#pageset_default_timeouttimeout) methods.
- `wait_until` <"load"|"domcontentloaded"|"networkidle"> When to consider operation succeeded, defaults to `load`. Events can be either:
  * `'domcontentloaded'` - consider operation to be finished when the `DOMContentLoaded` event is fired.
  * `'load'` - consider operation to be finished when the `load` event is fired.
  * `'networkidle'` - consider operation to be finished when there are no network connections for at least `500` ms.

## frame.set_input_files(selector, files, **options)
- `selector` <[str]> A selector to search for element. If there are multiple elements satisfying the selector, the first will be used. See [working with selectors](./selectors.md#working-with-selectors) for more details.
- `files` <[Union]\[[str], [pathlib.Path]\]|[List]\[[Union]\[[str], [pathlib.Path]\]\]|[Dict]|[List]\[[Dict]\]>
  - `name` <[str]> [File] name
  - `mimeType` <[str]> [File] type
  - `buffer` <[Buffer]> File content
- `no_wait_after` <[bool]> Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to `false`.
- `timeout` <[float]> Maximum time in milliseconds, defaults to 30 seconds, pass `0` to disable timeout. The default value can be changed by using the [browser_context.set_default_timeout(timeout)](./api/class-browsercontext.md#browser_contextset_default_timeouttimeout) or [page.set_default_timeout(timeout)](./api/class-page.md#pageset_default_timeouttimeout) methods.

This method expects `selector` to point to an [input element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input).

Sets the value of the file input to these file paths or files. If some of the `filePaths` are relative paths, then they are resolved relative to the the current working directory. For empty array, clears the selected files.

## frame.tap(selector, **options)
- `selector` <[str]> A selector to search for element. If there are multiple elements satisfying the selector, the first will be used. See [working with selectors](./selectors.md#working-with-selectors) for more details.
- `force` <[bool]> Whether to bypass the [actionability](./actionability.md) checks. Defaults to `false`.
- `modifiers` <[List]\["Alt"|"Control"|"Meta"|"Shift"\]> Modifier keys to press. Ensures that only these modifiers are pressed during the operation, and then restores current modifiers back. If not specified, currently pressed modifiers are used.
- `no_wait_after` <[bool]> Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to `false`.
- `position` <[Dict]> A point to use relative to the top-left corner of element padding box. If not specified, uses some visible point of the element.
  - `x` <[float]>
  - `y` <[float]>
- `timeout` <[float]> Maximum time in milliseconds, defaults to 30 seconds, pass `0` to disable timeout. The default value can be changed by using the [browser_context.set_default_timeout(timeout)](./api/class-browsercontext.md#browser_contextset_default_timeouttimeout) or [page.set_default_timeout(timeout)](./api/class-page.md#pageset_default_timeouttimeout) methods.

This method taps an element matching `selector` by performing the following steps:
1. Find an element match matching `selector`. If there is none, wait until a matching element is attached to the DOM.
1. Wait for [actionability](./actionability.md) checks on the matched element, unless `force` option is set. If the element is detached during the checks, the whole action is retried.
1. Scroll the element into view if needed.
1. Use [page.touchscreen](./api/class-page.md#pagetouchscreen) to tap the center of the element, or the specified `position`.
1. Wait for initiated navigations to either succeed or fail, unless `no_wait_after` option is set.

When all steps combined have not finished during the specified `timeout`, this method rejects with a [TimeoutError]. Passing zero timeout disables this.

:::note
`frame.tap()` requires that the `hasTouch` option of the browser context be set to true.
:::

## frame.text_content(selector, **options)
- `selector` <[str]> A selector to search for element. If there are multiple elements satisfying the selector, the first will be used. See [working with selectors](./selectors.md#working-with-selectors) for more details.
- `timeout` <[float]> Maximum time in milliseconds, defaults to 30 seconds, pass `0` to disable timeout. The default value can be changed by using the [browser_context.set_default_timeout(timeout)](./api/class-browsercontext.md#browser_contextset_default_timeouttimeout) or [page.set_default_timeout(timeout)](./api/class-page.md#pageset_default_timeouttimeout) methods.
- returns: <[NoneType]|[str]>

Returns `element.textContent`.

## frame.title()
- returns: <[str]>

Returns the page title.

## frame.type(selector, text, **options)
- `selector` <[str]> A selector to search for element. If there are multiple elements satisfying the selector, the first will be used. See [working with selectors](./selectors.md#working-with-selectors) for more details.
- `text` <[str]> A text to type into a focused element.
- `delay` <[float]> Time to wait between key presses in milliseconds. Defaults to 0.
- `no_wait_after` <[bool]> Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to `false`.
- `timeout` <[float]> Maximum time in milliseconds, defaults to 30 seconds, pass `0` to disable timeout. The default value can be changed by using the [browser_context.set_default_timeout(timeout)](./api/class-browsercontext.md#browser_contextset_default_timeouttimeout) or [page.set_default_timeout(timeout)](./api/class-page.md#pageset_default_timeouttimeout) methods.

Sends a `keydown`, `keypress`/`input`, and `keyup` event for each character in the text. `frame.type` can be used to send fine-grained keyboard events. To fill values in form fields, use [frame.fill(selector, value, **options)](./api/class-frame.md#framefillselector-value-options).

To press a special key, like `Control` or `ArrowDown`, use [keyboard.press(key, **options)](./api/class-keyboard.md#keyboardpresskey-options).

```py
# async

await frame.type("#mytextarea", "hello") # types instantly
await frame.type("#mytextarea", "world", delay=100) # types slower, like a user
```

```py
# sync

frame.type("#mytextarea", "hello") # types instantly
frame.type("#mytextarea", "world", delay=100) # types slower, like a user
```

## frame.uncheck(selector, **options)
- `selector` <[str]> A selector to search for element. If there are multiple elements satisfying the selector, the first will be used. See [working with selectors](./selectors.md#working-with-selectors) for more details.
- `force` <[bool]> Whether to bypass the [actionability](./actionability.md) checks. Defaults to `false`.
- `no_wait_after` <[bool]> Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to `false`.
- `timeout` <[float]> Maximum time in milliseconds, defaults to 30 seconds, pass `0` to disable timeout. The default value can be changed by using the [browser_context.set_default_timeout(timeout)](./api/class-browsercontext.md#browser_contextset_default_timeouttimeout) or [page.set_default_timeout(timeout)](./api/class-page.md#pageset_default_timeouttimeout) methods.

This method checks an element matching `selector` by performing the following steps:
1. Find an element match matching `selector`. If there is none, wait until a matching element is attached to the DOM.
1. Ensure that matched element is a checkbox or a radio input. If not, this method rejects. If the element is already unchecked, this method returns immediately.
1. Wait for [actionability](./actionability.md) checks on the matched element, unless `force` option is set. If the element is detached during the checks, the whole action is retried.
1. Scroll the element into view if needed.
1. Use [page.mouse](./api/class-page.md#pagemouse) to click in the center of the element.
1. Wait for initiated navigations to either succeed or fail, unless `no_wait_after` option is set.
1. Ensure that the element is now unchecked. If not, this method rejects.

When all steps combined have not finished during the specified `timeout`, this method rejects with a [TimeoutError]. Passing zero timeout disables this.

## frame.url
- returns: <[str]>

Returns frame's url.

## frame.wait_for_function(expression, **options)
- `arg` <[EvaluationArgument]> Optional argument to pass to `page_function`
- `polling` <[float]|"raf"> If `polling` is `'raf'`, then `page_function` is constantly executed in `requestAnimationFrame` callback. If `polling` is a number, then it is treated as an interval in milliseconds at which the function would be executed. Defaults to `raf`.
- `timeout` <[float]> maximum time to wait for in milliseconds. Defaults to `30000` (30 seconds). Pass `0` to disable timeout. The default value can be changed by using the [browser_context.set_default_timeout(timeout)](./api/class-browsercontext.md#browser_contextset_default_timeouttimeout).
- `expression` <[str]> JavaScript expression to be evaluated in the browser context. If it looks like a function declaration, it is interpreted as a function. Otherwise, evaluated as an expression.
- `force_expr` <[bool]> Whether to treat given `expression` as JavaScript evaluate expression, even though it looks like an arrow function. Optional.
- returns: <[JSHandle]>

Returns when the `page_function` returns a truthy value, returns that value.

The `waitForFunction` can be used to observe viewport size change:

```py
# async

import asyncio
from playwright.async_api import async_playwright

async def run(playwright):
    webkit = playwright.webkit
    browser = await webkit.launch()
    page = await browser.new_page()
    watch_dog = asyncio.create_task(page.main_frame.wait_for_function("() => window.innerWidth < 100")
    await page.set_viewport_size({"width": 50, "height": 50})
    await watch_dog
    await browser.close()

async def main():
    async with async_playwright() as playwright:
        await run(playwright)
asyncio.run(main())
```

To pass an argument to the predicate of `frame.waitForFunction` function:

```py
# async

selector = ".foo"
await frame.wait_for_function("selector => !!document.querySelector(selector)", selector)
```

```py
# sync

selector = ".foo"
frame.wait_for_function("selector => !!document.querySelector(selector)", selector)
```

## frame.wait_for_load_state(**options)
- `state` <"load"|"domcontentloaded"|"networkidle"> Optional load state to wait for, defaults to `load`. If the state has been already reached while loading current document, the method resolves immediately. Can be one of:
  * `'load'` - wait for the `load` event to be fired.
  * `'domcontentloaded'` - wait for the `DOMContentLoaded` event to be fired.
  * `'networkidle'` - wait until there are no network connections for at least `500` ms.
- `timeout` <[float]> Maximum operation time in milliseconds, defaults to 30 seconds, pass `0` to disable timeout. The default value can be changed by using the [browser_context.set_default_navigation_timeout(timeout)](./api/class-browsercontext.md#browser_contextset_default_navigation_timeouttimeout), [browser_context.set_default_timeout(timeout)](./api/class-browsercontext.md#browser_contextset_default_timeouttimeout), [page.set_default_navigation_timeout(timeout)](./api/class-page.md#pageset_default_navigation_timeouttimeout) or [page.set_default_timeout(timeout)](./api/class-page.md#pageset_default_timeouttimeout) methods.

Waits for the required load state to be reached.

This returns when the frame reaches a required load state, `load` by default. The navigation must have been committed when this method is called. If current document has already reached the required state, resolves immediately.

```py
# async

await frame.click("button") # click triggers navigation.
await frame.wait_for_load_state() # the promise resolves after "load" event.
```

```py
# sync

frame.click("button") # click triggers navigation.
frame.wait_for_load_state() # the promise resolves after "load" event.
```

## frame.wait_for_navigation(**options)
- `timeout` <[float]> Maximum operation time in milliseconds, defaults to 30 seconds, pass `0` to disable timeout. The default value can be changed by using the [browser_context.set_default_navigation_timeout(timeout)](./api/class-browsercontext.md#browser_contextset_default_navigation_timeouttimeout), [browser_context.set_default_timeout(timeout)](./api/class-browsercontext.md#browser_contextset_default_timeouttimeout), [page.set_default_navigation_timeout(timeout)](./api/class-page.md#pageset_default_navigation_timeouttimeout) or [page.set_default_timeout(timeout)](./api/class-page.md#pageset_default_timeouttimeout) methods.
- `url` <[str]|[Pattern]|[Callable]\[[URL]\]:[bool]> URL string, URL regex pattern or predicate receiving [URL] to match while waiting for the navigation.
- `wait_until` <"load"|"domcontentloaded"|"networkidle"> When to consider operation succeeded, defaults to `load`. Events can be either:
  * `'domcontentloaded'` - consider operation to be finished when the `DOMContentLoaded` event is fired.
  * `'load'` - consider operation to be finished when the `load` event is fired.
  * `'networkidle'` - consider operation to be finished when there are no network connections for at least `500` ms.
- returns: <[NoneType]|[Response]>

Returns the main resource response. In case of multiple redirects, the navigation will resolve with the response of the last redirect. In case of navigation to a different anchor or navigation due to History API usage, the navigation will resolve with `null`.

This method waits for the frame to navigate to a new URL. It is useful for when you run code which will indirectly cause the frame to navigate. Consider this example:

```py
# async

async with frame.expect_navigation():
    await frame.click("a.delayed-navigation") # clicking the link will indirectly cause a navigation
# Resolves after navigation has finished
```

```py
# sync

with frame.expect_navigation():
    frame.click("a.delayed-navigation") # clicking the link will indirectly cause a navigation
# Resolves after navigation has finished
```

:::note
Usage of the [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API) to change the URL is considered a navigation.
:::

## frame.wait_for_selector(selector, **options)
- `selector` <[str]> A selector to query for. See [working with selectors](./selectors.md#working-with-selectors) for more details.
- `state` <"attached"|"detached"|"visible"|"hidden"> Defaults to `'visible'`. Can be either:
  * `'attached'` - wait for element to be present in DOM.
  * `'detached'` - wait for element to not be present in DOM.
  * `'visible'` - wait for element to have non-empty bounding box and no `visibility:hidden`. Note that element without any content or with `display:none` has an empty bounding box and is not considered visible.
  * `'hidden'` - wait for element to be either detached from DOM, or have an empty bounding box or `visibility:hidden`. This is opposite to the `'visible'` option.
- `timeout` <[float]> Maximum time in milliseconds, defaults to 30 seconds, pass `0` to disable timeout. The default value can be changed by using the [browser_context.set_default_timeout(timeout)](./api/class-browsercontext.md#browser_contextset_default_timeouttimeout) or [page.set_default_timeout(timeout)](./api/class-page.md#pageset_default_timeouttimeout) methods.
- returns: <[NoneType]|[ElementHandle]>

Returns when element specified by selector satisfies `state` option. Returns `null` if waiting for `hidden` or `detached`.

Wait for the `selector` to satisfy `state` option (either appear/disappear from dom, or become visible/hidden). If at the moment of calling the method `selector` already satisfies the condition, the method will return immediately. If the selector doesn't satisfy the condition for the `timeout` milliseconds, the function will throw.

This method works across navigations:

```py
# async

import asyncio
from playwright.async_api import async_playwright

async def run(playwright):
    chromium = playwright.chromium
    browser = await chromium.launch()
    page = await browser.new_page()
    for current_url in ["https://google.com", "https://bbc.com"]:
        await page.goto(current_url, wait_until="domcontentloaded")
        element = await page.main_frame.wait_for_selector("img")
        print("Loaded image: " + str(await element.get_attribute("src")))
    await browser.close()

async def main():
    async with async_playwright() as playwright:
        await run(playwright)
asyncio.run(main())
```

```py
# sync

from playwright.sync_api import sync_playwright

def run(playwright):
    chromium = playwright.chromium
    browser = chromium.launch()
    page = browser.new_page()
    for current_url in ["https://google.com", "https://bbc.com"]:
        page.goto(current_url, wait_until="domcontentloaded")
        element = page.main_frame.wait_for_selector("img")
        print("Loaded image: " + str(element.get_attribute("src")))
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
```

## frame.wait_for_timeout(timeout)
- `timeout` <[float]> A timeout to wait for

Waits for the given `timeout` in milliseconds.

Note that `frame.waitForTimeout()` should only be used for debugging. Tests using the timer in production are going to be flaky. Use signals such as network events, selectors becoming visible and others instead.

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