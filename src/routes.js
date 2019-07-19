import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from './pages/Main';
import Cart from './pages/Cart';
import Header from './components/Header';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Cart,
    },
    {
      defaultNavigationOptions: {
        header: <Header />,
      },
    }
  )
);

export default Routes;
