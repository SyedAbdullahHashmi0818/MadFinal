import { View, Text, Pressable, Image, ImageBackground, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styled } from "nativewind";
import { LinearGradient } from 'expo-linear-gradient';

import DiscoverChat from '../assets/DiscoverChat'
import Hamburger from '../assets/Hamburger.svg'

// Import images statically
import Profile1 from '../assets/Pictures/hot_instagram_girl_12.jpg'
import Profile2 from '../assets/Pictures/ayo-ogunseinde-6W4F62sN_yI-unsplash.jpg'
import Profile3 from '../assets/Pictures/hot_instagram_girl_12.jpg'

const StyledPressable = styled(Pressable);
const StyledText = styled(Text);
const StyledImage = styled(Image);

const StyleBackground = styled(ImageBackground)
const StyledInput = styled(TextInput, {
  props: {
    placeholderTextColor: "color",
  },
});

const Discover = ({ navigation }) => {

  let data = [
    { name: "Rizwan Sabir", profile: Profile1, facebookid: "@rizwansabir1", instagramid: "@rizwanawan" },
    { name: "Sana Sabir", profile: Profile2, facebookid: "@rizwansabir32", instagramid: "@rizwanawan" },
    { name: "Rizwan Sabir", profile: Profile3, facebookid: "@rizwansa21", instagramid: "@rizwanawan" },
  ];

  return (
    <LinearGradient
      colors={['rgba(183,164,208,1)', 'rgba(246,241,252,1)']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }} // Adjust to reflect 185 degrees
      style={styles.background}
    >
      <SafeAreaView>
        <View>
          <View className='mt-5'>
            <Text className='text-lg text-center' style={{ fontFamily: "pop-bold" }}>Discover</Text>
          </View>

          <View className='bg-white h-full rounded-3xl mt-5 '>
            {data.map((value, index) => {
              console.log("name is " + value.name);
              return (
                <StyledPressable key={value.facebookid} onPress={() => {
                  navigation.navigate('PersonInfo', {
                    name: value.name,
                    profile: value.profile,
                    facebookid: value.facebookid,
                    instagramid: value.instagramid
                  })
                }}>
                  <Chat key={index} name={value.name} profile={value.profile} />
                </StyledPressable>
              );
            })}
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  )
}

function Chat({ name, profile }) {
  return (
    <View className='flex flex-row justify-between mt-3 mx-3 items-center'>
      <View className='flex flex-row gap-2 items-center'>
        <StyledImage className='w-14 h-14 rounded-full' source={profile} />
        <View className='pl-3'>
          <Text className='text-lg' style={{ fontFamily: "pop-bold" }}>{name}</Text>
        </View>
      </View>
      <View>
        <View className='w-10 h-10'><Hamburger /></View>
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

export default Discover


// import { View, Text, Pressable, Image, ImageBackground, TextInput,StyleSheet } from 'react-native'
// import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import { styled } from "nativewind";
// import { LinearGradient } from 'expo-linear-gradient';

// import DiscoverChat  from '../assets/DiscoverChat'
// import Hamburger from '../assets/Hamburger.svg'

// const StyledPressable = styled(Pressable);
// const StyledText = styled(Text);
// const StyledImage = styled(Image);

// const StyleBackground = styled(ImageBackground)
// const StyledInput = styled(TextInput, {
//   props: {
//     placeholderTextColor: "color",
//   },
// });



// const Discover = ({navigation}) => {


//   let data=[
//     {name:"Rizwan Sabir",profile:require(`../assets/Pictures/hot_instagram_girl_12.jpg`) , facebookid:"@rizwansabir1",instagramid:"@rizwanawan"},
//     {name:"Sana Sabir",profile:require(`../assets/Pictures/ayo-ogunseinde-6W4F62sN_yI-unsplash.jpg`) , facebookid:"@rizwansabir32",instagramid:"@rizwanawan"},
//     {name:"Rizwan Sabir",profile:require(`../assets/Pictures/hot_instagram_girl_12.jpg`) , facebookid:"@rizwansa21",instagramid:"@rizwanawan"},

//   ]
//   return (
//     <LinearGradient
//     colors={['rgba(183,164,208,1)', 'rgba(246,241,252,1)']}
//     start={{ x: 0, y: 0 }}
//     end={{ x: 0, y: 1 }} // Adjust to reflect 185 degrees
//     style={styles.background}
//   >
//     <SafeAreaView>

//       <View >
//         <View className='mt-5'>
//           <Text className='text-lg text-center' style={{fontFamily:"pop-bold"}}>Discover</Text>
//         </View>

//         <View className='bg-white h-full rounded-3xl mt-5 '>

//         {data.map((value, index) => {
//         console.log("name is " + value.name);
//         return <StyledPressable key={value.facebookid} onPress={() => {
//            navigation.navigate('PersonInfo' ,{
//             name:value.name,
//             profile:value.profile,
//             facebookid:value.facebookid,
//             instagramid:value.instagramid
//            })
//         }}><Chat key={index} name={value.name} profile={value.profile} /></StyledPressable>;
//       })}

//         </View>
//       </View>
//     </SafeAreaView>
//     </LinearGradient>
//   )
// }

// function Chat({name,profile}) {
//   return (
//     <View className='flex flex-row justify-between mt-3 mx-3 items-center'>


      
//     <View className='  flex flex-row gap-2 items-center '  >
//         <StyledImage className='w-14 h-14 rounded-full '  source={profile} />
   
//        <View  className=' pl-3'>
//         <Text className='text-lg' style={{fontFamily:"pop-bold"}}>{name}</Text>
      
//        </View>
//    </View>

//    <View className=''>
 
//     <View className='w-10 h-10'><Hamburger/></View>
//    </View>
// </View>
//   )
// }

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
   
//   },
//   text: {
//     fontSize: 24, // Change font size as needed
//     fontWeight: 'bold',
//     color: 'black',
//   },
// });


// export default Discover