import React from 'react';
import { View, StyleSheet } from 'react-native';

const Filler = ({ style }) => <View style={[styles.filler, style]} />;

export default Filler;

const styles = StyleSheet.create({
  filler: {
    flexGrow: 1,
  },
});
