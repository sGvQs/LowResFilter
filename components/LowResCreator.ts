import {
  manipulateAsync,
  FlipType,
  SaveFormat,
  useImageManipulator,
  ImageManipulator,
} from 'expo-image-manipulator';
import * as FileSystem from 'expo-file-system';
import { Platform } from 'react-native';

export const LowResCreator = async (
  imageUri: string
): Promise<string | null> => {
  try {
    console.log('manipulate run');
    const ctx = await ImageManipulator.manipulate(imageUri);
    ctx.resize({ width: 100 });

    // renderAsync() で画像を処理した後、ImageRef を取得
    const result = await ctx.renderAsync();

    // ImageRef から URI を取得
    const resultUri = (await result.saveAsync()).uri;

    console.log('Image URI:', resultUri);

    // web以外の場合はそのままuriを返す
    if (Platform.OS !== 'web') {
      return resultUri;
    }

    const base64 = await convertUriToBase64Web(resultUri);

    // webの場合はbase64を返す
    return base64;
  } catch (error) {
    console.log('エラーになってるよ', error);
    return null;
  }
};

// const checkFileExistence = async (uri: string) => {
//   try {
//     const fileInfo = await FileSystem.getInfoAsync(uri);
//     if (fileInfo.exists) {
//       console.log('ファイルが見つかりました:', fileInfo.uri);
//     } else {
//       console.log('ファイルが見つかりません:', uri);
//     }
//   } catch (error) {
//     console.log('エラーが発生しました:', error);
//   }
// };

const convertUriToBase64Phones = async (uri: string) => {
  try {
    // 圧縮された画像を Base64 文字列に変換
    console.log('run readAsStringAsync');
    const base64 = await FileSystem.readAsStringAsync(uri, {
      encoding: FileSystem.EncodingType.Base64,
    });

    console.log('done readAsStringAsync', base64);
    return base64;
  } catch (error) {
    console.error('圧縮またはBase64変換エラー:', error);
    return null;
  }
};

const convertUriToBase64Web = (uri: string) => {
  return new Promise<string | null>((resolve, reject) => {
    const image = new Image();
    image.src = uri;
    image.onload = () => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      if (context) {
        canvas.width = image.width;
        canvas.height = image.height;
        context.drawImage(image, 0, 0);
        const base64 = canvas.toDataURL(); // base64に変換
        resolve(base64);
      } else {
        reject('Canvas context is null');
      }
    };
    image.onerror = (error) => reject(error);
  });
};
