import React from 'react'
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native'


const styles = StyleSheet.create({
    buttons:{
        fontSize:40,
        height: Dimensions.get('window').width /4,
        width: Dimensions.get('window').width /4,
        padding: 20,
        backgroundColor: "#f0f0f0",
        textAlign: 'center',
        borderWidth:1,
        borderColor: "#888",
    },
    operationButtons:{
        color:'#fff',
        backgroundColor:"#fa8231",
    },
    buttonsDouble:{
        width: (Dimensions.get('window').width /4) * 2,
    },
    buttonsTrilpe:{
        width: (Dimensions.get('window').width /4) * 3,
    }

})


export default props => {

    const buttonStyles = [styles.buttons]

    if(props.buttonsDouble){
        buttonStyles.push(styles.buttonsDouble)
    }

    if(props.buttonsTrilpe){
        buttonStyles.push(styles.buttonsTrilpe)
    }

    if(props.operationButtons){
        buttonStyles.push(styles.operationButtons)
    }

    return(
        <TouchableHighlight  onPress={() => props.onClick(props.label)}>
            <Text style={buttonStyles} >{props.label}</Text>
        </TouchableHighlight>
    )

}