//import { Image } from "expo-image";
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Index() {



  return (
    <View style={stylesUI.container}>
      <View style={stylesUI.logoBox}>

      <Image source= {require('../assets/images/Szerelmey-Logo.png')} style = {stylesUI.logo}></Image>
      <Text style = {stylesUI.bigText}>Online cutting schedule database.</Text>
      <Text style = {stylesUI.bigText}>In association with</Text>
      <Image source= {require('../assets/images/logo.png')} style = {stylesUI.logo}></Image>

      </View>
    </View>
  );
}

 const stylesUI = StyleSheet.create({
    bigText:{
    fontSize:24, textAlign:'center', fontWeight:'bold',justifyContent:'center',
  },
  container: {
    flex: 1,
    borderWidth:1,
    padding: '1%',
    margin:'2%',
    backgroundColor:"lavender",
    //backgroundColor:'white',
  justifyContent:'center',
  
  alignContent:'center',
  alignItems:'center',},

      logoBox:
  {
   // justifyContent:'space-evenly',

   // borderWidth:1,
   // padding:'10%',
   //height:'90%',
    backgroundColor:'lavender',
    alignItems:'center',
    

  },

    logo: { 
      
   margin:'1%',
   height:128,
  resizeMode:'contain',

  },


});
 
