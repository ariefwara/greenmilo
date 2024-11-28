import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Button from './Button';
import Flex from './Flex';
import Drawer from './Drawer';

const Navigation = ({ title }) => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const handleMenuPress = () => {
    setDrawerVisible(true);
  };

  const handleDrawerClose = () => {
    setDrawerVisible(false);
  };

  return (
    <>
      <Flex horizontal style={styles.container}>
        <Button icon="menu-fold" onPress={handleMenuPress} />
        <Text style={styles.title}>{title}</Text>
        <View style={{ width: 24, height: 24 }}></View>
      </Flex>
      <Drawer visible={drawerVisible} onClose={handleDrawerClose} title="Menu">
        <Text>Menu Item 1</Text>
        <Text>Menu Item 2</Text>
        <Text>Menu Item 3</Text>
      </Drawer>
    </>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 8,
    paddingBottom: 0,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    flexGrow: 1,
    textAlign: 'center',
  },
});
