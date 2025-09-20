import { StyleSheet } from 'react-native';

const buttonColor = '#0b7bc7';
const color1 = '#edf2f2';
const colorCard = '#9e96ceff';
const modalColor = '#dae0e4';

const stylesUIX = StyleSheet.create({

  bigText:{
    fontSize:24,
     textAlign:'center', 
     fontWeight:'bold', 
     textDecorationLine: 'underline',

  },

   btn:{
    height:40,
  //  width:'75%',
   justifyContent:'center',
   // borderRadius:15,
    backgroundColor:buttonColor,
    color:'white',
   textAlign:'center',
   padding:5,
   margin:10,
   fontWeight:'bold',
  },


  container: {
    flex: 1,
    borderWidth:1,
    padding: '1%',
    margin:'2%',
   // alignItems:'center',
    backgroundColor:'lavender',
 
  },

    containerCard: {
    flex: 1,
    borderWidth:1,
    padding: 5,
    margin:'1%',
   // alignItems:'center',
    backgroundColor:'#9e96ceff',
      borderRadius: 10,
  shadowColor: '#000',
  shadowOffset: {
      width: 0,
      height: 2,
    },
  shadowOpacity: 0.25,
  shadowRadius: 4,
 
  },

    card: {
  backgroundColor:colorCard,
  alignItems: 'center',
/*   marginLeft:10,
  marginRight:10,
  marginTop:10,
  marginBottom:10,
  margin: 10, */
  padding: 5,
  borderRadius: 10,
  shadowColor: '#000',
  shadowOffset: {
      width: 0,
      height: 2,
    },
  shadowOpacity: 0.25,
  shadowRadius: 4,
    
  },

        colNB: {
    flexDirection: 'column',
    flexWrap: 'wrap',
   //borderWidth: 3,
   backgroundColor: 'white',
    margin: 5,
    
  },

          colB: {
    flexDirection: 'column',
   flexWrap: 'wrap',
    borderWidth: 1,
    marginBottom: '2%',
    alignItems: 'center',
    backgroundColor:'white',
   // justifyContent: 'space-around',
    width: '99%',
    //padding: 2,
    
  },

    colW: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    borderWidth: 3,
   margin: '1%',
    width: '26%',
    padding: '1%',
  },

  filterTextBox:{
    backgroundColor: 'lavender',
   // width:'80%'
   // height:'100%',
    //backgroundColor:'#9e96ceff',
  //  borderWidth:1,
  
  },

/*   logo:{
   // align:'center',
    width: 128,
  height:128
}, */

  imageContainer:{
    flex: 1,

  },


  link: {
    //marginTo: 15,
    paddingVertical: 15,
  },


/*   logo: {
  width: '20%',
  height: 75,
  borderRadius: 15,
  resizeMode:'center',
  }, */

    topRow: {
    //  flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 3,
    marginTop: '1%',
    width: '100%',
    backgroundColor:'lavender',
  },

    rowD: {
    flexDirection: 'row',
   flexWrap: 'wrap',
    borderWidth: 1,
    marginBottom: '2%',
    alignItems: 'center',
    backgroundColor:'white',
    justifyContent: 'space-between',
    width: '99%',
    padding: 1,
  },


      rowNB: {
    flexDirection: 'row',
   flexWrap: 'wrap',
    borderWidth: 1,
     backgroundColor: 'white',
    margin: '2%',
  },
  
      rowTop: {
  //       backgroundColor: 'white',
    flexDirection: 'row',
   flexWrap: 'wrap',
   // borderWidth: 1,
   // marginBottom: 20,
   alignItems: 'center',
    justifyContent: 'space-between',
   // width: '100%',
    //padding: 2,
  },

/*   schedule: {
  width: '70%',
  height: 500,
  borderRadius: 15,
  resizeMode:'contain',
  }, */

    titleText: {

   fontWeight:'bold',
   fontSize:15,
  },

  titleBox: {
    flexWrap:'wrap',
    
   borderWidth: 3,
   width: '21%',
   backgroundColor:'grey',
   margin: '2%',
  },
    normalText: {
    //    flex: 1,
    flexDirection:'row',
    flexWrap:'wrap',
   justifyContent: 'space-between',
  //  backgroundColor: '#ffeed7',
  textDecorationLine: 'underline',
    padding: '1%',
 //   margin: 5,
  },




  text: {
  color: '#fff',
  },


      fab: {
     margin: '2%',
     backgroundColor:'#4d726d',
  },

  lowerBox:
  {
    flex:3,
    flexDirection: 'row',
    backgroundColor:'lavender',
     borderWidth:1,
     padding:'1%',
   // justifyContent:'space-evenly',
  },

  detailBox:
  {
    flex:1,
    backgroundColor:'lavender',
    margin:'1%',

  },
    picBox:
  {
    flex:3,
    margin:'1%',

  },

    textBox:
  {
    flex:1,
    flexDirection:'row',
   flexWrap:'wrap',
    backgroundColor:'white',
   borderWidth:1,
  justifyContent:'space-between',
  margin:'1%',

  },

      logoBox:
  {
    flex:1,
    flexDirection:'row',
   flexWrap:'wrap',
    backgroundColor:'lavender',

  },

  topBox:
  {
  flex:1,
  flexDirection:'row',
    backgroundColor:'lavender',
     borderWidth:1,
     padding:'1%',
    justifyContent:'space-evenly',
  },

    topBoxes:
  {flex:1,
    margin:'1%',
  justifyContent:'center',
backgroundColor:'lavender',
  },

    logo: { 
  alignContent:'center',   
  width: '100%',
  height: '50%',
  resizeMode:'contain',
  padding:'1%',
  },
/* 
  text: {
    flex:1,
    color: '#000000ff',
  },*/

  schedule: {
flex:1,
  resizeMode:'contain',
  }, 







});


export default stylesUIX;

