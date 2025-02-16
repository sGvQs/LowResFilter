import { View, StyleSheet, Platform, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState, useRef, useEffect, useCallback } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as MediaLibrary from 'expo-media-library';
import { captureRef } from 'react-native-view-shot';
import domtoimage from 'dom-to-image';

import Button from '@/components/Button';
import ImageViewer from '@/components/ImageViewer';
import IconButton from '@/components/IconButton';
import CircleButton from '@/components/CircleButton';
import FilterPicker from '@/components/FilterPicker';
import FilterList from '@/components/FilterList';
import { LowResCreator } from '@/components/LowResCreator';
import { ImageManipulator, useImageManipulator } from 'expo-image-manipulator';

const PlaceholderImage = require('@/assets/images/background-image.png');

export type importedImageSize = {
  width: number;
  height: number;
};

export type filterType =
  | '1960s'
  | '1970s'
  | '1980s'
  | '1990s'
  | '2000s'
  | 'iPhone'
  | 'iPhone 3G';

export default function Photo() {
  // ユーザーがアップロードした写真（Base64 エンコード）
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );

  // ユーザーがアップロードした写真のバックアップ（Base64 エンコード）
  const [selectedImageBackup, setSelectedImageBackup] = useState<
    string | undefined
  >(undefined);

  // 選ばれた写真のサイズ
  const [imageSize, setImageSize] = useState<importedImageSize | null>(null);

  // [表示非表示] 写真をカスタマイズできる画面（アップロード => true）
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);

  // [表示非表示] 絵文字を選択できるモーダル（「+」ボタン押下 => true）
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  // 選ばれた「フィルター」
  const [pickedFilter, setPickedFilter] = useState<filterType | undefined>(
    undefined
  );

  //（カメラロールなど）へのアクセス許可をリクエスト
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const imageRef = useRef<View>(null);

  // アクセス許可をリクエスト
  useEffect(() => {
    if (status === null) {
      requestPermission();
    }
  }, [status]);

  // filterを決めた時の処理
  useEffect(() => {
    const processImage = async () => {
      try {
        const lowResImage =
          selectedImageBackup && (await LowResCreator(selectedImageBackup));
        lowResImage && setSelectedImage(lowResImage);
      } catch (error) {
        console.log(error);
      }
    };

    processImage();
  }, [pickedFilter]);

  // 写真を選ぶ「Choose a photo」
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setSelectedImageBackup(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };

  //「Reset」
  const onReset = () => {
    setShowAppOptions(false);
  };

  //「＋」
  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  // モーダルを閉じる
  const onModalClose = () => {
    setIsModalVisible(false);
  };

  // 「Save」
  const onSaveImageAsync = async () => {
    if (Platform.OS !== 'web') {
      try {
        const localUri = await captureRef(imageRef, {
          height: imageSize?.height,
          width: imageSize?.width,
          quality: 1,
        });

        await MediaLibrary.saveToLibraryAsync(localUri);
        if (localUri) {
          alert('Saved!');
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        if (!imageRef.current) {
          throw Error;
        }

        const dataUrl = await domtoimage.toJpeg(imageRef.current, {
          quality: 1,
          width: imageSize?.width,
          height: imageSize?.height,
        });

        let link = document.createElement('a');
        link.download = 'low-res-filter.jpeg';
        link.href = dataUrl;
        link.click();
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      {/* イメージのコンテナー */}
      <View style={styles.imageContainer}>
        {/* イメージ『例：編集済み写真 */}
        <View ref={imageRef} collapsable={false}>
          {/* イメージ『例：アップロード写真』 */}
          <ImageViewer
            imgSource={PlaceholderImage}
            selectedImage={selectedImage}
            setImageSize={setImageSize}
            imageSize={imageSize}
          />
          {/* イメージ『例：ステッカー』 */}
          {/* {pickedEmoji && (
            <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
          )} */}
        </View>
      </View>
      {/* フッターのコンテナー */}
      {showAppOptions ? (
        // 写真選択後
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton
              icon="save-alt"
              label="Save"
              onPress={onSaveImageAsync}
            />
          </View>
        </View>
      ) : (
        // 写真選択前
        <View style={styles.footerContainer}>
          <Button
            theme="primary"
            label="Choose a photo"
            onPress={pickImageAsync}
          />
          <Button
            label="Use this photo"
            onPress={() => setShowAppOptions(true)}
          />
        </View>
      )}
      <FilterPicker isVisible={isModalVisible} onClose={onModalClose}>
        <FilterList onSelect={setPickedFilter} onCloseModal={onModalClose} />
      </FilterPicker>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3b6ea5',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 3 / 4,
    justifyContent: 'center',
  },
  footerContainer: {
    flex: 1 / 4,
    justifyContent: 'center',
  },
  optionsContainer: {
    flex: 1 / 4,
    justifyContent: 'center',
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
