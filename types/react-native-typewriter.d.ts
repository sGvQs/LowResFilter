declare module 'react-native-typewriter' {
  import { ComponentType } from 'react';
  import { TextStyle } from 'react-native';

  export interface TypewriterProps {
    typing?: number; // 1 true, 0 false, -1 roop
    minDelay?: number;
    maxDelay?: number;
    style?: TextStyle;
    children: React.ReactNode;
  }

  const Typewriter: ComponentType<TypewriterProps>;

  export default Typewriter;
}
