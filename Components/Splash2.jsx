// In App.js in a new project

import * as React from 'react';
import { StyleSheet, View, Text, Pressable, Image, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styled } from "nativewind";
const Stack = createNativeStackNavigator();

const StyledPressable = styled(Pressable);
const StyledText = styled(Text);
const StyledImage = styled(Image);

import Google from '../assets/google.svg'
import FaceBook from '../assets/Facebook.svg'



function Splash2({navigation}) {

  return (

    <View style={styles.container}>
      <ImageBackground source={require("../assets/Splash.jpg")} style={styles.background}>
        <SafeAreaView>
          <View className='   flex items-center justify-center  h-full'>

            <StyledText className='text-white  text-5xl  p-1' style={{ fontFamily: "pop-bold" }}>Easily  connect with others nearby.</StyledText>
            <StyledText className='text-white  text-base mt-3' style={{ fontFamily: "pop-light" }}>Our app is the perfect way to connect with people nearby, making new friends effortlessly.</StyledText>
         

          <View>

         
              <View className="flex  flex items-center">
              <View className="  p-5 mt-3 rounded-2xl  flex flex-row justify-around mx-10 w-52">
                <StyledPressable className=" rounded-full p-2 bg-white/20">

                <Google/>
                </StyledPressable>
                <StyledPressable className=" rounded-full p-2 bg-white/20">

                <FaceBook/>
                </StyledPressable>
                
              </View>
              </View>


              <View className="flex  flex-row mx-10">
              <View className=" bg-white mt-3 w-5/12" style={{height:1}}></View>

              <View className='flex w-2/12 flex-row  justify-center'>
              <Text className="text-white  " style={{fontFamily:"pop-regular"}}>OR</Text>
                
              </View>
                <View className=" bg-white  mt-3 w-5/12" style={{height:1}}></View>
              </View>
              

              <View className="bg-white/40 py-4 rounded-full mx-10 mt-10 ">
                <StyledPressable onPress={() => {
                    navigation.navigate('SignUp')
                }} className='flex flex-row justify-center'>


                <Text className="text-white  " style={{fontFamily:"pop-regular"}}>Sign up with Email </Text>
                </StyledPressable>
              </View>

              <View className=" flex items-center mt-5" style={{fontFamily:"pop-regular"}} >
                <View className="flex flex-row  ">
                <Text style={styles.font} className="text-white ">Existing Account?  </Text>
                <StyledPressable onPress={() => {
                    navigation.navigate('Login')
                }}>
                <Text style={styles.font}  className="text-white font-bold ">Log In</Text>
                </StyledPressable>
                </View>
              </View>


            

          </View>
          </View>


        </SafeAreaView>
      </ImageBackground>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Background color of the Splash2
  }, background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' if you want different image fitting styles
    // Adjust the content alignment if needed
  },
  font:{
    fontFamily:"pop-regular",
    
  }
});



export default Splash2;