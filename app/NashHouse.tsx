//import React from 'react';
//import { Image } from "expo-image";
import React, { useState } from 'react';
import { FlatList, Image, SafeAreaView, Text, View } from 'react-native';

import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';

import { Card, FAB, List } from 'react-native-paper';
import Button from '../components/Button';
import stylesUIX from '../components/Style';

const imageUrl = 'https://www.arcmotion.co.uk/NashHouseNorth/Panel-Images/';



const html = `
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
  </head>
  <body style="text-align: center;">
    <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
      Hello Expo!
    </h1>
    <img
      src="https://d30j33t1r58ioz.cloudfront.net/static/guides/sdk.png"
      style="width: 90vw;" />
  </body>
</html>
`;

async function getDataFromWeb() {
  try {
    let response = await fetch('https://www.arcmotion.co.uk/NashHouseNorth/NashHouseData.json');
    let data = await response.json();
    return data;
   } catch(error) {
    console.error(error);
  }
}




type Props = {
    item: any;
};

export default function NashHouse() {
const [selectedPrinter, setSelectedPrinter] = useState();
  const print = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    /* @info */ await Print.printAsync({
      html,
      printerUrl: selectedPrinter?.url, // iOS only
    }); /* @end */
  };

  const printToFile = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    /* @info */ const { uri } = await Print.printToFileAsync({ html}); /* @end */
    console.log('File has been saved to:', uri);
    await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
  };

    const selectPrinter = async () => {
    /* @info */ const printer = await Print.selectPrinterAsync(); // iOS only
    /* @end */
    setSelectedPrinter(printer);
  };




    const objData = require("../components/NashHouseData.json");
    //const objData = getDataFromWeb();
    const imageUrl = 'https://www.arcmotion.co.uk/NashHouseNorth/Panel-Images/';

    const [stoneData, setStoneData] = useState(objData);
    const getCurrentDate=()=>{
 
      var date = new Date().getDate();
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear();
 
      //Alert.alert(date + '-' + month + '-' + year);
      // You can turn it in to your desired format
      return date + '-' + month + '-' + year;//format: d-m-y;
}

function getPanel(item: { Material: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; Finish: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; StoneNumber: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; Drawing: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; WallType: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; Totals: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; StoneLength: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; StoneThickness: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; StoneHeight: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; Cube: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }) {

  return (
    <Card style={stylesUIX.containerCard}>

     <View style = {stylesUIX.topBox}>
        
          
            <View style = {stylesUIX.logoBox}>
            <Image source= {require('../assets/images/Szerelmey-Logo.png')} style = {stylesUIX.logo}></Image>
            </View>

          

       


        <View style = {stylesUIX.topBoxes}>
          <View style = {stylesUIX.detailBox}>
              <View style = {stylesUIX.textBox}> 
              <Text style = {stylesUIX.normalText}>Contract Title</Text>
              <Text style = {stylesUIX.titleText}>Nash House North Wing</Text>
            </View>
          <View style = {stylesUIX.textBox}> 
              <Text style = {stylesUIX.normalText}>Contract Number</Text>
              <Text style = {stylesUIX.titleText}>1024</Text>
            </View>
            </View>
        </View>
        <View style = {stylesUIX.topBoxes}>

          <View style = {stylesUIX.detailBox}>
              <View style = {stylesUIX.textBox}> 
              <Text style = {stylesUIX.normalText}>Material</Text>
              <Text style = {stylesUIX.titleText}>{item.Material}</Text>
            </View>
          <View style = {stylesUIX.textBox}> 
              <Text style = {stylesUIX.normalText}>Stone Finish</Text>
              <Text style = {stylesUIX.titleText}>{item.Finish}</Text>
            </View>
            </View>

        </View>


        <View style = {stylesUIX.topBoxes}>
          <View style = {stylesUIX.detailBox}>
              <View style = {stylesUIX.textBox}> 
              <Text style = {stylesUIX.normalText}>Date</Text>
              <Text style = {stylesUIX.titleText}>{getCurrentDate()}</Text>
            </View>
          <View style = {stylesUIX.textBox}> 
              <Text style = {stylesUIX.normalText}>Schedule Number</Text>
              <Text style = {stylesUIX.titleText}>{stoneData.findIndex((obj: { StoneNumber: any; })=>obj.StoneNumber == item.StoneNumber)+1} / {stoneData.length}</Text>
            </View>
          <View style = {stylesUIX.textBox}> 
              <Text style = {stylesUIX.normalText}>Drawn By</Text>
              <Text style = {stylesUIX.titleText}>ARC</Text>
            </View>

            </View>


        </View>

      </View>
        <View style = {stylesUIX.lowerBox}>
          <View style = {stylesUIX.detailBox}>

             <View style = {[stylesUIX.textBox,{flex:2,},]}> 
              <Text style = {stylesUIX.normalText}>Stone Number</Text>
              <Text style = {stylesUIX.bigText}>{item.StoneNumber}</Text>
            </View>
            <View style = {stylesUIX.textBox}> 
              <Text style = {stylesUIX.normalText}>Drawing Number</Text>
              <Text style = {stylesUIX.titleText}>{item.Drawing}</Text>
            </View>

            <View style = {[stylesUIX.textBox,{flex:3,},]}> 
              <Text style = {stylesUIX.normalText}>Description</Text>
              <Text style = {stylesUIX.titleText}>{item.WallType}</Text>
            </View>
            <View style = {stylesUIX.textBox}> 
              <Text style = {stylesUIX.normalText}>Number required</Text>
              <Text style = {stylesUIX.titleText}>{item.Totals}</Text>
            </View>
            <View style = {stylesUIX.textBox}> 
              <Text style = {stylesUIX.normalText}>Length</Text>
              <Text style = {stylesUIX.titleText}>{item.StoneLength}</Text>
            </View>
            <View style = {stylesUIX.textBox}> 
              <Text style = {stylesUIX.normalText}>Width</Text>
              <Text style = {stylesUIX.titleText}>{item.StoneThickness}</Text>
            </View>
            <View style = {stylesUIX.textBox}> 
              <Text style = {stylesUIX.normalText}>Height</Text>
              <Text style = {stylesUIX.titleText}>{item.StoneHeight}</Text>
            </View>
            <View style = {stylesUIX.textBox}> 
              <Text style = {stylesUIX.normalText}>Weight per unit </Text>
              <Text style = {stylesUIX.titleText}></Text>
            </View>
            <View style = {stylesUIX.textBox}> 
              <Text style = {stylesUIX.normalText}>Total Stone cube required</Text>
              <Text style = {stylesUIX.titleText}>{item.Cube}</Text>
            </View>
            <View style = {stylesUIX.textBox}> 
              <Text style = {stylesUIX.normalText}>Bedmould</Text>
              <Text style = {stylesUIX.titleText}></Text>
            </View>
            <View style = {stylesUIX.textBox}> 
              <Text style = {stylesUIX.normalText}>Face mould</Text>
              <Text style = {stylesUIX.titleText}></Text>
            </View>
            <View style = {stylesUIX.textBox}> 
              <Text style = {stylesUIX.normalText}>Section</Text>
              <Text style = {stylesUIX.titleText}></Text>
            </View>
            
               <FAB style={stylesUIX.fab} icon={'printer'}label={'Print Page'} color="white" onPress={print}/>

          </View>
          <View style = {stylesUIX.picBox}>
            <Image style = {stylesUIX.schedule} source= {{uri: imageUrl +'NashHouseNorth-' + item.StoneNumber + '.png'}}></Image>

          </View>

      </View>

    </Card>


  );

}  
const [expanded, setExpanded] = React.useState(false);

  const handlePress = () => setExpanded(!expanded);



  return (
    <SafeAreaView style={stylesUIX.container}>


      <List.Section title="" titleStyle = {stylesUIX.bigText}>
      <List.Accordion
        title="Sort By Drawing"
        titleStyle = {{fontSize:24, textAlign:'center', fontWeight:'bold', }}
        style = {stylesUIX.filterTextBox}
       
        expanded={expanded}
        onPress={handlePress}>
        <View style={stylesUIX.rowTop}>
       
        <Button label="All Stones" listen={() => setStoneData(objData)}/>
        <Button label="GA201" listen={() => setStoneData(objData.filter((xx: { Drawing: string; }) => xx.Drawing == "GA201"))} />
        <Button label="GA202" listen={() => setStoneData(objData.filter((xx: { Drawing: string; }) => xx.Drawing == "GA202"))}/>
        <Button label="GA203" listen={() => setStoneData(objData.filter((x: { Drawing: string; }) => x.Drawing == 'GA203')) }/>
        <Button label="GA204" listen={() => setStoneData(objData.filter((x: { Drawing: string; }) => x.Drawing == 'GA204')) }/>
        
        </View>


      </List.Accordion>
    </List.Section>



      <FlatList 
        data={stoneData}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        renderItem={({ item }) => getPanel(item) }

 


      />

      
    </SafeAreaView>

  );


}




