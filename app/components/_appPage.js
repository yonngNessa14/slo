import React, { useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { Container, H2, H1, P, SizedBox, InputWrap, ImageWrap, TouchWrap } from '../lib/main';
import AppIcons from '../helpers/_icons';
import AppColors from '../helpers/_colors';

export const Login = props => (
    <Container>
        <Container direction="row" horizontalAlignment='space-between'>
            <H1 fontSize={18} color={AppColors.mainColor}>Sign In</H1>
            <ImageWrap width={15} height={5} padding={0} source={AppIcons.appLogo} />
        </Container>
        <SizedBox height={2} />
        <KeyboardAvoidingView style={{ display: 'flex' }} behavior="height">
            <Container>
                <InputWrap borderBottomWidth={1} borderColor={AppColors.mainColor} placeholder="Email" icon={AppIcons.email} />
                <SizedBox height={2} />
                <InputWrap borderBottomWidth={1} borderColor={AppColors.mainColor} placeholder="Password" icon={AppIcons.vector} />
            </Container>
        </KeyboardAvoidingView>
        <SizedBox height={2} />
        <Container wrap="wrap" direction='row' horizontalAlignment="space-between">
            <TouchWrap onPress={() => props.nav.navigate('ConfirmPassPage')}>
                <H2 fontSize={6} color={AppColors.mainColor}>Forgot password?</H2>
            </TouchWrap>
            <TouchWrap onPress={() => props.nav.navigate('AccountPage')}>
                <H2 fontSize={6} color={AppColors.mainColor}>New to this app? Activate account</H2>
            </TouchWrap>
        </Container>

    </Container>
);

export const Account = props => (
    <Container>
        <Container direction="row" horizontalAlignment='space-between'>
            <H1 fontSize={18} color={AppColors.mainColor}>Activate Account</H1>
            <ImageWrap width={15} height={5} padding={0} source={AppIcons.appLogo} />
        </Container>
        <SizedBox height={2} />
        <KeyboardAvoidingView style={{ display: 'flex' }} behavior="height">
            <Container>
                <InputWrap borderBottomWidth={1} borderColor={AppColors.mainColor} placeholder="Email" icon={AppIcons.email} />
                <SizedBox height={2} />
                <InputWrap borderBottomWidth={1} borderColor={AppColors.mainColor} placeholder="Token" icon={AppIcons.key} />
            </Container>
        </KeyboardAvoidingView>
        <SizedBox height={2} />
        <Container wrap="wrap" direction='row' horizontalAlignment="space-between">
            <TouchWrap onPress={() => props.nav.navigate('LoginPage')}>
                <H2 fontSize={6} color={AppColors.mainColor}>Already have an account? Sign in</H2>
            </TouchWrap>
        </Container>

    </Container>
);

export const ConfirmPass = props => (
    <Container>
        <Container direction="row" horizontalAlignment='space-between'>
            <H1 fontSize={18} color={AppColors.mainColor}>Confirm Password</H1>
            <ImageWrap width={15} height={5} padding={0} source={AppIcons.appLogo} />
        </Container>
        <SizedBox height={2} />
        <KeyboardAvoidingView style={{ display: 'flex' }} behavior="height">
            <Container>
                <InputWrap borderBottomWidth={1} borderColor={AppColors.mainColor} placeholder="Password" icon={AppIcons.vector} />
                <SizedBox height={2} />
                <InputWrap borderBottomWidth={1} borderColor={AppColors.mainColor} placeholder="Confirm Password" icon={AppIcons.vector} />
            </Container>
        </KeyboardAvoidingView>
        <SizedBox height={2} />
        <Container wrap="wrap" direction='row' horizontalAlignment="space-between">
            <TouchWrap onPress={() => props.nav.navigate('LoginPage')}>
                <H2 fontSize={6} color={AppColors.mainColor}>Already have an account? Sign in</H2>
            </TouchWrap>
        </Container>

    </Container>
);