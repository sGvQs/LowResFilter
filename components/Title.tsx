import { ColorsType } from '@/utils/types/ColorsType';
import IconButton from '@/components/IconButton';
import Typewriter from 'react-native-typewriter';
import { View, StyleSheet, Platform, Modal, Text } from 'react-native';

export default function Title() {
  const a =
    '▄            ▄▄▄▄▄▄▄▄▄▄▄  ▄         ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄       ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄ ';
  const b =
    '▐░▌          ▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌     ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌';
  const c =
    '▐░▌          ▐░█▀▀▀▀▀▀▀█░▌▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀  ▀▀▀▀█░█▀▀▀▀ ▐░▌      ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌';
  const d =
    '▐░▌          ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░▌          ▐░▌          ▐░▌               ▐░▌     ▐░▌          ▐░▌     ▐░▌          ▐░▌       ▐░▌';
  const e =
    '▐░▌          ▐░▌       ▐░▌▐░▌   ▄   ▐░▌▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄      ▐░▌     ▐░▌          ▐░▌     ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌';
  const f =
    '▐░▌          ▐░▌       ▐░▌▐░▌  ▐░▌  ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌     ▐░▌     ▐░▌          ▐░▌     ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌';
  const g =
    '▐░▌          ▐░▌       ▐░▌▐░▌ ▐░▌░▌ ▐░▌▐░█▀▀▀▀█░█▀▀ ▐░█▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀      ▐░▌     ▐░▌          ▐░▌     ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀█░█▀▀ ';
  const h =
    '▐░▌          ▐░▌       ▐░▌▐░▌▐░▌ ▐░▌▐░▌▐░▌     ▐░▌  ▐░▌                    ▐░▌▐░▌               ▐░▌     ▐░▌          ▐░▌     ▐░▌          ▐░▌     ▐░▌  ';
  const i =
    '▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌▐░▌░▌   ▐░▐░▌▐░▌      ▐░▌ ▐░█▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄█░▌▐░▌           ▄▄▄▄█░█▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌     ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌      ▐░▌ ';
  const j =
    '▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░▌     ▐░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌          ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌     ▐░░░░░░░░░░░▌▐░▌       ▐░▌';
  const k =
    ' ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀       ▀▀  ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀            ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀       ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀ ';

  return (
    <>
      <Typewriter
        typing={1} // タイピングエフェクトを有効にする
        minDelay={100}
        maxDelay={100}
        style={styles.text}
      >
        {a}
      </Typewriter>
      <Typewriter
        typing={1} // タイピングエフェクトを有効にする
        minDelay={100}
        maxDelay={100}
        style={styles.text}
      >
        {b}
      </Typewriter>
      <Typewriter
        typing={1} // タイピングエフェクトを有効にする
        minDelay={100}
        maxDelay={100}
        style={styles.text}
      >
        {c}
      </Typewriter>
      <Typewriter
        typing={1} // タイピングエフェクトを有効にする
        minDelay={100}
        maxDelay={100}
        style={styles.text}
      >
        {d}
      </Typewriter>
      <Typewriter
        typing={1} // タイピングエフェクトを有効にする
        minDelay={100}
        maxDelay={100}
        style={styles.text}
      >
        {e}
      </Typewriter>
      <Typewriter
        typing={1} // タイピングエフェクトを有効にする
        minDelay={100}
        maxDelay={100}
        style={styles.text}
      >
        {f}
      </Typewriter>
      <Typewriter
        typing={1} // タイピングエフェクトを有効にする
        minDelay={100}
        maxDelay={100}
        style={styles.text}
      >
        {g}
      </Typewriter>
      <Typewriter
        typing={1} // タイピングエフェクトを有効にする
        minDelay={100}
        maxDelay={100}
        style={styles.text}
      >
        {h}
      </Typewriter>
      <Typewriter
        typing={1} // タイピングエフェクトを有効にする
        minDelay={100}
        maxDelay={100}
        style={styles.text}
      >
        {i}
      </Typewriter>
      <Typewriter
        typing={1} // タイピングエフェクトを有効にする
        minDelay={100}
        maxDelay={100}
        style={styles.text}
      >
        {j}
      </Typewriter>
      <Typewriter
        typing={1} // タイピングエフェクトを有効にする
        minDelay={100}
        maxDelay={100}
        style={styles.text}
      >
        {k}
      </Typewriter>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Courier New',
    fontSize: 3,
    color: ColorsType.white,
    lineHeight: 3, // 行間を詰める
    letterSpacing: 0.01,
  },
});
