---
sidebar_position: 3
---

# 互操作性

QCefView 提供了原生上下文和 Web 上下文之间的互操作能力，因此开发者可以轻松地从 C++ 代码调用 Javascript，反之亦然。这使您可以创建混合应用程序，将 Web 技术的强大功能与原生 C++ 代码的功能相结合。

互操作性的实现方法是将一个桥接对象插入到 QCefView 管理的所有帧和浏览器中显示的 Web 上下文中。该桥接对象提供了与原生代码通信的方法。有关更多详细信息，请参阅 API 参考 [WebAPIs](/docs/reference/WebAPIs)。

> **桥接对象挂载在 window 对象上，对象名称可以通过 [`QCefConfig::setBridgeObjectName`](/docs/reference/QCefConfig#class_q_cef_config_1a03687393e227bc8747bdc9ffa7400d60) 进行配置。默认名称为 `CefViewClient`**

## 从 Javascript 调用 C++

本节介绍如何从 QCefView 中运行的 Javascript 代码调用 C++ 代码。桥接对象提供了调用 C++ 槽的方法，允许您执行原生代码以响应 Web 应用程序中的事件或操作。

桥接对象提供了以下方法来从 Javascript 调用 C++ 代码：

**⚠[已弃用]**<br></br>~~[`invokeMethod`](/docs/reference/WebAPIs#web_apis_invokeMethod)`(name, ...args)`~~

[`invoke`](/docs/reference/WebAPIs#web_apis_invoke)`(name, ...args)`

当从 Javascript 调用此方法时，将发出以下 Qt 信号：

`void `[`invokeMethod`](/docs/reference/QCefView#class_q_cef_view_1aa407f7491139a2d5331566c8346a58c8)`(int browserId,int frameId,const QString & method,const QVariantList & arguments)`

:::info
**Javascript 方法 [`invoke`](/docs/reference/WebAPIs#web_apis_invoke)`(name, ...args)` 是 `ASYNCHRONOUS` 操作，这意味着从 Javascript 的调用会立即返回，而无需考虑 C++ Qt 槽的执行**
:::

:::info
**由 Javascript 调用的 C++ 代码将在 QT_UI 线程中执行。**
:::

现在让我们编写一小段代码来演示从 Javascript 到 C++ 的调用。

### 添加 Javascript 代码

首先，将以下 Javascript 代码添加到 \<script\> 块中：

```javascript
    function onInvokeMethodClicked(name, ...arg) {
      // 调用 C++ 代码
      window.CallBridge.invokeMethod(name, ...arg);
    }
```

并添加以下 html 代码：

```html
    <label> InvokeMethod 的测试用例 </label>
    <br />
    <input
      type="button"
      value="调用方法"
      onclick="onInvokeMethodClicked('TestMethod', 1, false, 'arg3')"
    />
```

### 添加 C++ 代码

然后在 C++ 中添加代码来处理调用：

```cpp
MainWindow::MainWindow(QWidget* parent)
  : QMainWindow(parent)
{
  // ...

  // 将 invokeMethod 连接到槽
  connect(cefViewWidget,
          SIGNAL(invokeMethod(int, int, const QString&, const QVariantList&)),
          this,
          SLOT(onInvokeMethod(int, int, const QString&, const QVariantList&)));
  // ...
}

void
MainWindow::onInvokeMethod(int browserId, int frameId, const QString& method, const QVariantList& arguments)
{
  // 提取参数并将调用分派到相应的处理程序
  if (0 == method.compare("TestMethod")) {
    QMetaObject::invokeMethod(
      this,
      [=]() {
        QString title("QCef InvokeMethod 通知");
        QString text = QString("当前线程: QT_UI\r\n"
                               "方法: %1\r\n"
                               "参数:\r\n")
                         .arg(method);

        for (int i = 0; i < arguments.size(); i++) {
          // clang-format off
          text.append(QString("%1 类型:%2, 值:%3\r\n")
              .arg(i)
              .arg(arguments[i].typeName())
              .arg(arguments[i].toString()));
          // clang-format on
        }

        QMessageBox::information(this->window(), title, text);
      },
      Qt::QueuedConnection);
  } else {
  }
}
```

### 运行应用程序

现在让我们运行应用程序。

![First Project](/img/guide/invoke-method-01.png)

单击 Web 区域中的按钮以调用 C++ 代码

![First Project](/img/guide/invoke-method-02.png)

## 从 C++ 调用 Javascript

本节介绍如何从 C++ 代码调用 Javascript 函数。QCefView 提供了在 Javascript 上下文中触发事件的机制，允许您从原生应用程序更新 UI 或执行 Javascript 逻辑。

桥接对象提供了以下方法来支持从 C++ 代码到 Javascript 的调用：

- [`addEventListener`](/docs/reference/WebAPIs#web_apis_addEventListener)`(name, listener)`

- [`removeEventListener`](/docs/reference/WebAPIs#web_apis_removeEventListener)`(name, listener)`

开发人员可以在 Javascript 上下文中添加任意数量的事件侦听器，并使用以下方法从 C++ 代码触发事件：

- `public bool `[`triggerEvent`](/docs/reference/QCefView#class_q_cef_view_1ac47c23ffcd94bdffe2b6a81eaae077a2)`(const `[`QCefEvent`](/docs/reference/QCefEvent#class_q_cef_event)` & event)`

- `public bool `[`triggerEvent`](/docs/reference/QCefView#class_q_cef_view_1aaccdc475dc89f9ca4885c94e8f50421d)`(const `[`QCefEvent`](/docs/reference/QCefEvent#class_q_cef_event)` & event,int frameId)`

- `public bool `[`broadcastEvent`](/docs/reference/QCefView#class_q_cef_view_1ad5455e3a8cb0ffa1f9d7cb98307a6bb4)`(const `[`QCefEvent`](/docs/reference/QCefEvent#class_q_cef_event)` & event)`

:::info
**注意：以上所有 3 种方法都是 `ASYNCHRONOUS` 操作**
:::

现在让我们编写代码：

### 添加 Javascript 代码

将代码添加到 javascript：

```javascript
    function onLoad() {
      // 添加一个事件侦听器来处理名为“colorChange”的事件
      Window.CallBridge.addEventListener(
        // 事件名称
        "colorChange"
        // 事件处理程序
        function (color) {
          // 更改背景颜色
          document.getElementById("main").style.backgroundColor = color;
        }
      );
    }
```

将代码添加到 html：

```html
<body onload="onLoad()" id="main" class="noselect">
```

### 添加 C++ 代码

添加代码以触发 Javascript 中处理的事件，这里我们需要添加一个按钮来执行触发，我们只显示按钮单击操作处理程序槽。

```cpp
void
MainWindow::onBtnChangeColorClicked()
{
  if (cefViewWidget) {
    // 创建一个随机颜色
    QColor color(QRandomGenerator::global()->generate());

    // 创建 cef 事件并设置参数
    QCefEvent event("colorChange");
    event.arguments().append(QVariant::fromValue(color.name(QColor::HexArgb)));

    // 将事件广播到此 QCefView 创建的所有浏览器中的所有帧
    cefViewWidget->broadcastEvent(event);
  }
}
```

### 运行应用程序

现在让我们运行应用程序。

![First Project](/img/guide/add-event-listener-01.png)

单击原生区域中的按钮以调用 Javascript 代码

![First Project](/img/guide/add-event-listener-02.png)
