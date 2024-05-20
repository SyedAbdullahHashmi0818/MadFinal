import { View, Text, Pressable, Image, ImageBackground, TextInput,StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styled } from "nativewind";
import { LinearGradient } from 'expo-linear-gradient';

import AddIcon from '../assets/AddIcon.svg'

const StyledPressable = styled(Pressable);
const StyledText = styled(Text);
const StyledImage = styled(Image);

const StyleBackground = styled(ImageBackground)
const StyledInput = styled(TextInput, {
  props: {
    placeholderTextColor: "color",
  },
});



const Chat = () => {
  return (
    <LinearGradient
    colors={['rgba(183,164,208,1)', 'rgba(246,241,252,1)']}
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 1 }} // Adjust to reflect 185 degrees
    style={styles.background}
  >
    <SafeAreaView>

      <View >
        <View className='mt-5'>
          
            <View className='  flex  gap-2 items-center '  >
            <View className='flex flex-row '>

        <StyledImage className='w-20  h-20 rounded-full '  source={require('../assets/Pictures/18921946_867238273417419_4378854612795481925_n.jpg')} />
        <View  style={{backgroundColor:"#FFB0FE"}} className='w-10 h-10  absolute bottom-0 right-0  rounded-full flex items-center justify-center'><AddIcon/></View></View>
   
       <View  className='  '>
        <Text className='text-lg' style={{fontFamily:"pop-bold"}}>Rizwan Sabir</Text>
      
       </View>
   </View>

          
          
        </View>

        <View className='bg-white h-full rounded-3xl mt-5 '>
<Text>A.o.a</Text>
        

        </View>
      </View>
    </SafeAreaView>
    </LinearGradient>
  )
}



const styles = StyleSheet.create({
  background: {
    flex: 1,
   
  },
  text: {
    fontSize: 24, // Change font size as needed
    fontWeight: 'bold',
    color: 'black',
  },
});


export default Chat