import { ReactNode, useState } from 'react';
import { StyleSheet, FlatList, Platform, Pressable, Text } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { LensesType } from '@/utils/types/LensesType';
import { ColorsType } from '@/utils/types/ColorsType';

type Props = {
  onSelect: (name: LensesType) => void;
  pickedFilter?: LensesType;
  onCloseModal: () => void;
};

export default function FilterList({
  onSelect,
  onCloseModal,
  pickedFilter = LensesType.filter_none,
}: Props) {
  type FilterObject = { icon: ReactNode; name: LensesType };

  const [filter] = useState<FilterObject[]>([
    {
      icon: (
        <FontAwesome6
          name={'camera-retro'}
          color={ColorsType.soft_blue}
          size={pickedFilter === LensesType.filter_1960s ? 100 : 80}
        />
      ),
      name: LensesType.filter_1960s,
    },
    {
      icon: (
        <FontAwesome6
          name={'camera-retro'}
          color={ColorsType.soft_sky_blue}
          size={pickedFilter === LensesType.filter_1970s ? 100 : 80}
        />
      ),
      name: LensesType.filter_1970s,
    },
    {
      icon: (
        <FontAwesome6
          name={'camera-retro'}
          color={ColorsType.soft_emerald_green}
          size={pickedFilter === LensesType.filter_1980s ? 100 : 80}
        />
      ),
      name: LensesType.filter_1980s,
    },
    {
      icon: (
        <FontAwesome6
          name={'camera-retro'}
          color={ColorsType.soft_green}
          size={pickedFilter === LensesType.filter_1990s ? 100 : 80}
        />
      ),
      name: LensesType.filter_1990s,
    },
    {
      icon: (
        <FontAwesome6
          name={'camera-retro'}
          color={ColorsType.soft_yellow}
          size={pickedFilter === LensesType.filter_2000s ? 100 : 80}
        />
      ),
      name: LensesType.filter_2000s,
    },
    {
      icon: (
        <MaterialIcons
          name={'smartphone'}
          color={ColorsType.soft_red}
          size={pickedFilter === LensesType.filter_iphone ? 100 : 80}
        />
      ),
      name: LensesType.filter_iphone,
    },
    {
      icon: (
        <MaterialIcons
          name={'smartphone'}
          color={ColorsType.soft_pink}
          size={pickedFilter === LensesType.filter_iphone_3G ? 100 : 80}
        />
      ),
      name: LensesType.filter_iphone_3G,
    },
    {
      icon: (
        <MaterialIcons
          name={'cameraswitch'}
          color={ColorsType.soft_purple}
          size={pickedFilter === LensesType.filter_none ? 100 : 80}
        />
      ),
      name: LensesType.filter_none,
    },
  ]);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === 'web'}
      data={filter}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            onSelect(item.name);
            onCloseModal();
          }}
        >
          {item.icon}
          <Text key={index + ': name'} style={[styles.text]}>
            {item.name}
          </Text>
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 50,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 5,
  },
});
