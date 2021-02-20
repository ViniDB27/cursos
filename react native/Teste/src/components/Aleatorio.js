import React from 'react'
import { Text } from 'react-native'

//estilo
import style from './Style'



const Aleatorio = ({max, min}) =>  {
    
    const delta = max - min + 1
    const aleatorio = parseInt(Math.random() * delta) + min
    
    return <Text style={style.textG} >Valor aleatorio é {aleatorio}</Text>
}

export default Aleatorio