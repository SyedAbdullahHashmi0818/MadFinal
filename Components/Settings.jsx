import { View, Text ,Pressable,Image,ImageBackground,TextInput} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styled } from "nativewind";
const Settings = ({navigation}) => {

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
    <View>
    <View className="bg-black/40  rounded-full  overflow-hidden mt-5">
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
                 <StyleBackground className='py-4 rounded-full  flex items-center '  source={require('../assets/Splash.jpg')}>
               
          
   <Text className=" text-white" style={{fontFamily:"pop-regular"}}>Log out </Text>



                    
                 </StyleBackground>
    </StyledPressable>
              </View>
    </View>
    </SafeAreaView>
      
  )
}

export default Settings