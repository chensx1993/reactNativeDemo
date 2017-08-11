import React from 'react';
import { Text, Button, ScrollView, Image } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';

const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView>
    <Text>{banner}</Text>
    <Button
      onPress={() => navigation.navigate('Profile', { name: 'Jordan' })}
      title="Open profile screen"
    />
    <Button
      onPress={() => navigation.navigate('NotifSettings')}
      title="Open notifications screen"
    />
    <Button
      onPress={() => navigation.navigate('SettingsTab')}
      title="Go to settings tab"
    />
    <Button onPress={() => navigation.goBack(null)} title="Go back" />
  </ScrollView>
);

const MyHomeScreen = ({ navigation }) => (
  <MyNavScreen banner="Home Screen" navigation={navigation} />
);

const MyProfileScreen = ({ navigation }) => (
  <MyNavScreen
    banner={`${navigation.state.params.name}s Profile`}
    navigation={navigation}
  />
);

const MyNotificationsSettingsScreen = ({ navigation }) => (
  <MyNavScreen banner="Notifications Screen" navigation={navigation} />
);

const MySettingsScreen = ({ navigation }) => (
  <MyNavScreen banner="Settings Screen" navigation={navigation} />
);

const MainTab = StackNavigator({
  Home: {
    screen: MyHomeScreen,
    path: '/',
    navigationOptions: {
      title: 'Welcome',
    },
  },
  Profile: {
    screen: MyProfileScreen,
    path: '/people/:name',
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}'s Profile!`, 
  }),
  },
});

const SettingsTab = StackNavigator({
  Settings: {
    screen: MySettingsScreen,
    path: '/',
    navigationOptions: () => ({
      title: 'Settings',
    }),
  },
  NotifSettings: {
    screen: MyNotificationsSettingsScreen,
    navigationOptions: {
      title: 'Notifications'
    },
  },
});



const TabOptions = (tabBarTitle,normalImage,selectedImage,navTitle) => {
    // console.log(navigation);
    const tabBarLabel = tabBarTitle;
    console.log(navTitle);
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
    return {tabBarLabel,tabBarIcon,headerTitle,headerTitleStyle,headerStyle};
};

const StacksInTabs = TabNavigator(
  {
    MainTab: {
      screen: MainTab,
      path: '/',
      navigationOptions: TabOptions('比分', 'ic_tab_normal_bf', 'ic_tab_select_bf', '设置'),
    },
    SettingsTab: {
      screen: SettingsTab,
      path: '/settings',
      navigationOptions: TabOptions('设置', 'ic_tab_normal_bf', 'ic_tab_select_bf', '设置'),
    },
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);


export default StacksInTabs;
