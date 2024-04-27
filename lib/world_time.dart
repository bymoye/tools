import 'package:flutter/material.dart';
import 'package:tools/agent/api.dart';

class WorldTime extends StatelessWidget {
  const WorldTime({super.key});

  @override
  Widget build(BuildContext context) {
    // APIProvider.getUa();
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Column(
        // mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          const Text("世界时间"),
          const Text("Hello WorldTime!"),
          const Text("说明"),
          const Text("时间由以下算法计算:"
              "1. 后端服务器每分钟与 NTP 服务器同步一次"
              "2. 前端每分钟请求后端服务器时间, 由后端根据 NTP 服务器缓存时间返回当前时间"
              "客户端发起请求时记录本地时间为T1(Transmit Timestamp)"
              "服务器接受到请求时记录服务器时间T2(Receive Timestamp)"
              "服务器根据 NTP 缓存和当前时间计算最终时间返回T3(Origin Timestamp)"
              "客户端接受到数据时记录本地时间T4(Destination Timestamp)")
        ],
      ),
    );
  }
}
