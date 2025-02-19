import { ReactNode, useState } from 'react';
import { Pressable, Animated, StyleProp, ViewStyle } from 'react-native';

type Props = {
  onPress: () => void;
  children: ReactNode;
  animatedViewStyle?: StyleProp<ViewStyle>;
  pressableViewStyle?: StyleProp<ViewStyle>;
};

export default function PressableAnimaionView({
  onPress,
  children,
  animatedViewStyle,
  pressableViewStyle,
}: Props) {
  const [scale] = useState(new Animated.Value(1));

  const handlePressIn = () => {
    Animated.timing(scale, {
      toValue: 0.9,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(scale, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
    onPress();
  };

  return (
    <Animated.View style={[{ transform: [{ scale }] }, animatedViewStyle]}>
      <Pressable
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={pressableViewStyle}
      >
        {children}
      </Pressable>
    </Animated.View>
  );
}
