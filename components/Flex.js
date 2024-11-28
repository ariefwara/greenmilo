import React from 'react';
import { View, StyleSheet } from 'react-native';

const Flex = ({ vertical, horizontal, children, style }) => {
  const isVertical = vertical && !horizontal;

  return (
    <View style={[styles.container, isVertical ? styles.vertical : styles.horizontal, style]}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          style: [
            child.props.style,
            isVertical ? styles.verticalChild : styles.horizontalChild,
          ],
        })
      )}
    </View>
  );
};

export default Flex;

const styles = StyleSheet.create({
  container: { flex: 1, display: 'flex', flexGrow: 0, flexShrink: 0, flexBasis: 'auto'},
  vertical: { flexDirection: 'column', flexGrow: 1 },
  horizontal: { flexDirection: 'row' },
  verticalChild: { width: '100%' },
  horizontalChild: { height: '100%' },
});
