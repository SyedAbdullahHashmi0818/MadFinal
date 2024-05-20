// In App.js in a new project

import {useEffect}  from 'react';
import { StyleSheet,View, Text, Pressable,Image,ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styled } from "nativewind";

import APP_ICON from '../assets/APP_ICON.svg'



const Stack = createNativeStackNavigator();

const StyledPressable = styled(Pressable);
const StyledText = styled(Text);
const StyledImage = styled(Image);


 
function SplashScreen({navigation}) {
  useEffect(() => {
  
    setTimeout(() => {
      navigation.replace('Splash2');
    }, 2000);
   },[])




  return (
   <>
   <View className='bg-white'>

 
   <SafeAreaView>

    <View className='flex h-full justify-center items-cente  overflow-hidden  '>
   
  
    <View className='  items-center    '>
  <APP_ICON/>
     
  
    </View>
   
    
     
      


    </View>
   </SafeAreaView>
   </View>
   </>
  );
}



    
 



export default SplashScreen;