import 'package:flutter_quill/flutter_quill.dart';
import 'package:flutter_quill_extensions/flutter_quill_extensions.dart';
import 'package:refreshed/refreshed.dart';

class QuillEditorController extends GetxController {
  final QuillController quillController = QuillController.basic();

  Future<void> onImageInsert(String image, QuillController controller) async {
    controller.insertImageBlock(imageSource: image);
    return;
  }

  // final RxString html = ''.obs;

  // void updateHtml() {
  //   html.value = quillController.document.toHtml();
  // }

  @override
  void onClose() {
    quillController.dispose();
    super.onClose();
  }
}
