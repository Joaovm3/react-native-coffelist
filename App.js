import { StyleSheet, Text, View, FlatList, StatusBar } from 'react-native';
import { CoffeeHeader } from "./src/components/CoffeeHeader";
import { CoffeeItem } from "./src/components/CoffeeItem";
import { SeparatorItem } from "./src/components/SeparatorItem";
import { Coffee, coffeeList } from "./src/mocks/coffeeList";

export default function App() {
  const renderItem = ({ item }) => {
    return <CoffeeItem {...item} />;
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden={true}/>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={CoffeeHeader}
        ItemSeparatorComponent={SeparatorItem}
        data={coffeeList}
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
