import {
    Text,
    StyleSheet,
    View
} from 'react-native'

const NameCard = (props) => {
    return(
        <View style={styles.nameCard}>
            <Text style={styles.nameText}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    nameCard: {
        backgroundColor: 'white',
        height: 50,
        marginTop: 12,
        marginHorizontal: 12,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        justifyContent: 'center'
    },
    nameText:{
        fontSize: 18,
        paddingLeft: 10,
    }
})

export default NameCard