import {
  ImageManipulator,
  ImageManipulatorContext,
  ImageRef,
} from 'expo-image-manipulator';
import { Platform } from 'react-native';

export const LowResCreator = async (
  imageUri: string
): Promise<string | null> => {
  try {
    const imageManipulatorContext: ImageManipulatorContext =
      await ImageManipulator.manipulate(imageUri);
    imageManipulatorContext.resize({ width: 100 });

    // renderAsync() で画像を処理した後、ImageRef を取得
    const imageRef: ImageRef = await imageManipulatorContext.renderAsync();

    // ImageRef から URI を取得
    const resultUri = (await imageRef.saveAsync()).uri;

    // web以外の場合はそのままuriを返す
    if (Platform.OS !== 'web') {
      return resultUri;
    }

    const canvas = document.createElement('canvas'); // 使い回す
    const context = canvas.getContext('2d');

    // webの場合はbase64に変換
    const base64 = await convertUriToBase64Web(resultUri, canvas, context);

    // webの場合はbase64を返す
    return base64;
  } catch (error) {
    console.log('expo-image-manipulator error', error);
    return null;
  }
};

const convertUriToBase64Web = (
  uri: string,
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D | null
): Promise<string | null> => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = uri;
    image.onload = () => {
      if (context) {
        // すでに渡された canvas と context を使う
        canvas.width = image.width;
        canvas.height = image.height;
        context.clearRect(0, 0, canvas.width, canvas.height); // クリア
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
