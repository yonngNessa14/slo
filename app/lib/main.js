// @flow
import { fontBold, fontRegular, fontSemi } from '../helpers/_config';
import Animated, { Easing } from 'react-native-reanimated';
import PropTypes from 'prop-types';
import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  PixelRatio,
  ScrollView,
  ImageBackground,
  StatusBar,
  RefreshControl,
  TextInput,
  StyleSheet,
  Platform,
  Image
} from 'react-native';
const { Value } = Animated;
const { width, height } = Dimensions.get('window');

export const scaleFont = val => {
  let factor = PixelRatio.get();
  factor > 2.2 ? (factor = 2) : null;
  let size = ((factor * width) / 1000) * val;
  return size + 7;
};

const Elevation = elevation => {
  let response = {};
  elevation == null || undefined
    ? (response = {})
    : (response = {
      elevation,
      shadowColor: '#0001',
      shadowOffset: { width: 0, height: elevation * 0.6 },
      shadowOpacity: 0.8,
      shadowRadius: elevation * 0.5,
    });
  return response;
};

export const Height = val => {
  let res;
  val === undefined || null ? (res = null) : (res = (val / 100) * height);
  return res;
};

export const Width = val => {
  let res;
  val === undefined || null ? (res = null) : (res = (val / 100) * width);
  return res;
};

/**ANCHOR H1 */
export const H1 = props => {
  return (
    <Text
      allowFontScaling={false}
      numberOfLines={props.numberOfLines}
      style={[
        {
          color: props.color,
          fontSize: scaleFont(props.fontSize) || scaleFont(25),
          lineHeight:
            scaleFont(props.lineHeight) ||
            scaleFont(props.fontSize) ||
            scaleFont(25),
          fontFamily: fontBold,
          textAlign: props.textAlign,
        },
        props.style,
      ]}>
      {props.children || props.text}
    </Text>
  );
};

H1.propTypes = {
  color: PropTypes.any,
  fontSize: PropTypes.number,
  lineHeight: PropTypes.number,
  style: PropTypes.array,
  textAlign: PropTypes.string,
};

/**ANCHOR H2 */
export const H2 = props => {
  return (
    <Text
      numberOfLines={props.numberOfLines}
      ellipsizeMode="tail"
      allowFontScaling={false}
      style={[
        {
          color: props.color,
          fontSize: scaleFont(props.fontSize) || scaleFont(20),
          lineHeight:
            scaleFont(props.lineHeight) ||
            scaleFont(props.fontSize) ||
            scaleFont(20),
          fontFamily: fontSemi,
          textAlign: props.textAlign,
        },
        props.style,
      ]}>
      {props.children || props.text}
    </Text>
  );
};

H2.propTypes = {
  color: PropTypes.any,
  fontSize: PropTypes.number,
  lineHeight: PropTypes.number,
  style: PropTypes.array,
  textAlign: PropTypes.string,
};

/**ANCHOR P */
export const P = props => {
  return (
    <Text
      numberOfLines={props.numberOfLines}
      allowFontScaling={false}
      style={[
        {
          color: props.color,
          fontSize: scaleFont(props.fontSize) || scaleFont(14),
          lineHeight:
            scaleFont(props.lineHeight) ||
            scaleFont(props.fontSize) ||
            scaleFont(14),
          fontFamily: fontRegular,
          textAlign: props.textAlign,
        },
        props.style,
      ]}>
      {props.children || props.text}
    </Text>
  );
};

P.propTypes = {
  color: PropTypes.any,
  fontSize: PropTypes.number,
  lineHeight: PropTypes.number,
  textAlign: PropTypes.string,
  style: PropTypes.array,
};

/**ANCHOR CONTAINER */

export const Container = props => {
  return (
    <View
      onLayout={props.onLayout}
      style={[
        {
          overflow: props.overflow ? 'hidden' : null,
          opacity: props.opacity,
          ...Elevation(props.elevation),
          flexDirection: props.direction,
          alignSelf: props.selfAlignment,
          flexWrap: props.wrap,
          flex: props.flex,
          height: Height(props.height),
          width: Width(props.width) || props.widthPercent,
          justifyContent:
            props.direction === 'row'
              ? props.horizontalAlignment
              : props.verticalAlignment,
          alignItems:
            props.direction === 'row'
              ? props.verticalAlignment
              : props.horizontalAlignment,
          backgroundColor:
            props.elevation > 0 && props.backgroundColor == null
              ? '#fff'
              : props.backgroundColor,
          borderRadius: props.borderRadius,
          borderBottomLeftRadius: props.borderBottomLeftRadius,
          borderBottomRightRadius: props.borderBottomRightRadius,
          borderTopLeftRadius: props.borderTopLeftRadius,
          borderTopRightRadius: props.borderTopRightRadius,
          margin: Width(props.margin),
          marginVertical: Height(props.marginVertical),
          marginHorizontal: Width(props.marginHorizontal),
          paddingVertical: Height(props.paddingVertical),
          paddingHorizontal: Width(props.paddingHorizontal),
          marginRight: Width(props.marginRight),
          marginLeft: Width(props.marginLeft),
          marginTop: Height(props.marginTop),
          marginBottom: Height(props.marginBottom),
          paddingRight: Width(props.paddingRight),
          paddingLeft: Width(props.paddingLeft),
          paddingTop: Height(props.paddingTop),
          paddingBottom: Height(props.paddingBottom),
          padding: Width(props.padding),
          borderBottomWidth: props.borderBottomWidth,
          borderTopWidth: props.borderTopWidth,
          borderLeftWidth: props.borderLeftWidth,
          borderRightWidth: props.borderRightWidth,
          borderWidth: props.borderWidth,
          borderColor: props.borderColor,
          maxWidth: props.maxWidth,
          maxHeight: props.maxHeight,
          minWidth: props.minWidth,
          minHeight: props.minHeight,
          position: props.position,
        },
        props.style,
      ]}>
      {props.children}
    </View>
  );
};

Container.propTypes = {
  overflow: PropTypes.bool,
  opacity: PropTypes.number,
  position: PropTypes.any,
  maxWidth: PropTypes.any,
  maxHeight: PropTypes.any,
  minWidth: PropTypes.any,
  minHeight: PropTypes.any,
  widthPercent: PropTypes.any,
  elevation: PropTypes.number,
  direction: PropTypes.oneOf(['row', 'column', 'row-reverse']),
  wrap: PropTypes.string,
  flex: PropTypes.number,
  height: PropTypes.number,
  verticalAlignment: PropTypes.string,
  horizontalAlignment: PropTypes.string,
  alignSelf: PropTypes.string,
  backgroundColor: PropTypes.any,
  borderRadius: PropTypes.number,
  borderBottomLeftRadius: PropTypes.number,
  borderBottomRightRadius: PropTypes.number,
  borderTopLeftRadius: PropTypes.number,
  borderTopRightRadius: PropTypes.number,
  padding: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingTop: PropTypes.number,
  paddingBottom: PropTypes.number,
  margin: PropTypes.number,
  marginVertical: PropTypes.number,
  marginHorizontal: PropTypes.number,
  paddingVertical: PropTypes.number,
  paddingHorizontal: PropTypes.number,
  marginRight: PropTypes.number,
  marginLeft: PropTypes.number,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  style: PropTypes.object,
  borderBottomWidth: PropTypes.number,
  borderTopWidth: PropTypes.number,
  borderLeftWidth: PropTypes.number,
  borderRightWidth: PropTypes.number,
  borderWidth: PropTypes.number,
  borderColor: PropTypes.any,
};

/* ANCHOR AVATAR */
export const Avatar = props => {
  return (
    <View
      style={[
        {
          ...Elevation(props.elevation),
          position: props.position,
          top: Height(props.top),
          bottom: Height(props.bottom),
          left: Width(props.left),
          right: Width(props.right),
          height: Width(props.size) || Width(10),
          width: Width(props.size) || Width(10),
          backgroundColor: props.backgroundColor,
          borderRadius: Width(props.size) / 2 || Width(10) / 2,
          marginRight: Width(props.marginRight),
          marginLeft: Width(props.marginLeft),
        },
      ]}>
      <ImageBackground
        source={props.source || { uri: props.url }}
        resizeMode="cover"
        style={[
          styles.overflow,
          {
            height: Width(props.size) || Width(10),
            width: Width(props.size) || Width(10),
            borderRadius: Width(props.size) / 2 || Width(10) / 2,
            borderWidth: props.borderWidth,
            borderColor: props.borderColor,
          },
        ]}
      />
    </View>
  );
};

Avatar.propTypes = {
  borderWidth: PropTypes.number,
  borderColor: PropTypes.any,
  url: PropTypes.string,
  source: PropTypes.any,
  elevation: PropTypes.any,
  size: PropTypes.number,
  backgroundColor: PropTypes.any,
  position: PropTypes.string,
  top: PropTypes.number,
  bottom: PropTypes.number,
  left: PropTypes.number,
  right: PropTypes.number,
};

/* ANCHOR SIZED BOX */
export const SizedBox = props => {
  return (
    <View
      style={{
        width: Width(props.width),
        height: Height(props.height),
        backgroundColor: props.backgroundColor,
      }}
    />
  );
};

SizedBox.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  backgroundColor: PropTypes.any,
};

/* ANCHOR SCROLL AREA */
export const ScrollArea = props => (
  <ScrollView
    horizontal={props.horizontal}
    showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}>
    {props.children}
  </ScrollView>
);

ScrollArea.propTypes = {
  horizontal: PropTypes.bool,
};

/* ANCHOR SCROLL AREA REFRESH */
export const ScrollAreaRefresh = props => (
  <ScrollView
    refreshControl={
      <RefreshControl
        onRefresh={props.onRefresh}
        refreshing={props.refreshing || false}
      />
    }
    horizontal={props.horizontal}
    showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}>
    {props.children}
  </ScrollView>
);

ScrollAreaRefresh.propTypes = {
  horizontal: PropTypes.bool,
  onRefresh: PropTypes.func,
  refreshing: PropTypes.bool,
};

/* ANCHOR SCROLL PAGE */
export const ScrollPage = props => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [dynamicWidth, setDynamicWidth] = React.useState(100);
  const scrollRef = useRef();

  const getWidth = e => {
    let layout = e.nativeEvent.layout;
    const newWidth = layout.width;
    setDynamicWidth(newWidth);
  };

  const onScrollEnd = e => {
    let contentOffset = e.nativeEvent.contentOffset;
    let viewSize = e.nativeEvent.layoutMeasurement;
    let pageNum = Math.floor(contentOffset.x / dynamicWidth);
    setActiveIndex(pageNum);
  };

  const moveBody = index => {
    setActiveIndex(index);
    scrollRef.current.scrollTo({
      x: index * dynamicWidth,
      animation: true,
    });
  };

  return (
    <Container flex={1} onLayout={getWidth}>
      <Container direction="row" horizontalAlignment="space-between">
        {props.titles.map((el, i) => (
          <TouchWrap
            onPress={() => moveBody(i)}
            width={
              ((dynamicWidth / Width(100)) * 100) / props.children.length - 1
            }
            paddingVertical={2}
            key={i}
            borderRadius={props.tabBorderRadius}
            borderBottomWidth={
              activeIndex === i ? props.activeTabBorderLine : null
            }
            borderBottomColor={
              activeIndex === i
                ? props.activeTabBorderColor
                : props.inactiveTabBorderColor
            }
            backgroundColor={
              activeIndex === i ? props.activeTabColor : props.inactiveTabColor
            }>
            {activeIndex === i ? (
              <H1
                textAlign="center"
                fontSize={props.tabFontSize || 12}
                color={props.tabColor}>
                {el}
              </H1>
            ) : (
                <P
                  textAlign="center"
                  fontSize={props.tabFontSize || 12}
                  color={props.tabColor}>
                  {el}
                </P>
              )}
          </TouchWrap>
        ))}
      </Container>

      <SizedBox height={0.3} />

      <ScrollView
        showsHorizontalScrollIndicator={false}
        ref={scrollRef}
        horizontal={true}
        pagingEnabled={true}
        onMomentumScrollEnd={onScrollEnd}
        style={{ backgroundColor: props.backgroundColor }}>
        {props.children.map((el, i) => (
          <Container key={i} style={{ width: dynamicWidth }}>
            {el}
          </Container>
        ))}
      </ScrollView>
    </Container>
  );
};

ScrollPage.propTypes = {
  titles: PropTypes.array,
  tabBorderRadius: PropTypes.any,
  activeTabBorderLine: PropTypes.any,
  activeTabBorderColor: PropTypes.any,
  inactiveTabBorderColor: PropTypes.any,
  activeTabColor: PropTypes.any,
  inactiveTabColor: PropTypes.any,
  tabFontSize: PropTypes.any,
  tabColor: PropTypes.any,
  backgroundColor: PropTypes.any,
};

/* ANCHOR IMAGE WRAP */
export const ImageWrap = props => {
  return (
    <ImageBackground
      source={props.source || { uri: props.url }}
      resizeMode={props.fit || 'contain'}
      style={[
        styles.overflow,
        {
          position: props.position,
          width: Width(props.width) || props.widthPercent || '100%',
          height: Height(props.height) || '100%',
          backgroundColor: props.backgroundColor,
          borderRadius: props.borderRadius,
          borderTopLeftRadius: props.borderTopLeftRadius,
          borderBottomLeftRadius: props.borderBottomLeftRadius,
          margin: props.margin,
          marginVertical: props.marginVertical,
          marginHorizontal: props.marginHorizontal,
          marginRight: props.marginRight,
          marginLeft: props.marginLeft,
          marginTop: props.marginTop,
          marginBottom: props.marginBottom,
          padding: props.padding,
        },
      ]}>
      <View
        style={[
          styles.flex,
          {
            backgroundColor: props.overlayColor,
            justifyContent:
              props.direction === 'row'
                ? props.horizontalAlignment
                : props.verticalAlignment,
            alignItems:
              props.direction === 'row'
                ? props.verticalAlignment
                : props.horizontalAlignment,
          },
        ]}>
        {props.children}
      </View>
    </ImageBackground>
  );
};

ImageWrap.propTypes = {
  source: PropTypes.any,
  url: PropTypes.any,
  fit: PropTypes.string,
  height: PropTypes.any,
  width: PropTypes.any,
  widthPercent: PropTypes.any,
  onPress: PropTypes.func,
  backgroundColor: PropTypes.any,
  borderRadius: PropTypes.number,
  borderTopLeftRadius: PropTypes.number,
  borderBottomLeftRadius: PropTypes.number,
  margin: PropTypes.number,
  marginVertical: PropTypes.number,
  marginHorizontal: PropTypes.number,
  marginRight: PropTypes.number,
  marginLeft: PropTypes.number,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  padding: PropTypes.number,
  overlayColor: PropTypes.any,
  horizontalAlignment: PropTypes.string,
  verticalAlignment: PropTypes.string,
};

/* ANCHOR TOUCH WRAP */
export const TouchWrap = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      // activeOpacity={0.9}
      style={[
        {
          ...Elevation(props.elevation),
          opacity: props.opacity,
          paddingHorizontal: Width(props.paddingHorizontal),
          padding: Width(props.padding),
          paddingVertical: Height(props.paddingVertical),
          flex: props.flex,
          backgroundColor: props.backgroundColor,
          borderBottomColor: props.borderBottomColor,
          borderBottomWidth: Width(props.borderBottomWidth),
          width: Width(props.width),
          height: Height(props.height),
          borderRadius: props.borderRadius,
          justifyContent: props.verticalAlignment,
          alignItems: props.horizontalAlignment,
        },
        props.style,
      ]}>
      {props.children}
    </TouchableOpacity>
  );
};

TouchWrap.propTypes = {
  opacity: PropTypes.number,
  elevation: PropTypes.number,
  height: PropTypes.any,
  width: PropTypes.any,
  onPress: PropTypes.func,
  backgroundColor: PropTypes.any,
  borderBottomColor: PropTypes.any,
  borderBottomWidth: PropTypes.number,
  flex: PropTypes.number,
  padding: PropTypes.number,
  paddingHorizontal: PropTypes.number,
  paddingVertical: PropTypes.number,
  borderRadius: PropTypes.number,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
};

/**ANCHOR PAGE */
export const Page = props => {
  return (
    <View
      style={[
        styles.flex,
        {
          backgroundColor: props.backgroundColor || '#f4f4f4',
          padding: props.padding,
          paddingTop: props.paddingTop,
          paddingBottom: props.paddingBottom,
          paddingLeft: props.paddingLeft,
          paddingRight: props.paddingRight,
          paddingVertical: props.paddingVertical,
          paddingHorizontal: props.paddingHorizontal,
        },
      ]}>
      <StatusBar
        translucent={true}
        backgroundColor={props.barColor}
        barStyle={
          props.barIconColor === 'dark' ? 'dark-content' : 'light-content'
        }
      />
      {props.children}
    </View>
  );
};

Page.propTypes = {
  fullscreen: PropTypes.bool,
  backgroundColor: PropTypes.any,
  barColor: PropTypes.any,
  padding: PropTypes.number,
  paddingTop: PropTypes.number,
  paddingBottom: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingVertical: PropTypes.number,
  paddingHorizontal: PropTypes.number,
  /** Expects "dark" or "lite"  */
  barIconColor: PropTypes.oneOf(['dark', 'light']),
};

/**ANCHOR ROUNDED */
export const Rounded = props => {
  return (
    <View
      style={[
        styles.rounded,
        {
          backgroundColor: props.backgroundColor,
          height: Height(props.size),
          width: Height(props.size),
          ...Elevation(props.elevation),
          borderRadius: props.radius || Height(props.size) / 2,
          marginRight: props.marginRight,
          marginLeft: props.marginLeft,
          marginTop: props.marginRight,
          marginBottom: props.marginLeft,
          position: props.position,
          top: Height(props.top),
          bottom: Height(props.bottom),
          left: Width(props.left),
          right: Width(props.right),
        },
      ]}>
      {props.children}
    </View>
  );
};

Rounded.propTypes = {
  backgroundColor: PropTypes.any,
  size: PropTypes.number,
  radius: PropTypes.number,
  height: PropTypes.number,
  marginRight: PropTypes.number,
  marginLeft: PropTypes.number,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  position: PropTypes.string,
  top: PropTypes.number,
  bottom: PropTypes.number,
  left: PropTypes.number,
  right: PropTypes.number,
};

/* ANCHOR  INPUT(ICON SECURE) */
export const InputWrap = props => {
  return (
    <Container
      direction="row"
      width={props.width}
      elevation={props.elevation}
      backgroundColor={props.backgroundColor}
      borderRadius={props.borderRadius || 10}
      borderColor={props.borderColor}
      borderWidth={props.borderWidth}
      borderBottomWidth={props.borderBottomWidth}
      style={styles.overflow}>
      {props.icon ? (
        <Container
          paddingLeft={4}
          verticalAlignment="center"
          horizontalAlignment="center">
          <ImageWrap width={3} height={2} source={props.icon} />
        </Container>
      ) : null}
      <TextInput
        multiline={props.multiline}
        onSubmitEditing={props.onSubmit}
        keyboardType={props.keyboardType}
        ref={props.refValue}
        onChangeText={props.onChangeText}
        value={props.value}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor}
        numberOfLines={props.numberOfLines}
        autoCapitalize={props.autoCapitalize || 'none'}
        autoCompleteType={props.autoCompleteType || 'off'}
        autoCorrect={props.autoCorrect}
        secureTextEntry={props.secure}
        returnKeyType={props.returnKeyType}
        maxHeight={Height(props.maxHeight)}
        style={[
          styles.flex,
          styles.input,
          {
            color: props.color,
            fontWeight: Platform.OS === 'ios' ? 'bold' : null,
            fontFamily: fontBold,
            fontSize: scaleFont(props.fontSize) || scaleFont(11),
            paddingTop: props.paddingTop || 12,
            paddingBottom: props.paddingBottom || 12,
          },
          props.inputStyle,
        ]}
      />
      {props.secureIcon ? (
        <TouchWrap onPress={props.onToggleSecure}>
          <Container
            flex={1}
            paddingLeft={15}
            paddingRight={15}
            verticalAlignment="center"
            horizontalAlignment="center">
            {props.secureIcon}
          </Container>
        </TouchWrap>
      ) : null}
    </Container>
  );
};

InputWrap.propTypes = {
  multiline: PropTypes.bool,
  maxHeight: PropTypes.number,
  color: PropTypes.any,
  showSecure: PropTypes.bool,
  onToggleSecure: PropTypes.func,
  secureIcon: PropTypes.any,
  icon: PropTypes.any,
  inputStyle: PropTypes.object,
  paddingBottom: PropTypes.number,
  paddingTop: PropTypes.number,
  fontSize: PropTypes.number,
  returnKeyType: PropTypes.string,
  secure: PropTypes.bool,
  autoCompleteType: PropTypes.string,
  autoCapitalize: PropTypes.string,
  numberOfLines: PropTypes.number,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  elevation: PropTypes.number,
  backgroundColor: PropTypes.any,
  borderRadius: PropTypes.number,
  onSubmit: PropTypes.func,
  keyboardType: PropTypes.string,
  value: PropTypes.any,
};

/* ANCHOR  BUTTON */
export const Button = props => {
  return (
    <TouchWrap onPress={props.onPress}>
      <Container
        elevation={props.elevation}
        backgroundColor={props.backgroundColor || '#ff9800'}
        borderRadius={props.borderRadius || 15}
        padding={props.padding || 20}
        verticalAlignment="center"
        horizontalAlignment="center">
        <H2 fontSize={17} color={props.color || '#fff'}>
          {props.title}
        </H2>
      </Container>
    </TouchWrap>
  );
};

Button.propTypes = {
  onPress: PropTypes.func,
  elevation: PropTypes.number,
  backgroundColor: PropTypes.any,
  borderRadius: PropTypes.number,
  padding: PropTypes.number,
  color: PropTypes.any,
  title: PropTypes.string,
};

/* ANCHOR  SLIDE VERTICAL TRANSITION */
export const SlideVerticalTransition = props => {
  const [animate] = useState(new Value(0));
  const slide = () => {
    Animated.timing(animate, {
      toValue: 1,
      duration: props.duration || 300,
      easing: Easing.elastic(0.3),
    }).start();
  };

  useEffect(() => {
    slide();
  }, [props.index]);

  const slideY = animate.interpolate({
    inputRange: [0, 1],
    outputRange: [props.from, 0],
  });

  return (
    <Animated.View
      style={[
        props.style,
        {
          transform: [
            {
              translateY: slideY,
            },
          ],
        },
      ]}>
      {props.children}
    </Animated.View>
  );
};

SlideVerticalTransition.propType = {
  duration: PropTypes.number,
};

/* ANCHOR  SLIDE HORIZONTAL TRANSITION */
export const SlideHorizontalTransition = props => {
  const [animate] = useState(new Value(0));
  const slide = () => {
    Animated.timing(animate, {
      toValue: 1,
      duration: props.duration || 300,
      easing: Easing.elastic(0.3),
    }).start();
  };

  useEffect(() => {
    slide();
  }, [props.index]);

  const slideX = animate.interpolate({
    inputRange: [0, 1],
    outputRange: [props.from, 0],
  });

  return (
    <Animated.View
      style={[
        props.style,
        {
          transform: [
            {
              translateX: slideX,
            },
          ],
        },
      ]}>
      {props.children}
    </Animated.View>
  );
};

SlideHorizontalTransition.propType = {
  duration: PropTypes.number,
};

export const BlackScreen = props => {
  return props.show ? (
    <Container
      flex={1}
      position="absolute"
      width={100}
      height={100}
      backgroundColor="#00000099">
      {props.children}
    </Container>
  ) : null;
};

/* ANCHOR  STYLES*/
const styles = StyleSheet.create({
  overflow: { overflow: 'hidden' },
  flex: { flex: 1 },
  input: { paddingLeft: 15 },
  rounded: { justifyContent: 'center', alignItems: 'center' },
});
