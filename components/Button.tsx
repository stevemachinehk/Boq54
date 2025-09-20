import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  label: string;
  listen: any;
};

export default function Button({ label, listen }: Props) {
  return (
    <View style={styles.buttonContainer}>
   
      <TouchableOpacity style={styles.button} onPress={() => listen()}>
        <Text style={styles.buttonLabel}>{label}</Text>
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
    borderWidth:1,
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
});
