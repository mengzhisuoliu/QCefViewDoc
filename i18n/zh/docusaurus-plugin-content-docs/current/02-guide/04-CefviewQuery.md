---
sidebar_position: 4
---

# CefViewQuery

在本节中，我们将探讨如何使用 `CefViewQuery` 在您的 CefView 应用程序中的 JavaScript 和 C++ 代码之间进行异步通信。此方法允许您从网页向本机应用程序发送请求并接收响应，而不会阻塞用户界面。

**⚠[已弃用]**<br></br>~~[`window.CefViewQuery`](/docs/reference/WebAPIs#web_apis_CefViewQuery)`(query)` 是另一种从 Javascript 与 C++ 代码通信的方法，但这种方式的通信是`ASYNCHRONOUS` 操作。有关更多详细信息，请参阅 API 参考。~~

[`window.cefViewQuery`](/docs/reference/WebAPIs#web_apis_cefViewQuery)`(query)` 是另一种从 Javascript 与 C++ 代码通信的方法，但这种方式的通信是`ASYNCHRONOUS` 操作。有关更多详细信息，请参阅 API 参考。

:::info
**`window.cefViewQuery` 异步运行。这意味着当您发送查询时，您的 JavaScript 代码不会等待响应。相反，您提供回调函数（`onSuccess` 和 `onFailure`），这些函数将在响应到达时执行。**
:::

当从 Javascript 调用此方法时，将发出以下 Qt 信号：

`public void `[`cefQueryRequest`](/docs/reference/QCefView#class_q_cef_view_1acbf62eea36993163c4b70b4df96738d8)`(int browserId,int frameId,const `[`QCefQuery`](/docs/reference/QCefQuery#class_q_cef_query)` & query)`

在本节中，让我们用一些简单的代码来演示 CefViewQuery 的用法。

## 添加 Javascript 代码

按如下方式添加 Javascript 代码：

```javascript
    function onCallBridgeQueryClicked() {
      var query = {
        request: document.getElementById("message").value,
        onSuccess: function (response) {
          alert("成功: " + response);
        },
        onFailure: function (error_code, error_message) {
          alert("失败: " + error_message + " (错误代码: " + error_code + ")");
        },
      };
      // ⚠[已弃用]window.CefViewQuery(query);
      window.cefViewQuery(query);
    }
```

按如下方式添加 HTML 代码：

```html
    <label> QCefQuery 的测试用例 </label>
    <br />
    <textarea id="message" style="width: 320px; height: 120px">
      此消息将由本机代码处理。
    </textarea>
    <br />
    <input type="button" value="查询" onclick="onCallBridgeQueryClicked()" />
```

## 添加 C++ 代码

按如下方式添加 C++ 代码：

```cpp
MainWindow::MainWindow(QWidget* parent)
  : QMainWindow(parent)
{
  // ...

  // 将 cefQueryRequest 连接到槽
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
      QString title("QCef 查询请求");
      QString text = QString("当前线程: QT_UI\r\n"
                             "查询: %1")
                       .arg(query.request());

      QMessageBox::information(this->window(), title, text);

      QString response = query.request().toUpper();
      query.setResponseResult(true, response);
      cefViewWidget->responseQCefQuery(query);
    },
    Qt::QueuedConnection);
}
```

## 运行应用程序

现在让我们运行应用程序。

![First Project](/img/guide/cefview-query-01.png)

单击 Web 区域中的按钮以调用 C++ 代码

![First Project](/img/guide/cefview-query-02.png)
