import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native'

export default function App() {
  const [word, setWord] = useState('')
  const [conson, setConson] = useState(0)
  const [vowel, setVowel] = useState(0)
  const [char, setChar] = useState(0)

  const submitWord = () => {
    Alert.alert(word)
    count(word);
  }

  const count = (str)=> {
    

      var vowels = str.split('').filter(c => ['a','e','i', 'o','u'].includes(c)).join('');
      var consonant= str.split('').filter(c => !['a','e','i', 'o','u'].includes(c)).join('');


    setConson(consonant.length);
    setVowel(vowels.length);
    setChar(str.length);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>A Word Analyzer</Text>
      <View  style={styles.main}>
      <Text>Word :</Text>
      <TextInput
        style={styles.input}
        placeholder="Insert a word"
        onChangeText={(val) => setWord(val)}
      />
      <Button title="Analyze" onPress={submitWord} />
      <View style={styles.result}>
      <Text>Word :{word}</Text>
      <Text>No of Consonants :{conson}</Text>
      <Text>No of Vowels :{vowel}</Text>
      <Text>No of Characters :{char}</Text>
      </View>
      </View>
      
      
    </View>
  )
}

const styles = StyleSheet.create({
  title:{
    fontWeight:'bold',
    fontSize: 20,
    textAlignVertical: 'top',
    marginTop:100
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
     alignItems: 'center',
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  main:{
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  result:{
    marginTop:30
  }
})
