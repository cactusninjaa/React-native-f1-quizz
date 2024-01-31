import { 
    StyleSheet, 
    Pressable,
    Text,
} from 'react-native';

const Button = (props) => {

    const functionMap = {
        'switchPage': function() {props.navigation.navigate(props.direction, {name: 'Jane'})},
      };
    
    return(
        <Pressable 
            style={styles.button} 
            title={props.content} 
            onPress={() =>
                functionMap[props.function]()
            }
        >
            <Text style={styles.text}>{props.content}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
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

export default Button