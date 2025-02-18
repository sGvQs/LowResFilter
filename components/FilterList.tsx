import { ReactNode, useState } from 'react';
import { StyleSheet, FlatList, Platform, Pressable, Text } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { LensesType } from '@/utils/types/LensesType';

type Props = {
  onSelect: (name: LensesType) => void;
  onCloseModal: () => void;
};

export default function FilterList({ onSelect, onCloseModal }: Props) {
  type FilterObject = { icon: ReactNode; name: LensesType };

  const [filter] = useState<FilterObject[]>([
    {
      icon: <FontAwesome6 name={'camera-retro'} color={'#000'} size={100} />,
      name: LensesType.filter_1960s,
    },
    {
      icon: <FontAwesome6 name={'camera-retro'} color={'#000'} size={100} />,
      name: LensesType.filter_1970s,
    },
    {
      icon: <FontAwesome6 name={'camera-retro'} color={'#000'} size={100} />,
      name: LensesType.filter_1980s,
    },
    {
      icon: <FontAwesome6 name={'camera-retro'} color={'#000'} size={100} />,
      name: LensesType.filter_1990s,
    },
    {
      icon: <FontAwesome6 name={'camera-retro'} color={'#000'} size={100} />,
      name: LensesType.filter_2000s,
    },
    {
      icon: <MaterialIcons name={'smartphone'} color={'#000'} size={100} />,
      name: LensesType.filter_iphone,
    },
    {
      icon: <MaterialIcons name={'smartphone'} color={'#000'} size={100} />,
      name: LensesType.filter_iphone_3G,
    },
    {
      icon: <MaterialIcons name={'cameraswitch'} color={'#000'} size={100} />,
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
          <Text key={index + ': name'} style={styles.text}>
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
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
  },
});
