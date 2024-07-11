import 'package:uuid/uuid.dart';

import 'uuid_bit_layout.dart';

class UuidAnalysis extends UuidValue {
  UuidAnalysis(super.uuid) {
    super.validate();
  }

  String get variant {
    String variantByte = uuid.substring(19, 20).toUpperCase();

    int? variantInt = int.tryParse(variantByte);
    if (variantInt != null && variantInt >= 1 && variantInt <= 7) {
      return '为 NCS 兼容性保留';
    } else if (["8", "9", "A", "B"].contains(variantByte)) {
      return '在 RFC 9562 中指定';
    } else if (["C", "D"].contains(variantByte)) {
      return '为与 Microsoft 兼容而保留';
    } else if (["E", "F"].contains(variantByte)) {
      return '保留以供将来定义';
    } else {
      return "未知变种";
    }
  }

  int get timeLow {
    return int.parse(uuid.substring(0, 8), radix: 16);
  }

  int get timeMid {
    return int.parse(uuid.substring(9, 13), radix: 16);
  }

  int get timeHigh {
    return int.parse(uuid.substring(14, 18), radix: 16);
  }

  @override
  int get time {
    if (version == 1) {
      return ((timeHigh & 0xfff) << 48) | (timeMid << 32) | timeLow;
    }
    if (version == 6) {
      return (timeLow << 28) | (timeMid << 12) | ((timeLow & 0x0FFF));
    }
    if (version == 7) {
      return int.parse(uuid.substring(0, 8) + uuid.substring(9, 13), radix: 16);
    }
    return -1;
  }

  String get bitLayout {
    return switch (version) {
      1 => UuidBitLayout.v1,
      3 => UuidBitLayout.v3,
      4 => UuidBitLayout.v4,
      5 => UuidBitLayout.v5,
      6 => UuidBitLayout.v6,
      7 => UuidBitLayout.v7,
      8 => UuidBitLayout.v8,
      _ => "未知版本"
    };
  }

  DateTime get timeValue {
    if ([1, 6].contains(version)) {
      return DateTime.utc(1582, 10, 15).add(Duration(microseconds: time ~/ 10));
    }
    if (version == 7) {
      return DateTime.fromMillisecondsSinceEpoch(time, isUtc: true);
    }
    return DateTime.fromMillisecondsSinceEpoch(0);
  }
}
