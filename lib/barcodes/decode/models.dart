import 'package:tools/barcodes/decode/zxing.dart';

class BarcodeResult {
  String? imageUrl;
  List<ReadResult>? codeList;
  Map<int, String>? codeImageUrl;

  addBarcodeImageUrl(int index, String url) {
    codeImageUrl ??= {};
    codeImageUrl![index] = url;
  }

  addBarcodeList(ReadResult result) {
    codeList ??= [];
    codeList!.add(result);
  }

  BarcodeResult({
    this.imageUrl,
    this.codeList,
    this.codeImageUrl,
  });
}
