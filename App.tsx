import 'react-native-gesture-handler';
import React from 'react';
import { HomeScreen } from 'screens/HomeScreen'
import { LongVoiceScreen } from 'screens/LongVoiceScreen'
import { CareerScreen } from 'screens/CareerScreen'
import { MyPageScreen } from 'screens/MyPageScreen'
import { LibScreen } from 'screens/LibScreen'
import { LibDetailScreen } from 'screens/LibDetailScreen'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from 'constants/colors'
import i18n from 'constants/i18n/translations';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const stackOption = {
  headerStyle: { backgroundColor: colors.headers.activeColor },
  headerShown: true,
  headerLeftLabelVisible: true,
  headerTitleAlign: "center"
}

const tabOption = {
  headerShown: false,
  tabBarActiveTintColor: colors.tabs.activeColor,
  tabBarActiveBackgroundColor: colors.tabs.activeBackgroundColor,
  tabBarInactiveBackgroundColor: colors.tabs.passiveBackgroundColor,
  tabBarStyle: { borderTopWidth: 2, borderTopColor: colors.tabs.activeBackgroundColor },
}

const HomeStacks = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={stackOption}>
      <Stack.Screen options={{title: i18n.t('test')}} name="Home" component={HomeScreen}　/>
    </Stack.Navigator>
  );
}

const LongVoiceStacks = () => {
  return (
    <Stack.Navigator initialRouteName="LongVoiceScreen" screenOptions={stackOption}>
      <Stack.Screen options={{title:"サンプルプロジェクト２"}} name="LongVoiceScreen" component={LongVoiceScreen}　/>
    </Stack.Navigator>
  );
}

const CareerStacks = () => {
  return (
    <Stack.Navigator initialRouteName="Career" screenOptions={stackOption}>
      <Stack.Screen options={{title:"サンプルプロジェクト３"}} name="Career" component={CareerScreen}　/>
    </Stack.Navigator>
  );
}

const MyPageStacks = () => {
  return (
    <Stack.Navigator initialRouteName="MyPage" screenOptions={stackOption}>
      <Stack.Screen options={{title:"マイページ"}} name="MyPage" component={MyPageScreen}　/>
      <Stack.Screen options={{title:"論破アイテム一覧"}} name="Lib" component={LibScreen}　/>
      <Stack.Screen options={{title:"論破アイテム詳細"}} name="LibDetail" component={LibDetailScreen}　/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" screenOptions={tabOption}>
        <Tab.Screen
          name="みじかめ"
          component={HomeStacks}
          options={{
            tabBarIcon: ({ color }) => (<Icon name='angle-up' color={color} size={24}/>)
          }}
        />
        <Tab.Screen
          name="ながめ"
          component={LongVoiceStacks}
          options={{
            tabBarIcon: ({ color }) => (<Icon name='angle-double-up' color={color} size={24}/>)
          }}
        />
        <Tab.Screen
          name="お役立ち"
          component={CareerStacks}
          options={{
            tabBarIcon: ({ color }) => (<Icon name='plus' color={color} size={24}/>)
          }}
        />
        <Tab.Screen
          name="マイページ"
          component={MyPageStacks}
          options={{
            tabBarIcon: ({ color }) => (<Icon name='home' color={color} size={24}/>),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
