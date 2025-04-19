---
sidebar_position: 1
---

# 构建

本指南提供了如何从源代码构建 QCefView 项目的详细说明。

## 前提条件

在开始之前，请确保已安装并配置了以下软件：

### 1. CMake

QCefView 使用 [CMake](https://cmake.org/) 来管理构建过程。CMake 是一个跨平台、开源的构建系统生成器。

*   **安装：** 从 [CMake 官方网站](https://cmake.org/download/) 下载并安装 CMake。最低支持版本为 3.19.1，但我们建议使用最新版本以获得最佳兼容性和功能。

### 2. Qt 框架

QCefView 基于 Qt 框架构建，支持 Qt 5.x 和 6.x。

*   **安装：** 从 [Qt 网站](https://www.qt.io/download) 下载并安装 Qt 框架。
*   **环境变量：** 安装后，设置 `QTDIR` 环境变量以指向您的 Qt 安装目录。这允许 CMake 找到必要的 Qt 文件。

    **示例：**

    *   **Windows：**

        ```bat
        set QTDIR=C:\Qt\6.2.2\msvc2019_64
        ```

    *   **macOS：**

        ```bash
        export QTDIR=/usr/local/Cellar/qt5/5.4.1/clang_64
        ```

    *   **Linux：**

        ```bash
        export QTDIR=/opt/Qt/6.2.2/gcc_64 # 示例路径，请根据实际情况进行调整
        ```

    **注意：** 调整上面示例中的路径以匹配您的实际 Qt 安装位置。

## 构建 QCefView

1.  **克隆存储库：**

    从 GitHub 克隆 QCefView 存储库，包括其子模块：

    ```bash
    git clone --recursive https://github.com/CefView/QCefView.git
    cd QCefView
    ```

    `--recursive` 标志确保必要的 `CefViewCore` 子模块也被初始化和克隆。如果您忘记使用 `--recursive`，您可以手动初始化子模块：

    ```bash
    git submodule init
    git submodule update
    ```

2.  **生成构建文件：**

    使用适合您操作系统的脚本来生成构建文件。

    *   **Windows (Visual Studio)：**

        ```bash
        generate-win-x86_64.bat
        ```

    *   **macOS (Xcode)：**

        ```bash
        ./generate-mac-x86_64.sh
        ```

    *   **Linux (Unix Makefiles)：**

        ```bash
        ./generate-linux-x86_64.sh
        ```

3.  **构建项目：**

    使用 CMake 构建项目。

    *   **Windows：**

        ```bash
        cmake --build .build/windows.x86_64 --config Release # 或 Debug
        ```

    *   **macOS：**

        ```bash
        cmake --build .build/macos.x86_64 --config Release # 或 Debug
        ```

    *   **Linux：**

        ```bash
        cmake --build .build/linux.x86_64
        ```

4.  **找到项目文件：**

    生成的项目文件将位于 `.build` 目录中，位于特定于您的操作系统和架构的子目录中（例如，`.build/windows.x86_64` 或 `.build/macos.x86_64`）。

    *   **Windows：** 您可以打开生成的 Visual Studio 解决方案文件 (`.sln`) 并在 Visual Studio 中构建项目。
    *   **macOS：** 您可以打开生成的 Xcode 项目文件 (`.xcodeproj`) 并在 Xcode 中构建项目。
    *   **Linux：** Qt Creator 是推荐的 Linux 开发 IDE。您可以将 CMake 项目导入到 Qt Creator 中。

## 附加说明

*   **构建配置：** CMake 构建命令包含一个 `--config` 选项。您可以指定 `Release` 以进行优化构建，或指定 `Debug` 以进行包含调试符号的构建。
*   **Qt Creator (Linux)：** 在 Linux 上使用 Qt Creator 时，选择“导入现有项目”并选择顶层 `CMakeLists.txt` 文件。

通过遵循这些说明，您应该能够在您的平台上成功构建 QCefView 项目。如果您遇到任何问题，请查阅项目的文档或社区论坛以获得帮助。
