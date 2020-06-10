import React from 'react';
import { View, StatusBar, Image, ActivityIndicator } from 'react-native';
import AppIcons from './helpers/_icons';
import { getData } from './helpers/_api';
import AppColors from './helpers/_colors'

export default class Splash extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            this.checkData();
        }, 3000);
    }

    checkData = async () => {
        // console.log("hello from here");
        this.props.navigation.navigate('Login');
    }

    render() {
        return (
            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <StatusBar backgroundColor={AppColors.mainColor} barStyle="#eee" />
                <Image style={{ width: '55%', height: '55%', resizeMode: 'contain', marginTop: '45%' }} source={AppIcons.appLogo} />
            </View>
        );
    }
}
