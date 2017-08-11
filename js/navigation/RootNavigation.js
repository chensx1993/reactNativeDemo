import React from 'react'
import { connect } from 'react-redux';
import { Platform, Image } from 'react-native'
import {
	TabNavigator,
  StackNavigator,
  addNavigationHelpers
} from 'react-navigation'

import MePage from '../pages/MePage'
import ScorePage from '../pages/ScorePage'
import HomePage from '../pages/HomePage'
import Routes from './routes'

const MeStackNavigator = StackNavigator({
    ...Routes,
    MeIndex: {
      screen: MePage,
    },
  },
  {
    initialRouteName: 'MeIndex',
    // headerMode: 'none',
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
  })


const HomeStackNavigator = StackNavigator({
    ...Routes,
    HomeIndex: {
      screen: HomePage,
    },
  },
  {
    initialRouteName: 'HomeIndex',
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
  })

const ScoreStackNavigator = StackNavigator({
    ...Routes,
    ScoreIndex: {
      screen: ScorePage,
      navigationOptions: {
          title: '比分',
          headerStyle: {backgroundColor:'blue'}
      },
    },
  },
  {
    initialRouteName: 'ScoreIndex',
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
  })

const TabOptions = (tabBarTitle,normalImage,selectedImage,navTitle) => {
    // console.log(navigation);
    const tabBarLabel = tabBarTitle;
    const tabBarIcon = (({tintColor,focused})=> {
        return(
            focused
                ?
                <Image
                    source={{uri : normalImage}}
                    style={[{tintColor: tintColor, width: 20, height: 20}]} />
                :
                <Image
                    source={{uri : selectedImage}}
                    style={[ {tintColor: tintColor, width: 20, height: 20,}]} />
        )
    });
    const headerTitle = navTitle;
    const headerTitleStyle = {fontSize:20,color:'green'};
    const headerStyle = {backgroundColor:'#4ECBFC'}; // header的style
    return {tabBarLabel, tabBarIcon, headerTitle, headerTitleStyle, headerStyle};
};

const MainTabNavigator = TabNavigator(
  {
    ScoreTab: {
      screen: ScoreStackNavigator,
      path: '/scorePage',
      navigationOptions: TabOptions('比分', 'ic_tab_normal_bf', 'ic_tab_select_bf', '设置'),
    },
    HomeTab: {
      screen: HomeStackNavigator,
      path: '/homePage',
      navigationOptions: TabOptions('比分', 'ic_tab_normal_bf', 'ic_tab_select_bf', '设置'),
    },
    SettingsTab: {
      screen: MeStackNavigator,
      path: '/mePage',
      navigationOptions: TabOptions('设置', 'ic_tab_normal_bf', 'ic_tab_select_bf', '设置'),
    },
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);

const AppWithNavigationState = ({ dispatch, nav }) => (
  <MainTabNavigator navigation = { addNavigationHelpers({ dispatch, this.state: nav})} />
  );

const mapStateToProps = this.state => ({
  nav: this.state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState)