import 'dart:convert' show utf8, json;
import 'package:flutter/material.dart';
// ignore: implementation_imports
import 'package:http2/src/hpack/huffman_table.dart' as hpack;

class HpackHuffmanPage extends StatefulWidget {
  const HpackHuffmanPage({super.key});

  @override
  State<HpackHuffmanPage> createState() => _HpackHuffmanPageState();
}

class _HpackHuffmanPageState extends State<HpackHuffmanPage>
    with SingleTickerProviderStateMixin {
  final TextEditingController _encodeInputController = TextEditingController();
  final TextEditingController _decodeInputController = TextEditingController();
  final TextEditingController _outputController = TextEditingController();
  bool _isEncodeMode = true; // true: 编码模式, false: 解码模式
  late AnimationController _animationController; // 控制按钮缩放动画

  @override
  void initState() {
    super.initState();
    _animationController = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 100),
    );
  }

  @override
  void dispose() {
    _animationController.dispose();
    _encodeInputController.dispose();
    _decodeInputController.dispose();
    _outputController.dispose();
    super.dispose();
  }

  // 编码函数，返回三种结果
  Map<String, dynamic> encode(String input) {
    List<int> rawEncoded = [];
    List<int> fullBytes = [];
    List<String> byteStrings = [];
    int count = 0;

    List<int> inputBytes = utf8.encode(input);
    rawEncoded = hpack.http2HuffmanCodec.encode(inputBytes);

    int hl = rawEncoded.length | 0x80;
    fullBytes.add(hl);
    byteStrings.add(_renderByte(hl));

    for (var b in rawEncoded) {
      fullBytes.add(b);
      byteStrings.add(_renderByte(b));
      count++;
    }

    String nginxString =
        'static const u_char nginx[${count + 1}] = {${byteStrings.join(', ')}};';

    return {
      'rawEncoded': rawEncoded,
      'fullBytes': fullBytes,
      'nginxString': nginxString,
    };
  }

  // 解码函数，支持三种格式
  String decode(String input) {
    List<int> huffmanBytes;
    bool isFullBytes = false;

    try {
      if (input.trim().startsWith('[') && input.trim().endsWith(']')) {
        huffmanBytes = List<int>.from(json.decode(input));
        if (huffmanBytes.isNotEmpty && (huffmanBytes[0] & 0x80) != 0) {
          isFullBytes = true;
        }
      } else if (input.contains('{') && input.contains('}')) {
        final regex = RegExp(r'\{([^}]+)\}');
        final match = regex.firstMatch(input);
        if (match == null) {
          throw Exception('无效的 nginx 字符串格式');
        }
        final byteString = match.group(1)!;
        huffmanBytes =
            byteString
                .split(',')
                .map(
                  (s) => int.parse(s.trim().replaceFirst('0x', ''), radix: 16),
                )
                .toList();
        if (huffmanBytes.isNotEmpty && (huffmanBytes[0] & 0x80) != 0) {
          isFullBytes = true;
        }
      } else {
        throw Exception(
          '请输入 JSON 数组（[140, 153, ...] 或 [133, 140, ...]）或 nginx 字符串（{0x83, ...}）',
        );
      }
    } catch (e) {
      return '解析输入失败：$e';
    }

    if (huffmanBytes.isEmpty) {
      return '错误：字节数组为空';
    }

    if (isFullBytes) {
      int hl = huffmanBytes[0] & 0x7F;
      if (hl != huffmanBytes.length - 1) {
        return '错误：长度前缀 ($hl) 与字节数 (${huffmanBytes.length - 1}) 不匹配';
      }
      huffmanBytes = huffmanBytes.sublist(1);
    }

    try {
      List<int> decodedBytes = hpack.http2HuffmanCodec.decode(huffmanBytes);
      return utf8.decode(decodedBytes);
    } catch (e) {
      return '解码失败：$e';
    }
  }

  // 格式化字节为 0xXX
  String _renderByte(int b) {
    return '0x${b.toRadixString(16).padLeft(2, '0')}';
  }

  // 处理输入（编码或解码）
  void _processInput() async {
    final String input =
        (_isEncodeMode ? _encodeInputController : _decodeInputController).text
            .trim();
    if (input.isEmpty) {
      setState(() {
        _outputController.text = '请输入内容！';
      });
      return;
    }

    // 触发按钮缩放动画
    await _animationController.forward();
    await _animationController.reverse();

    try {
      if (_isEncodeMode) {
        final result = encode(input);
        final output = '''
原始 Huffman 编码数组:
${result['rawEncoded']}

完整字节数组:
${result['fullBytes']}

nginx 风格数组:
${result['nginxString']}
''';
        setState(() {
          _outputController.text = output;
        });
      } else {
        final result = decode(input);
        setState(() {
          _outputController.text = '''
解码结果:
$result
''';
        });
      }
    } catch (e) {
      setState(() {
        _outputController.text = '处理失败：$e';
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;

    return Scaffold(
      backgroundColor: colorScheme.surface,
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // 输入框
              Card(
                elevation: 4,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(12),
                ),
                color: colorScheme.surfaceContainer,
                child: Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: AnimatedSwitcher(
                    duration: const Duration(milliseconds: 400),
                    transitionBuilder: (child, animation) {
                      return FadeTransition(opacity: animation, child: child);
                    },
                    child: TextField(
                      key: ValueKey(_isEncodeMode),
                      controller:
                          _isEncodeMode
                              ? _encodeInputController
                              : _decodeInputController,
                      maxLines: 5,
                      decoration: InputDecoration(
                        border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(8),
                        ),
                        labelText:
                            _isEncodeMode
                                ? '输入字符串进行编码'
                                : '输入字节数组或 nginx 字符串进行解码',
                        labelStyle: TextStyle(
                          color: colorScheme.onSurfaceVariant,
                          fontSize: 16,
                        ),
                        floatingLabelStyle: TextStyle(
                          color: colorScheme.primary,
                          fontSize: 16,
                        ),
                        hintText:
                            _isEncodeMode
                                ? '例如: hello, world, bar'
                                : '例如: [131, 73, 80, 159], {0x83, 0x49, 0x50, 0x9f}, [73, 80, 159]',
                        hintStyle: TextStyle(
                          color: colorScheme.onSurfaceVariant.withAlpha(150),
                          fontSize: 14,
                        ),
                        alignLabelWithHint: true,
                        contentPadding: const EdgeInsets.symmetric(
                          vertical: 16,
                          horizontal: 12,
                        ),
                        prefixIcon: AnimatedSwitcher(
                          duration: const Duration(milliseconds: 400),
                          transitionBuilder: (child, animation) {
                            return FadeTransition(
                              opacity: animation,
                              child: child,
                            );
                          },
                          child: Icon(
                            _isEncodeMode ? Icons.text_fields : Icons.code,
                            key: ValueKey(_isEncodeMode),
                            color: colorScheme.primary,
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              ),

              // 操作按钮和模式切换（输入/输出框之间）
              const SizedBox(height: 20),
              AnimatedContainer(
                duration: const Duration(milliseconds: 300),
                curve: Curves.easeInOut,
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: [
                    Card(
                      elevation: 2,
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(20),
                      ),
                      child: ToggleButtons(
                        borderRadius: BorderRadius.circular(20),
                        selectedColor: colorScheme.onPrimary,
                        fillColor: colorScheme.primary,
                        color: colorScheme.primary,
                        constraints: const BoxConstraints(
                          minWidth: 100,
                          minHeight: 40,
                        ),
                        isSelected: [_isEncodeMode, !_isEncodeMode],
                        onPressed: (index) {
                          setState(() {
                            _isEncodeMode = index == 0;
                            _outputController.clear(); // 仅清空输出
                          });
                        },
                        children: [
                          AnimatedContainer(
                            duration: const Duration(milliseconds: 300),
                            curve: Curves.easeInOut,
                            padding: const EdgeInsets.symmetric(horizontal: 16),
                            child: const Text('编码'),
                          ),
                          AnimatedContainer(
                            duration: const Duration(milliseconds: 300),
                            curve: Curves.easeInOut,
                            padding: const EdgeInsets.symmetric(horizontal: 16),
                            child: const Text('解码'),
                          ),
                        ],
                      ),
                    ),
                    const SizedBox(width: 16),
                    // 操作按钮（右侧）
                    ScaleTransition(
                      scale: Tween(
                        begin: 1.0,
                        end: 0.9,
                      ).animate(_animationController),
                      child: ElevatedButton(
                        onPressed: _processInput,
                        style: ElevatedButton.styleFrom(
                          padding: const EdgeInsets.symmetric(
                            horizontal: 20,
                            vertical: 12,
                          ),
                          backgroundColor: colorScheme.primary,
                          foregroundColor: colorScheme.onPrimary,
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(12),
                          ),
                          elevation: 4,
                          splashFactory: NoSplash.splashFactory, // 禁用涟漪效果，突出缩放
                        ),
                        child: Row(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            AnimatedSwitcher(
                              duration: const Duration(milliseconds: 300),
                              transitionBuilder: (child, animation) {
                                return FadeTransition(
                                  opacity: animation,
                                  child: child,
                                );
                              },
                              child: Icon(
                                _isEncodeMode ? Icons.lock : Icons.lock_open,
                                key: ValueKey(_isEncodeMode),
                                size: 20,
                                color: colorScheme.onPrimary,
                              ),
                            ),
                            const SizedBox(width: 8), // 图标和文本间距
                            AnimatedSwitcher(
                              duration: const Duration(milliseconds: 300),
                              transitionBuilder: (child, animation) {
                                return FadeTransition(
                                  opacity: animation,
                                  child: child,
                                );
                              },
                              child: Text(
                                _isEncodeMode ? '编码' : '解码',
                                key: ValueKey(_isEncodeMode),
                                style: TextStyle(color: colorScheme.onPrimary),
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
              ),

              // 输出框
              const SizedBox(height: 20),
              Card(
                elevation: 4,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(12),
                ),
                color: colorScheme.surfaceContainer,
                child: Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        '结果',
                        style: TextStyle(
                          fontSize: 16,
                          fontWeight: FontWeight.w500,
                          color: colorScheme.onSurface,
                        ),
                      ),
                      const SizedBox(height: 10),
                      AnimatedSwitcher(
                        duration: const Duration(milliseconds: 400),
                        transitionBuilder: (child, animation) {
                          return FadeTransition(
                            opacity: animation,
                            child: child,
                          );
                        },
                        child: TextField(
                          key: ValueKey(_outputController.text),
                          controller: _outputController,
                          maxLines: 10,
                          readOnly: true,
                          decoration: InputDecoration(
                            border: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(8),
                            ),
                            hintText: '编码或解码结果',
                            hintStyle: TextStyle(
                              color: colorScheme.onSurfaceVariant,
                            ),
                            prefixIcon: Icon(
                              Icons.output,
                              color: colorScheme.primary,
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
