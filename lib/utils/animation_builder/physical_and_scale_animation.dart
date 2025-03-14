import 'package:flutter/material.dart';
import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';

class PhysicalAndScaleAnimation extends StatefulWidget {
  final Widget child;
  final AnimationParam animationParam;
  final AnimationController controller;
  final Offset clickPosition;

  const PhysicalAndScaleAnimation({
    super.key,
    required this.child,
    required this.controller,
    required this.animationParam,
    required this.clickPosition,
  });

  @override
  State<PhysicalAndScaleAnimation> createState() =>
      _PhysicalAndScaleAnimationState();
}

class _PhysicalAndScaleAnimationState extends State<PhysicalAndScaleAnimation>
    with SingleTickerProviderStateMixin {
  late Animation<Offset> _moveAnimation;
  late Animation<double> _scaleAnimation;

  @override
  Widget build(BuildContext context) {
    // 获取屏幕的宽度和高度
    final screenWidth = MediaQuery.of(context).size.width;
    final screenHeight = MediaQuery.of(context).size.height;

    // 计算目标位置：屏幕的中心
    final screenCenter = Offset(screenWidth / 2, screenHeight / 2);

    // 计算动画效果：从点击位置移动到屏幕中心
    _moveAnimation = Tween<Offset>(
      begin: widget.clickPosition,
      end: screenCenter,
    ).animate(
        CurvedAnimation(parent: widget.controller, curve: Curves.easeInOut));

    // 缩放动画：从小到大
    _scaleAnimation = Tween<double>(begin: 0.0, end: 1.0).animate(
      CurvedAnimation(parent: widget.controller, curve: Curves.bounceInOut),
    );

    return AnimatedBuilder(
      animation: widget.controller,
      builder: (context, child) {
        return LayoutBuilder(
          builder: (context, constraints) {
            // 获取父容器的宽高
            double parentWidth = constraints.maxWidth;
            double parentHeight = constraints.maxHeight;

            // 确保子组件的中心位置
            final dx = _moveAnimation.value.dx - parentWidth / 2;
            final dy = _moveAnimation.value.dy - parentHeight / 2;

            return Transform.translate(
              offset: Offset(dx, dy), // 确保从点击位置到屏幕中心
              child: Transform.scale(
                scale: _scaleAnimation.value, // 缩放动画
                child: Material(
                  color: Colors.transparent,
                  child: widget.child,
                ),
              ),
            );
          },
        );
      },
    );
  }
}
