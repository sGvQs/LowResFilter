import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Typewriter from 'react-native-typewriter';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📱このアプリについて</Text>
      <Typewriter
        style={styles.text}
        typing={1} // タイピングエフェクトを有効にする
        minDelay={50}
        maxDelay={100}
      >
        ようこそ！このアプリは、ただの「レトロなフィルター」ではありません。画像を「荒く」編集するのが特徴なフィルターです。
        世の中にはたくさんのレトロフィルターがありますが、どの「レトロなフィルター」もレトロ風の雰囲気しか兼ね備えておらず、
        実際の1900年代~2000年代のカメラの感じとはかなり違うと感じました。
        そこで僕は本物の古いカメラのフィルムを追求したかったのでリアルに荒い画素でレトロ感を出すアプリを作ることにしました💁‍♀️。
        ※注意：このアプリに写真を撮る機能はついていませんのでエディターとしてご利用ください。
      </Typewriter>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3b6ea5',
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'PressStart2P',
  },
  text: {
    maxWidth: 300,
    paddingTop: 18,
    fontSize: 20,
    color: '#fff',
    fontFamily: 'PressStart2P',
  },
});
