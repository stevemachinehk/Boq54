//import { Image } from "expo-image";
import React from 'react';
import { StyleSheet, View } from 'react-native';


//import stylesUIX from '../components/Style';
import ButtonImage from '../components/ButtonImage';

  


export default function about() {



  return (
    

    <View style={stylesUI.container}>

      <ButtonImage pic = {('../assets/images/steveUK2025Facades512.jpg')} url={'https://www.arcmotion.co.uk'}/>

      
     
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

    logo: { 
    height: 256,

    resizeMode:'contain',

  },


});
 
