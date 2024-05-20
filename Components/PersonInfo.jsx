import { View, Text, Pressable, Image ,TextInput, StyleSheet, ImageBackground} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styled } from "nativewind";


import Google from '../assets/google.svg'
import FaceBook from '../assets/Facebook.svg'
import Instagram from '../assets/Instagram.svg'
import BackButton from '../assets/BackButton.svg'
import AddIcon from '../assets/AddIcon.svg'
import { useRoute } from '@react-navigation/native';

const PersonInfo  = ({navigation}) => {

    const StyledPressable = styled(Pressable);
    const StyledText = styled(Text);
    const StyledImage = styled(Image);
    const route = useRoute();
    const { name, profile, facebookid,instagramid } = route.params;
    const StyleBackground=styled(ImageBackground)
    const StyledInput = styled(TextInput, {
        props: {
          placeholderTextColor: "color",
        },
      });


    return (
        <SafeAreaView>
<View className='flex flex-row  items-center'>
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
    <BackButton/>

    </StyledPressable>
    
</View>

<View className='mt-5'>
          
          <View className='  flex  gap-2 items-center '  >
          <View className='flex flex-row '>

      <StyledImage className='w-20  h-20 rounded-full '  source={profile} />
      </View>
 
     
     <View  className=' w-full  flex items-center  '>
      <Text className='text-lg' style={{fontFamily:"pop-bold"}}>{name}</Text>
    
     </View>
 </View>

        
        
      </View>



            <View   className=' mt-10 mx-10 flex justify-center ' >

              



                

                <View>

                <View className='mt-10'>
                    <Text className='text-lg font-bold' style={{fontFamily:"pop-regular"}}>FaceBook ID: </Text>
               <View className='flex flex-row  items-center'>
                <FaceBook className='w-1/12'/>
              <Text className='   p-3 text-lg w-11/12'>{facebookid}</Text>
               </View>
                </View>

                <View className='mt-10'>
                    <Text className='text-lg font-bold' style={{fontFamily:"pop-regular"}}>Instagram ID: </Text>
               <View className='flex flex-row  items-center'>
                <Instagram className='w-1/12'/>
                <Text className='    p-3 text-lg w-11/12'>{instagramid}</Text>
               </View>
                </View>
                
               
               
                </View>


               

              
             

            </View>



        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    font:{
      fontFamily:"pop-regular",
      
    }
  });

export default PersonInfo 