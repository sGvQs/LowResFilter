import { BlurView } from 'expo-blur';
import React, { useEffect, useMemo, useState } from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';
import Typewriter from 'react-native-typewriter';

export default function AboutScreen() {
  const [showAnnouncement, setShowAnnouncement] = useState<boolean>(false);

  const announcementWaitingTime = useMemo(() => {
    if (Platform.OS !== 'web') return 12000;
    return 9000;
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAnnouncement(true);
    }, announcementWaitingTime); // 25秒後に次のテキストに切り替え

    return () => clearTimeout(timeout); // クリーンアップ
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📱このアプリについて</Text>
      <Typewriter
        style={styles.text}
        typing={1} // タイピングエフェクトを有効にする
        minDelay={30}
        maxDelay={30}
      >
        ようこそ！このアプリは、ただの「レトロなフィルター」ではありません。画像を「荒く」編集するのが特徴なフィルターです。
        世の中にはたくさんのレトロフィルターがありますが、どの「レトロなフィルター」もレトロ風の雰囲気しか兼ね備えておらず、
        実際の1900年代~2000年代のカメラの感じとはかなり違うと感じました。
        そこで僕は本物の古いカメラのフィルムを追求したかったのでリアルに荒い画素でレトロ感を出すアプリを作ることにしました。
      </Typewriter>
      {showAnnouncement && (
        <Typewriter
          style={styles.announcement}
          typing={1} // タイピングエフェクトを有効にする
          minDelay={50}
          maxDelay={50}
        >
          ※注意：このアプリに写真を撮る機能はついていませんのでエディターとしてご利用ください。
        </Typewriter>
      )}
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
    fontFamily: 'Courier New',
  },
  text: {
    maxWidth: Platform.OS === 'web' ? 800 : 300,
    paddingTop: Platform.OS === 'web' ? 60 : 30,
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Courier New',
  },
  announcement: {
    maxWidth: Platform.OS === 'web' ? 800 : 300,
    paddingTop: Platform.OS === 'web' ? 40 : 20,
    fontSize: 16,
    color: '#a59a3b',
    fontFamily: 'Courier New',
  },
});
