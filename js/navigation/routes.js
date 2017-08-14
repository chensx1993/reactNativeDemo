
import React from 'react'

import {
    Platform,
    View,
} from 'react-native'

import { StackNavigator } from 'react-navigation'

import MePage from '../pages/MePage'
import ScorePage from '../pages/ScorePage'
import HomePage from '../pages/HomePage'

const Routes = {
  MePage: {
    name: '我的',
    description: 'A card stack',
    screen: MePage,
  },
  ScorePage: {
    name: '比分',
    description: 'Tabs following platform conventions',
    screen: ScorePage,
  },
  HomePage: {
    name: '主页',
    description: 'Android-style drawer navigation',
    screen: HomePage,
    },
};