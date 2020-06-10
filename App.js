import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import Splash from './app/Splash';

import Login from './app/Auth/login';

// pages
import LoginPage from './app/pages/Auth/loginPage';
import AccountPage from './app/pages/Auth/accoutPage';
import ConfirmPassPage from './app/pages/Auth/confirmPassPage';


const AuthStack = createStackNavigator(
  {
    Login,
    LoginPage,
    AccountPage,
    ConfirmPassPage
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
      // ...TransitionPresets.SlideFromRightIOS,
    },
  },
);

// const MainStack = createStackNavigator(
//   {
//     Home,
//     Router,



//   },
//   {
//     defaultNavigationOptions: {
//       headerShown: false,
//       // ...TransitionPresets.SlideFromRightIOS,
//     },
//   },
// );

const AllStack = createSwitchNavigator({
  Splash,
  // MainStack,
  AuthStack
});

const AppContainer = createAppContainer(AllStack);

export default class App extends React.Component {

  componentDidMount() {
    console.log("app component");

  }

  render() {
    return <PaperProvider>
      <AppContainer />
    </PaperProvider>
  }
}
