import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Button
} from "react-native";
import { StatusBar } from "expo-status-bar";
import {GoalItem} from "./components/GoalItem";
import { GoalInput } from "./components/GoalInput";

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [visibleModal, setVisibleModal] = useState(false);
 
  function openModal() {
    setVisibleModal(true)
  }

  function closeModal() {
    setVisibleModal(false)
  }
 
  function addGoalHandler(enteredText) {
    setGoalList((currGoalList) => [
      ...currGoalList,
      { text: enteredText, id: Math.random().toString() },
    ]);
    closeModal();
  }

  function deleteGoalHandler (id)  {
    setGoalList(currGoalList => {
      return currGoalList.filter(goal => goal.id !== id); 
    })
  }

  return (
    <>
    <StatusBar style="auto"  />
    <View style={styles.container}>
      <Button title="Add new Goal" color="#A460ED" visible={visibleModal} onPress={openModal} />
        {visibleModal && <GoalInput onAddGoal={addGoalHandler} onCancel={closeModal} />}
      <View style={styles.listConatiner}>
        <FlatList
          data={goalList}
          renderItem={(itemData) => (
              <GoalItem text={itemData.item.text} onDeleteGoal={deleteGoalHandler} id={itemData.item.id} />
          )}
          keyExtractor={(item, index) => {
            return item.id
          }}
        />
      </View>
    </View>
    </>
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
