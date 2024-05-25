import React, { ReactNode } from 'react';
import { StyleSheet, SafeAreaView, StyleProp, ViewStyle } from 'react-native';
import colors from '../theme/colors';

const BaseSafeAreaView = ({children, style}:{children?: ReactNode, style?: StyleProp<ViewStyle>}) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.baseBackground,
		paddingHorizontal: 24,
    paddingVertical: 16
  }
})

export default BaseSafeAreaView;
