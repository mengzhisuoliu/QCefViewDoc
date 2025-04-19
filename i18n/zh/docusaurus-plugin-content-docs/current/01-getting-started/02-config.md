---
sidebar_position: 2
---

# 配置

QCefView 提供了几个 CMake 选项来自定义您的构建。这些选项允许您根据您的特定需求和环境定制构建过程。

## CMake 配置选项

以下是可用 CMake 配置选项的详细概述：

### `QT_SDK_DIR`

*   **描述：** 指定包含 Qt SDK 的目录。
*   **值：** Qt 安装目录的绝对路径（例如，Windows 上的 `C:/Qt/6.2.4/msvc2019_64`，Linux 上的 `/opt/Qt/6.2.4/gcc_64`）。
*   **默认值：** CMake 尝试自动检测 Qt SDK。
*   **用法：** 如果 CMake 无法找到您的 Qt 安装，或者您想使用特定的 Qt 版本，请设置此选项。

### `CEF_SDK_VERSION`

*   **描述：** 指定要使用的 Chromium Embedded Framework (CEF) SDK 的版本。
*   **值：** 表示 CEF SDK 版本的字符串（例如，`"112.3.0+gb09c4ca+chromium-112.0.5615.165"`）。
*   **默认值：** 根 `CMakeLists.txt` 文件中定义的版本。
*   **用法：** 如果您需要使用与默认版本不同的特定 CEF SDK 版本，请设置此选项。
> **⚠ 从 [https://cef-builds.spotifycdn.com/index.html](https://cef-builds.spotifycdn.com/index.html) 查找预编译的 CEF SDK（由 Spotify 提供支持）**

### `CUSTOM_CEF_SDK_DIR`

*   **描述：** 指定包含自定义构建的 CEF SDK 的目录。
*   **值：** 您的自定义 CEF SDK 目录的绝对路径。
*   **默认值：** 空。如果未设置，构建过程将尝试下载基于 `CEF_SDK_VERSION` 的预构建 CEF SDK。
*   **用法：** 如果您已经构建了自己的 CEF SDK 并且想要使用它而不是预构建版本，请设置此选项。这对于需要自定义 CEF 的高级用户很有用。

### `BUILD_DEMO`

*   **描述：** 启用或禁用 QCefView 演示应用程序的构建。
*   **值：** `ON`（启用）或 `OFF`（禁用）。
*   **默认值：** `ON`
*   **用法：** 如果您只需要 QCefView 库而不需要演示应用程序，请禁用此选项。

### `BUILD_STATIC`

*   **描述：** 配置 QCefView 以构建为静态库。
*   **值：** `ON`（启用）或 `OFF`（禁用）。
*   **默认值：** `OFF`
*   **用法：** 如果您想将 QCefView 静态链接到您的应用程序中，请启用此选项。请注意，这可能需要额外的配置，具体取决于您的项目设置。

### `STATIC_CRT`

*   **描述：** 静态链接 C 运行时库。
*   **值：** `ON`（启用）或 `OFF`（禁用）。
*   **默认值：** `OFF`
*   **用法：** 启用此选项以避免对 Visual C++ 运行时 DLL 的依赖。这主要与 Windows 相关。使用此选项会增加可执行文件的大小。

### `USE_SANDBOX`

*   **描述：** 启用或禁用 CEF 沙箱。
*   **值：** `ON`（启用）或 `OFF`（禁用）。
*   **默认值：** `ON`
*   **用法：** 禁用沙箱会提高性能，但会降低安全性。只有在您完全了解安全影响的情况下才禁用此选项。

### `USE_WIN_DCOMPOSITION`

*   **描述：** 启用或禁用使用 Windows DirectComposition 进行渲染。
*   **值：** `ON`（启用）或 `OFF`（禁用）。
*   **默认值：** 在 Windows 上为 `ON`，在其他平台上为 `OFF`。
*   **用法：** DirectComposition 可以提高 Windows 上的渲染性能。如果您遇到兼容性问题，请禁用此选项。

### `USE_QT_EVENT_LOOP`

*   **描述：** 启用 Qt 的事件循环集成以用于 CEF。
*   **值：** `ON`（启用）或 `OFF`（禁用）。
*   **默认值：** `ON`
*   **用法：** 此选项将 CEF 的消息循环与 Qt 的事件循环集成在一起，从而提供更好的响应性和兼容性。在极少数情况下，禁用此选项可能会解决特定的事件循环冲突。

## 设置 CMake 选项

您可以在生成构建文件时设置这些 CMake 选项。该方法取决于您的构建环境：

*   **CMake GUI：** 在生成项目文件之前，使用 CMake GUI 配置选项。
*   **命令行：** 从命令行运行 CMake 时，使用 `-D` 标志。例如：

    ```bash
    cmake -DCEF_SDK_VERSION="106.0.5249.61" -DBUILD_DEMO=OFF ..
    ```

*   **CMakePresets.json：** 如果您使用的是 CMakePresets.json，则可以在 `cacheVariables` 部分中设置选项。

通过理解和利用这些配置选项，您可以为您的特定应用程序和平台优化 QCefView 构建过程。
