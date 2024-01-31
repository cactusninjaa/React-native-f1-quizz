import React, { useState } from 'react';
import { Modal, Image, StyleSheet, View, Text, TouchableWithoutFeedback, Pressable } from 'react-native';

import TenMinClock from '../components/TenMinuteClock';


const Header = (props) => {
    const [modalVisible, setModalVisible] = useState(false);

    const handlePress = () => {
        setModalVisible(true);
    };

    const handleClose = () => {
        setModalVisible(false);
    };

    return (
        <View style={styles.headerContainer}>
            <View style={[styles.flex, styles.alignCenter, styles.justifyCenter]}>
                <Text style={styles.scoreText}>{props.score}</Text>
            </View>
            <View style={[styles.flexTwo, styles.alignCenter]}>
                <TenMinClock navigation={props.navigation} score={props.score}/>
            </View>
            <View style={[styles.flex, styles.alignEnd]}>
                <TouchableWithoutFeedback onPress={handlePress}>
                    <Image 
                        style={styles.icon} 
                        source={require('../assets/info-icon.png')} 
                    />
                </TouchableWithoutFeedback>

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={modalVisible}
                    onRequestClose={handleClose}
                >
                    <View style={styles.centeredView}>
                        <Text style={styles.title}>Game's rules</Text>
                        <Text style={styles.text}>
                            In this captivating game, you are challenged to identify the surnames of Formula 1 drivers who have competed over the past ten seasons.
                        </Text>
                        <Text style={styles.text}>
                            Armed with your knowledge of this thrilling sport, you must pinpoint these drivers, whether active or retired, to accumulate points and emerge victorious. 
                        </Text>
                        <Text style={styles.text}>
                            With its blend of excitement and competition, the F1 Drivers Challenge promises thrilling moments for all fans of motorsport.
                        </Text>

                        <Pressable style={styles.button} onPress={handleClose}>
                            <Text style={styles.buttonText}>Close</Text>
                        </Pressable>
                    </View>
                </Modal>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    icon: {
        // Vos styles ici
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 22
    },
    text: {
        marginBottom: 15,
        lineHeight: 24,
        fontSize: 18,
        textAlign: "left"
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 42,
        textAlign: "center"
    },
    scoreText: {
        marginBottom: 15,
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold'
    },
    closeText: {
        color: 'blue',
        fontSize: 20,
    },
    alignCenter: {
        alignItems: 'center'
    },
    justifyCenter: {
        justifyContent: 'center'
    },
    alignEnd: {
        alignItems: 'flex-end',
    },
    flex:{
        flex: 1,
    },
    flexTwo: {
        flex: 2,
    },
    headerContainer:{
        marginVertical: 10,
        marginHorizontal: 8,
        flexDirection: 'row',
    },
    icon: {
        width: 34,
        height: 34,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 10,
        padding: 10,
        width: '100%',
        backgroundColor: '#910011',
      },
    buttonText:{
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});

export default Header;