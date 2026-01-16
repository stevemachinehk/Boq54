//import { Image } from "expo-image";
import React from 'react';
import { StyleSheet, View } from 'react-native';


//import stylesUIX from '../components/Style';

import ImageButton from '../components/ImageButton';
  


export default function about() {



  return (
    

    <View style={stylesUI.container}>

      

      <ImageButton
        image={require('../assets/images/steveUK2025Facades512.jpg')}
        text=""
        url={'https://www.arcmotion.co.uk'}
      />
     
    </View>
  );
}

 const stylesUI = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth:1,
    padding: '1%',
    margin:'2%',
    backgroundColor:"lavender",
    //backgroundColor:'white',
  justifyContent:'center',
  
  alignContent:'center',
  alignItems:'center'
},



});
 
