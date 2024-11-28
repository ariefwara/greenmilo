import React, { useRef } from 'react';
import { Animated, StyleSheet, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Import AntDesign icon
import Label from './Label';

const Button = ({ text, icon, size = 'medium', ...props }) => {
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.timing(scale, { toValue: icon ? 0.7 : 0.9, duration: 100, useNativeDriver: false }).start();
  };

  const handlePressOut = () => {
    Animated.timing(scale, { toValue: 1, duration: 100, useNativeDriver: false }).start();
  };

  return (
    <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut} {...props}>
      {icon && !text ? (
        <Animated.View style={{ transform: [{ scale }] }}>
          <AntDesign name={icon} size={24} color="black" />
        </Animated.View>
      ) : (
        <Animated.View
          style={[
            styles.button,
            styles[size],
            { transform: [{ scale }] },
          ]}
        >
          {icon && (
            <AntDesign name={icon} size={24} color="white" style={styles.iconSpacing} />
          )}
          {text && <Label text={text} size={size} bold white />}
        </Animated.View>
      )}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  small: { padding: 8, margin: 2 },
  medium: { padding: 10, margin: 2 },
  large: { padding: 12, margin: 2 },
  iconSpacing: {
    marginRight: 8,
  },
});
