import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { StyleSheet, Image as RNImage, Dimensions, Text } from 'react-native';
import { Image, type ImageSource } from 'expo-image';
import { importedImageSize } from '@/app/(tabs)/photo';

const SCREEN_WIDTH = (Dimensions.get('window').width * 4) / 5; // 画面の横幅を取得
const SCREEN_HEIGHT = (Dimensions.get('window').height * 4) / 5; // 画面の縦幅を取得

type Props = {
  imgSource: ImageSource;
  selectedImage?: string;
  setImageSize: Dispatch<SetStateAction<importedImageSize | null>>;
  imageSize: importedImageSize | null;
};

export default function ImageViewer({
  imgSource,
  selectedImage,
  setImageSize,
  imageSize,
}: Props) {
  const imageSource = selectedImage ? { uri: selectedImage } : imgSource;

  useEffect(() => {
    if (imageSource?.uri) {
      // ここでuriが存在するかチェック
      RNImage.getSize(imageSource.uri, (width, height) => {
        const aspectRatio = height / width;
        if (height > width) {
          setImageSize({
            width: SCREEN_WIDTH,
            height: SCREEN_WIDTH * aspectRatio,
          });
        } else {
          setImageSize({
            width: SCREEN_HEIGHT * aspectRatio,
            height: SCREEN_HEIGHT,
          });
        }
      });
    }
  }, [imageSource]);

  // デフォルト時
  if (!selectedImage) {
    return <Image source={imageSource} style={styles.defaultImage} />;
  }

  // 選択された画像サイズ取得中は非表示
  if (!imageSize) {
    return null;
  }

  return (
    <Image source={imageSource} style={[styles.selectedImage, imageSize]} />
  );
}

const styles = StyleSheet.create({
  defaultImage: {
    width: 320,
    height: 440,
  },
  selectedImage: {
    marginTop: 50,
    resizeMode: 'contain', // 元画像の比率を保持
  },
});
