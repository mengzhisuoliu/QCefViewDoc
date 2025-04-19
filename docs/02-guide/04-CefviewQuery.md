---
sidebar_position: 4
---

# CefViewQuery

In this section, we'll explore how to use `CefViewQuery` to communicate asynchronously between JavaScript and C++ code in your CefView application. This method allows you to send requests from your web page to the native application and receive responses without blocking the user interface.

**⚠[DEPRECATED]**<br></br>~~[`window.CefViewQuery`](/docs/reference/WebAPIs#web_apis_CefViewQuery)`(query)` is yet another approach to communicate from Javascript to C++ code, but in this way the communication is `ASYNCHRONOUS` operation. For more details please refer to the API reference.~~

[`window.cefViewQuery`](/docs/reference/WebAPIs#web_apis_cefViewQuery)`(query)` is yet another approach to communicate from Javascript to C++ code, but in this way the communication is `ASYNCHRONOUS` operation. For more details please refer to the API reference.

:::info
**`window.cefViewQuery` operates asynchronously. This means that when you send a query, your JavaScript code doesn't wait for the response. Instead, you provide callback functions (`onSuccess` and `onFailure`) that will be executed when the response arrives.**
:::

When this method gets called from Javascript, the following Qt signal will be emitted:

`public void `[`cefQueryRequest`](/docs/reference/QCefView#class_q_cef_view_1acbf62eea36993163c4b70b4df96738d8)`(int browserId,int frameId,const `[`QCefQuery`](/docs/reference/QCefQuery#class_q_cef_query)` & query)`

In this section let's demonstrate the usage of CefViewQuery with some simple code.

## Add Javascript Code

Add Javascript code as follows:

```javascript
    function onCallBridgeQueryClicked() {
      var query = {
        request: document.getElementById("message").value,
        onSuccess: function (response) {
          alert("Success: " + response);
        },
        onFailure: function (error_code, error_message) {
          alert("Failure: " + error_message + " (Error Code: " + error_code + ")");
        },
      };
      // ⚠[DEPRECATED]window.CefViewQuery(query);
      window.cefViewQuery(query);
    }
```

Add HTML code as follows:

```html
    <label> Test Case for QCefQuery </label>
    <br />
    <textarea id="message" style="width: 320px; height: 120px">
      this message will be processed by native code.
    </textarea>
    <br />
    <input type="button" value="Query" onclick="onCallBridgeQueryClicked()" />
```

## Add C++ Code

Add C++ code as follows:

```cpp
MainWindow::MainWindow(QWidget* parent)
  : QMainWindow(parent)
{
  // ...

  // connect the cefQueryRequest to the slot
  connect(cefViewWidget,
          SIGNAL(cefQueryRequest(int, int, const QCefQuery&)),
          this,
          SLOT(onQCefQueryRequest(int, int, const QCefQuery&)));

  // ...
}

void
MainWindow::onQCefQueryRequest(int browserId, int frameId, const QCefQuery& query)
{
  QMetaObject::invokeMethod(
    this,
    [=]() {
      QString title("QCef Query Request");
      QString text = QString("Current Thread: QT_UI\r\n"
                             "Query: %1")
                       .arg(query.request());

      QMessageBox::information(this->window(), title, text);

      QString response = query.request().toUpper();
      query.setResponseResult(true, response);
      cefViewWidget->responseQCefQuery(query);
    },
    Qt::QueuedConnection);
}
```

## Run the Application

Now let's run the application.

![First Project](/img/guide/cefview-query-01.png)

Click the button in web area to invoke the C++ code

![First Project](/img/guide/cefview-query-02.png)