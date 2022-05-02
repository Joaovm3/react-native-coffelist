import {
  Image,
  useWindowDimensions,
  View,
  Text,
  StyleSheet,
} from "react-native";

import { coffeeList } from "../../mocks/coffeeList";

import { Feather } from '@expo/vector-icons';
import cover from "../../../assets/coffee-cover.jpg";

const dimensions = {
  with: 1280,
  height: 812,
};

const ratio = dimensions.height / dimensions.with;
export function CoffeeHeader() {
  const window = useWindowDimensions();

  const width = window.width;
  const height = width * ratio;

  return (
    <>
      <Image style={{ width, height }} source={cover} />
      <View style={styles.container}>
          <Text style={styles.title}>
            <Feather name="coffee" size={30} color="white" /> 
            {coffeeList.title}
          </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    paddingVertical: 100,
    width: "100%",
    marginBottom: 16,
  },
  title: {
    alignSelf: "center",
    fontSize: 36,
    fontWeight: "bold",
    color: "#FFF",
  },
});
