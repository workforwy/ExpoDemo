import {Entypo} from "@expo/vector-icons";
import {useNavigation} from "expo-router";
import {Pressable} from "react-native";

function LeftBtn() {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.canGoBack() && navigation.goBack();
      }}
    >
      <Entypo name="chevron-left" size={24} color="black" />
    </Pressable>
  );
}

export default LeftBtn;
