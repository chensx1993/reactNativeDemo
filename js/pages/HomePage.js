import React, {
    Component
} from 'react';

import {
    View,
    Text,
    Button
} from 'react-native';

class HomePage extends Component {
   static navigationOptions = {
        title: '首页',
    };


   render() {
     const { navigate } = this.props.navigation;
     return (
        <View>
            <Text>我是首页 更新了么 ！</Text>
            <Button onPress={() => navigate('Me')} title="跳转到我的界面" />
        </View>
        );
   }
}

export default HomePage;