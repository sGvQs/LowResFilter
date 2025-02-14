import { View, StyleSheet, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState, useRef } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as MediaLibrary from 'expo-media-library';
import { type ImageSource } from 'expo-image';
import { captureRef } from 'react-native-view-shot';
import domtoimage from 'dom-to-image';

import Button from '@/components/Button';
import ImageViewer from '@/components/ImageViewer';
import IconButton from '@/components/IconButton';
import CircleButton from '@/components/CircleButton';
import EmojiPicker from '@/components/EmojiPicker';
import EmojiList from '@/components/EmojiList';
import EmojiSticker from '@/components/EmojiSticker';

const PlaceholderImage = require('@/assets/images/background-image.png');

export type importedImageSize = {
  width: number;
  height: number;
};

export default function Photo() {
  // ユーザーがアップロードした写真
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );

  // [表示非表示] 写真をカスタマイズできる画面（アップロード => true）
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);

  // [表示非表示] 絵文字を選択できるモーダル
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  // 選ばれた絵文字
  const [pickedEmoji, setPickedEmoji] = useState<ImageSource | undefined>(
    undefined
  );

  const [imageSize, setImageSize] = useState<importedImageSize | null>(null);

  //（カメラロールなど）へのアクセス許可をリクエスト
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const imageRef = useRef<View>(null);

  // アクセス許可をリクエスト
  if (status === null) {
    requestPermission();
  }

  // 写真を選ぶ「Choose a photo」
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
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
        link.download = 'sticker-smash.jpeg';
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
          {pickedEmoji && (
            <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
          )}
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
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
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
  },
  footerContainer: {
    flex: 1 / 4,
  },
  optionsContainer: {
    flex: 1 / 4,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
