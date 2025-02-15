import { ReactNode, useState } from 'react';
import { StyleSheet, FlatList, Platform, Pressable, Text } from 'react-native';
import { filterType } from '@/app/(tabs)/photo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Props = {
  onSelect: (name: filterType) => void;
  onCloseModal: () => void;
};

export default function FilterList({ onSelect, onCloseModal }: Props) {
  type FilterObject = { icon: ReactNode; name: filterType };

  const [filter] = useState<FilterObject[]>([
    {
      icon: <FontAwesome6 name={'camera-retro'} color={'#000'} size={100} />,
      name: '1970s',
    },
    {
      icon: <FontAwesome6 name={'camera-retro'} color={'#000'} size={100} />,
      name: '1980s',
    },
    {
      icon: <FontAwesome6 name={'camera-retro'} color={'#000'} size={100} />,
      name: '1990s',
    },
    {
      icon: <FontAwesome6 name={'camera-retro'} color={'#000'} size={100} />,
      name: '2000s',
    },
    {
      icon: <MaterialIcons name={'smartphone'} color={'#000'} size={100} />,
      name: 'iPhone',
    },
    {
      icon: <MaterialIcons name={'smartphone'} color={'#000'} size={100} />,
      name: 'iPhone 3G',
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
