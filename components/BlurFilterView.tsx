import React, { ReactNode, useMemo } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { BlurView } from 'expo-blur';

export type BlurFilterViewProps = {
  children: ReactNode;
};

export default function BlurFilterView({ children }: BlurFilterViewProps) {
  const isWeb = useMemo(() => {
    if (Platform.OS === 'web') return true;
    return false;
  }, []);

  if (isWeb) {
    return <View style={styles.webContainer}>{children}</View>;
  } else {
    return (
      <>
        <BlurView
          style={styles.defalultContainer}
          pointerEvents="none"
          intensity={2}
        />
        {children}
      </>
    );
  }
}

const styles = StyleSheet.create({
  webContainer: {
    flex: 1,
    filter: 'blur(0.5px) contrast(0.9) grayscale(0.1)',
  },
  defalultContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
  },
});
