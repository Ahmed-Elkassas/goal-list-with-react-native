import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";

export const GoalInput = (props) => {
  const [enteredText, setEnteredText] = useState("");

  function inputTextHandler(text) {
    setEnteredText(text);
  }

  function addGoalHandler() {
    if (enteredText.trim().length === 0) {
      return;
    }
    props.onAddGoal(enteredText);
    setEnteredText("");
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require('../assets/images/goal.png')} style={styles.image} />
        <TextInput
          placeholder="Your course goal..."
          style={styles.textInput}
          onChangeText={inputTextHandler}
          value={enteredText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonStyle}>
            <Button title="Add goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.buttonStyle}>
            <Button title="Cancel" onPress={props.onCancel} color="#D61C4E" />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#210644"
  },
  image: {
    height: 100,
    width: 100,
    margin: 16,
  },
  textInput: {
    borderColor: "#cccccc",
    borderWidth: 1,
    width: "90%",
    marginRight: 8,
    padding: 4,
    color: "#ccc"
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16
  },
  buttonStyle: {
    width: 100,
    marginHorizontal: 8,
  },
});
