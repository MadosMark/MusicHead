import * as React from 'react';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import {View, StyleSheet} from 'react-native';


const NeumorphismStyle = props => {
    const {size = 12} = props;
    
    
    const gradColors = ['#eeeeee', '#c8c8c8'];

    const buttonCommonStyle = {
      borderRadius: size,
      shadowRadius: size * 1.5,
    };
    const buttonOuterStyle = {
      shadowOffset: {width: size, height: size},
      marginTop: size,
      marginBottom: size,
    };
    const buttonInnerStyle = {
      shadowOffset: {width: -size, height: -size},
    };
    const buttonFaceStyle = {
      borderRadius: size,
      padding: size,
    };
  
    return (
        <View style={[styles.buttonOuter, buttonCommonStyle, buttonOuterStyle]}>
          <View style={[styles.buttonInner, buttonCommonStyle, buttonInnerStyle]}>
            <LinearGradient
              colors={gradColors}
              useAngle={true}
              angle={145}
              angleCenter={{x: 0.5, y: 0.5}}
              style={[styles.buttonFace, buttonFaceStyle, props.style]}>
              {props.children}
            </LinearGradient>
          </View>
        </View>
    );
  };
  
  NeumorphismStyle.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    size: PropTypes.number,
  };
  
  const styles = StyleSheet.create({
    buttonOuter: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      borderRadius: 12,
      shadowOffset: {width: 12, height: 12},
      shadowColor: '#bababa',
      shadowOpacity: 1.0,
      shadowRadius: 18,
      marginTop: 12,
      marginBottom: 12,
    },
    buttonInner: {
      backgroundColor: '#ffffff',
      borderRadius: 12,
      shadowOffset: {width: -12, height: -12},
      shadowColor: '#ffffff',
      shadowOpacity: 1.0,
      shadowRadius: 18,
    },
    buttonFace: {
      borderRadius: 12,
      padding: 12,
    },
  });
  
  export default NeumorphismStyle;