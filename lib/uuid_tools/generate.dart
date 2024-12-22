import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:uuid/uuid.dart';
import 'package:web/web.dart' as web;

class UUuidGeneratePage extends StatefulWidget {
  const UUuidGeneratePage({super.key});

  @override
  State<UUuidGeneratePage> createState() => _UUuidGeneratePaageState();
}

enum UuidVersion { v1, v4, v5, v6, v7, v8 }

class _UUuidGeneratePaageState extends State<UUuidGeneratePage> {
  final Uuid uuid = const Uuid();

  static const List<Namespace> namespaces = [
    Namespace.dns,
    Namespace.url,
    Namespace.oid,
    Namespace.x500,
    Namespace.nil
  ];
  Namespace selectNamespace = Namespace.dns;

  final TextEditingController v5NametextEditingController =
      TextEditingController();

  /// 生成数量
  final TextEditingController generateCountTextEditingController =
      TextEditingController(text: '1');

  Map<UuidVersion, Function()> get uuidVersions => {
        UuidVersion.v1: () => uuid.v1(),
        UuidVersion.v4: () => uuid.v4(),
        UuidVersion.v5: () =>
            uuid.v5(selectNamespace.value, v5NametextEditingController.text),
        UuidVersion.v6: () => uuid.v6(),
        UuidVersion.v7: () => uuid.v7(),
        UuidVersion.v8: () => uuid.v8(),
      };

  UuidVersion selectUuidVersion = UuidVersion.v1;

  /// 生成后的列表
  // String uuidResult = '';
  List<String> uuidResult = [];

  String get uuidDisplay => uuidResult.join('\n');

  /// 生成参数
  Widget _buildGenerateParams() {
    return Card(
      elevation: 8,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(16),
      ),
      color: Theme.of(context).brightness == Brightness.dark
          ? Colors.grey[850]
          : Colors.white,
      child: Padding(
        padding: const EdgeInsets.all(24.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            /// UUID版本选择
            Row(
              children: [
                SizedBox(
                  width: 100,
                  child: Text(
                    'UUID版本：',
                    style: TextStyle(
                      fontWeight: FontWeight.bold,
                      color: Theme.of(context).textTheme.bodyMedium!.color,
                    ),
                    textAlign: TextAlign.right,
                  ),
                ),
                Expanded(
                  child: DropdownButtonHideUnderline(
                    child: Container(
                      decoration: BoxDecoration(
                        border: Border.all(
                          color: Theme.of(context).dividerColor,
                        ),
                        borderRadius: BorderRadius.circular(5),
                      ),
                      child: DropdownButton(
                        isExpanded: true,
                        padding: const EdgeInsets.symmetric(horizontal: 20),
                        value: selectUuidVersion,
                        items: UuidVersion.values
                            .map(
                              (e) => DropdownMenuItem(
                                value: e,
                                child: Text(e.name),
                              ),
                            )
                            .toList(),
                        onChanged: (UuidVersion? value) {
                          if (value == null) return;
                          setState(() {
                            selectUuidVersion = value;
                          });
                        },
                      ),
                    ),
                  ),
                )
              ],
            ),

            /// UUID版本为v5时的命名空间和名称
            if (selectUuidVersion == UuidVersion.v5) ...[
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 20),
                child: Row(
                  children: [
                    SizedBox(
                      width: 100,
                      child: Text(
                        '命名空间：',
                        style: TextStyle(
                          fontWeight: FontWeight.bold,
                          color: Theme.of(context).textTheme.bodyMedium!.color,
                        ),
                        textAlign: TextAlign.right,
                      ),
                    ),
                    Expanded(
                      child: DropdownButtonHideUnderline(
                        child: Container(
                          decoration: BoxDecoration(
                            border: Border.all(
                              color: Theme.of(context).dividerColor,
                            ),
                            borderRadius: BorderRadius.circular(5),
                          ),
                          child: DropdownButton(
                            isExpanded: true,
                            padding: const EdgeInsets.symmetric(horizontal: 20),
                            value: selectNamespace,

                            /// 选择后的显示

                            items: namespaces
                                .map((e) => DropdownMenuItem(
                                      value: e,
                                      child: Text("${e.name}(${e.value})",
                                          overflow: TextOverflow.ellipsis),
                                    ))
                                .toList(),
                            onChanged: (Namespace? value) {
                              if (value == null) return;
                              setState(() {
                                selectNamespace = value;
                              });
                            },
                          ),
                        ),
                      ),
                    )
                  ],
                ),
              ),
              Row(
                children: [
                  SizedBox(
                    width: 100,
                    child: Text(
                      '名称：',
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                        color: Theme.of(context).textTheme.bodyMedium!.color,
                      ),
                      textAlign: TextAlign.right,
                    ),
                  ),
                  Expanded(
                    child: TextField(
                      controller: v5NametextEditingController,
                      decoration: InputDecoration(
                        border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(10),
                          borderSide: BorderSide(
                            color: Theme.of(context).dividerColor,
                          ),
                        ),
                        filled: true,
                        hintText: '请输入名称',
                        hintStyle: const TextStyle(color: Colors.grey),
                      ),
                    ),
                  ),
                ],
              ),
            ],
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 20),
              child: Row(
                children: [
                  SizedBox(
                    width: 100,
                    child: Text(
                      "生成数量：",
                      textAlign: TextAlign.right,
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                        color: Theme.of(context).textTheme.bodyMedium!.color,
                      ),
                    ),
                  ),
                  Expanded(
                    child: TextField(
                      controller: generateCountTextEditingController,
                      inputFormatters: [
                        FilteringTextInputFormatter.allow(RegExp(r"^\d*$")),
                      ],
                      decoration: InputDecoration(
                        border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(10),
                          borderSide: BorderSide(
                            color: Theme.of(context).dividerColor,
                          ),
                        ),
                        filled: true,
                        hintText: '请输入生成数量',
                        hintStyle: const TextStyle(color: Colors.grey),
                      ),
                    ),
                  ),
                ],
              ),
            ),
            Center(
              child: ElevatedButton(
                onPressed: () {
                  final int count =
                      int.tryParse(generateCountTextEditingController.text) ??
                          1;
                  if (count <= 0) {
                    ScaffoldMessenger.of(context).showSnackBar(
                      const SnackBar(
                        content: Text('生成数量必须大于0'),
                      ),
                    );
                    return;
                  }
                  if (count > 10000) {
                    ScaffoldMessenger.of(context).showSnackBar(
                      const SnackBar(
                        content: Text('生成数量不能超过10000.'),
                      ),
                    );
                    return;
                  }
                  final List<String> uuids = List.generate(
                      count, (index) => uuidVersions[selectUuidVersion]!());
                  setState(() {
                    uuidResult = uuids;
                  });
                },
                child: const Text('生成'),
              ),
            )
          ],
        ),
      ),
    );
  }

  /// 生成结果
  Widget _buildGenerateResult() {
    if (uuidResult.isEmpty) {
      return const SizedBox();
    }
    return Card(
      elevation: 8,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(16),
      ),
      color: Theme.of(context).brightness == Brightness.dark
          ? Colors.grey[850]
          : Colors.white,
      child: Padding(
        padding: const EdgeInsets.all(24.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Text(
              '生成结果(${uuidResult.length}个)',
              style: TextStyle(
                fontWeight: FontWeight.bold,
                color: Theme.of(context).textTheme.bodyMedium!.color,
              ),
            ),
            const SizedBox(height: 10),
            SingleChildScrollView(
              child: Container(
                padding: const EdgeInsets.all(10.0),
                decoration: BoxDecoration(
                  color: Theme.of(context).cardColor,
                  borderRadius: BorderRadius.circular(8.0),
                ),
                child: SizedBox(
                  height: max(
                    100,
                    min(300, uuidResult.length * 30.0),
                  ),
                  child: SelectableText(
                    uuidDisplay,
                    style: const TextStyle(fontSize: 16.0),
                  ),
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 10),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                // mainAxisSize: MainAxisSize.min,
                children: [
                  /// 复制到剪辑版
                  ElevatedButton(
                    onPressed: () {
                      Clipboard.setData(ClipboardData(text: uuidDisplay));
                      ScaffoldMessenger.of(context).showSnackBar(
                        const SnackBar(
                          content: Text('已复制到剪贴板'),
                        ),
                      );
                    },
                    child: const Text('复制到剪贴板'),
                  ),

                  /// 下载文件
                  ElevatedButton(
                    onPressed: () {
                      web.HTMLAnchorElement()
                        ..href = UriData.fromString(uuidDisplay).toString()
                        ..setAttribute('download',
                            'uuid_list_${DateTime.now().millisecondsSinceEpoch}.txt')
                        ..click()
                        ..remove();
                    },
                    child: const Text('下载文件'),
                  ),
                ],
              ),
            )
          ],
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        return ConstrainedBox(
          constraints: BoxConstraints(minHeight: constraints.maxHeight),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Center(
                child: Container(
                  padding: const EdgeInsets.all(10.0),
                  constraints: BoxConstraints(
                    maxWidth: min(constraints.maxWidth, 800),
                  ),
                  child: Column(
                    children: [
                      /// 请选择UUID版本
                      _buildGenerateParams(),
                      _buildGenerateResult()
                    ],
                  ),
                ),
              ),
            ],
          ),
        );
      },
    );
  }
}
