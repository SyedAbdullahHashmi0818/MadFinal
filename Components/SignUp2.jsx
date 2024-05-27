import { View, Text, Pressable, Image, TextInput, StyleSheet, ImageBackground } from 'react-native'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styled } from "nativewind";



import Google from '../assets/google.svg'
import FaceBook from '../assets/Facebook.svg'
import Instagram from '../assets/Instagram.svg'
import BackButton from '../assets/BackButton.svg'
import AddIcon from '../assets/AddIcon.svg'

import Profileicon from '../assets/ProfileIcon.svg'
import { useRoute } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

const SignUp2 = ({ navigation }) => {
  const [image, setImage] = useState(null)

  const StyledPressable = styled(Pressable);
  const StyledText = styled(Text);
  const StyledImage = styled(Image);
  const route = useRoute()
  // const {  }  = route.params;

  let name = "rizwan sabir"

  const StyleBackground = styled(ImageBackground)
  const StyledInput = styled(TextInput, {
    props: {
      placeholderTextColor: "color",
    },
  });


  return (
    <SafeAreaView>


      <View className='mt-10'>
        <Text className='font-bold text-2xl  w-full text-center mb-4' style={{ fontFamily: "pop-regular" }}>Profile Setup</Text>
        <View className='  flex  gap-2 items-center '  >
          <View className='flex flex-row '>
            <StyledPressable onPress={() => {
              const pickImage = async () => {

                let result = await ImagePicker.launchImageLibraryAsync({
                  mediaTypes: ImagePicker.MediaTypeOptions.All,
                  allowsEditing: true,
                  aspect: [4, 3],
                  quality: 1,
                });

                console.log(result);

                if (!result.canceled) {
                  setImage(result.assets[0].uri);
                }
              };
              console.log("pressed is clicked");
              pickImage()



            }}>
              <View className='w-20  h-20 rounded-full  flex items-center justify-center  border-2'>
                {image ? <StyledImage className='w-20  h-20 rounded-full  ' source={{ uri: image }} /> : <Profileicon />}


              </View>

              <View style={{ backgroundColor: "#FFB0FE" }} className='w-10 h-10  absolute bottom-0 right-0  rounded-full flex items-center justify-center'><AddIcon /></View>
            </StyledPressable>
          </View>

          <View className='  '>
            <Text className='text-lg' style={{ fontFamily: "pop-bold" }}>{name}</Text>

          </View>
        </View>



      </View>


      <View className=' mt-10 mx-10 flex justify-center ' >

        <View>

          <View className='mt-10'>
            <Text className='text-lg' style={{ fontFamily: "pop-regular" }}>FaceBook ID</Text>
            <View className='flex flex-row  items-center'>
              <FaceBook className='w-1/12' />
              <StyledInput


                className="  border-b-2 border-black/10    p-3 text-lg w-11/12"
              />
            </View>
          </View>

          <View className='mt-10'>
            <Text className='text-lg' style={{ fontFamily: "pop-regular" }}>FaceBook ID</Text>
            <View className='flex flex-row  items-center'>
              <Instagram className='w-1/12' />
              <StyledInput


                className="  border-b-2 border-black/10    p-3 text-lg w-11/12"
              />
            </View>
          </View>



        </View>


        <View className="bg-black/40  rounded-full  overflow-hidden mt-5 flex ">
          <StyledPressable onPress={() => {
            navigation.reset({
              index: 0,
              routes: [
                {
                  name: "BottomNavigation",
                },
              ],
            });
          }}>

            <StyleBackground className='py-4 rounded-full  flex items-center ' source={require('../assets/Splash.jpg')}>
              <Text className=" text-white " style={{ fontFamily: "pop-regular" }}>Next </Text>





            </StyleBackground>
          </StyledPressable>
        </View>




      </View>



    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  font: {
    fontFamily: "pop-regular",

  }
});

export default SignUp2 