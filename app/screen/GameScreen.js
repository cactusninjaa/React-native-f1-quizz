import React, { useState, useEffect } from 'react';
import { 
  Button,
  Image,
  SafeAreaView, 
  StyleSheet, 
  ScrollView,
  Text,
  TextInput,
  View,
  Alert,
  Pressable,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';

// import Button from '../components/Button';
import Header from '../components/Header';
import NameCard from '../components/NameCard';



const GameScreen = ({navigation, route}) => { 
  const years = []
  for(let i = 1; i <11; i++){
    years.push(new Date().getUTCFullYear() - i)
  }

  const [keyboardStatus, setKeyboardStatus] = useState(false);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardStatus(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardStatus(false);
      }
    );
  
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  
  const [driverName, setDriverName] = useState('');
  const [driverNames, setDriverNames] = useState([]);

  let score = driverNames.length

  const [realDriverName, setRealDriverName] = useState([]);
  useEffect(() => {
    Promise.all(
      years.map(year =>
        fetch(`http://ergast.com/api/f1/${year}/drivers.json`)
          .then(response => response.json())
          .then(data => data.MRData.DriverTable.Drivers.map(driver => driver.familyName))
      )
    )
    .then(allYearsDrivers => {
      const uniqueDriverNames = [...new Set(allYearsDrivers.flat())];
      setRealDriverName(uniqueDriverNames);
    })
    .catch(error => console.error(error));
  }, []);

  const onChangeText = (text) => setDriverName(text);

  const checkDriverName = () => {
    const formattedInputName = driverName.trim().toLowerCase();

    if (!driverNames.map(name => name.toLowerCase()).includes(formattedInputName)){
      if(realDriverName.map(name => name.toLowerCase()).includes(formattedInputName))
          addDriverName()
      else
        Alert.alert("Ce n'est pas un pilote")
    } else {
      Alert.alert("Déjà écrit")
    }

    setDriverName('') // Réinitialiser l'input
  }

  const addDriverName = () => {
    setDriverNames((prevNames) => [...prevNames, driverName]);
    setDriverName(''); // Réinitialiser l'input
  };


    return (
      <SafeAreaView style={styles.container}>
        <Header navigation={navigation} score={score} />

        <ScrollView style={styles.main}>
          {[...driverNames].reverse().map((name) => (
            <NameCard name={name}/>
          ))}          
        </ScrollView>

        <KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.bottom}
          >
          <Pressable 
              style={styles.button} 
              title="Confirm"
              onPress={checkDriverName}
          >
              <Text style={styles.text}>Confirm</Text>
          </Pressable>
          <TextInput 
            style={styles.input}
            onChangeText={onChangeText}
            value={driverName}
            placeholder='Driver name'
          />        
          <View style={{ height: keyboardStatus ? 100 : 0 }}></View> 

        </KeyboardAvoidingView>

      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
  bottom:{ 
    marginHorizontal: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
  input: {
    backgroundColor: 'white',
    height: 50,
    marginTop: 12,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
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
  text:{
      fontSize: 20,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
  },
})

export default GameScreen;