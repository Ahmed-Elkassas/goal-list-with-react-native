import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [enteredText, setEnteredText] = useState('');
  const [goalList, setGoalList] = useState([]);

  function inputTextHandler(text) {
    setEnteredText(text)
  }


  function addGoalHandler() {
   setGoalList((currGoalList) => [...currGoalList, enteredText])
  }

  return (
    <View style={styles.container}>
      <View  style={styles.inputContainer} >
        <TextInput placeholder='Your course goal' style={styles.textInput} onChangeText={inputTextHandler}/>
        <Button title='Add goal' onPress={addGoalHandler}/>
      </View>
      <View style={styles.listConatiner}>
        {goalList.map((goal) => <Text key={goal}>{goal}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  }, 
  textInput: {
    borderColor: '#cccccc',
    borderWidth: 1,
    width: '70%',
    marginRight: 8,
    padding: 4
  },  
  listConatiner: {
    flex: 4,
  }
});
