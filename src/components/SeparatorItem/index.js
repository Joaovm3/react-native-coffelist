import { View, StyleSheet } from "react-native";

export function SeparatorItem() {
  return (
    <View style={{flexDirection: 'row' }}>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  line: { 
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: '50%',
    height: 1,
    backgroundColor: "#b4835f97", 
    marginHorizontal: 20,
  }
});