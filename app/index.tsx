import {Link, useNavigation} from "expo-router";
import {useEffect} from "react";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

export default function IndexScreen() {
  const navigation = useNavigation();

  const insets = useSafeAreaInsets();

  // navigation.setOptions({
  //   headerShown: false,
  // });

  function initLogFile() {}

  useEffect(() => {
    initLogFile();
    return () => {};
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, marginTop: insets.top, textAlign: "center"}}>
        Expo 组件测试
      </Text>
      <ScrollView style={{flex: 1, marginTop: 20}}>
        <Link href="/tabs/main">
          <View style={styles.item_container}>
            <Text>to home</Text>
          </View>
        </Link>
        <Link href="/login">
          <View style={styles.item_container}>
            <Text>to login</Text>
          </View>
        </Link>
        <Link href="/screen/modal">
          <View style={styles.item_container}>
            <Text>to modal</Text>
          </View>
        </Link>
        <Link href="/drawer">
          <View style={styles.item_container}>
            <Text>to user</Text>
          </View>
        </Link>
        <Link href="/screen/selectPic">
          <View style={styles.item_container}>
            <Text>to selectPic</Text>
          </View>
        </Link>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item_container: {
    backgroundColor: "#b9b9b9",
    justifyContent: "center",
    padding: 10,
    margin: 10,
    alignItems: "center",
  },
});
