import React, { useState } from 'react';
import { View, TextInput, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Search = ({ placeholder = 'Search...', onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (text) => {
    setQuery(text);
    if (onSearch) onSearch(text);
  };

  const handleClear = () => {
    setQuery('');
    if (onSearch) onSearch('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={query}
        onChangeText={handleSearch}
        returnKeyType="search"
      />
      {query.length > 0 && (
        <Pressable onPress={handleClear} style={styles.clearButton}>
          <Ionicons name="close-circle" size={20} color="#666" />
        </Pressable>
      )}
    </View>
  );
};

export default Search;
const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 8, paddingVertical: 5 },
  input: { flex: 1, fontSize: 14, padding: 8, backgroundColor: '#fff', borderRadius: 8, borderWidth: 1, borderColor: '#ccc' },
  clearButton: { marginLeft: 8, justifyContent: 'center', alignItems: 'center' },
});
