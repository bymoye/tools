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

  BigInt get timeLow {
    return BigInt.parse(uuid.substring(0, 8), radix: 16);
  }

  BigInt get timeMid {
    return BigInt.parse(uuid.substring(9, 13), radix: 16);
  }

  BigInt get timeHigh {
    return BigInt.parse(uuid.substring(14, 18), radix: 16);
  }

  BigInt get bigTime {
    BigInt mark = BigInt.from(0x0fff);
    if (version == 1) {
      return ((timeHigh & mark) << 48) | (timeMid << 32) | timeLow;
    }
    if (version == 6) {
      return (timeLow << 28) | (timeMid << 12) | (timeLow & mark);
    }
    if (version == 7) {
      return BigInt.parse(uuid.substring(0, 8) + uuid.substring(9, 13),
          radix: 16);
    }
    return BigInt.from(0);
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
      return DateTime.utc(1582, 10, 15).add(
        Duration(microseconds: (bigTime ~/ BigInt.from(10)).toInt()),
      );
    }
    if (version == 7) {
      return DateTime.fromMillisecondsSinceEpoch(bigTime.toInt(), isUtc: true);
    }
    return DateTime.fromMillisecondsSinceEpoch(0);
  }

  BigInt get toIntegerValue {
    return BigInt.parse(uuid.replaceAll("-", ""), radix: 16);
  }

  Map<String, dynamic> get displayMap {
    final Map<String, dynamic> map = {
      "UUID": uuid,
      "整数值": toIntegerValue.toString(),
      "版本": version,
      "变种": variant,
    };
    if ([1, 6, 7].contains(version)) {
      map["时间戳"] = bigTime;
      map["时间"] = timeValue.toIso8601String();
    }
    map["位布局"] = bitLayout;
    return map;
  }
}
