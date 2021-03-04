import React, {Component} from 'react'
import { StyleSheet, View } from 'react-native'


import Display from './src/Display'
import Buttons from './src/Button'


const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operaion: null,
  values: [0, 0],
  current: 0,
}


class App extends Component {

  
  state = { ... initialState }
  
  addDigit = n => {

    
    if( n === '.' && currentState.displayValue.includes('.') ){
      return
    }

    const clearDisplay = currentState.displayValue  === '0' || this.state.clearDisplay

    const currentValue = clearDisplay ? '' : this.state.displayValue
    const displayValue = currentValue = n

    this.setState({ displayValue, clearDisplay: false })

    if(n != '.'){
      const newValue = parseFloat(displayValue)
      const values = [... this.state.values]
      values[this.state.current] = newValue
      this.setState({ values })
    }
  }

  clearMemory = () =>{
    this.setState({ displayValue: '0' })
  }

  setOperation = operaion=>{
      if(this.state.current === 0){
        this.setState({
          operaion,
          current: 1,
          clearDisplay: true,
        })
      }else{
        const equals = operaion === '='
        const values = [ ...this.state.values ]

        try{
          values[0] = eval(`${values[0]} ${this.state.operaion} ${values[1]}`)
        }catch(e){
          values[0] = this.state.values[0]
        }

        values[1] = 0

        this.setState({
          displayValue: values[0],
          operaion: equals ? null : operaion,
          current: equals? 0: 1, 
          clearDisplay: !equals,
          values
        })


      }
  }

  render(){

    return (
      <View style={styles.container}>
        <Display value={this.displayValue} />
         <View style={styles.button}>
            <Buttons label='AC'  buttonsTrilpe  onClick={this.clearMemory} />
            <Buttons label='\' operationButtons  onClick={this.setOperation} />
            <Buttons label='7'  onClick={this.addDigit} />
            <Buttons label='8'  onClick={this.addDigit} />
            <Buttons label='9'  onClick={this.addDigit} />
            <Buttons label='*' operationButtons  onClick={this.setOperation} />
            <Buttons label='4'  onClick={this.addDigit} />
            <Buttons label='5'  onClick={this.addDigit} />
            <Buttons label='6'  onClick={this.addDigit} />
            <Buttons label='-' operationButtons  onClick={this.setOperation} />
            <Buttons label='1'  onClick={this.addDigit} />
            <Buttons label='2'  onClick={this.addDigit} />
            <Buttons label='3'  onClick={this.addDigit} />
            <Buttons label='+' operationButtons  onClick={this.setOperation} />
            <Buttons label='0' buttonsDouble   onClick={this.addDigit} />
            <Buttons label='.'   onClick={this.addDigit}/>
            <Buttons label='=' operationButtons onClick={this.setOperation} />
         </View>
      </View>
    );
  }

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
