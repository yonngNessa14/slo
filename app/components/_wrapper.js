import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import AppColors from '../helpers/_colors';
import AppIcons from '../helpers/_icons';
import { Page, Container, H1, H2, P, SizedBox, TouchWrap, ImageWrap } from '../lib/main';
import { FAB } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';


export const AuthWrapper = (props) => (
    <Page paddingTop={24}>
        <Container backgroundColor={AppColors.mainColor} padding={5} height={38}>
            <Container>
                {/* header back */}
                <TouchWrap onPress={() => props.nav.goBack()}>
                    <Icon
                        name="keyboard-backspace"
                        color={AppColors.appWhite}
                        size={30}
                    />
                </TouchWrap>

            </Container>
            <SizedBox height={10} />
            <Container direction="row" horizontalAlignment="center" verticalAlignment="center">
                <H1 color={AppColors.appWhite}>Welcome</H1>
            </Container>
        </Container>
        <Container borderTopLeftRadius={30} borderTopRightRadius={30} marginTop={-5} backgroundColor={AppColors.appWhite} padding={5} height={100}>
            {/* <H2>sdhbfajbdjb</H2> */}
            {props.children}
        </Container>
        <FAB
            style={styles.fab}
            small={false}
            color={AppColors.appWhite}
            icon="trending-neutral"
            onPress={() => alert('Pressed')}
        />
    </Page>
);

export const MainWrapper = (props) => (
    <Page paddingTop={24}>

        <Container backgroundColor={AppColors.mainColor} padding={5} height={28}>
            <Container direction="row" horizontalAlignment='flex-end'>
                <Container direction="row">
                    <ImageWrap width={5} height={2.5} source={AppIcons.bell} />
                    <SizedBox width={4} />
                    <ImageWrap width={5} height={2.5} source={AppIcons.email2} />
                </Container>
            </Container>
            <SizedBox height={5} />
            <Container direction="column" verticalAlignment="space-between">
                <H1 fontSize={14} color={AppColors.appWhite}>Adeniyi Olakunle</H1>
                <SizedBox height={2} />
                <H2 fontSize={10} color={AppColors.appYellow}>Staff</H2>
            </Container>
        </Container>
        <Container borderTopLeftRadius={30} borderTopRightRadius={30} marginTop={-5} backgroundColor={AppColors.appWhite} padding={5} height={100}>
            {/* <H2>sdhbfajbdjb</H2> */}
            {props.children}
        </Container>
        {/* <FAB
            style={styles.fab}
            small={false}
            color={AppColors.appWhite}
            icon="trending-neutral"
            onPress={() => alert('Pressed')}
        /> */}
    </Page>
);

const styles = StyleSheet.create({
    fab: {
        backgroundColor: AppColors.mainColor,
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
})