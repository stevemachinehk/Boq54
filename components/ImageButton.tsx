
import React from 'react';
import { Image, Linking, StyleSheet, Text, TouchableOpacity } from 'react-native';

const ImageButton = ({ image, text, url }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(url)}>
      {image && <Image source={image} style={styles.image} />}
      {text && <Text style={styles.text}>{text}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
   //padding: 10,
    backgroundColor: '#eee',
   //borderRadius: 5,
  },
  image: {
  //  margin:'5%',
   height:256,
  resizeMode:'contain',
 // borderWidth:3,
 // padding:10,
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
});

export default ImageButton;


