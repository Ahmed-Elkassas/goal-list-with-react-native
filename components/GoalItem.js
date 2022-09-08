import { StyleSheet, Text, View, Pressable } from "react-native";

export function GoalItem(props) {
  return (
      <View style={styles.listItem}>
    <Pressable android_ripple={{color: "#210644"}} onPress={props.onDeleteGoal.bind(this, props.id)}>
        <Text style={styles.goalText}>{props.text}</Text>
    </Pressable>
      </View>
  );
}


const styles = StyleSheet.create({
  listItem: {
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 10,
    backgroundColor: "#A460ED",
  },
  goalText: {
    color: "#EEEEEE",
    padding: 8,
  },
});
