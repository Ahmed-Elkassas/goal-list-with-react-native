import { StyleSheet, Text, View, Pressable } from "react-native";

export function GoalItem(props) {
  return (
    <Pressable onPress={() => console.log('Delete')}>
      <View style={styles.listItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}


const styles = StyleSheet.create({
  listItem: {
    marginVertical: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 10,
    backgroundColor: "#A460ED",
  },
  goalText: {
    color: "#EEEEEE",
  },
});
