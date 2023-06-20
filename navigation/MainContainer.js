import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';

//Screen names
const firstScreen = "React";
const secondScreen = "ReactNative";
const thirdScreen = "NodeJS";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={firstScreen}
        // tabBarOptions={{
        //   activeTintColor: 'tomato',
        //   inactiveTintColor: 'grey',
        //   labelStyle: { paddingBottom: 10, fontSize: 10 },
        //   style: { padding: 10, height: 70}
        // }}
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === firstScreen) {
              iconName = focused ? 'md-logo-react' : 'md-logo-react';

            } else if (rn === secondScreen) {
              iconName = focused ? 'list-outline' : 'list-outline';

            } else if (rn === thirdScreen) {
              iconName = focused ? 'md-logo-nodejs' : 'md-logo-nodejs';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
       >

        <Tab.Screen name={firstScreen} component={FirstScreen} />
        <Tab.Screen name={secondScreen} component={SecondScreen} />
        <Tab.Screen name={thirdScreen} component={ThirdScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;