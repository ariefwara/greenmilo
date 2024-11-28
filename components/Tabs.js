import React, { useState, useRef } from 'react';
import { ScrollView, Text, Pressable, View, StyleSheet, Animated } from 'react-native';

const Tabs = ({ tabs = [], onTabChange }) => {
  const [activeTab, setActiveTab] = useState(0);
  const underlinePosition = useRef(new Animated.Value(0)).current;

  const handleTabPress = (index) => {
    setActiveTab(index);
    onTabChange?.(index);

    Animated.timing(underlinePosition, {
      toValue: index,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
        {tabs.map((tab, index) => (
          <Pressable
            key={index}
            style={styles.tab}
            onPress={() => handleTabPress(index)}
          >
            <Text style={[styles.text, activeTab === index && styles.activeText]}>{tab}</Text>
          </Pressable>
        ))}
      </ScrollView>
      <Animated.View
        style={[
          styles.underline,
          {
            transform: [
              {
                translateX: underlinePosition.interpolate({
                  inputRange: tabs.map((_, i) => i),
                  outputRange: tabs.map((_, i) => i * 80), // Assuming 80 is the tab width
                }),
              },
            ],
          },
        ]}
      />
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 4,
  },
  tab: {
    paddingVertical: 4,
    paddingHorizontal: 20,
    marginHorizontal: 5,
  },
  text: {
    fontSize: 14,
    color: 'black',
  },
  activeText: {
    fontWeight: 'bold',
    color: 'black',
  },
  underline: {
    height: 2,
    backgroundColor: 'green',
    position: 'absolute',
    bottom: 0,
    width: 80, // Fixed width of each tab
  },
});
