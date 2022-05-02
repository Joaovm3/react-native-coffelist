import { StyleSheet, View, FlatList, StatusBar, Text } from 'react-native';
import { CoffeeHeader } from "./src/components/CoffeeHeader";
import { CoffeeItem } from "./src/components/CoffeeItem";
import { SeparatorItem } from "./src/components/SeparatorItem";
import { coffeeList } from "./src/mocks/coffeeList";

export default function App() {
  const renderItem = ({ item }) => {
    return <CoffeeItem {...item} />;
  }

  const keyExtractor = (item) => item.name;

  return (
    <View style={styles.container}>
      <StatusBar hidden={true}/>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={CoffeeHeader}
        ListFooterComponent={() => { 
          return (
            <View>
              <SeparatorItem description={'Cafés Especiais'}/>
              <FlatList
                ItemSeparatorComponent={SeparatorItem}
                showsVerticalScrollIndicator={false}
                data={coffeeList.specialtyCoffes}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
              />
            </View>
          )
        }}
        ItemSeparatorComponent={SeparatorItem}
        data={coffeeList.coffes}
        keyExtractor={keyExtractor}
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
