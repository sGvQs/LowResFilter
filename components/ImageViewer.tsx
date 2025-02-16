import { useEffect, Dispatch, SetStateAction, useCallback } from 'react';
import {
  StyleSheet,
  Image as RNImage,
  Dimensions,
  Platform,
} from 'react-native';
import { Image, type ImageSource } from 'expo-image';
import { importedImageSize } from '@/app/(tabs)/photo';

const SCREEN_WIDTH = Dimensions.get('window').width; // 画面の横幅を取得
const SCREEN_HEIGHT = Dimensions.get('window').height; // 画面の縦幅を取得

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

  const updateImageSize = useCallback((size: importedImageSize) => {
    setImageSize((prevSize) =>
      prevSize?.width === size.width && prevSize?.height === size.height
        ? prevSize
        : size
    );
  }, []);

  useEffect(() => {
    if (imageSource?.uri) {
      console.log('imageSource?.uri', imageSource?.uri);

      RNImage.getSize(imageSource.uri, (width, height) => {
        const aspectRatio = height / width;
        const magnification = Platform.OS === 'web' ? 1 : 0.5;

        let newSize: importedImageSize = { width: 0, height: 0 };

        if (height > width) {
          // 縦長イメージ
          newSize = {
            width: SCREEN_WIDTH * 0.8,
            height: SCREEN_WIDTH * aspectRatio * 0.8,
          };
        } else {
          // 横長イメージ
          newSize = {
            width: SCREEN_HEIGHT * aspectRatio * magnification,
            height: SCREEN_HEIGHT * magnification,
          };
        }

        // すでに設定されている値と同じなら state 更新しない
        updateImageSize(newSize);
      });
    }
  }, [imageSource, updateImageSize]); // imageSource だけを依存配列に入れる

  // デフォルト時
  if (!selectedImage) {
    return <Image source={imageSource} style={styles.defaultImage} />;
  }

  // 選択された画像サイズ取得中は非表示
  if (!imageSize) {
    return null;
  }

  return (
    <Image
      source={imageSource}
      style={[styles.selectedImage, imageSize]}
      contentFit="contain"
    />
  );
}

const styles = StyleSheet.create({
  defaultImage: {
    width: 320,
    height: 440,
  },
  selectedImage: {
    marginTop: Platform.OS === 'web' ? 0 : 50,
  },
});
