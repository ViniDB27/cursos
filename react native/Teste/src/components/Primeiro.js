import React, {useState} from 'react'
import { View, Text, Button } from 'react-native'

//estilo
import style from './Style'

const Primeiro = (props) => {
    
    const [count, setCount] = useState(0)

    function exec(){
        //setCount(count+=1)
        console.warn('clic')
    }
        
    return (
        <View>
            <Text style={style.textG} >Olá Mundo Novo!</Text>
            <Text style={style.textG} >Bora codar em Ract Native :D {count}</Text>
            <Button 
                title={`Cliclou ${count}`}
                onPress={()=>exec()}
            />
        </View>
    )
}

export default Primeiro