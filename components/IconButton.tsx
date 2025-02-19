import { Pressable, StyleSheet, Text, Animated } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState } from 'react';
import { ColorsType } from '@/utils/types/ColorsType';

type Props = {
  onPress: () => void;
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
};

export default function IconButton({ onPress, label, icon }: Props) {
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
    <Animated.View style={[{ transform: [{ scale }] }, styles.buttonWrap]}>
      <Pressable
        style={styles.button}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <MaterialIcons name={icon} size={24} color="#000" style={styles.icon} />
        <Text style={styles.buttonText}>{label}</Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  buttonWrap: {
    borderWidth: 0.5, // 1px の枠線
    borderTopColor: ColorsType.shock_red, // 上：赤
    borderRightColor: ColorsType.shock_green, // 右：緑
    borderBottomColor: ColorsType.shock_sky_blue, // 下：青
    borderLeftColor: ColorsType.shock_yellow, // 左：黄色
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderRightColor: ColorsType.modal_shadow_black,
    borderBottomColor: ColorsType.modal_shadow_black,
    borderTopColor: ColorsType.modal_shadow_white,
    borderLeftColor: ColorsType.modal_shadow_more_white,
    backgroundColor: ColorsType.modal_background,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 0,
  },
  icon: {
    marginRight: 4,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
});
