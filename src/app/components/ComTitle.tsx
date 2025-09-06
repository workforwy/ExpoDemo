import {Entypo} from "@expo/vector-icons";
import {useNavigation} from "expo-router";
import {Pressable, Text, View} from "react-native";

function ComTitle({props}: any) {
  return (
    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
      <Text style={{fontSize: 20, fontWeight: "bold"}}>{props.children}</Text>
    </View>
  );
}

export default ComTitle;
