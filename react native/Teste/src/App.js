import React from 'react'
import { View, StyleSheet } from 'react-native'

//estilo
import style from './components/Style'

//components
import Primeiro from './components/Primeiro'
import Contador from './components/Contador'
import Aleatorio from './components/Aleatorio'

const App = () => (
    <View style={style.App} >
        <Contador />
    </View>
)

export default App