//import { Image } from "expo-image";
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function NashRender() {
    const imageUrl = ('https://www.arcmotion.co.uk/NashHouseNorth/');

//<Image source= {{uri: 'https://www.arcmotion.co.uk/NashHouseNorth/NWRender.jpg'}} style = {stylesUIX.schedule}></Image>

//<Image source= {require('../assets/images/NashHouseNW.jpg')} style = {stylesUIX.schedule}></Image>
//<Image style = {stylesUIX.schedule} source= {{uri: imageUrl +'NashHouseNorth-' + item.StoneNumber + '.png'}}></Image>


  return (
    <View style={stylesUI.container}>
        <Image source= {{uri: 'https://www.arcmotion.co.uk/NashHouseNorth/NWRender.jpg',cache:'reload'}}style = {stylesUI.logo}></Image>
      <Text style = {stylesUI.bigText}>3D Render of Nash House North West Facade</Text>
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
    alignItems:'center',
//     width:1000,
//    height:563,
    width:'95%',
   height:'95%',
  resizeMode:'contain',

  },


});
 
