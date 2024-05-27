import React, { Component } from 'react';
import { View, Text, Pressable, Image, ImageBackground, TextInput, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styled } from "nativewind";
import { LinearGradient } from 'expo-linear-gradient';

import Hamburger from '../assets/Hamburger.svg';

// Import images statically
import Profile1 from '../assets/Pictures/hot_instagram_girl_12.jpg';
import Profile2 from '../assets/Pictures/ayo-ogunseinde-6W4F62sN_yI-unsplash.jpg';
import Profile3 from '../assets/Pictures/hot_instagram_girl_12.jpg';

const StyledPressable = styled(Pressable);
const StyledText = styled(Text);
const StyledImage = styled(Image);

const StyleBackground = styled(ImageBackground);
const StyledInput = styled(TextInput, {
  props: {
    placeholderTextColor: "color",
  },
});

interface DiscoverProps {
  navigation: any;
}

interface DiscoverState {
  data: Array<{
    name: string;
    profile: any;
    facebookid: string;
    instagramid: string;
  }>
}

class DiscoverT extends Component<DiscoverProps, DiscoverState> {
  constructor(props: DiscoverProps) {
    super(props);
    this.state = {
      data: [
        { name: "Rizwan Sabir", profile: Profile1, facebookid: "@rizwansabir1", instagramid: "@rizwanawan" },
        { name: "Sana Sabir", profile: Profile2, facebookid: "@rizwansabir32", instagramid: "@rizwanawan" },
        { name: "Rizwan Sabir", profile: Profile3, facebookid: "@rizwansa21", instagramid: "@rizwanawan" },
      ]
    };
  }

  render() {
    return (
      <LinearGradient
        colors={['rgba(183,164,208,1)', 'rgba(246,241,252,1)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }} // Adjust to reflect 185 degrees
        style={styles.background}
      >
        <SafeAreaView>
          <View>
            <View style={{ marginTop: 20 }}>
              <Text style={{ fontSize: 18, textAlign: 'center', fontFamily: "pop-bold" }}>Discover</Text>
            </View>

            <View style={{ backgroundColor: 'white', height: '100%', borderRadius: 30, marginTop: 20 }}>
              {this.state.data.map((value, index) => {
                console.log("name is " + value.name);
                return (
                  <StyledPressable key={value.facebookid} onPress={() => {
                    this.props.navigation.navigate('PersonInfo', {
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
}

interface ChatProps {
  name: string;
  profile: any;
}

const Chat: React.FC<ChatProps> = ({ name, profile }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginHorizontal: 10, alignItems: 'center' }}>
      <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
        <StyledImage style={{ width: 56, height: 56, borderRadius: 28 }} source={profile} />
        <View style={{ paddingLeft: 12 }}>
          <Text style={{ fontSize: 18, fontFamily: "pop-bold" }}>{name}</Text>
        </View>
      </View>
      <View>
        <View style={{ width: 40, height: 40 }}><Hamburger /></View>
      </View>
    </View>
  );
};

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

export default DiscoverT;
