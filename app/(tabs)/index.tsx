import React, { useState } from 'react';
import { View, StyleSheet, Platform, Modal, Text } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';
import { ColorsType } from '@/utils/types/ColorsType';
import IconButton from '@/components/IconButton';
import Typewriter from 'react-native-typewriter';
import Title from '@/components/Title';

export default function Index() {
  const videoSource = require('@/assets/videos/title-video.mp4');

  const [isPlaying, setIsPlaying] = useState(false);

  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.play();
  });

  const togglePlayback = () => {
    if (isPlaying) {
      player.pause();
    } else {
      player.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <View style={styles.container}>
      <Typewriter
        typing={1} // タイピングエフェクトを有効にする
        minDelay={100}
        maxDelay={100}
        style={{
          fontFamily: 'Courier New',
          fontSize: 12,
          color: ColorsType.white,
          lineHeight: 12, // 行間を詰める
          letterSpacing: 1,
        }}
      >
        ようこそ! これは
      </Typewriter>
      <View style={{ marginTop: 20 }}>
        <Title />
      </View>
      <VideoView
        style={styles.video}
        player={player}
        allowsFullscreen
        allowsPictureInPicture
        nativeControls={false}
      />
      <View style={{ marginTop: 20 }}>
        <IconButton
          onPress={() => {
            togglePlayback();
          }}
          icon={isPlaying ? 'pause' : 'play-arrow'}
          label={isPlaying ? 'サンプルを停止する' : 'サンプルを再生する'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ColorsType.backgrond_blue,
  },
  text: {
    fontFamily: 'Courier New',
    fontSize: 4,
    color: ColorsType.white,
    lineHeight: 6, // 行間を詰める
    letterSpacing: 0.01,
  },
  video: {
    marginTop: 20,
    width: 960 / (Platform.OS === 'web' ? 2 : 3),
    height: 540 / (Platform.OS === 'web' ? 2 : 3), // 動画のサイズを調整
  },
  controlsContainer: {
    padding: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // 半透明の背景
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    borderWidth: 0.5, // 1px の枠線
    borderTopColor: ColorsType.shock_red, // 上：赤
    borderRightColor: ColorsType.shock_green, // 右：緑
    borderBottomColor: ColorsType.shock_sky_blue, // 下：青
    borderLeftColor: ColorsType.shock_yellow, // 左：黄色
  },
  modalContent: {
    backgroundColor: ColorsType.backgrond_gray,
    alignItems: 'center',
    borderWidth: 6,
    borderRightColor: ColorsType.modal_shadow_black,
    borderBottomColor: ColorsType.modal_shadow_black,
    borderTopColor: ColorsType.modal_shadow_white,
    borderLeftColor: ColorsType.modal_shadow_more_white,
    padding: 20,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: '#ff4444',
    padding: 10,
    borderRadius: 10,
  },
});
