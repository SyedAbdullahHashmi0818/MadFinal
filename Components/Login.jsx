import React, { useState } from 'react';
import {
  View, Text, Pressable, TextInput, StyleSheet, ScrollView, Platform, ImageBackground, KeyboardAvoidingView, Alert, ActivityIndicator
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styled } from "nativewind";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import auth from './firebase'; // Adjust the path based on your file structure

import Google from '../assets/google.svg';
import FaceBook from '../assets/Facebook.svg';
import BackButton from '../assets/BackButton.svg';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const StyledPressable = styled(Pressable);
  const StyledText = styled(Text);
  const StyledInput = styled(TextInput, {
    props: {
      placeholderTextColor: "color",
    },
  });
  const StyleBackground = styled(ImageBackground);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setLoading(false);
      Alert.alert('Login Successful', `Welcome back, ${user.email}`);
      // Navigate to another screen
      navigation.reset({
        index: 0,
        routes: [{ name: 'BottomNavigation' }], // Adjust the route name as needed
      });
    } catch (error) {
      setLoading(false);
      Alert.alert('Login Error', error.message);
    }
  };

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={50}
      style={styles.keyboard}
      behavior={Platform.select({ android: 'height', default: 'padding' })}
    >
      <ScrollView
        style={styles.scroll}
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="handled"
      >
        <SafeAreaView>
          <View className="flex flex-row items-center">
            <StyledPressable onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: "Splash2" }],
              });
            }}>
              <BackButton />
            </StyledPressable>
          </View>
          <View className="mt-20 mx-10 flex justify-center">
            <StyledText className="text-xl text-center" style={{ fontFamily: "pop-bold" }}>
              Login into the Iverse
            </StyledText>
            <StyledText className="text-lg text-center mt-3" style={{ fontFamily: "pop-light" }}>
              Welcome back! Sign in using your social account or email to continue us
            </StyledText>

            <View className="flex items-center">
              <View className="p-5 mt-3 rounded-2xl flex flex-row justify-around mx-10 w-52">
                <StyledPressable className="rounded-full p-2">
                  <Google />
                </StyledPressable>
                <StyledPressable className="rounded-full p-2">
                  <FaceBook />
                </StyledPressable>
              </View>
            </View>

            <View className="flex flex-row mx-10">
              <View className="bg-black/50 mt-3 w-5/12" style={{ height: 1 }}></View>
              <View className="flex w-2/12 flex-row justify-center">
                <Text style={{ fontFamily: "pop-regular" }}>OR</Text>
              </View>
              <View className="bg-black/50 mt-3 w-5/12" style={{ height: 1 }}></View>
            </View>

            <View className="mt-10">
              <Text className="text-lg" style={{ fontFamily: "pop-regular" }}>Your email</Text>
              <StyledInput
                value={email}
                onChangeText={setEmail}
                className="border-b-2 border-black/10 p-3 text-lg"
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
            <View className="mt-5">
              <Text className="text-lg" style={{ fontFamily: "pop-regular" }}>Password</Text>
              <StyledInput
                value={password}
                onChangeText={setPassword}
                className="border-b-2 border-black/10 h-16 p-3 text-lg"
                placeholder="Password"
                secureTextEntry
              />
            </View>

            <StyledPressable
              onPress={handleLogin}
              className="bg-black/40 rounded-full overflow-hidden mt-5"
              disabled={loading}
            >
              <StyleBackground className="py-4 rounded-full flex items-center" source={require('../assets/Splash.jpg')}>
                {loading ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  <Text className="text-white" style={{ fontFamily: "pop-regular" }}>Log In</Text>
                )}
              </StyleBackground>
            </StyledPressable>

            <View className="flex items-center mt-5">
              <Text style={styles.font} className="">Forget Password?</Text>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  font: {
    fontFamily: "pop-regular",
  },
  keyboard: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
});

export default Login;



// import { View, Text, Pressable, Image, TextInput, StyleSheet, ScrollView, ActivityIndicator, Platform, ImageBackground, KeyboardAvoidingView } from 'react-native'
// import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import { styled } from "nativewind";

// import Google from '../assets/google.svg'
// import FaceBook from '../assets/Facebook.svg'
// import BackButton from '../assets/BackButton.svg'

// const Login = ({ navigation }) => {

//   const StyledPressable = styled(Pressable);
//   const StyledText = styled(Text);
//   const StyledImage = styled(Image);

//   const StyleBackground = styled(ImageBackground)
//   const StyledInput = styled(TextInput, {
//     props: {
//       placeholderTextColor: "color",
//     },
//   });


//   return (

//     <>
//       <KeyboardAvoidingView keyboardVerticalOffset={50}
//         style={[styles.keyboard]}
//         behavior={Platform.select({ android: 'height', default: 'padding' })}>

//         <ScrollView
//           style={[styles.scroll]}
//           keyboardDismissMode="interactive"
//           keyboardShouldPersistTaps="handled">

//           <SafeAreaView>
//             <View className='flex flex-row  items-center'>
//               <StyledPressable onPress={() => {
//                 navigation.reset({
//                   index: 0,
//                   routes: [
//                     {
//                       name: "Splash2",
//                     },
//                   ],
//                 });
//               }}>
//                 <BackButton />

//               </StyledPressable>

//             </View>
//             <View className=' mt-20 mx-10 flex justify-center '>

//               <StyledText className='text-xl text-center' style={{ fontFamily: "pop-bold" }}>Login into the Iverse</StyledText>
//               <StyledText className='text-lg text-center mt-3' style={{ fontFamily: "pop-light" }}>Welcome back! Sign in using your social account or email to continue us</StyledText>

//               <View className="flex  flex items-center">
//                 <View className="  p-5 mt-3 rounded-2xl  flex flex-row justify-around mx-10 w-52">
//                   <StyledPressable className=" rounded-full p-2">

//                     <Google />
//                   </StyledPressable>
//                   <StyledPressable className=" rounded-full p-2 ">

//                     <FaceBook />
//                   </StyledPressable>

//                 </View>
//               </View>




//               <View className="flex  flex-row mx-10 ">
//                 <View className=" bg-black/50 mt-3 w-5/12" style={{ height: 1 }}></View>

//                 <View className='flex w-2/12 flex-row  justify-center'>
//                   <Text className="" style={{ fontFamily: "pop-regular" }}>OR</Text>

//                 </View>
//                 <View className=" bg-black/50  mt-3 w-5/12" style={{ height: 1 }}></View>
//               </View>

//               <View>

//                 <View className='mt-10'>
//                   <Text className='text-lg' style={{ fontFamily: "pop-regular" }}>Your email</Text>
//                   <StyledInput


//                     className="  border-b-2 border-black/10    p-3 text-lg" />
//                 </View>
//                 <View className="mt-5">
//                   <Text className='text-lg' style={{ fontFamily: "pop-regular" }}>Password</Text>
//                   <StyledInput


//                     className="  border-b-2 border-black/10  h-16  p-3 text-lg" />
//                 </View>

//               </View>


//               <View className="bg-black/40  rounded-full  overflow-hidden mt-5">
//                 <StyleBackground className='py-4 rounded-full  flex items-center ' source={require('../assets/Splash.jpg')}>
//                   <Text className=" text-white" style={{ fontFamily: "pop-regular" }}>Log In </Text>



//                 </StyleBackground>
//               </View>

//               <View className=" flex items-center mt-5" style={{ fontFamily: "pop-regular" }}>

//                 <Text style={styles.font} className="">Forget Password?  </Text>

//               </View>


//             </View>
//           </SafeAreaView>
//         </ScrollView>
//       </KeyboardAvoidingView>



//     </>
//   )
// }

// const styles = StyleSheet.create({
//   font: {
//     fontFamily: "pop-regular",

//   }
// });

// export default Login
