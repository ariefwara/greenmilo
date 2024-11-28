import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Label = ({ text, small, medium, large, bold, white, style }) => {
  // Determine size dynamically based on the props
  const sizeStyle = small ? styles.small : medium ? styles.medium : large ? styles.large : styles.medium;

  return (
    <Text
      style={[
        sizeStyle,
        bold && styles.bold,
        white && styles.white,
        style,
      ]}
    >
      {text}
    </Text>
  );
};

export default Label;

const styles = StyleSheet.create({
  small: { fontSize: 12, color: '#000' },
  medium: { fontSize: 14, color: '#000' },
  large: { fontSize: 16, color: '#000' },
  bold: { fontWeight: 'bold' },
  white: { color: '#fff' },
});
