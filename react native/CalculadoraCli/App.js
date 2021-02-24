import React, {useState} from 'react'
import { StyleSheet, View } from 'react-native'


import Display from './src/Display'
import Buttons from './src/Button'


const initialState = {
  displayInit: '0',
  clearDisplay: false,
  operatpr: null,
  values: [0, 0],
  current: 0,
}


const App =() => {

  const [currentState, setCurrentState] = useState({ ... initialState})

  const [ valuesDisplay, setValueDisplay ] = useState('0')
  
  const addDigit = n => {

    if( n === '.' && currentState.displayInit.includes('.') ){
        return
    }

    const clearDisplay = currentState.displayInit  ==== '0'

    setValueDisplay(n)
  }

  const clearMemory = () =>{
    setValueDisplay('0')
  }

  cosnt = setOperation = operator=>{

  }

  return (
    <View style={styles.container}>
      <Display value={valuesDisplay} />
       <View style={styles.button}>
          <Buttons label='AC'  buttonsTrilpe  onClick={clearMemory} />
          <Buttons label='\' operationButtons  onClick={setOperation} />
          <Buttons label='7'  onClick={addDigit} />
          <Buttons label='8'  onClick={addDigit} />
          <Buttons label='9'  onClick={addDigit} />
          <Buttons label='*' operationButtons  onClick={setOperation} />
          <Buttons label='4'  onClick={addDigit} />
          <Buttons label='5'  onClick={addDigit} />
          <Buttons label='6'  onClick={addDigit} />
          <Buttons label='-' operationButtons  onClick={setOperation} />
          <Buttons label='1'  onClick={addDigit} />
          <Buttons label='2'  onClick={addDigit} />
          <Buttons label='3'  onClick={addDigit} />
          <Buttons label='+' operationButtons  onClick={setOperation} />
          <Buttons label='0' buttonsDouble   onClick={addDigit} />
          <Buttons label='.'   onClick={addDigit}/>
          <Buttons label='=' operationButtons onClick={setOperation} />
       </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button:{
    flexDirection:'row',
    flexWrap: 'wrap',
  }
});


export default App;
