import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './components/homePage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

const Stack = createStackNavigator();

const LogoTitle = () => {
  return(
      <View>
        <View style={{alignItems:'center', flexDirection:'row', justifyContent:'center'}}>
        <Text style={{fontSize:25, fontFamily:'Palatino-Italic'}}>Instagram</Text>
      </View>
        <View style={{ width:16, height:16,  backgroundColor:'red', borderRadius:15, justifyContent:'center', alignItems:'center' , marginLeft:380, flexDirection:'row'}}>
        <Text style={{fontSize:10, color:'white'}}>2</Text>
      </View>
      </View>
       
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen 
         name = "Home"
         component = {HomePage}
         options={{
           headerStyle:{
             backgroundColor:'whitesmoke'
           },
           headerTitle: () => <LogoTitle />,
           headerLeft: () => (
             <TouchableOpacity style={{marginLeft:15, marginBottom:5}} >
                <Feather 
                name="camera"
                size={26}
                />
             </TouchableOpacity>
           ),
           headerRight: () => (
             <TouchableOpacity style={{marginRight:15, marginBottom:5}} >
               <Feather 
                 name="send"
                 size={26}
               />
             </TouchableOpacity>
           )        
         }}
       />
     </Stack.Navigator>
    </NavigationContainer>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
