import { Link } from 'expo-router';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const App = () => {
  
  return (
    <View style={styles.container}>

      <TouchableOpacity>

        <Link style={styles.link} href="/4">Link 4</Link>
      </TouchableOpacity>

      <TouchableOpacity>
        <Link style={styles.link} href="/1">Link 1</Link>

      </TouchableOpacity>

      <TouchableOpacity>
        <Link style={styles.link} href="/2">Link 2</Link>

      </TouchableOpacity>

      <TouchableOpacity>

        <Link style={styles.link} href="/3">Link 3</Link>
      </TouchableOpacity>

    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkContainer: {
    marginBottom: 10,
  },
  link: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
