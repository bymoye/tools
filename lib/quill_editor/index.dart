import 'package:flutter/material.dart';
import 'package:flutter_quill/flutter_quill.dart';
import 'package:flutter_quill_extensions/flutter_quill_extensions.dart'
    show
        FlutterQuillEmbeds,
        QuillToolbarCameraButtonOptions,
        QuillToolbarImageButtonOptions,
        QuillToolbarImageConfigurations;
import 'package:refreshed/refreshed.dart';
import 'package:tools/quill_editor/controller.dart';

class QuillEditorPage extends StatelessWidget {
  const QuillEditorPage({super.key});

  @override
  Widget build(BuildContext context) {
    return GetBuilder<QuillEditorController>(
      init: QuillEditorController(),
      builder: (QuillEditorController controller) {
        return Padding(
          padding: const EdgeInsets.all(10.0),
          child: Column(
            children: [
              QuillToolbar.simple(
                configurations: QuillSimpleToolbarConfigurations(
                    controller: controller.quillController,
                    embedButtons: FlutterQuillEmbeds.toolbarButtons(
                      imageButtonOptions: const QuillToolbarImageButtonOptions(
                        imageButtonConfigurations:
                            QuillToolbarImageConfigurations(),
                      ),
                      cameraButtonOptions:
                          const QuillToolbarCameraButtonOptions(),
                    ),
                    showSmallButton: true,
                    showLineHeightButton: true,
                    showAlignmentButtons: true,
                    showDirection: true),
              ),
              Expanded(
                child: QuillEditor.basic(
                  configurations: QuillEditorConfigurations(
                    controller: controller.quillController,
                    embedBuilders: FlutterQuillEmbeds.editorWebBuilders(),
                  ),
                ),
              )
            ],
          ),
        );
      },
    );
  }
}
