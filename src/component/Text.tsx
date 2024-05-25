import React from 'react';
import { StyleProp, StyleSheet, TextProps, TextStyle, Text as RNText } from 'react-native';
import colors from '../theme/colors';

interface ITextProps extends TextProps {
  style?: StyleProp<TextStyle>;
  fontSize?: number;
  type?: "secondary" | "default"
}

const Text = ({ children, style, type = "default", ...props }: ITextProps) => {
  return (
    <RNText style={[{ color: type == "default" ? colors.text : colors.textGray }, style]} {...props}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({})

export default Text;
