import 'dart:developer';

import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:tools/utils/uuid/uuid_analysis.dart';
// import 'package:tools/uuid_tools/controller.dart';
import 'dart:math' show min;

class UuidParsePage extends StatefulWidget {
  const UuidParsePage({super.key});

  @override
  State<UuidParsePage> createState() => _UUidToolsState();
}

class _UUidToolsState extends State<UuidParsePage> {
  final TextEditingController textEditingController = TextEditingController();

  UuidAnalysis? analysis;

  String? helper;

  Color borderColor = Colors.grey;

  void onEditingComplete() {
    helper = null;
    if (textEditingController.text.isEmpty) {
      borderColor = Colors.red;
      helper = "UUID不能为空";
      return;
    }
    analysis = null;
    try {
      analysis = UuidAnalysis(textEditingController.text);
      setState(() {});
    } catch (e) {
      if (e is FormatException) {
        borderColor = Colors.red;
        // textEditingController.
        helper = "UUID格式错误";
        setState(() {});
      }
      log(e.toString());
    }
  }

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        return SingleChildScrollView(
          physics: const BouncingScrollPhysics(),
          child: ConstrainedBox(
            constraints: BoxConstraints(minHeight: constraints.maxHeight),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Center(
                  child: Container(
                    padding: const EdgeInsets.all(10.0),
                    width:
                        min(1000, constraints.maxWidth - 20), // 确保在小屏幕上也能正常显示
                    child: TextField(
                      controller: textEditingController,
                      onEditingComplete: onEditingComplete,
                      decoration: InputDecoration(
                        labelText: "请在此处输入需要解析的UUID",
                        helperText: helper,
                        helperStyle: const TextStyle(color: Colors.grey),
                        contentPadding: const EdgeInsets.all(10),
                        border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(10),
                          borderSide: BorderSide(color: borderColor),
                        ),
                        filled: true,
                        hintText: "请在此处输入需要解析的UUID",
                        hintStyle: const TextStyle(color: Colors.grey),
                      ),
                    ),
                  ),
                ),
                if (analysis != null)
                  ...analysis!.displayMap.entries.map((e) {
                    return Center(
                      child: Container(
                        padding: const EdgeInsets.all(10.0),
                        width: min(1000, constraints.maxWidth - 20),
                        decoration: BoxDecoration(
                          color: Theme.of(context).cardColor,
                          borderRadius: BorderRadius.circular(8.0),
                          boxShadow: [
                            BoxShadow(
                              color:
                                  Theme.of(context).shadowColor.withAlpha(200),
                              spreadRadius: 2,
                              blurRadius: 5,
                              offset: const Offset(0, 3),
                            ),
                          ],
                        ),
                        margin: const EdgeInsets.symmetric(vertical: 8.0),
                        child: Column(
                          children: [
                            Text(
                              e.key,
                              style: const TextStyle(
                                fontSize: 20.0,
                                fontWeight: FontWeight.w500,
                              ),
                            ),
                            const SizedBox(height: 10.0),
                            SingleChildScrollView(
                              scrollDirection: Axis.horizontal,
                              child: SelectableText(
                                e.value.toString(),
                                style: GoogleFonts.robotoMono(fontSize: 16.0),
                              ),
                            ),
                          ],
                        ),
                      ),
                    );
                  }),
              ],
            ),
          ),
        );
      },
    );
  }
}
