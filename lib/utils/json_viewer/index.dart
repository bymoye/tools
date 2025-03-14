import 'package:flutter/material.dart';

/// Thanks to [flutter_json_viewer2](https://pub.dev/packages/flutter_json_viewer2)
/// Modified by [nazo](https://github.com/bymoye/)
class SubController {
  bool open = false;
  List<JsonObjectViewerState> that1 = [];
  List<JsonArrayViewerState> that2 = [];

  associate({JsonObjectViewerState? it, JsonArrayViewerState? it2}) {
    if (it != null) {
      that1.add(it);
    }
    if (it2 != null) {
      that2.add(it2);
    }
  }

  set(bool e) {
    open = e;
    for (var el in that1) {
      el.changeOpenState(e);
    }
    for (var el in that2) {
      el.changeOpenState(e);
    }
  }
}

class JsonViewer extends StatefulWidget {
  final dynamic jsonObj;

  final bool isOpen;
  final Function(dynamic val)? onTap;
  const JsonViewer(this.jsonObj, {super.key, this.isOpen = false, this.onTap});

  @override
  State<JsonViewer> createState() => JsonViewerState();
}

class JsonViewerState extends State<JsonViewer> {
  bool isOpen = false;
  final SubController subController = SubController();
  final key = GlobalKey();

  @override
  void initState() {
    isOpen = widget.isOpen;
    super.initState();
  }

  changeOpeningState(bool isOpen2) {
    isOpen = isOpen2;
    subController.set(isOpen2);
  }

  @override
  Widget build(BuildContext context) {
    return KeyedSubtree(
      key: key,
      child: getContentWidget(widget.jsonObj),
    );
  }

  getContentWidget(dynamic content) {
    if (content == null) {
      return SelectableText(
        '{}',
        onTap: () {
          if (widget.onTap != null) {
            widget.onTap!('{}');
          }
        },
      );
    } else if (content is List) {
      return JsonArrayViewer(content,
          notRoot: false,
          controller: subController,
          openStateDefault: subController.open,
          onTap: widget.onTap);
    } else {
      return JsonObjectViewer(content,
          notRoot: false,
          controller: subController,
          openStateDefault: subController.open,
          onTap: widget.onTap);
    }
  }
}

class JsonObjectViewer extends StatefulWidget {
  final Map<String, dynamic> jsonObj;
  final bool notRoot;
  final SubController controller;
  final bool openStateDefault;
  final Function(dynamic val)? onTap;

  const JsonObjectViewer(
    this.jsonObj, {
    super.key,
    this.notRoot = false,
    required this.controller,
    required this.openStateDefault,
    this.onTap,
  });

  @override
  State<JsonObjectViewer> createState() => JsonObjectViewerState();
}

class JsonObjectViewerState extends State<JsonObjectViewer> {
  Map<String, bool> openFlag = {};

  @override
  initState() {
    widget.controller.associate(it: this);
    _setStateWithoutChange(widget.openStateDefault);
    super.initState();
  }

  _setStateWithoutChange(bool a) {
    for (MapEntry entry in widget.jsonObj.entries) {
      bool ex = isExtensible(entry.value);
      bool ink = isInkWell(entry.value);
      if (ex && ink) {
        openFlag[entry.key] = a;
      }
    }
  }

  changeOpenState(bool a) {
    if (mounted) {
      setState(() {
        _setStateWithoutChange(a);
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    if (widget.notRoot) {
      return Container(
        padding: EdgeInsets.only(left: 14.0),
        child: Column(
            crossAxisAlignment: CrossAxisAlignment.start, children: _getList()),
      );
    }
    return Column(
        crossAxisAlignment: CrossAxisAlignment.start, children: _getList());
  }

  _getList() {
    List<Widget> list = [];
    for (MapEntry entry in widget.jsonObj.entries) {
      bool ex = isExtensible(entry.value);
      bool ink = isInkWell(entry.value);
      list.add(Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          ex
              ? ((openFlag[entry.key] ?? false)
                  ? Icon(Icons.arrow_drop_down,
                      size: 14, color: Colors.grey[700])
                  : Icon(Icons.arrow_right, size: 14, color: Colors.grey[700]))
              : const Icon(
                  Icons.arrow_right,
                  color: Color.fromARGB(0, 0, 0, 0),
                  size: 14,
                ),
          (ex && ink)
              ? InkWell(
                  child: SelectableText(
                    entry.key,
                    style: DefaultTextStyle.of(context).style,
                    onTap: () {
                      if (widget.onTap != null) {
                        widget.onTap!(entry.key);
                      }
                      setState(() {
                        openFlag[entry.key] = !(openFlag[entry.key] ?? false);
                      });
                    },
                  ),
                  onTap: () {})
              : SelectableText(entry.key, onTap: () {
                  if (widget.onTap != null) {
                    widget.onTap!(entry.key);
                  }
                }, style: DefaultTextStyle.of(context).style
                  // style: TextStyle(
                  //     color: entry.value == null
                  //         ? Colors.grey
                  //         : Colors.purple[900])
                  ),
          SelectableText(
            ':',
            style: TextStyle(color: Colors.grey),
          ),
          const SizedBox(width: 3),
          getValueWidget(entry)
        ],
      ));
      list.add(const SizedBox(height: 4));
      if (openFlag[entry.key] ?? false) {
        list.add(
            getContentWidget(entry.value, widget.controller, widget.onTap));
      }
    }
    return list;
  }

  static getContentWidget(dynamic content, SubController controller, onTap) {
    if (content is List) {
      return JsonArrayViewer(
        content,
        notRoot: true,
        controller: controller,
        openStateDefault: controller.open,
        onTap: onTap,
      );
    } else {
      return JsonObjectViewer(content,
          notRoot: true,
          controller: controller,
          openStateDefault: controller.open,
          onTap: onTap);
    }
  }

  static isInkWell(dynamic content) {
    if (content == null) {
      return false;
    } else if (content is int) {
      return false;
    } else if (content is String) {
      return false;
    } else if (content is bool) {
      return false;
    } else if (content is double) {
      return false;
    } else if (content is List) {
      if (content.isEmpty) {
        return false;
      } else {
        return true;
      }
    }
    return true;
  }

  getValueWidget(MapEntry entry) {
    if (entry.value == null) {
      return Expanded(
          child: SelectableText(
        'undefined',
        onTap: () {
          if (widget.onTap != null) {
            widget.onTap!('undefined');
          }
        },
        style: TextStyle(color: Colors.grey),
      ));
    } else if (entry.value is int) {
      return Expanded(
          child: SelectableText(
        entry.value.toString(),
        onTap: () {
          if (widget.onTap != null) {
            widget.onTap!(entry.value.toString());
          }
        },
        style: TextStyle(color: Colors.teal),
      ));
    } else if (entry.value is String) {
      return Expanded(
          child: SelectableText(
        '"${entry.value}"',
        onTap: () {
          if (widget.onTap != null) {
            widget.onTap!('"${entry.value}"');
          }
        },
        style: TextStyle(color: Colors.redAccent),
      ));
    } else if (entry.value is bool) {
      return Expanded(
          child: SelectableText(
        entry.value.toString(),
        onTap: () {
          if (widget.onTap != null) {
            widget.onTap!(entry.value.toString());
          }
        },
        style: TextStyle(color: Colors.purple),
      ));
    } else if (entry.value is double) {
      return Expanded(
          child: SelectableText(
        entry.value.toString(),
        onTap: () {
          if (widget.onTap != null) {
            widget.onTap!(entry.value.toString());
          }
        },
        style: TextStyle(color: Colors.teal),
      ));
    } else if (entry.value is List) {
      if (entry.value.isEmpty) {
        return SelectableText(
          'Array[0]',
          style: TextStyle(color: Colors.grey),
          onTap: () {
            if (widget.onTap != null) {
              widget.onTap!('Array[0]');
            }
          },
        );
      } else {
        return InkWell(
            child: SelectableText(
              'Array<${getTypeName(entry.value[0])}>[${entry.value.length}]',
              style: TextStyle(color: Colors.grey),
              onTap: () {
                if (widget.onTap != null) {
                  widget.onTap!(
                      'Array<${getTypeName(entry.value[0])}>[${entry.value.length}]');
                }
                setState(() {
                  openFlag[entry.key] = !(openFlag[entry.key] ?? false);
                });
              },
            ),
            onTap: () {});
      }
    }
    return InkWell(
        child: SelectableText(
          'Object',
          style: TextStyle(color: Colors.grey),
          onTap: () {
            if (widget.onTap != null) {
              widget.onTap!('Object');
            }
            setState(() {
              openFlag[entry.key] = !(openFlag[entry.key] ?? false);
            });
          },
        ),
        onTap: () {});
  }

  static isExtensible(dynamic content) {
    if (content == null) {
      return false;
    } else if (content is int) {
      return false;
    } else if (content is String) {
      return false;
    } else if (content is bool) {
      return false;
    } else if (content is double) {
      return false;
    }
    return true;
  }

  static getTypeName(dynamic content) {
    if (content is int) {
      return 'int';
    } else if (content is String) {
      return 'String';
    } else if (content is bool) {
      return 'bool';
    } else if (content is double) {
      return 'double';
    } else if (content is List) {
      return 'List';
    }
    return 'Object';
  }
}

class JsonArrayViewer extends StatefulWidget {
  final List<dynamic> jsonArray;
  final bool notRoot;
  final SubController controller;
  final bool openStateDefault;
  final Function(dynamic val)? onTap;

  const JsonArrayViewer(this.jsonArray,
      {super.key,
      this.notRoot = false,
      required this.controller,
      required this.openStateDefault,
      this.onTap});

  @override
  State<JsonArrayViewer> createState() => JsonArrayViewerState();
}

class JsonArrayViewerState extends State<JsonArrayViewer> {
  late List<bool> openFlag;

  @override
  void initState() {
    super.initState();
    openFlag = List.filled(widget.jsonArray.length, false);
    _changeOPenStateWithoutChanget(widget.openStateDefault);
    widget.controller.associate(it2: this);
  }

  @override
  Widget build(BuildContext context) {
    if (widget.notRoot) {
      return Container(
          padding: EdgeInsets.only(left: 14.0),
          child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: _getList()));
    }
    return Column(
        crossAxisAlignment: CrossAxisAlignment.start, children: _getList());
  }

  _changeOPenStateWithoutChanget(bool a) {
    for (dynamic content in widget.jsonArray) {
      bool ex = JsonObjectViewerState.isExtensible(content);
      bool ink = JsonObjectViewerState.isInkWell(content);
      if ((ex && ink)) {
        openFlag = List.filled(widget.jsonArray.length, a);
      }
    }
  }

  changeOpenState(bool a) {
    if (mounted) {
      setState(() {
        _changeOPenStateWithoutChanget(a);
      });
    }
  }

  _getList() {
    List<Widget> list = [];
    int i = 0;
    for (dynamic content in widget.jsonArray) {
      bool ex = JsonObjectViewerState.isExtensible(content);
      bool ink = JsonObjectViewerState.isInkWell(content);
      list.add(Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          ex
              ? ((openFlag[i])
                  ? Icon(Icons.arrow_drop_down,
                      size: 14, color: Colors.grey[700])
                  : Icon(Icons.arrow_right, size: 14, color: Colors.grey[700]))
              : const Icon(
                  Icons.arrow_right,
                  color: Color.fromARGB(0, 0, 0, 0),
                  size: 14,
                ),
          (ex && ink)
              ? getInkWell(i)
              : SelectableText('[$i]', onTap: () {
                  if (widget.onTap != null) {
                    widget.onTap!('[$i]');
                  }
                }, style: DefaultTextStyle.of(context).style
                  // style: TextStyle(
                  //     color:
                  //         content == null ? Colors.grey : Colors.purple[900]),
                  ),
          SelectableText(
            ':',
            style: TextStyle(color: Colors.grey),
          ),
          const SizedBox(width: 3),
          getValueWidget(content, i)
        ],
      ));
      list.add(const SizedBox(height: 4));
      if (openFlag[i]) {
        list.add(JsonObjectViewerState.getContentWidget(
            content, widget.controller, widget.onTap));
      }
      i++;
    }
    return list;
  }

  getInkWell(int index) {
    return InkWell(
        child: SelectableText(
          '[$index]',
          style: DefaultTextStyle.of(context).style,
          onTap: () {
            if (widget.onTap != null) {
              widget.onTap!('[$index]');
            }
            setState(() {
              openFlag[index] = !(openFlag[index]);
            });
          },
        ),
        onTap: () {});
  }

  getValueWidget(dynamic content, int index) {
    if (content == null) {
      return Expanded(
          child: SelectableText(
        'undefined',
        onTap: () {
          if (widget.onTap != null) {
            widget.onTap!('undefined');
          }
        },
        style: TextStyle(color: Colors.grey),
      ));
    } else if (content is int) {
      return Expanded(
          child: SelectableText(
        content.toString(),
        onTap: () {
          if (widget.onTap != null) {
            widget.onTap!(content.toString());
          }
        },
        style: TextStyle(color: Colors.teal),
      ));
    } else if (content is String) {
      return Expanded(
          child: SelectableText(
        '"$content"',
        onTap: () {
          if (widget.onTap != null) {
            widget.onTap!('"$content"');
          }
        },
        style: TextStyle(color: Colors.redAccent),
      ));
    } else if (content is bool) {
      return Expanded(
          child: SelectableText(
        content.toString(),
        onTap: () {
          if (widget.onTap != null) {
            widget.onTap!(content.toString());
          }
        },
        style: TextStyle(color: Colors.purple),
      ));
    } else if (content is double) {
      return Expanded(
          child: SelectableText(
        content.toString(),
        onTap: () {
          if (widget.onTap != null) {
            widget.onTap!(content.toString());
          }
        },
        style: TextStyle(color: Colors.teal),
      ));
    } else if (content is List) {
      if (content.isEmpty) {
        return SelectableText(
          'Array[0]',
          onTap: () {
            if (widget.onTap != null) {
              widget.onTap!('Array[0]');
            }
          },
          style: TextStyle(color: Colors.grey),
        );
      } else {
        return InkWell(
            child: SelectableText(
              'Array<${JsonObjectViewerState.getTypeName(content)}>[${content.length}]',
              style: TextStyle(color: Colors.grey),
              onTap: () {
                if (widget.onTap != null) {
                  widget.onTap!(
                      'Array<${JsonObjectViewerState.getTypeName(content)}>[${content.length}]');
                }
                setState(() {
                  openFlag[index] = !(openFlag[index]);
                });
              },
            ),
            onTap: () {});
      }
    }
    return InkWell(
        child: SelectableText(
          'Object',
          style: TextStyle(color: Colors.grey),
          onTap: () {
            if (widget.onTap != null) {
              widget.onTap!('Object');
            }
            setState(() {
              openFlag[index] = !(openFlag[index]);
            });
          },
        ),
        onTap: () {});
  }
}
