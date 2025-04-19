---
sidebar_position: 2
---

# Config

QCefView offers several CMake options to customize your build. These options allow you to tailor the build process to your specific needs and environment.

## CMake Configuration Options

Here's a detailed overview of the available CMake configuration options:

### `QT_SDK_DIR`

*   **Description:** Specifies the directory containing the Qt SDK.
*   **Values:**  The absolute path to your Qt installation directory (e.g., `C:/Qt/6.2.4/msvc2019_64` on Windows, `/opt/Qt/6.2.4/gcc_64` on Linux).
*   **Default:** CMake attempts to automatically detect the Qt SDK.
*   **Usage:**  Set this option if CMake fails to locate your Qt installation, or if you want to use a specific Qt version.

### `CEF_SDK_VERSION`

*   **Description:** Specifies the version of the Chromium Embedded Framework (CEF) SDK to use.
*   **Values:**  A string representing the CEF SDK version (e.g., `"112.3.0+gb09c4ca+chromium-112.0.5615.165"`).
*   **Default:**  The version defined in the root `CMakeLists.txt` file.
*   **Usage:**  Set this option if you need to use a specific CEF SDK version that differs from the default.
> **⚠ Find the pre-compiled CEF SDK from [https://cef-builds.spotifycdn.com/index.html](https://cef-builds.spotifycdn.com/index.html) (Powered by Spotify)**

### `CUSTOM_CEF_SDK_DIR`

*   **Description:** Specifies the directory containing a custom-built CEF SDK.
*   **Values:** The absolute path to your custom CEF SDK directory.
*   **Default:**  Empty.  If not set, the build process will attempt to download a pre-built CEF SDK based on `CEF_SDK_VERSION`.
*   **Usage:**  Set this option if you have built your own CEF SDK and want to use it instead of the pre-built version.  This is useful for advanced users who need to customize CEF.

### `BUILD_DEMO`

*   **Description:** Enables or disables the building of the QCefView demo application.
*   **Values:** `ON` (enable) or `OFF` (disable).
*   **Default:** `ON`
*   **Usage:** Disable this option if you only need the QCefView library and not the demo application.

### `BUILD_STATIC`

*   **Description:** Configures QCefView to be built as a static library.
*   **Values:** `ON` (enable) or `OFF` (disable).
*   **Default:** `OFF`
*   **Usage:** Enable this option if you want to link QCefView statically into your application.  Note that this might require additional configuration depending on your project setup.

### `STATIC_CRT`

*   **Description:**  Links the C runtime library statically.
*   **Values:** `ON` (enable) or `OFF` (disable).
*   **Default:** `OFF`
*   **Usage:**  Enable this option to avoid dependencies on the Visual C++ runtime DLLs.  This is primarily relevant on Windows.  Using this option can increase the size of your executable.

### `USE_SANDBOX`

*   **Description:** Enables or disables the CEF sandbox.
*   **Values:** `ON` (enable) or `OFF` (disable).
*   **Default:** `ON`
*   **Usage:** Disabling the sandbox increases performance but reduces security.  Only disable this option if you fully understand the security implications.

### `USE_WIN_DCOMPOSITION`

*   **Description:** Enables or disables the use of Windows DirectComposition for rendering.
*   **Values:** `ON` (enable) or `OFF` (disable).
*   **Default:** `ON` on Windows, `OFF` on other platforms.
*   **Usage:**  DirectComposition can improve rendering performance on Windows.  Disable this option if you encounter compatibility issues.

### `USE_QT_EVENT_LOOP`

*   **Description:**  Enables the use of Qt's event loop integration for CEF.
*   **Values:** `ON` (enable) or `OFF` (disable).
*   **Default:** `ON`
*   **Usage:**  This option integrates CEF's message loop with Qt's event loop, providing better responsiveness and compatibility.  In rare cases, disabling this option might resolve specific event loop conflicts.

## Setting CMake Options

You can set these CMake options when you generate the build files.  The method depends on your build environment:

*   **CMake GUI:**  Use the CMake GUI to configure the options before generating the project files.
*   **Command Line:**  Use the `-D` flag when running CMake from the command line.  For example:

    ```bash
    cmake -DCEF_SDK_VERSION="106.0.5249.61" -DBUILD_DEMO=OFF ..
    ```

*   **CMakePresets.json:** If you are using CMakePresets.json, you can set the options in the `cacheVariables` section.

By understanding and utilizing these configuration options, you can optimize the QCefView build process for your specific application and platform.

