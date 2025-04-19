---
sidebar_position: 1
---

# Build

This guide provides detailed instructions on how to build the QCefView project from source.

## Prerequisites

Before you begin, ensure you have the following software installed and configured:

### 1. CMake

QCefView uses [CMake](https://cmake.org/) to manage the build process.  CMake is a cross-platform, open-source build system generator.

*   **Installation:** Download and install CMake from the [official CMake website](https://cmake.org/download/). The minimum supported version is 3.19.1, but we recommend using the latest version for optimal compatibility and features.

### 2. Qt Framework

QCefView is built upon the Qt framework, offering support for both Qt 5.x and 6.x.

*   **Installation:** Download and install the Qt framework from the [Qt website](https://www.qt.io/download).
*   **Environment Variable:** After installation, set the `QTDIR` environment variable to point to your Qt installation directory. This allows CMake to locate the necessary Qt files.

    **Examples:**

    *   **Windows:**

        ```bat
        set QTDIR=C:\Qt\6.2.2\msvc2019_64
        ```

    *   **macOS:**

        ```bash
        export QTDIR=/usr/local/Cellar/qt5/5.4.1/clang_64
        ```

    *   **Linux:**

        ```bash
        export QTDIR=/opt/Qt/6.2.2/gcc_64 # Example path, adjust accordingly
        ```

    **Note:** Adjust the paths in the examples above to match your actual Qt installation location.

## Build QCefView

1.  **Clone the Repository:**

    Clone the QCefView repository from GitHub, including its submodules:

    ```bash
    git clone --recursive https://github.com/CefView/QCefView.git
    cd QCefView
    ```

    The `--recursive` flag ensures that the necessary `CefViewCore` submodule is also initialized and cloned. If you forgot to use `--recursive`, you can initialize the submodule manually:

    ```bash
    git submodule init
    git submodule update
    ```

2.  **Generate Build Files:**

    Use the appropriate script for your operating system to generate the build files.

    *   **Windows (Visual Studio):**

        ```bash
        generate-win-x86_64.bat
        ```

    *   **macOS (Xcode):**

        ```bash
        ./generate-mac-x86_64.sh
        ```

    *   **Linux (Unix Makefiles):**

        ```bash
        ./generate-linux-x86_64.sh
        ```

3.  **Build the Project:**

    Use CMake to build the project.

    *   **Windows:**

        ```bash
        cmake --build .build/windows.x86_64 --config Release # Or Debug
        ```

    *   **macOS:**

        ```bash
        cmake --build .build/macos.x86_64 --config Release # Or Debug
        ```

    *   **Linux:**

        ```bash
        cmake --build .build/linux.x86_64
        ```

4.  **Locate the Project File:**

    The generated project files will be located in the `.build` directory, within a subdirectory specific to your operating system and architecture (e.g., `.build/windows.x86_64` or `.build/macos.x86_64`).

    *   **Windows:** You can open the generated Visual Studio solution file (`.sln`) and build the project from within Visual Studio.
    *   **macOS:** You can open the generated Xcode project file (`.xcodeproj`) and build the project from within Xcode.
    *   **Linux:** Qt Creator is the recommended IDE for Linux development. You can import the CMake project into Qt Creator.

## Additional Notes

*   **Build Configurations:**  The CMake build command includes a `--config` option.  You can specify `Release` for an optimized build or `Debug` for a build with debugging symbols.
*   **Qt Creator (Linux):**  When using Qt Creator on Linux, select "Import Existing Project" and choose the top-level `CMakeLists.txt` file.

By following these instructions, you should be able to successfully build the QCefView project on your platform. If you encounter any issues, please consult the project's documentation or community forums for assistance.