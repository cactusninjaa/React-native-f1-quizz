import React, { useState, useEffect } from 'react';
import { Text, View, Modal, StyleSheet } from 'react-native';

import Button from './Button';

const TenMinClock = (props) => {
    const [time, setTime] = useState(5 * 60); // Temps en secondes
    const [modalVisible, setModalVisible] = useState(false);
  
    const handleClose = () => {
      setModalVisible(false);
    };
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            clearInterval(timer);
            setModalVisible(true);
            return 0;
          } else {
            return prevTime - 1;
          }
        });
      }, 1000);
  
      return () => clearInterval(timer); // Nettoyer le timer à la fin
    }, []);
  
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
  
    return (
      <View style={styles.timerContainer}>
        <Text style= {styles.timerText}>{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</Text>

        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={handleClose}
        >
          <View style={styles.centeredView}>
            <Text style={styles.modalTitle}>Time's up!</Text>
            <Text style={styles.modalText}>
                Congratulations! You have brilliantly conquered the F1 Drivers Challenge. Your knowledge and passion for this sport are remarkable.
            </Text>

            <Text style={[styles.modalText, styles.bold]}>Your score : {props.score}</Text>
            <Button 
                onPress={handleClose}
                style={styles.closeText} 
                content = "Home" 
                function = "switchPage"
                direction = "Home"
                navigation = {props.navigation} 
            />
          </View>
        </Modal>
      </View>
    );
  };

const styles = StyleSheet.create({
    bold: {
        fontWeight: "bold",
        paddingBottom: 10
    },
    timerContainer:{
        backgroundColor: '#910011',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
      },
    timerText:{
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 22
    },
    modalText: {
        marginBottom: 15,
        lineHeight: 24,
        fontSize: 18,
        textAlign: "left"
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 42,
        textAlign: "center"
    },
    closeText: {
        color: 'blue',
        fontSize: 20,
    },
})

export default TenMinClock;