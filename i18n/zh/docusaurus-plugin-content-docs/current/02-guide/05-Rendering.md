---
sidebar_position: 5
---

# 渲染

CEF 支持原生子窗口模式和 OSR 模式，QCefView 中实现了这两种模式。

## NCW 模式

当使用 NCW 模式时，CEF 负责创建和管理浏览器的单独原生窗口。然后，QCefView 获取此窗口的句柄并将其嵌入到QWidget中。这允许将浏览器内容显示为 Qt 应用程序用户界面的一部分。

-   **优点：**
    -   与 OSR 模式相比，实现起来更简单。
    -   对于基本 Web 内容渲染，通常具有更好的性能，因为渲染由 CEF 直接在其自己的窗口中处理。
    -   利用原生窗口系统进行事件处理和输入管理。

-   **缺点：**
    -   在自定义渲染过程方面灵活性较差。
    -   在需要与其他图形 API 或自定义渲染管道进行高级集成的场景中，可能存在潜在的限制。
    -   当尝试在浏览器窗口上叠加 QWidget 时，由于原生窗口的 Z 顺序，可能会出现问题。

-   **与 Qt 的集成：** QCefView 使用特定于平台的 API 从 CEF 获取原生窗口句柄，并将其嵌入到QWidget中。这允许将浏览器内容无缝集成到 Qt 应用程序的布局和用户界面中。

## OSR 模式

当使用 OSR 模式时，CEF 将网页内容渲染到缓冲区中（在 CPU 内存中或作为 GPU 内存中的共享纹理）。然后，QCefView 获取此缓冲区并在QWidget中显示它。这使您可以更好地控制 Web 内容的渲染方式以及如何将其集成到您的应用程序中。

-   **优点：**
    -   在自定义渲染过程方面具有更大的灵活性。
    -   支持高级功能，例如自定义渲染、合成以及与其他图形 API 的集成。
    -   允许 Web 内容与QWidget更无缝地集成，因为您可以直接操作渲染输出。

-   **缺点：**
    -   与 NCW 模式相比，实现起来更复杂。
    -   可能更占用 CPU 资源，尤其是在未启用硬件加速或硬件加速未正确运行的情况下。
    -   需要仔细管理内存和渲染资源。

-   **与 Qt 的集成：** QCefView 使用 Qt 的渲染 API（例如 QPainter 或 QOpenGLWidget）来显示 CEF 提供的缓冲区。这使您可以将 Web 内容无缝集成到 Qt 应用程序的用户界面中，并应用自定义转换、效果和叠加。

## 在 QCefView 中设置 OSR 模式

要在 QCefView 中启用 OSR 模式，您需要使用 `QCefConfig` 进行配置

```cpp
QCefConfig config;
config.setWindowlessRenderingEnabled(true); // 启用 OSR 模式
```

通过设置 `config.setWindowlessRenderingEnabled(true)`，您可以指示 QCefView 使用 OSR（离屏渲染）模式。必须在创建 QCefView 实例之前设置此配置。

:::note
**QCefConfig 在应用程序范围内工作，因此您只能选择专门为所有 QCefView 实例使用 NCW 或 OSR。** 这意味着，一旦您将 `QCefConfig::setWindowlessRenderingEnabled` 设置为 `true` 或 `false`，您的应用程序中的所有 QCefView 实例都将使用相同的渲染模式。
:::

## 硬件加速

启用 OSR 模式后，您可以选择使用硬件加速。

启用硬件加速后，CEF 会将浏览器内容渲染到 GPU 中的共享纹理。然后，QCefView 使用设备相关的技术（DirectX、Metal 或 OpenGL）将浏览器内容渲染给用户。这通常会带来显着更好的性能，尤其是在处理复杂的 Web 内容和动画时。

禁用硬件加速后，CEF 会向 QCefView 提供一个包含图像颜色数据的 CPU 内存缓冲区。然后，QCefView 使用 Qt 的软件光栅化器渲染此缓冲区。在硬件加速不可用或导致问题的环境中，此模式可能很有用。

要控制硬件加速，您可以使用 `QCefSetting` 中的以下设置：

```cpp
  QCefSetting setting;
  setting.setBackgroundColor(Qt::gray);
  setting.setWindowlessFrameRate(1000);

  // 启用硬件加速
  setting.setHardwareAcceleration(true);
```

默认情况下，如果可用，CEF 会尝试使用硬件加速。但是，显式设置 `setHardwareAcceleration` 可以提供更多控制。

:::tip
通常建议启用硬件加速以获得最佳性能。但是，如果您遇到渲染问题或兼容性问题，禁用它可以提供一个备用选项。并且此功能仅在 OSR 模式下有效。
:::
