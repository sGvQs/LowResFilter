import { useState } from 'react';
import { StyleSheet, FlatList, Platform, Pressable, Text } from 'react-native';
import { filterType } from '@/app/(tabs)/photo';

type Props = {
  onSelect: (name: filterType) => void;
  onCloseModal: () => void;
};

export default function FilterList({ onSelect, onCloseModal }: Props) {
  // const [emoji] = useState<ImageSource[]>([
  //   require('../assets/images/emoji1.png'),
  //   require('../assets/images/emoji2.png'),
  //   require('../assets/images/emoji3.png'),
  //   require('../assets/images/emoji4.png'),
  //   require('../assets/images/emoji5.png'),
  //   require('../assets/images/emoji6.png'),
  // ]);

  type EmojiObject = { icon: string; name: filterType };

  const [filterObject] = useState<EmojiObject[]>([
    { icon: '🏠', name: 'home' },
    { icon: '🏡', name: 'house' },
    { icon: '🏘️', name: 'houses' },
    { icon: '⛰️', name: 'mountain' },
  ]);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === 'web'}
      data={filterObject}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            onSelect(item.name);
            onCloseModal();
          }}
        >
          <Text key={index + ': icon'} style={styles.image}>
            {item.icon}
          </Text>
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
  },
  image: {
    fontSize: 100,
    marginRight: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
  },
});
