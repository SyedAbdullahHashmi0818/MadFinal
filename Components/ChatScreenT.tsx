import React from 'react';
import { View, Text, StyleSheet, Pressable, Image, ImageBackground, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styled } from "nativewind";
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchIcon from '../assets/SearchWhite.svg';

const StyledPressable = styled(Pressable);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyleBackground = styled(ImageBackground);
const StyledInput = styled(TextInput, {
  props: {
    placeholderTextColor: "color",
  },
});

interface ChatProps {
  name: string;
  msg: string;
  unread?: number;
  time: string;
  profile: any; // Change 'any' to the correct type of your profile image
}

const ChatScreen: React.FC = () => {

  const Chat: React.FC<ChatProps> = ({ name, msg, unread, time, profile }) => {
    return (
      <View style={styles.chatContainer}>
        <View style={styles.chatContent}>
          <StyledImage style={styles.profileImage} source={profile} />
          <View style={styles.chatText}>
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.msgText}>{msg}</Text>
          </View>
        </View>
        <View style={styles.chatInfo}>
          {unread ? <View style={styles.unreadBadge}><Text>{unread}</Text></View> : <View />}
          <Text>{time}</Text>
        </View>
      </View>
    )
  }

  return (
    <LinearGradient
      colors={['rgba(183,164,208,1)', 'rgba(246,241,252,1)']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }} // Adjust to reflect 185 degrees
      style={styles.background}
    >
      <SafeAreaView>

        <View>

          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <StyledImage source={require('../assets/Pictures/img_girl.jpg')} style={styles.profileImage} />
              <View style={styles.headerText}>
                <Text style={styles.goodMorningText}>Good Morning</Text>
                <Text style={styles.userName}>Rizwan Sabir</Text>
              </View>
            </View>
            <View style={styles.headerRight}>
              <SearchIcon />
            </View>
          </View>

          <View style={styles.chatContainer}>
            <View style={styles.chatList}>
              <Text style={styles.chatTitle}>Chat</Text>
              <Chat name="Rizwan Sabir" msg="Good morning" unread={3} time="12:24" profile={require(`../assets/LoginImage.jpg`)} />
              <Chat name="Ahmad" msg="hi" time="12:24" profile={require(`../assets/Pictures/gettyimages-1156115662-661553d91b45b.jpg`)} />
              <Chat name="Zeeshan" msg="now?" time="12:24" profile={require(`../assets/Pictures/Hazelle (@bellamiie) • Instagram photos and videos - Google Chrome 2.12.2020 г. 20_28_46_0.png`)} />
              <Chat name="Hanzla" msg="will be there" unread={3} time="12:24" profile={require(`../assets/Pictures/istockphoto-1363627613-612x612.jpg`)} />
              <Chat name="Saif" msg="ok" time="12:24" profile={require(`../assets/Pictures/hot_instagram_girl_12.jpg`)} />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 20,
    alignItems: 'center'
  },
  headerLeft: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  },
  headerText: {
    paddingLeft: 12
  },
  goodMorningText: {
    fontSize: 12,
    color: 'black',
    fontFamily: "pop-regular"
  },
  userName: {
    fontSize: 16,
    fontFamily: "pop-bold"
  },
  headerRight: {},
  profileImage: {
    width: 56,
    height: 56,
    borderRadius: 28
  },
  chatContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 3,
    marginHorizontal: 3,
    alignItems: 'center'
  },
  chatContent: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  },
  chatText: {
    paddingLeft: 12
  },
  nameText: {
    fontSize: 18,
    fontFamily: "pop-bold"
  },
  msgText: {
    fontSize: 14,
    color: 'black',
    fontFamily: "pop-regular"
  },
  chatInfo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  unreadBadge: {
    backgroundColor: 'green',
    borderRadius: 10,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  chatTitle: {
    fontSize: 24,
    fontFamily: "pop-bold"
  },
  chatList: {
    backgroundColor: 'white',
    height: '100%',
    borderRadius: 30,
    marginTop: 10,
    marginHorizontal: 5
  }
});

export default ChatScreen;
