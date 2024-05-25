import React from 'react';
import { StyleSheet, TextInput as Input, TextInputProps } from 'react-native';
import colors from '../theme/colors';

const TextInput = ({value, onChange, ...props}: TextInputProps) => {
  return (
    <Input value={value} onChange={onChange} {...props} style={[styles.input, props.style]} />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.gray,
    fontSize: 14,
    fontWeight: "500",
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 10
  }
})

export default TextInput;
