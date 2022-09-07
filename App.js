import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
} from "react-native";
import {GoalItem} from "./components/GoalItem";
import { GoalInput } from "./components/GoalInput";

export default function App() {
  const [goalList, setGoalList] = useState([]);



  function addGoalHandler(enteredText) {
    setGoalList((currGoalList) => [
      ...currGoalList,
      { text: enteredText, id: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.container}>
        <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.listConatiner}>
        <FlatList
          data={goalList}
          renderItem={(itemData) => (
              <GoalItem text={itemData.item.text} />
          )}
          keyExtractor={(item, index) => {
            return item.id
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    justifyContent: "center",
    paddingTop: 50,
    paddingHorizontal: 16,
  },
 

  listConatiner: {
    flex: 4,
  },
  
});
