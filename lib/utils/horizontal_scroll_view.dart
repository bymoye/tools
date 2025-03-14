import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';

class HorizontalScrollView extends StatelessWidget {
  final List<Widget> children;

  const HorizontalScrollView({super.key, required this.children});

  @override
  Widget build(BuildContext context) {
    final ScrollController scrollController = ScrollController();

    return Listener(
      onPointerSignal: (event) {
        if (event is PointerScrollEvent) {
          scrollController
              .jumpTo(scrollController.offset + event.scrollDelta.dy);
        }
      },
      child: Scrollbar(
        controller: scrollController,
        thumbVisibility: true,
        child: ListView(
          physics: const BouncingScrollPhysics(),
          controller: scrollController,
          scrollDirection: Axis.horizontal,
          children: children,
        ),
      ),
    );
  }
}
