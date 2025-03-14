import 'dart:js_interop';

import 'package:web/web.dart';

@JS()
external JSPromise<FileSystemDirectoryHandle> showDirectoryPicker();

@JS()
external JSPromise<JSArray<File>> pickerDirectoryImage();
