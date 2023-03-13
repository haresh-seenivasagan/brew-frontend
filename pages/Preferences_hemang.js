import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';

const ImageButton = ({ onPress, source, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Image source={source} style={styles.image} />
    </TouchableOpacity>
  );
};

const App = () => {
  const handleButton1Press = () => {
    console.log('Button 1 pressed!');
  };

  const handleButton2Press = () => {
    console.log('Button 2 pressed!');
  };

  const handleButton3Press = () => {
    console.log('Button 3 pressed!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>My Preference is ...</Text>
      </View>
      <View style={styles.buttonContainer}>
        <ImageButton
          onPress={handleButton1Press}
          source={require('./your-image-path-1.png')}
          style={styles.button1}
        />
        <ImageButton
          onPress={handleButton2Press}
          source={require('./your-image-path-2.png')}
          style={styles.button2}
        />
        <ImageButton
          onPress={handleButton3Press}
          source={require('./your-image-path-3.png')}
          style={styles.button3}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#284958',
    alignItems: 'center',
  },
  header: {
    position: 'absolute',
    top: 134,
    width: 284,
    height: 57,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontFamily: 'lucida grande',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 34,
    lineHeight: 41,
    color: '#EBE0D6',
  },
  buttonContainer: {
    position: 'absolute',
    width: '90%',
    height: '35%',
    top: '79.58%',
    left: '4.07%',
    right: '4.07%',
    bottom: '12.91%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button1: {
    width: 136,
    height: 136,
    left: 128,
    top: 231,
  },
  button2: {
    width: 136,
    height: 136,
    position: 'absolute',
    left: '25%',
    top: '15%',
  },
  button3: {
    width: 136,
    height: 136,
    position: 'absolute',
    right: 128,
    top: 399,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default App;