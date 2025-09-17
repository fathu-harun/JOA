import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

const DzikirCounter = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Dzikir Counter</Text>
      <Text style={styles.counterText}>{count}</Text>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          styles.incrementButton,
          pressed && styles.buttonPressed,
        ]}
        onPress={increment}
      >
        <Text style={styles.buttonText}>Tap to Count</Text>
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          styles.resetButton,
          pressed && styles.buttonPressed,
        ]}
        onPress={reset}
      >
        <Text style={styles.buttonText}>Reset</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  counterText: {
    fontSize: 100,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#000',
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  incrementButton: {
    backgroundColor: '#4CAF50',
  },
  resetButton: {
    backgroundColor: '#f44336',
  },
  buttonPressed: {
    opacity: 0.8,
  },
});

export default DzikirCounter;