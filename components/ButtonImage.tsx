//import { Image } from 'expo-image';
import { Image, Linking, StyleSheet, TouchableOpacity, View } from 'react-native';
type Props = {
  pic: string;
  url: string;
};

export default function ButtonImage({ pic, url }: Props) {
  return (
    <View style={styles.buttonContainer}>
   
      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(url)}>
        <Image  source= {require('../assets/images/steveUK2025Facades512.jpg')} style = {styles.ImageStyle}></Image>
      </TouchableOpacity>

      </View>
    
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 120,
    height: 38,
    marginHorizontal: 20,
   // alignItems: 'center',
    //justifyContent: 'center',
    padding: 3,
    flexDirection: 'column',
    //backgroundColor:'grey',
  },
  button: {
    borderRadius: 5,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor:'lavender',
  },
  buttonLabel: {
    color: 'black',
    fontSize: 16,
  },
ImageStyle:{

    margin:'5%',
   height:256,
  resizeMode:'contain',
 // borderWidth:3,
  padding:10,
  
},
  
});
