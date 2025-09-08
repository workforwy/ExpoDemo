import {Href, Link} from "expo-router";
import {useCallback, useMemo} from "react";
import {FlatList, Pressable, StyleSheet, Text, View} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

export default function IndexScreen() {
  const insets = useSafeAreaInsets();

  const data = useMemo<{id: number; name: string; href: Href}[]>(
    () => [
      {id: 1, name: "to (tabs)", href: "/(tabs)"},
      {id: 2, name: "to tab2/home", href: "/tab2/home"},
      {id: 3, name: "to tab2/main", href: "/tab2/me"},
      {id: 4, name: "to login", href: "/login/login"},
      {id: 6, name: "to user", href: "/drawer"},
      {id: 5, name: "to common/modal", href: "/common/modal"},
      {id: 7, name: "to common/selectPic", href: "/common/selectPic"},
      {id: 8, name: "to register", href: `/register/${Math.random()}`},
      {id: 9, name: "to drawer", href: "/drawer"},
    ],
    []
  );

  const renderItem = useCallback(
    ({item}: {item: {id: number; name: string; href: Href}}) => (
      <Link href={item.href} asChild>
        <Pressable style={styles.item_container}>
          <Text style={styles.item_text}>{item.name}</Text>
        </Pressable>
      </Link>
    ),
    []
  );
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, marginTop: insets.top, textAlign: "center"}}>
        Expo 组件测试
      </Text>
      <FlatList
        style={{flex: 1, marginTop: 20}}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
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
    alignItems: "center",
    height: 50,
    width: "100%",
    borderRadius: 10,
    marginBottom: 10,
  },
  item_text: {
    fontSize: 20,
  },
});
