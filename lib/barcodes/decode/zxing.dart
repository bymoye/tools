// ignore_for_file: non_constant_identifier_names

@JS("ZXingWASM")
library;

import 'dart:js_interop';
import 'package:tools/global_variable.dart';
import 'package:web/web.dart' as web;

@JS()
external JSString get ZXING_WASM_VERSION;
@JS()
external JSString get ZXING_WASM_SHA256;
@JS()
external JSArray<JSString> get barcodeFormats;
@JS()
external JSArray<JSString> get binarizers;
@JS()
external JSArray<JSString> get characterSets;
@JS()
external JSArray<JSString> get contentTypes;
@JS()
external ReaderOptions get defaultReaderOptions;
@JS()
external JSArray<JSString> get eanAddOnSymbols;
@JS()
external JSArray<JSString> get linearBarcodeFormats;
@JS()
external JSArray<JSString> get matrixBarcodeFormats;

extension type OptionsOverrides._(JSObject _) implements JSObject {
  external factory OptionsOverrides({JSFunction? locateFile});
}

extension type PrepareZXingModuleOptions._(JSObject _) implements JSObject {
  external factory PrepareZXingModuleOptions(
      {OptionsOverrides overrides,
      bool fireImmediately,
      JSFunction? equalityFn});
  external JSObject get overrides;
  external bool get fireImmediately;
}

/// https://zxing-wasm.deno.dev/functions/reader.prepareZXingModule.html
@JS()
external JSPromise prepareZXingModule(PrepareZXingModuleOptions options);

@JS()
external void purgeZXingModule();

@JS()
external JSArray<JSString> get textModes;

/// https://zxing-wasm.deno.dev/interfaces/full.ReaderOptions.html#characterset
extension type ReaderOptions._(JSObject _) implements JSObject {
  external String get binarizer;
  external String get characterSet;
  external int get downscaleFactor;
  external int get downscaleThreshold;
  external String get eanAddOnSymbol;
  external JSArray<JSString> get formats;
  external bool get isPure;
  external int get maxNumberOfSymbols;
  external int get minLineCount;
  external bool get returnErrors;
  external String get textMode;
  external bool get tryCode39ExtendedMode;
  external bool get tryDenoise;
  external bool get tryDownscale;
  external bool get tryHarder;
  external bool get tryInvert;
  external bool get tryRotate;
}

extension type Point._(JSObject _) implements JSObject {
  external int get x;
  external int get y;

  Map<String, dynamic> toJson() => <String, dynamic>{
        'x': x,
        'y': y,
      };
}

extension type Position._(JSObject _) implements JSObject {
  external Point get bottomLeft;
  external Point get bottomRight;
  external Point get topLeft;
  external Point get topRight;

  Map<String, dynamic> toJson() => <String, dynamic>{
        'bottomLeft': bottomLeft.toJson(),
        'bottomRight': bottomRight.toJson(),
        'topLeft': topLeft.toJson(),
        'topRight': topRight.toJson(),
      };
}

extension type ReadResult._(JSObject _) implements JSObject {
  external JSUint8Array get bytes;
  external JSUint8Array get bytesECI;
  external String get contentType;
  // `${number}` | `${number}%` | "L" | "M" | "Q" | "H" | ""
  // external String get eccLevel;
  // `${number}` | `${number}%` | "L" | "M" | "Q" | "H" | ""
  external String get ecLevel;
  external String get error;
  // "Aztec", "Codabar", "Code39", "Code93", "Code128", "DataBar",
  //"DataBarExpanded", "DataBarLimited", "DataMatrix", "DXFilmEdge",
  //"EAN-8", "EAN-13", "ITF", "MaxiCode", "MicroQRCode", "PDF417",
  //"QRCode", "rMQRCode", "UPC-A", "UPC-E", "None"
  external String get format;
  external bool get hasECI;
  external bool get isInverted;
  external bool get isMirrored;
  external bool get isValid;
  external num get lineCount;
  external num get orientation;
  external Position get position;
  external bool get readerInit;
  external String get sequenceId;
  external num get sequenceIndex;
  external num get sequenceSize;
  external String get symbologyIdentifier;
  external String get text;
  external String get version;

  Map<String, dynamic> toJson() => <String, dynamic>{
        'bytes': bytes,
        'bytesECI': bytesECI,
        'contentType': contentType,
        'ecLevel': ecLevel,
        'error': error,
        'format': format,
        'hasECI': hasECI,
        'isInverted': isInverted,
        'isMirrored': isMirrored,
        'isValid': isValid,
        'lineCount': lineCount,
        'orientation': orientation,
        'position': position.toJson(),
        'readerInit': readerInit,
        'sequenceId': sequenceId,
        'sequenceIndex': sequenceIndex,
        'sequenceSize': sequenceSize,
        'symbologyIdentifier': symbologyIdentifier,
        'text': text,
        'version': version,
      };
}

@JS()
external JSPromise<JSArray<ReadResult>> readBarcodesFromImageFile(
    web.Blob file);

@JS()
external JSPromise<JSArray<ReadResult>> readBarcodesFromImageData(
    web.ImageData imageData);

/// image: [web.Blob] | [web.ImageData] | [JSArrayBuffer] | [JSUint8Array]
@JS()
external JSPromise<JSArray<ReadResult>> readBarcodes(JSAny image);

/// https://zxing-wasm.deno.dev/interfaces/full.WriterOptions.html
extension type WriterOptions._(JSObject _) implements JSObject {
  external factory WriterOptions({
    String? ecLevel,
    bool? forceSquareDataMatrix,
    String? format,
    bool? readerInit,
    JSNumber? rotate,
    JSNumber? scale,
    JSNumber? sizeHint,
    bool? withHRT,
    bool? withQuietZones,
  });
  // `${number}` | `${number}%` | "L" | "M" | "Q" | "H" | "", 默认为""
  external String get ecLevel;

  /// 是否强制数据矩阵为正方形, 默认为false
  external bool get forceSquareDataMatrix;

  /// 生成的条形码格式：
  /// "Aztec", "Codabar", "Code39", "Code93", "Code128", "DataBar",
  /// "DataBarExpanded", "DataBarLimited", "DataMatrix", "DXFilmEdge",
  /// "EAN-8", "EAN-13", "ITF", "MaxiCode", "MicroQRCode", "PDF417",
  /// "QRCode", "rMQRCode", "UPC-A", "UPC-E"
  /// 默认为"QRCode"
  external String get format;
  // 默认为false
  external bool get readerInit;

  /// 条形码旋转角度, 默认为0
  external JSNumber get rotate;

  /// 条形码缩放比例, 默认为0(未设置)
  external JSNumber get scale;

  /// 用于确认条形码比例的大小提示, 默认为0(未设置)
  /// 仅在scale为0时有效
  external JSNumber get sizeHint;

  /// 在条形码中包含人类可读的文本, 默认为false
  external bool get withHRT;

  /// 在条形码中包含安静区域, 默认为true
  external bool get withQuietZones;
}

extension type WriteResult._(JSObject _) implements JSObject {
  external String get error;
  external web.Blob? get image;
  external String get svg;
  external String get utf8;
}

@JS()
external JSPromise<WriteResult> writeBarcode(
    [String input, WriterOptions options]);

enum ZXingType {
  reader,
  writer,
}

Future<Function> loadZXingLibrary({required ZXingType type}) async {
  final web.HTMLScriptElement script = web.HTMLScriptElement()
    ..type = 'text/javascript'
    ..src =
        'https://registry.npmmirror.com/zxing-wasm/${GlobalVariable.zxingWasmVersion}/files/dist/iife/${type.name}/index.js';
  web.document.head!.append(script);

  await script.onLoad.first;
  await prepareZXingModule(PrepareZXingModuleOptions(
    overrides: OptionsOverrides(
        locateFile: (String path, String prefix) {
      if (path.endsWith(".wasm")) {
        return "https://registry.npmmirror.com/zxing-wasm/${GlobalVariable.zxingWasmVersion}/files/dist/${type.name}/$path";
      }
      return prefix + path;
    }.toJS),
    fireImmediately: true,
  )).toDart;
  web.console.log("ZXingWASM loaded".toJS);
  return () {
    purgeZXingModule();
    web.document.head!.removeChild(script);
  };
}
