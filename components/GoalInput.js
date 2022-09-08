import { useState } from "react";
import {View ,TextInput, Button, StyleSheet } from "react-native";

export const GoalInput = (props) => {
    const [enteredText, setEnteredText] = useState("");

    function inputTextHandler(text) {
        setEnteredText(text);
      }

      function addGoalHandler() {
        if(enteredText.trim().length === 0) {
           return 
         } 
        props.onAddGoal(enteredText);
        setEnteredText('')
      }
    return (
        <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Your course goal..."
                    style={styles.textInput}
                    onChangeText={inputTextHandler}
                    value={enteredText}
                    />
                <Button title="Add goal" onPress={addGoalHandler} />
            </View>

    )
}
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
      },
    textInput: {
        borderColor: "#cccccc",
        borderWidth: 1,
        width: "70%",
        marginRight: 8,
        padding: 4,
      },
})