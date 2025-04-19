---
sidebar_position: 2
---

# 资源加载

QCefView 提供了 4 种方法来加载 Web 资源。

### 1. 加载在线 Web 资源

此方法允许您通过指定 URL 直接从互联网加载 Web 资源。这是在 QCefView 中显示在线内容的最简单方法。

您可以将网页的完整 URL 传递给 QCefView 的构造函数。

```cpp
  // 构建每个 QCefView 的设置
  QCefSetting setting;

  // 创建 QCefView 控件并将其添加到布局容器中
  QCefView* cefView = new QCefView("https://google.com", &setting, nullptr);
```

### 2. 使用文件路径加载本地文件

此方法使您可以将本地 HTML 文件加载到 QCefView 中。它对于显示静态内容或在本地测试 Web 应用程序非常有用。

将 Web 资源文件的绝对文件路径传递给 QCefView 的构造函数。请注意，文件路径必须以 "file://" 协议开头。

```cpp
  // 构建 Web 资源的路径
  QDir dir = QCoreApplication::applicationDirPath();
  QString webResourceDir = QString("file://") + QDir::toNativeSeparators(dir.filePath("webres/index.html"));

  // 构建每个 QCefView 的设置
  QCefSetting setting;

  // 创建 QCefView 控件并将其添加到布局容器中
  QCefView* cefView = new QCefView(INDEX_URL, &setting, nullptr);
```

### 3. 添加本地文件夹映射

此方法旨在加载整个 Web 应用程序文件夹。它将本地目录映射到 URL，允许您访问该目录中的文件，就像它们托管在 Web 服务器上一样。这对于单页应用程序 (SPA) 和具有复杂目录结构的 Web 应用程序特别有用。

`public void `[`addLocalFolderResource`](/docs/reference/QCefContext#class_q_cef_context_1aecc6f7ee9d296bcf8d2ba470e0c0e454)`(const QString & path,const QString & url,int priority)`

例如，您构建 WebApp 项目并获取输出文件夹 `webres`，文件夹结构如下：

```bash
full\path\to\webres
                │   index.html
                ├───assets
                ├───docs
                ├───img
```

您可以使用以下代码添加映射项：

```cpp
 // 添加本地文件夹到 URL 映射
  QCefContext::instance()->addLocalFolderResource(
      "full\\path\\to\\webres", 
      "https://domainname"              // 这可以是您需要的任何 URL
      );

  // 构建每个 QCefView 的设置
  QCefSetting setting;

  // 创建 QCefView 控件并将其添加到布局容器中
  QCefView* cefView = new QCefView(
      "https://domainname/index.html", 
      &setting, 
      this
      );
```

添加映射项后，您可以使用 URL 根目录附加资源相对路径来访问所有资源。

### 4. 添加本地归档映射

此方法允许您从 ZIP 存档加载 Web 资源。它将 URL 映射到 ZIP 文件，使您可以像提供 Web 服务器目录一样提供存档的内容。这对于将 Web 应用程序作为单个文件分发或从压缩存档加载资源非常有用。

`public void `[`addArchiveResource`](/docs/reference/QCefContext#class_q_cef_context_1a007272d5df4016143f6b9e221a3b0eb1)`(const QString & path,const QString & url,const QString & password)`

您需要在存档文件中保留文件夹结构，例如：

```bash
full\path\to\webres.zip
                │   index.html
                ├───assets
                ├───docs
                ├───img
```

您可以使用以下代码添加映射项：

```cpp
 // 添加本地 zip 文件到 URL 映射
 QCefContext::instance()->addArchiveResource(
     "full\\path\\to\\webres.zip", 
     "https://domainname",
     "password"                 // 如果需要，传递 zip 文件的密码
     );

  // 构建每个 QCefView 的设置
  QCefSetting setting;

  // 创建 QCefView 控件并将其添加到布局容器中
  QCefView* cefView = new QCefView(
      "https://domainname/index.html", 
      &setting, 
      this
      );
```

### 使用场景

当您使用流行的框架（如 React、Vue 或其他框架）开发 WebApp 时，以上 3 和 4 非常有用，特别是当您构建 SPA WebApp 时。

### 总结

这四种方法为将 Web 资源加载到 QCefView 中提供了灵活的选择，可以满足从在线内容到本地文件和复杂 Web 应用程序的不同场景。根据 Web 资源的来源和结构选择最适合您需求的方法。
