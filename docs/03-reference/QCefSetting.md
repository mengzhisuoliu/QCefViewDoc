---
title: QCefSetting
---

# class `QCefSetting` {#class_q_cef_setting}

Represents the settings for individual browser.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  `[`QCefSetting`](#class_q_cef_setting_1afb8450a162ed9ce3f59a37491147db8d)`()`                  | Constructs the [QCefSetting](#class_q_cef_setting) instance.
`public  `[`QCefSetting`](#class_q_cef_setting_1af650fcab674f8c33a996a2d8cd34eaef)`(const `[`QCefSetting`](#class_q_cef_setting)` & other)`                  | Constructs the [QCefSetting](#class_q_cef_setting) instance from existing one.
`public `[`QCefSetting`](#class_q_cef_setting)` & `[`operator=`](#class_q_cef_setting_1a486f0c9edda93fb30c75608ac9b98ba2)`(const `[`QCefSetting`](#class_q_cef_setting)` & other)`                  | Assigns the existing [QCefSetting](#class_q_cef_setting) instance to current.
`public  `[`~QCefSetting`](#class_q_cef_setting_1a589b16fe883213d0e330503c0ccab218)`()`                  | Destructs the instance.
`public void `[`setWindowInitialSize`](#class_q_cef_setting_1a629a1139dff88c3bb85a4c9a620d0682)`(const QSize & size)`                  | Sets the initial size of the browser.
`public const QSize `[`windowInitialSize`](#class_q_cef_setting_1ad3aabefb7879e392952a94464c983978)`() const`                  | Gets the initial size of the browser.
`public void `[`setStandardFontFamily`](#class_q_cef_setting_1ad021537af966fb8f17d8a07066a5408e)`(const QString & value)`                  | Sets the standard font family.
`public const QString `[`standardFontFamily`](#class_q_cef_setting_1aa7a0cfa4086251bdfc95c4ae72e52896)`() const`                  | Gets the standard font family.
`public void `[`setFixedFontFamily`](#class_q_cef_setting_1af11ccd0529a79efee12a3e728d24e641)`(const QString & value)`                  | Sets the fixed font family.
`public const QString `[`fixedFontFamily`](#class_q_cef_setting_1a239e1982f4ab4198a62f9c00ae17bcbb)`() const`                  | Gets the fixed font family.
`public void `[`setSerifFontFamily`](#class_q_cef_setting_1a9eadb4d8d6567c78d80f09e1ace1dd30)`(const QString & value)`                  | Sets the serif font family.
`public const QString `[`serifFontFamily`](#class_q_cef_setting_1a43ab6247cbbaa59652846eb84760c1fb)`() const`                  | Gets the serif font family.
`public void `[`setSansSerifFontFamily`](#class_q_cef_setting_1aa07d27c4a22dc2ec0d041c9deda1d71b)`(const QString & value)`                  | Sets the sans serif font family.
`public const QString `[`sansSerifFontFamily`](#class_q_cef_setting_1a861fccc511473f01f74a5199d2660126)`() const`                  | Gets the sans serif font family.
`public void `[`setCursiveFontFamily`](#class_q_cef_setting_1aef4eb96f03003eb774924fe418a7edf1)`(const QString & value)`                  | Sets the cursive font family.
`public const QString `[`cursiveFontFamily`](#class_q_cef_setting_1a86526505941342ffbc96b6e5226ffcbe)`() const`                  | Gets the cursive font family.
`public void `[`setFantasyFontFamily`](#class_q_cef_setting_1a831bed0440aed06894a85ee8dde74a05)`(const QString & value)`                  | Sets the fantasy font family.
`public const QString `[`fantasyFontFamily`](#class_q_cef_setting_1a0acd7303ff77ae1eff9fa579fc96e97a)`() const`                  | Gets the fantasy font family.
`public void `[`setDefaultEncoding`](#class_q_cef_setting_1a599a011dff8d11c8201036238016a77f)`(const QString & value)`                  | Sets the default encoding.
`public const QString `[`defaultEncoding`](#class_q_cef_setting_1a2de89967072377f279b36e821bde18e1)`() const`                  | Gets the default encoding.
`public void `[`setWindowlessFrameRate`](#class_q_cef_setting_1a4a5810da8e070288ff80c069f5b52f23)`(const int value)`                  | Sets the frame rate in window less mode.
`public const QVariant `[`windowlessFrameRate`](#class_q_cef_setting_1adfc424688213e0e695b6b84681581135)`() const`                  | Gets the frame rate in window less mode.
`public void `[`setDefaultFontSize`](#class_q_cef_setting_1a85b9cadc6df83a3addbaf567df791339)`(const int value)`                  | Sets the default font size.
`public const QVariant `[`defaultFontSize`](#class_q_cef_setting_1a4a38db62a20b2e8e7a26029f0b928689)`() const`                  | Gets the default font size.
`public void `[`setDefaultFixedFontSize`](#class_q_cef_setting_1a4dddf809104f676469fc03b266d7a2ff)`(const int value)`                  | Sets the default fixed font size.
`public const QVariant `[`defaultFixedFontSize`](#class_q_cef_setting_1ab25a8bd4b9d5acb865c840b8c4320f5d)`() const`                  | Gets the default fixed font size.
`public void `[`setMinimumFontSize`](#class_q_cef_setting_1a0c1733e2e173cb462f0ec21a613b628e)`(const int value)`                  | Sets the minimum font size.
`public const QVariant `[`minimumFontSize`](#class_q_cef_setting_1a3b263c84f28ef76fc1dc4cd4dfad8e5d)`() const`                  | Gets the minimum font size.
`public void `[`setMinimumLogicalFontSize`](#class_q_cef_setting_1aa6e22cc3cfa68ad13809b6766e9cafab)`(const int value)`                  | Sets the minimum logical font size.
`public const QVariant `[`minimumLogicalFontSize`](#class_q_cef_setting_1a3f0801d8ecbc7fe86df805dc6db3aad9)`() const`                  | Gets the minimum logical font size.
`public void `[`setRemoteFonts`](#class_q_cef_setting_1aba88a474960049cda01c7295e514eb8a)`(const bool value)`                  | Sets to enable or disable remote fonts.
`public const QVariant `[`remoteFonts`](#class_q_cef_setting_1a6b503e82defe4c57a88936fb2cec2509)`() const`                  | Gets whether to enable or disable the remote fonts.
`public void `[`setJavascript`](#class_q_cef_setting_1a884abf03a17dc3fa4343b578445219c0)`(const bool value)`                  | Sets to enable or disable Javascript.
`public const QVariant `[`javascript`](#class_q_cef_setting_1abfa7cceca149b6311e7a28e6ae4e2853)`() const`                  | Gets whether to enable or disable Javascript.
`public void `[`setJavascriptCloseWindows`](#class_q_cef_setting_1a7c3755e100310ab63a98cbd6b7c89a6b)`(const bool value)`                  | Sets to enable or disable the permission of closing window from Javascript.
`public const QVariant `[`javascriptCloseWindows`](#class_q_cef_setting_1a8cab27275ce36cb0b1477a85b6694f3b)`() const`                  | Gets whether to enable or disable the permission of closing window from Javascript.
`public void `[`setJavascriptAccessClipboard`](#class_q_cef_setting_1aff0a7e72f55a002f5731f4e202e45d63)`(const bool value)`                  | Sets to enable or disable the permission of accessing clipboard from Javascript.
`public const QVariant `[`javascriptAccessClipboard`](#class_q_cef_setting_1aff511401ea2d0453583db4b642526dbd)`() const`                  | Gets whether to enable or disable the permission of accessing clipboard from Javascript.
`public void `[`setJavascriptDomPaste`](#class_q_cef_setting_1a61c6207fc6fb05b71248fee8766d21a2)`(const bool value)`                  | Sets to enable or disable the permission of pasting DOM in Javascript.
`public const QVariant `[`javascriptDomPaste`](#class_q_cef_setting_1a6696cc8fa0b4ea1ef14d71259cd4350d)`() const`                  | Gets whether to enable or disable the permission of pasting DOM in Javascript.
`public void `[`setImageLoading`](#class_q_cef_setting_1a15457b991b298a722cbc9f9507d109fb)`(const bool value)`                  | Sets to enable or disable the permission of loading images.
`public const QVariant `[`imageLoading`](#class_q_cef_setting_1aa06779c82a28a01bd862ac605356be40)`() const`                  | Gets whether to enable or disable the permission of loading images.
`public void `[`setImageShrinkStandaloneToFit`](#class_q_cef_setting_1a562e4477613234a906b2d167473b0627)`(const bool value)`                  | Sets to enable or disable the shrinking image standalone to fit.
`public const QVariant `[`imageShrinkStandaloneToFit`](#class_q_cef_setting_1a7374edce9be761b5d40edef80f42f7b9)`() const`                  | Gets whether to enable or disable the shrinking image standalone to fit.
`public void `[`setTextAreaResize`](#class_q_cef_setting_1a159239d8d7d5b4f944db0c9f37b10509)`(const bool value)`                  | Sets to enable or disable the resizing of text area.
`public const QVariant `[`textAreaResize`](#class_q_cef_setting_1a8d88588797f311f71c55073f95dafafe)`() const`                  | Gets whether to enable or disable the resizing of text area.
`public void `[`setTabToLinks`](#class_q_cef_setting_1a8ccb815304eeadba9d679186472d4e40)`(const bool value)`                  | Sets to enable or disable tab to links.
`public const QVariant `[`tabToLinks`](#class_q_cef_setting_1a9b81d1bcf47146dfc5eeeabeb583e627)`() const`                  | Gets whether to enable or disable tab to links.
`public void `[`setLocalStorage`](#class_q_cef_setting_1afca6695cdffbb1734588c33ffff3aa3c)`(const bool value)`                  | Sets to enable or disable local storage.
`public const QVariant `[`localStorage`](#class_q_cef_setting_1a4fffdf46c7617f7b116e2e836dbb48d0)`() const`                  | Gets whether to enable or disable local storage.
`public void `[`setDatabases`](#class_q_cef_setting_1ad0680b646641dd568b7de8ae072670db)`(const bool value)`                  | Sets to enable or disable database.
`public const QVariant `[`databases`](#class_q_cef_setting_1a94b2a957c8754619df7a37258a41c31d)`() const`                  | Gets whether to enable or disable database.
`public void `[`setWebGL`](#class_q_cef_setting_1a984a074332bd07b78da2079d1d333209)`(const bool value)`                  | Sets to enable or disable webGL.
`public const QVariant `[`webGL`](#class_q_cef_setting_1aca84c981db4fcc2cf6aa3ece7c44973c)`() const`                  | Gets whether to enable or disable webGL.
`public void `[`setBackgroundColor`](#class_q_cef_setting_1a6dbd7b1da3a151294e8bf020a16687be)`(const QColor & value)`                  | Sets the background color.
`public const QVariant `[`backgroundColor`](#class_q_cef_setting_1a9db276640c98e1d5d38290e06ae17d1a)`() const`                  | Gets the background color.
`public void `[`setHardwareAcceleration`](#class_q_cef_setting_1afdb320899b859e7781458a281a9dafbe)`(const bool value)`                  | #### Parameters
`public const bool `[`hardwareAcceleration`](#class_q_cef_setting_1a7509581e3295f2585394329a1adec734)`() const`                  | #### Returns
`private QScopedPointer< QCefSettingPrivate > `[`d_ptr`](#class_q_cef_setting_1ab47508d9301964f7c77c49150d942813)                  | 

## Members

---
### `public  `[`QCefSetting`](#class_q_cef_setting_1afb8450a162ed9ce3f59a37491147db8d)`()` {#class_q_cef_setting_1afb8450a162ed9ce3f59a37491147db8d}

Constructs the [QCefSetting](#class_q_cef_setting) instance.

---
### `public  `[`QCefSetting`](#class_q_cef_setting_1af650fcab674f8c33a996a2d8cd34eaef)`(const `[`QCefSetting`](#class_q_cef_setting)` & other)` {#class_q_cef_setting_1af650fcab674f8c33a996a2d8cd34eaef}

Constructs the [QCefSetting](#class_q_cef_setting) instance from existing one.

#### Parameters
* `other` The existing [QCefSetting](#class_q_cef_setting) instance

---
### `public `[`QCefSetting`](#class_q_cef_setting)` & `[`operator=`](#class_q_cef_setting_1a486f0c9edda93fb30c75608ac9b98ba2)`(const `[`QCefSetting`](#class_q_cef_setting)` & other)` {#class_q_cef_setting_1a486f0c9edda93fb30c75608ac9b98ba2}

Assigns the existing [QCefSetting](#class_q_cef_setting) instance to current.

#### Parameters
* `other`

---
### `public  `[`~QCefSetting`](#class_q_cef_setting_1a589b16fe883213d0e330503c0ccab218)`()` {#class_q_cef_setting_1a589b16fe883213d0e330503c0ccab218}

Destructs the instance.

---
### `public void `[`setWindowInitialSize`](#class_q_cef_setting_1a629a1139dff88c3bb85a4c9a620d0682)`(const QSize & size)` {#class_q_cef_setting_1a629a1139dff88c3bb85a4c9a620d0682}

Sets the initial size of the browser.

#### Parameters
* `size` The initial size

---
### `public const QSize `[`windowInitialSize`](#class_q_cef_setting_1ad3aabefb7879e392952a94464c983978)`() const` {#class_q_cef_setting_1ad3aabefb7879e392952a94464c983978}

Gets the initial size of the browser.

#### Returns

---
### `public void `[`setStandardFontFamily`](#class_q_cef_setting_1ad021537af966fb8f17d8a07066a5408e)`(const QString & value)` {#class_q_cef_setting_1ad021537af966fb8f17d8a07066a5408e}

Sets the standard font family.

#### Parameters
* `value` The font family

---
### `public const QString `[`standardFontFamily`](#class_q_cef_setting_1aa7a0cfa4086251bdfc95c4ae72e52896)`() const` {#class_q_cef_setting_1aa7a0cfa4086251bdfc95c4ae72e52896}

Gets the standard font family.

#### Returns
The font family

---
### `public void `[`setFixedFontFamily`](#class_q_cef_setting_1af11ccd0529a79efee12a3e728d24e641)`(const QString & value)` {#class_q_cef_setting_1af11ccd0529a79efee12a3e728d24e641}

Sets the fixed font family.

#### Parameters
* `value` The font family

---
### `public const QString `[`fixedFontFamily`](#class_q_cef_setting_1a239e1982f4ab4198a62f9c00ae17bcbb)`() const` {#class_q_cef_setting_1a239e1982f4ab4198a62f9c00ae17bcbb}

Gets the fixed font family.

#### Returns
The font family

---
### `public void `[`setSerifFontFamily`](#class_q_cef_setting_1a9eadb4d8d6567c78d80f09e1ace1dd30)`(const QString & value)` {#class_q_cef_setting_1a9eadb4d8d6567c78d80f09e1ace1dd30}

Sets the serif font family.

#### Parameters
* `value` The font family

---
### `public const QString `[`serifFontFamily`](#class_q_cef_setting_1a43ab6247cbbaa59652846eb84760c1fb)`() const` {#class_q_cef_setting_1a43ab6247cbbaa59652846eb84760c1fb}

Gets the serif font family.

#### Returns
The font family

---
### `public void `[`setSansSerifFontFamily`](#class_q_cef_setting_1aa07d27c4a22dc2ec0d041c9deda1d71b)`(const QString & value)` {#class_q_cef_setting_1aa07d27c4a22dc2ec0d041c9deda1d71b}

Sets the sans serif font family.

#### Parameters
* `value` The font family

---
### `public const QString `[`sansSerifFontFamily`](#class_q_cef_setting_1a861fccc511473f01f74a5199d2660126)`() const` {#class_q_cef_setting_1a861fccc511473f01f74a5199d2660126}

Gets the sans serif font family.

#### Returns
The font family

---
### `public void `[`setCursiveFontFamily`](#class_q_cef_setting_1aef4eb96f03003eb774924fe418a7edf1)`(const QString & value)` {#class_q_cef_setting_1aef4eb96f03003eb774924fe418a7edf1}

Sets the cursive font family.

#### Parameters
* `value` The font family

---
### `public const QString `[`cursiveFontFamily`](#class_q_cef_setting_1a86526505941342ffbc96b6e5226ffcbe)`() const` {#class_q_cef_setting_1a86526505941342ffbc96b6e5226ffcbe}

Gets the cursive font family.

#### Returns
The font family

---
### `public void `[`setFantasyFontFamily`](#class_q_cef_setting_1a831bed0440aed06894a85ee8dde74a05)`(const QString & value)` {#class_q_cef_setting_1a831bed0440aed06894a85ee8dde74a05}

Sets the fantasy font family.

#### Parameters
* `value` The font family

---
### `public const QString `[`fantasyFontFamily`](#class_q_cef_setting_1a0acd7303ff77ae1eff9fa579fc96e97a)`() const` {#class_q_cef_setting_1a0acd7303ff77ae1eff9fa579fc96e97a}

Gets the fantasy font family.

#### Returns
The font family

---
### `public void `[`setDefaultEncoding`](#class_q_cef_setting_1a599a011dff8d11c8201036238016a77f)`(const QString & value)` {#class_q_cef_setting_1a599a011dff8d11c8201036238016a77f}

Sets the default encoding.

#### Parameters
* `value` The encoding name

---
### `public const QString `[`defaultEncoding`](#class_q_cef_setting_1a2de89967072377f279b36e821bde18e1)`() const` {#class_q_cef_setting_1a2de89967072377f279b36e821bde18e1}

Gets the default encoding.

#### Returns
The encoding name

---
### `public void `[`setWindowlessFrameRate`](#class_q_cef_setting_1a4a5810da8e070288ff80c069f5b52f23)`(const int value)` {#class_q_cef_setting_1a4a5810da8e070288ff80c069f5b52f23}

Sets the frame rate in window less mode.

#### Parameters
* `value` The frame rate

---
### `public const QVariant `[`windowlessFrameRate`](#class_q_cef_setting_1adfc424688213e0e695b6b84681581135)`() const` {#class_q_cef_setting_1adfc424688213e0e695b6b84681581135}

Gets the frame rate in window less mode.

#### Returns
The frame rate

---
### `public void `[`setDefaultFontSize`](#class_q_cef_setting_1a85b9cadc6df83a3addbaf567df791339)`(const int value)` {#class_q_cef_setting_1a85b9cadc6df83a3addbaf567df791339}

Sets the default font size.

#### Parameters
* `value` The font size

---
### `public const QVariant `[`defaultFontSize`](#class_q_cef_setting_1a4a38db62a20b2e8e7a26029f0b928689)`() const` {#class_q_cef_setting_1a4a38db62a20b2e8e7a26029f0b928689}

Gets the default font size.

#### Returns
The font size

---
### `public void `[`setDefaultFixedFontSize`](#class_q_cef_setting_1a4dddf809104f676469fc03b266d7a2ff)`(const int value)` {#class_q_cef_setting_1a4dddf809104f676469fc03b266d7a2ff}

Sets the default fixed font size.

#### Parameters
* `value` The font size

---
### `public const QVariant `[`defaultFixedFontSize`](#class_q_cef_setting_1ab25a8bd4b9d5acb865c840b8c4320f5d)`() const` {#class_q_cef_setting_1ab25a8bd4b9d5acb865c840b8c4320f5d}

Gets the default fixed font size.

#### Returns
The font size

---
### `public void `[`setMinimumFontSize`](#class_q_cef_setting_1a0c1733e2e173cb462f0ec21a613b628e)`(const int value)` {#class_q_cef_setting_1a0c1733e2e173cb462f0ec21a613b628e}

Sets the minimum font size.

#### Parameters
* `value` The font size

---
### `public const QVariant `[`minimumFontSize`](#class_q_cef_setting_1a3b263c84f28ef76fc1dc4cd4dfad8e5d)`() const` {#class_q_cef_setting_1a3b263c84f28ef76fc1dc4cd4dfad8e5d}

Gets the minimum font size.

#### Returns
The font size

---
### `public void `[`setMinimumLogicalFontSize`](#class_q_cef_setting_1aa6e22cc3cfa68ad13809b6766e9cafab)`(const int value)` {#class_q_cef_setting_1aa6e22cc3cfa68ad13809b6766e9cafab}

Sets the minimum logical font size.

#### Parameters
* `value` The font size

---
### `public const QVariant `[`minimumLogicalFontSize`](#class_q_cef_setting_1a3f0801d8ecbc7fe86df805dc6db3aad9)`() const` {#class_q_cef_setting_1a3f0801d8ecbc7fe86df805dc6db3aad9}

Gets the minimum logical font size.

#### Returns
The font size

---
### `public void `[`setRemoteFonts`](#class_q_cef_setting_1aba88a474960049cda01c7295e514eb8a)`(const bool value)` {#class_q_cef_setting_1aba88a474960049cda01c7295e514eb8a}

Sets to enable or disable remote fonts.

#### Parameters
* `value` True to enable; false to disable

---
### `public const QVariant `[`remoteFonts`](#class_q_cef_setting_1a6b503e82defe4c57a88936fb2cec2509)`() const` {#class_q_cef_setting_1a6b503e82defe4c57a88936fb2cec2509}

Gets whether to enable or disable the remote fonts.

#### Returns
True to enable; false to disable

---
### `public void `[`setJavascript`](#class_q_cef_setting_1a884abf03a17dc3fa4343b578445219c0)`(const bool value)` {#class_q_cef_setting_1a884abf03a17dc3fa4343b578445219c0}

Sets to enable or disable Javascript.

#### Parameters
* `value` True to enable; false to disable

---
### `public const QVariant `[`javascript`](#class_q_cef_setting_1abfa7cceca149b6311e7a28e6ae4e2853)`() const` {#class_q_cef_setting_1abfa7cceca149b6311e7a28e6ae4e2853}

Gets whether to enable or disable Javascript.

#### Returns
True to enable; false to disable

---
### `public void `[`setJavascriptCloseWindows`](#class_q_cef_setting_1a7c3755e100310ab63a98cbd6b7c89a6b)`(const bool value)` {#class_q_cef_setting_1a7c3755e100310ab63a98cbd6b7c89a6b}

Sets to enable or disable the permission of closing window from Javascript.

#### Parameters
* `value` True to enable; false to disable

---
### `public const QVariant `[`javascriptCloseWindows`](#class_q_cef_setting_1a8cab27275ce36cb0b1477a85b6694f3b)`() const` {#class_q_cef_setting_1a8cab27275ce36cb0b1477a85b6694f3b}

Gets whether to enable or disable the permission of closing window from Javascript.

#### Returns
True to enable; false to disable

---
### `public void `[`setJavascriptAccessClipboard`](#class_q_cef_setting_1aff0a7e72f55a002f5731f4e202e45d63)`(const bool value)` {#class_q_cef_setting_1aff0a7e72f55a002f5731f4e202e45d63}

Sets to enable or disable the permission of accessing clipboard from Javascript.

#### Parameters
* `value` True to enable; false to disable

---
### `public const QVariant `[`javascriptAccessClipboard`](#class_q_cef_setting_1aff511401ea2d0453583db4b642526dbd)`() const` {#class_q_cef_setting_1aff511401ea2d0453583db4b642526dbd}

Gets whether to enable or disable the permission of accessing clipboard from Javascript.

#### Returns
True to enable; false to disable

---
### `public void `[`setJavascriptDomPaste`](#class_q_cef_setting_1a61c6207fc6fb05b71248fee8766d21a2)`(const bool value)` {#class_q_cef_setting_1a61c6207fc6fb05b71248fee8766d21a2}

Sets to enable or disable the permission of pasting DOM in Javascript.

#### Parameters
* `value` True to enable; false to disable

---
### `public const QVariant `[`javascriptDomPaste`](#class_q_cef_setting_1a6696cc8fa0b4ea1ef14d71259cd4350d)`() const` {#class_q_cef_setting_1a6696cc8fa0b4ea1ef14d71259cd4350d}

Gets whether to enable or disable the permission of pasting DOM in Javascript.

#### Returns
True to enable; false to disable

---
### `public void `[`setImageLoading`](#class_q_cef_setting_1a15457b991b298a722cbc9f9507d109fb)`(const bool value)` {#class_q_cef_setting_1a15457b991b298a722cbc9f9507d109fb}

Sets to enable or disable the permission of loading images.

#### Parameters
* `value` True to enable; false to disable

---
### `public const QVariant `[`imageLoading`](#class_q_cef_setting_1aa06779c82a28a01bd862ac605356be40)`() const` {#class_q_cef_setting_1aa06779c82a28a01bd862ac605356be40}

Gets whether to enable or disable the permission of loading images.

#### Returns
True to enable; false to disable

---
### `public void `[`setImageShrinkStandaloneToFit`](#class_q_cef_setting_1a562e4477613234a906b2d167473b0627)`(const bool value)` {#class_q_cef_setting_1a562e4477613234a906b2d167473b0627}

Sets to enable or disable the shrinking image standalone to fit.

#### Parameters
* `value` True to enable; false to disable

---
### `public const QVariant `[`imageShrinkStandaloneToFit`](#class_q_cef_setting_1a7374edce9be761b5d40edef80f42f7b9)`() const` {#class_q_cef_setting_1a7374edce9be761b5d40edef80f42f7b9}

Gets whether to enable or disable the shrinking image standalone to fit.

#### Returns
True to enable; false to disable

---
### `public void `[`setTextAreaResize`](#class_q_cef_setting_1a159239d8d7d5b4f944db0c9f37b10509)`(const bool value)` {#class_q_cef_setting_1a159239d8d7d5b4f944db0c9f37b10509}

Sets to enable or disable the resizing of text area.

#### Parameters
* `value` True to enable; false to disable

---
### `public const QVariant `[`textAreaResize`](#class_q_cef_setting_1a8d88588797f311f71c55073f95dafafe)`() const` {#class_q_cef_setting_1a8d88588797f311f71c55073f95dafafe}

Gets whether to enable or disable the resizing of text area.

#### Returns
True to enable; false to disable

---
### `public void `[`setTabToLinks`](#class_q_cef_setting_1a8ccb815304eeadba9d679186472d4e40)`(const bool value)` {#class_q_cef_setting_1a8ccb815304eeadba9d679186472d4e40}

Sets to enable or disable tab to links.

#### Parameters
* `value` True to enable; false to disable

---
### `public const QVariant `[`tabToLinks`](#class_q_cef_setting_1a9b81d1bcf47146dfc5eeeabeb583e627)`() const` {#class_q_cef_setting_1a9b81d1bcf47146dfc5eeeabeb583e627}

Gets whether to enable or disable tab to links.

#### Returns
True to enable; false to disable

---
### `public void `[`setLocalStorage`](#class_q_cef_setting_1afca6695cdffbb1734588c33ffff3aa3c)`(const bool value)` {#class_q_cef_setting_1afca6695cdffbb1734588c33ffff3aa3c}

Sets to enable or disable local storage.

#### Parameters
* `value` True to enable; false to disable

---
### `public const QVariant `[`localStorage`](#class_q_cef_setting_1a4fffdf46c7617f7b116e2e836dbb48d0)`() const` {#class_q_cef_setting_1a4fffdf46c7617f7b116e2e836dbb48d0}

Gets whether to enable or disable local storage.

#### Returns
True to enable; false to disable

---
### `public void `[`setDatabases`](#class_q_cef_setting_1ad0680b646641dd568b7de8ae072670db)`(const bool value)` {#class_q_cef_setting_1ad0680b646641dd568b7de8ae072670db}

Sets to enable or disable database.

#### Parameters
* `value` True to enable; false to disable

---
### `public const QVariant `[`databases`](#class_q_cef_setting_1a94b2a957c8754619df7a37258a41c31d)`() const` {#class_q_cef_setting_1a94b2a957c8754619df7a37258a41c31d}

Gets whether to enable or disable database.

#### Returns
True to enable; false to disable

---
### `public void `[`setWebGL`](#class_q_cef_setting_1a984a074332bd07b78da2079d1d333209)`(const bool value)` {#class_q_cef_setting_1a984a074332bd07b78da2079d1d333209}

Sets to enable or disable webGL.

#### Parameters
* `value` True to enable; false to disable

---
### `public const QVariant `[`webGL`](#class_q_cef_setting_1aca84c981db4fcc2cf6aa3ece7c44973c)`() const` {#class_q_cef_setting_1aca84c981db4fcc2cf6aa3ece7c44973c}

Gets whether to enable or disable webGL.

#### Returns
True to enable; false to disable

---
### `public void `[`setBackgroundColor`](#class_q_cef_setting_1a6dbd7b1da3a151294e8bf020a16687be)`(const QColor & value)` {#class_q_cef_setting_1a6dbd7b1da3a151294e8bf020a16687be}

Sets the background color.

#### Parameters
* `value` The color

This only works if the web page has no background color set. The alpha component value will be adjusted to 0 or 255, it means if you pass a value with alpha value in the range of [1, 255], it will be accepted as 255. The default value is inherited from [QCefConfig::backgroundColor()](QCefConfig.md#class_q_cef_config_1aa04db9637f47424834bbcdf05a8b640b)

---
### `public const QVariant `[`backgroundColor`](#class_q_cef_setting_1a9db276640c98e1d5d38290e06ae17d1a)`() const` {#class_q_cef_setting_1a9db276640c98e1d5d38290e06ae17d1a}

Gets the background color.

#### Returns
The color

---
### `public void `[`setHardwareAcceleration`](#class_q_cef_setting_1afdb320899b859e7781458a281a9dafbe)`(const bool value)` {#class_q_cef_setting_1afdb320899b859e7781458a281a9dafbe}

#### Parameters
* `value`

---
### `public const bool `[`hardwareAcceleration`](#class_q_cef_setting_1a7509581e3295f2585394329a1adec734)`() const` {#class_q_cef_setting_1a7509581e3295f2585394329a1adec734}

#### Returns

---
### `private QScopedPointer< QCefSettingPrivate > `[`d_ptr`](#class_q_cef_setting_1ab47508d9301964f7c77c49150d942813) {#class_q_cef_setting_1ab47508d9301964f7c77c49150d942813}

