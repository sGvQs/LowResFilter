import { StyleSheet, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ColorsType } from '@/utils/types/ColorsType';
import PressableAnimaionView from './PressableAnimation';

type Props = {
  onPress: () => void;
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
};

export default function IconButton({ onPress, label, icon }: Props) {
  return (
    <PressableAnimaionView
      onPress={() => onPress()}
      animatedViewStyle={styles.buttonWrap}
      pressableViewStyle={styles.button}
    >
      <MaterialIcons name={icon} size={24} color="#000" style={styles.icon} />
      <Text style={styles.buttonText}>{label}</Text>
    </PressableAnimaionView>
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
    paddingHorizontal: 12,
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
