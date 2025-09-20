import { Ionicons } from "@expo/vector-icons";
import { Tabs } from 'expo-router';
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
    <StatusBar style="dark"/>

    <Tabs screenOptions={{headerShown:false,
      tabBarActiveTintColor:"blue", 

      tabBarStyle: {backgroundColor: '#25292e',},

         }}>
      <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: ({color, focused})=><Ionicons name= {focused ? "home-sharp" :'home-outline' } color = {color} size = {30}/> }} />

      <Tabs.Screen name="NashHouse" options={{ title: 'Nash House', tabBarIcon: ({color, focused})=><Ionicons name= {focused ? "home-sharp" :'home-outline' } color = {color} size = {30}/> }} />

      <Tabs.Screen name="about" options={{ title: 'About' , tabBarIcon: ({color, focused})=><Ionicons name={ focused ? "information-circle" : 'information-circle-outline'} color = {color}size = {30}/>}} />

    </Tabs>
    
    
    </>
  );
}
