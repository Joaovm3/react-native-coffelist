import { View, Text, StyleSheet } from "react-native";

export function SeparatorItem({ description }) {
  return (
    <View style={{flexDirection: 'row' }}>
       {description ? (
        <View style={styles.description}>
        <View style={styles.halfLine} />  
          <Text style={styles.text}> {description} </Text>
        <View style={styles.halfLine} />  
        </View> 
      ) : (
        <View style={styles.line} />
      )}
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
  },
  halfLine: {
    width: '32%',
    height: 2,
    backgroundColor: "#4A342F", 
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4A342F",
  },
  description: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
});