import React, { useEffect, useRef, useState } from 'react';
import { Modal, Animated, View, Text, Pressable, StyleSheet } from 'react-native';

const Drawer = ({ visible, onClose, title, children }) => {
  const translateX = useRef(new Animated.Value(-300)).current; // Initially hidden off-screen
  const overlayOpacity = useRef(new Animated.Value(0)).current; // Initially transparent
  const [showDrawer, setShowDrawer] = useState(visible);

  useEffect(() => {
    if (visible) {
      setShowDrawer(true); // Ensure the drawer and overlay are mounted
      Animated.parallel([
        Animated.timing(overlayOpacity, {
          toValue: 1, // Fade in overlay
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(translateX, {
          toValue: 0, // Slide drawer into view
          duration: 300,
          useNativeDriver: false,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(overlayOpacity, {
          toValue: 0, // Fade out overlay
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(translateX, {
          toValue: -300, // Slide drawer out of view
          duration: 300,
          useNativeDriver: false,
        }),
      ]).start(() => setShowDrawer(false)); // Unmount after animation
    }
  }, [visible]);

  if (!showDrawer) return null;

  return (
    <Modal transparent visible={showDrawer} animationType="none">
      <Animated.View style={[styles.overlay, { opacity: overlayOpacity }]}>
        <Pressable style={styles.overlayPressable} onPress={onClose} />
        <Animated.View style={[styles.drawer, { transform: [{ translateX }] }]}>
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <Pressable onPress={onClose}>
              <Text style={styles.closeText}>✕</Text>
            </Pressable>
          </View>
          <View style={styles.content}>{children}</View>
        </Animated.View>
      </Animated.View>
    </Modal>
  );
};

export default Drawer;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  overlayPressable: {
    flex: 1,
  },
  drawer: {
    position: 'absolute',
    left: 0, // Always anchored to the left of the screen
    width: 300, // Drawer width
    backgroundColor: 'white',
    height: '100%',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    marginTop: 8,
  },
});
