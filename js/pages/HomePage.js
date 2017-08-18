import React, {
    Component
} from 'react';

import {
    View,
    Text,
    Button,
    TouchableOpacity
} from 'react-native';

import {connect} from 'react-redux'

import { login } from '../actions/login'

class HomePage extends Component {
    static navigationOptions = {
        title: '首页',
    };

    render() {

        let tips = '未登录';
        if (this.props.userStatus === 'logging') {
            tips = '正在登陆...';

        }else if (this.props.userStatus === 'success') {
            tips = '登陆成功';

        }else if (this.props.userStatus === 'failure') {
            tips = '登陆失败';
        }

        let {
            navigate
        } = this.props.navigation;

        return (
            <View>
                <Text>{ this.props.userStatus }</Text>
                <TouchableOpacity style={{backgroundColor: '#FF0000'}} onPress={this.handleLogin.bind(this)}>
                <Text>登陆信息: { this.props.user.userToken } error: {this.props.errorMessage }</Text>
                </TouchableOpacity>
                // <Button onPress={ navigate.push('MePage') } title="跳转到我的界面" />
            </View>
        );
    }

    handleLogin()
    {
        let userInfo = { 'mobile' : '15088132499', 'password' : '12345q'}
        this.props.dispatch(login(userInfo));
    }

    // buttonAction()
    // {
    //    let navigator = this.props.navigator;
    //     Alert.alert('Button has been pressed!'+navigator);
    //     if (navigator) {
    //       navigator.push('MePage');
    //     }
    // }
}

function select(store) {
    return {
        isLoggedIn: store.userStore.isLoggedIn,
        user: store.userStore.user,
        userStatus: store.userStore.userStatus,
        errorMessage: store.userStore.errorMessage
        // navigation: store.navigation
    }
}

export default connect(select)(HomePage)
