import { View, Text, Pressable, ScrollView, ActivityIndicator,Platform,Image ,TextInput, StyleSheet, ImageBackground,KeyboardAvoidingView} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styled } from "nativewind";

import Google from '../assets/google.svg'
import FaceBook from '../assets/Facebook.svg'
import BackButton from '../assets/BackButton.svg'



const SignUp  = ({navigation}) => {

    const StyledPressable = styled(Pressable);
    const StyledText = styled(Text);
    const StyledImage = styled(Image);

    const StyleBackground=styled(ImageBackground)
    const StyledInput = styled(TextInput, {
        props: {
          placeholderTextColor: "color",
        },
      });


    return (
        <SafeAreaView>

<KeyboardAvoidingView keyboardVerticalOffset={50}
                style={[styles.keyboard]}
                behavior={Platform.select({ android: 'height', default: 'padding' })}>

<ScrollView
                    style={[styles.scroll]}
                    keyboardDismissMode="interactive"
                    keyboardShouldPersistTaps="handled">

<View className='flex flex-row  items-center'>
    <StyledPressable onPress={() => {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: "Splash2",
          },
        ],
      });
    }}>
    <BackButton/>

    </StyledPressable>
    
</View>
            <View   className=' mt-10 mx-10 flex justify-center ' >

                <StyledText className='text-xl text-center' style={{ fontFamily: "pop-bold" }}>SignUp with Email</StyledText>
                <StyledText className='text-lg text-center mt-3' style={{ fontFamily: "pop-light" }}>Get chatting with friends and family today by signing up for our chat app!</StyledText>

              



                

                <View>

                <View className='mt-10'>
                    <Text className='text-lg' style={{fontFamily:"pop-regular"}}>Your Name</Text>
                <StyledInput
                
                
                className="  border-b-2 border-black/10    p-3 text-lg"
              />
                </View>
                <View className="mt-5">
                    <Text className='text-lg'  style={{fontFamily:"pop-regular"}}>Your email</Text>
                <StyledInput
               
                
                className="  border-b-2 border-black/10  h-16  p-3 text-lg"
              />
                </View>
                <View className="mt-5">
                    <Text className='text-lg'  style={{fontFamily:"pop-regular"}}>Password</Text>
                <StyledInput
               
                
                className="  border-b-2 border-black/10  h-16  p-3 text-lg"
              />
                </View>
                <View className="mt-5">
                    <Text className='text-lg'  style={{fontFamily:"pop-regular"}}>Confirm Password</Text>
                <StyledInput
               
                
                className="  border-b-2 border-black/10  h-16  p-3 text-lg"
              />
                </View>
               
                </View>


                <View className="bg-black/40  rounded-full  overflow-hidden mt-5 flex ">
                <StyledPressable onPress={() => {
                 navigation.navigate('SignUp2',{
                  name:"Rizwan ali"
                 })
              }}>
                 <StyleBackground className='py-4 rounded-full  flex items-center '  source={require('../assets/Splash.jpg')}>
              
              <Text className=" text-white " style={{fontFamily:"pop-regular"}}>Next </Text>


                    
                 </StyleBackground>
              </StyledPressable>
              </View>

              
             

            </View>


                      </ScrollView>

          </KeyboardAvoidingView>



        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    font:{
      fontFamily:"pop-regular",
      
    }
  });

export default SignUp 