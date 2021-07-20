import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

function Input() {
  const [value, setValue] = useState('0,00'); 

  const handleKeyPress = ({ nativeEvent }: any) => {
    let text: string = nativeEvent.text;

    if(text.length === 3) {
      text = '0' + text;
    }

    text = text.replace(/\D/g, '');
    text = text.replace(/(\d)(\d{2})$/, '$1,$2')
    text = text.replace(/(?=(\d{3})+(\D))\B/g, '.');
    
    if(text[0] === '0' && text.length > 4) {
      text = text.slice(1);
    } 
    
    setValue(text);
  }

  return (
    <>
      <TextInput 
      style={styles.input} 
      onChange={handleKeyPress}
      keyboardType='numeric'
      value={value}
      /> 
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    width: 200,
    textAlign: 'right'
  }
});

export default Input;