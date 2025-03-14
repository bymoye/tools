import 'package:flutter/material.dart';
import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';
import 'package:tools/barcodes/decode/state.dart';
import 'package:tools/utils/horizontal_scroll_view.dart';

import '../../../utils/animation_builder/physical_and_scale_animation.dart';
import 'barcode_detail.dart';

class ResultViews extends StatelessWidget {
  const ResultViews({super.key});

  @override
  Widget build(BuildContext context) {
    final BarcodeResultState? barcodeResultState =
        BarcodeResultState.of(context);
    if (barcodeResultState == null) {
      return const SizedBox();
    }
    return SizedBox(
      width: 800,
      height: 300,
      child: HorizontalScrollView(
        children: [
          for (final codeResult in barcodeResultState.items)
            GestureDetector(
              onTapUp: (details) {
                SmartDialog.show(
                    tag: "barcode_detail",
                    animationTime: Duration(milliseconds: 700),
                    maskColor: Colors.transparent,
                    animationBuilder: (
                      AnimationController controller,
                      Widget child,
                      AnimationParam animationParam,
                    ) =>
                        PhysicalAndScaleAnimation(
                          controller: controller,
                          animationParam: animationParam,
                          clickPosition: details.globalPosition,
                          child: child,
                        ),
                    builder: (context) {
                      return BarcodeDetail(
                        item: codeResult,
                      );
                    });
              },
              child: Padding(
                padding:
                    const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                child: Badge(
                  label: Text(
                    "${codeResult.codeList?.length ?? 0}",
                    style: const TextStyle(color: Colors.white, fontSize: 16),
                  ),
                  backgroundColor: codeResult.codeList?.isEmpty == true
                      ? Colors.red
                      : Colors.green,
                  child: Container(
                    decoration: BoxDecoration(
                      border: Border.all(color: Colors.grey),
                      borderRadius: BorderRadius.circular(8),
                      color: Colors.grey[800],
                    ),
                    width: 300,
                    height: 300,
                    padding: const EdgeInsets.all(8),
                    child: Image.network(
                      codeResult.imageUrl!,
                      width: 260,
                      height: 260,
                    ),
                  ),
                ),
              ),
            )
        ],
      ),
    );
  }
}
