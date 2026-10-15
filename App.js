import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// นำเข้าหน้า UI ต่างๆ
import HomeScreens from './Screens/HomeScreens';
import ImageHomeScreen from './Screens/ImageHomeScreen';

import Image1Screen from './Screens/Image1Screen';
import Image2Screen from './Screens/Image2Screen';
import Image3Screen from './Screens/Image3Screen';
import Image4Screen from './Screens/Image4Screen';
import Image5Screen from './Screens/Image5Screen';
import Image6Screen from './Screens/Image6Screen';
import Image7Screen from './Screens/Image7Screen';
import Image8Screen from './Screens/Image8Screen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// รวมกลุ่มหน้า Image ทั้งหมด
function ImageStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ImageHome" component={ImageHomeScreen} options={{ title: '8 อำเภอ' }} />
      <Stack.Screen name="Image1" component={Image1Screen} options={{ title: 'อ.หนองมะโมง' }} />
      <Stack.Screen name="Image2" component={Image2Screen} options={{ title: 'อ.เนินขาม' }} />
      <Stack.Screen name="Image3" component={Image3Screen} options={{ title: 'อ.เมืองชัยนาท' }} />
      <Stack.Screen name="Image4" component={Image4Screen} options={{ title: 'อ.สรรคบุรี' }} />
      <Stack.Screen name="Image5" component={Image5Screen} options={{ title: 'อ.หันคา' }} />
      <Stack.Screen name="Image6" component={Image6Screen} options={{ title: 'อ.สรรพยา' }} />
      <Stack.Screen name="Image7" component={Image7Screen} options={{ title: 'อ.วัดสิงห์' }} />
      <Stack.Screen name="Image8" component={Image8Screen} options={{ title: 'อ.มโนรมย์' }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeScreens} />
        <Tab.Screen name="Image" component={ImageStack} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}