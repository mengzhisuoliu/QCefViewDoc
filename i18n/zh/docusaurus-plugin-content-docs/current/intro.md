---
sidebar_position: 0
---

# 介绍

## 什么是 QCefView？

QCefView 是一个强大的 Qt Widget，可以无缝集成 [Chromium Embedded Framework](https://bitbucket.org/chromiumembedded)。它使您能够在熟悉的 Qt 生态系统中构建利用 CEF 强大功能的应用程序。

使用 QCefView，您可以：

-   使用熟悉的 Qt 窗体、信号和槽开发应用程序。
-   实现 Web (JavaScript) 和 Native (C++) 组件之间的直接互操作性。

## 为什么选择 QCefView 而不是 Electron？

QCefView 和 Electron 服务于不同的目的，并迎合不同的开发风格。这是一个比较：

| 功能           | QCefView                                                                 | Electron                                                                   |
| -------------- | ------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| 范围           | Qt UI 组件                                                              | 综合应用程序框架                                                           |
| 目标受众       | Native (C++) 开发人员                                                    | 前端开发人员                                                               |
| 主要语言       | C++                                                                      | JavaScript                                                                 |
| 互操作性       | 直接、简单的 Web/Native 通信                                            | 需要插件才能进行 Native 集成                                                 |
| 使用场景       | 在 Native 应用程序中嵌入 Web UI                                         | 主要使用 Web 技术构建跨平台桌面应用程序                                    |

本质上：

-   **QCefView** 是 Qt 框架中的一个组件，非常适合使用基于 Web 的 UI 元素增强 Native 应用程序。
-   **Electron** 是一个完整的框架，用于使用 Web 技术构建跨平台桌面应用程序。

## QCefView 的理想用例

在您希望将 Web 前端技术的强大功能用于 UI 与 Native 语言的性能和控制相结合以实现核心功能的场景中，QCefView 表现出色。

考虑将 QCefView 用于以下应用程序：

-   **多媒体播放器：** 利用 Web 技术实现丰富、动态的用户界面。
-   **游戏平台/启动器：** 为 Native 游戏引擎创建具有视觉吸引力和交互性的前端。
-   **实用程序应用程序：** 构建具有复杂 UI 的功能丰富的工具，这些工具受益于基于 Web 的渲染。
-   **自定义嵌入式浏览器（具有限制）：** 嵌入 Web 内容，并对渲染过程进行高度控制。

在这些上下文驱动的应用程序中，Web 前端技术非常适合显示列表、表格和具有引人入胜效果的复杂页面。QCefView 充当 WebApp 容器，允许您托管 Web UI，同时将您的核心业务逻辑保留为 Native 组件。QCefView 提供的互操作性无缝地弥合了 Web 和 Native 世界之间的差距。

**重要说明：**

如果您的主要目标是开发一个成熟的 Web 浏览器应用程序，则 QCefView 可能不是最佳选择。QCefView 设计为 UI 组件，并有意禁用某些特定于浏览器的功能。对于构建完整的浏览器，请考虑直接使用原始 CEF 库。

## Qt 的替代方案

如果您不想使用 Qt，您仍然可以通过将其与其他框架集成来利用 CEF。例如，您可以将 CEF 与 Cocoa 框架集成，如 [CocoaCefView](https://github.com/CefView/CocoaCefView) 项目中所示。这使您可以创建为满足您的特定需求量身定制的自定义 CEF 视图。
