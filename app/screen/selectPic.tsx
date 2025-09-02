import * as ImagePicker from "expo-image-picker";
import {Pressable, Text, View} from "react-native";

export default function SelectPic() {
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
    } else {
      alert("You did not select any image.");
    }
  };
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Pressable onPress={pickImageAsync}>
        <Text>选择图片</Text>
      </Pressable>
    </View>
  );
}
