// In App.js in a new project



import ChatScreen from './Components/ChatScreen';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Splash2 from './Components/Splash2';
import SplashScreen from './Components/SplashScreen';
import { useFonts } from 'expo-font';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from './Components/BottomNavigation';
import Chat from './Components/Chat';
import SignUp2 from './Components/SignUp2';
import PersonInfo from './Components/PersonInfo';
import ImageUpload from './Components/ImageUpload';
const Stack = createNativeStackNavigator();
function App() {


 
  const [fontsLoaded, fontError] = useFonts({
    'pop-thin': require('./assets/Fonts/Poppins-Thin.ttf'),
    'pop-light': require('./assets/Fonts/Poppins-Light.ttf'),
    'pop-regular': require('./assets/Fonts/Poppins-Regular.ttf'),
    'pop-medium': require('./assets/Fonts/Poppins-Medium.ttf'),
    'pop-semibold': require('./assets/Fonts/Poppins-SemiBold.ttf'),
    'pop-bold': require('./assets/Fonts/Poppins-Bold.ttf'),
    'pop-extrabold': require('./assets/Fonts/Poppins-ExtraBold.ttf'),
});


  return (
   
  <>
  
  <NavigationContainer>
  <Stack.Navigator initialRouteName='SplashScreen' >
          <Stack.Screen options={{headerShown:false}}  name="BottomNavigation"  component={BottomNavigation} />
          <Stack.Screen options={{headerShown:false}}  name="Chat"  component={Chat} />
          <Stack.Screen options={{headerShown:false}}  name="PersonInfo"  component={PersonInfo} />
          <Stack.Screen options={{headerShown:false}}  name="Login"  component={Login} />
          <Stack.Screen options={{headerShown:false}}  name="SignUp"  component={SignUp} />
          <Stack.Screen options={{headerShown:false}}  name="SignUp2"  component={SignUp2} />
          <Stack.Screen options={{headerShown:false}}  name="SplashScreen"  component={SplashScreen} />
          <Stack.Screen options={{headerShown:false}}  name="Splash2"  component={Splash2} />
          <Stack.Screen options={{headerShown:false}}  name="ImageUpload"  component={ImageUpload} />
        
        </Stack.Navigator>
  </NavigationContainer>
  

  </>



    
  );
}





export default App;