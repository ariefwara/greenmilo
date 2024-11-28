import React from 'react';
import { Text, StyleSheet, Image } from 'react-native';
import Flex from './Flex';

const Card = ({ title, content, image, style, children }) => (
  <Flex horizontal style={[styles.card, style]}>
    {image && <Image source={image} style={styles.image} />}
    <Flex vertical style={styles.contentContainer}>
      {title && <Text style={styles.title}>{title}</Text>}
      {content && <Text style={styles.content}>{content}</Text>}
      {children}
    </Flex>
   
  </Flex>
);

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginHorizontal: 8,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    padding: 2
  },
  image: {
    width: 70,
    borderRadius: 8,
    marginRight: 5,
  },
  contentContainer: {
    justifyContent: 'center',
    padding: 5,
  },
  title: { fontSize: 16, fontWeight: 'bold', marginBottom: 4, color: '#333' },
  content: { fontSize: 14, color: '#555' },
});
