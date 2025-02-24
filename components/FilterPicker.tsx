import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import { PropsWithChildren, useEffect, useState } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import BlurFilterView from './BlurFilterView';
import { ColorsType } from '@/utils/types/ColorsType';
import PressableAnimaionView from './PressableAnimation';

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;

export default function FilterPicker({ isVisible, children, onClose }: Props) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        <BlurFilterView>
          <View style={styles.titleContainer}>
            <Text style={[styles.title]}>🫳 フィルターを選ぶ</Text>
            <PressableAnimaionView onPress={onClose}>
              <MaterialIcons name="close" color="#ffffff" size={22} />
            </PressableAnimaionView>
          </View>
          {children}
        </BlurFilterView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    height: '25%',
    width: '100%',
    backgroundColor: ColorsType.backgrond_gray,
    position: 'absolute',
    bottom: 0,
    borderWidth: 4, // 1px の枠線
    borderRightColor: ColorsType.modal_shadow_black,
    borderBottomColor: ColorsType.modal_shadow_black,
    borderTopColor: ColorsType.modal_shadow_white,
    borderLeftColor: ColorsType.modal_shadow_white,
  },
  titleContainer: {
    height: '20%',
    backgroundColor: ColorsType.shock_blue,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1, // 1px の枠線
    borderTopColor: ColorsType.shock_red, // 上：赤
    borderRightColor: ColorsType.shock_green, // 右：緑
    borderBottomColor: ColorsType.shock_sky_blue, // 下：青
    borderLeftColor: ColorsType.shock_yellow, // 左：黄色
  },
  title: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
