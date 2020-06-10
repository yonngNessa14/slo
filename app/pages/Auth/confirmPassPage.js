import React, { useContext } from 'react';
import { View, Text, Image, TextInput, KeyboardAvoidingView } from 'react-native';
import { AuthWrapper } from '../../components/_wrapper';
import { Container, H2, H1, P, SizedBox, InputWrap, ImageWrap } from '../../lib/main';
import { ConfirmPass } from '../../components/_appPage';


const ConfirmPassPage = props => (
    <AuthWrapper nav={props.navigation}>
        <SizedBox height={12} />
        <ConfirmPass nav={props.navigation} />
    </AuthWrapper>
);

export default ConfirmPassPage;