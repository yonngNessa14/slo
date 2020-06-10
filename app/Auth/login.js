import React, { useContext } from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import AppIcons from '../helpers/_icons';
import AppColors from '../helpers/_colors';
import { Container, SizedBox, H2, P, TouchWrap } from '../lib/main';

const Login = (props) => (
    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <StatusBar backgroundColor={AppColors.mainColor} barStyle="#eee" />
        <Image style={{ width: '60%', height: '60%', resizeMode: 'contain', }} source={AppIcons.appLogo} />
        <SizedBox height={22} />
        <Container borderBottomLeftRadius={25} borderTopLeftRadius={30} borderTopRightRadius={30} width={100} height={18} direction="row" horizontalAlignment="center" verticalAlignment="center" backgroundColor={AppColors.mainColor}>
            <TouchWrap paddingVertical={5} onPress={() => props.navigation.navigate('LoginPage')}>
                <P color={AppColors.appWhite}>Login</P>
            </TouchWrap>
        </Container>
    </View>
);

export default Login;