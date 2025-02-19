import { useEffect, Dispatch, SetStateAction, useCallback } from 'react';
import { StyleSheet, Image as RNImage, Dimensions } from 'react-native';
import { Image, type ImageSource } from 'expo-image';
import { ImportedImageSizeType } from '@/utils/types/ImportedImageSizeType';

const SCREEN_WIDTH = Dimensions.get('window').width; // 画面の横幅を取得
const SCREEN_HEIGHT = Dimensions.get('window').height; // 画面の縦幅を取得

type Props = {
  imgSource: ImageSource;
  selectedImage?: string;
  setImageSize: Dispatch<SetStateAction<ImportedImageSizeType | null>>;
  imageSize: ImportedImageSizeType | null;
};

export default function ImageViewer({
  imgSource,
  selectedImage,
  setImageSize,
  imageSize,
}: Props) {
  const imageSource = selectedImage ? { uri: selectedImage } : imgSource;

  const updateImageSize = useCallback((size: ImportedImageSizeType) => {
    setImageSize((prevSize) =>
      prevSize?.width === size.width && prevSize?.height === size.height
        ? prevSize
        : size
    );
  }, []);

  useEffect(() => {
    if (imageSource?.uri) {
      RNImage.getSize(imageSource.uri, (width, height) => {
        let newSize: ImportedImageSizeType = { width: 0, height: 0 };

        if (height > width) {
          // 縦長イメージ
          let y = SCREEN_HEIGHT / height;
          newSize = {
            width: width * y * 0.5,
            height: height * y * 0.5,
          };
        } else {
          // 横長イメージ
          let x = SCREEN_WIDTH / width;
          newSize = {
            width: width * x * 0.6,
            height: height * x * 0.6,
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
    <Image source={imageSource} style={[imageSize]} contentFit="contain" />
  );
}

const styles = StyleSheet.create({
  defaultImage: {
    width: 320,
    height: 440,
  },
});
