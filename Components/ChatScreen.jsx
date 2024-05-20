import React from 'react';
import { View, Text, StyleSheet, Pressable,Image,ImageBackground,TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styled } from "nativewind";

import { SafeAreaView } from 'react-native-safe-area-context'
import SearchIcon from '../assets/SearchWhite.svg'

const StyledPressable = styled(Pressable);
const StyledText = styled(Text);
const StyledImage = styled(Image);

const StyleBackground=styled(ImageBackground)
const StyledInput = styled(TextInput, {
    props: {
      placeholderTextColor: "color",
    },
  });

const ChatScreen = () => {

   
  return (
    <LinearGradient
      colors={['rgba(183,164,208,1)', 'rgba(246,241,252,1)']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }} // Adjust to reflect 185 degrees
      style={styles.background}
    >
      <SafeAreaView>

<View>

    <View className='flex flex-row justify-between mt-3 mx-3 items-center'>
        <View className='  flex flex-row gap-2 items-center '  >
            <StyledImage className='w-14 h-14 rounded-full '  source={require('../assets/Pictures/img_girl.jpg')} />
       
           <View  className=' pl-3'>
            <Text className='text-sm text-black/50' style={{fontFamily:"pop-regular"}}>Good Morning</Text>
            <Text className='text-lg' style={{fontFamily:"pop-bold"}}>Rizwan Sabir</Text>
           </View>
       </View>

       <View className=''>
        <SearchIcon/>
       </View>
    </View>



    <View className='bg-white h-full mt-10 rounded-t-3xl'>

<View className='mx-5 mt-4'>

<Text className='text-2xl' style={{fontFamily:"pop-bold"}}>Chat</Text>  

<Chat name="Rizwan Sabir" msg="Good morning" unread="3" time="12:24" profile={require(`../assets/LoginImage.jpg`)}/>
<Chat name="Ahmad" msg="hi"  time="12:24" profile={require(`../assets/Pictures/gettyimages-1156115662-661553d91b45b.jpg`)}/>
<Chat name="Zeeshan" msg="now?"  time="12:24" profile={require(`../assets/Pictures/Hazelle (@bellamiie) • Instagram photos and videos - Google Chrome 2.12.2020 г. 20_28_46_0.png`)}/>
<Chat name="Hanzla" msg="will be there" unread="3" time="12:24" profile={require(`../assets/Pictures/istockphoto-1363627613-612x612.jpg`)}/>
<Chat name="Saif" msg="ok"  time="12:24" profile={require(`../assets/Pictures/hot_instagram_girl_12.jpg`)}/>



</View>
  


    </View>
</View>

       </SafeAreaView>
    </LinearGradient>
  );
};





function Chat({name,msg,unread,time,profile}) {
  return (
    <View className='flex flex-row justify-between mt-3 mx-3 items-center'>
    <View className='  flex flex-row gap-2 items-center '  >
        <StyledImage className='w-14 h-14 rounded-full '  source={profile} />
   
       <View  className=' pl-3'>
        <Text className='text-lg' style={{fontFamily:"pop-bold"}}>{name}</Text>
        <Text className='text-sm text-black/50' style={{fontFamily:"pop-regular"}}>{msg}</Text>
       </View>
   </View>

   <View className=''>
  { unread? <View className='bg-green-500 rounded-full w-5 flex items-center '><Text>{unread}</Text></View>: <View></View>}
    <Text>{time}</Text>
   </View>
</View>
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

export default ChatScreen;
