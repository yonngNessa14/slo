import React, { useContext } from 'react';
import { ScrollView } from 'react-native';
import { MainWrapper, AuthWrapper } from '../../components/_wrapper';
import { Container, H2, H1, P, SizedBox, InputWrap, ImageWrap, TouchWrap } from '../../lib/main';
import { Login } from '../../components/_appPage';
import AppColors from '../../helpers/_colors';
import AppIcons from '../../helpers/_icons';


const LoginPage = props => (
    <MainWrapper nav={props.navigation}>
        <SizedBox height={4} />
        <Container>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                <TouchWrap>
                    <H1 fontSize={10} color={AppColors.mainColor}>Leave</H1>
                </TouchWrap>
                <SizedBox width={2} />
                <TouchWrap>
                    <H1 fontSize={10} color={AppColors.mainColor}>Perfomance Tracking</H1>
                </TouchWrap>
                <SizedBox width={2} />
                <TouchWrap>
                    <H1 fontSize={10} color={AppColors.mainColor}>Transfer</H1>
                </TouchWrap>
                <SizedBox width={2} />
                <TouchWrap>
                    <H1 fontSize={10} color={AppColors.mainColor}>Loan</H1>
                </TouchWrap>
                <SizedBox width={2} />
                <TouchWrap>
                    <H1 fontSize={10} color={AppColors.mainColor}>Opinion Poll</H1>
                </TouchWrap>
                <SizedBox width={2} />
                <TouchWrap>
                    <H1 fontSize={10} color={AppColors.mainColor}>Complain Management</H1>
                </TouchWrap>
                <SizedBox width={2} />

            </ScrollView>
        </Container>
        <SizedBox height={4} />
        <Container direction="column" verticalAlignment="space-between">
            <Container elevation={10} borderBottomLeftRadius={13} borderBottomRightRadius={13} borderTopLeftRadius={13} borderTopRightRadius={13} backgroundColor={AppColors.appSecondary}>
                <Container paddingHorizontal={6} direction="row" horizontalAlignment="space-between" verticalAlignment="center" borderTopLeftRadius={13} borderTopRightRadius={13} backgroundColor={AppColors.mainColor} height={8}>
                    <H1 fontSize={10} color={AppColors.appWhite}>Leave Category</H1>
                    <H1 fontSize={10} color={AppColors.appWhite}>No. of Days</H1>
                </Container>
                <SizedBox height={3} />
                <Container direction="column" verticalAlignment="space-between">
                    <Container direction="row" paddingTop={0} paddingHorizontal={12} horizontalAlignment="space-between" verticalAlignment="center">
                        <P fontSize={8} color={AppColors.mainColor}>Vacation</P>
                        <P fontSize={8} color={AppColors.mainColor}>15</P>
                    </Container>
                    <Container direction="row" paddingTop={3} paddingHorizontal={12} horizontalAlignment="space-between" verticalAlignment="center">
                        <P fontSize={8} color={AppColors.mainColor}>Sick</P>
                        <P fontSize={8} color={AppColors.mainColor}>15</P>
                    </Container>
                    <Container direction="row" paddingTop={3} paddingHorizontal={12} horizontalAlignment="space-between" verticalAlignment="center">
                        <P fontSize={8} color={AppColors.mainColor}>Paternity</P>
                        <P fontSize={8} color={AppColors.mainColor}>15</P>
                    </Container>
                </Container>
                <SizedBox height={3} />
            </Container>
            <SizedBox height={4} />
            <Container height={10} direction="row" horizontalAlignment="space-between" verticalAlignment="center" elevation={10} borderBottomLeftRadius={13} borderBottomRightRadius={13} borderTopLeftRadius={13} borderTopRightRadius={13} backgroundColor={AppColors.appSecondary}>
                <Container backgroundColor={AppColors.mainColor} borderRadius={400} marginLeft={3} padding={3} paddingHorizontal={4}>
                    <P fontSize={18} color={AppColors.appWhite}>+</P>
                </Container>
                <Container flex={1} marginLeft={-10}>
                    <P textAlign="center" fontSize={8} color={AppColors.mainColor}>Leave Request</P>
                </Container>

            </Container>
            <SizedBox height={4} />
            <Container height={10} direction="row" horizontalAlignment="space-between" verticalAlignment="center" elevation={10} borderBottomLeftRadius={13} borderBottomRightRadius={13} borderTopLeftRadius={13} borderTopRightRadius={13} backgroundColor={AppColors.appSecondary}>
                <Container marginLeft={3}>
                    <ImageWrap width={10} height={10} source={AppIcons.history} />
                </Container>
                <Container flex={1} marginLeft={-10}>
                    <P textAlign="center" fontSize={8} color={AppColors.mainColor}>View Leave Applications</P>
                </Container>

            </Container>
        </Container>
        {/* <SizedBox height={12} /> */}
        {/* <Login nav={props.navigation} /> */}
    </MainWrapper>
);

export default LoginPage;