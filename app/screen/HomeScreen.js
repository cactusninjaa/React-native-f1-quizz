import React, { useState } from 'react';
import { 
  ImageBackground,
  Pressable,
  StyleSheet, 
  Text,
  View,
} from 'react-native';
import { BlurView } from 'expo-blur';

import Button from '../components/Button';



const HomeScreen = ({navigation, route}) => { 
    return (
        <ImageBackground
          style={styles.background}
          source={require('../assets/background.png')}
        >
        <View style={styles.titleContainer}>
          <BlurView intensity={50} style={styles.blur}></BlurView>
          <Text style={styles.title}>F1 Driver</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button 
            content = "Start" 
            function = "switchPage"
            direction = "Game"
            navigation = {navigation}
          />
        </View>
        </ImageBackground>
    );
  }

const styles = StyleSheet.create({
  background: {
    flex: 1,
    position: 'absolute',
    zIndex: -1,
    width: '100%',
    height: '100%',
  },
  blur:{
    width: 240,
    height: 60,
    position: 'absolute',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 50,
    marginHorizontal: 10,
  },
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
 
  title: {
    fontSize: 48,
    fontWeight: '900'
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  
})

export default HomeScreen;