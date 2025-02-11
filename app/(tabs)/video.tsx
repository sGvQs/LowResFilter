import { View, StyleSheet, Text } from 'react-native';

export default function Video() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Video screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3b6ea5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});
