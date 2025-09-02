import {FontAwesome} from "@expo/vector-icons";
import {Tabs} from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        // headerStyle: {
        //   backgroundColor: "transparent",
        // },
        // headerLeft: () => (
        //   <Pressable
        //     onPress={() => {
        //       nav.canGoBack() && nav.goBack();
        //     }}
        //     style={{
        //       flex: 1,
        //       paddingHorizontal: 10,
        //       justifyContent: "center",
        //       alignItems: "center",
        //     }}
        //   >
        //     <Entypo name="chevron-left" size={24} color="black" />
        //   </Pressable>
        // ),
        // headerTitle: (props) => (
        //   <Text style={{fontSize: 20, fontWeight: "bold"}}>
        //     {props.children}
        //   </Text>
        // ),
        // headerRight: () => (
        //   <Link href={"/login"}>
        //     <View
        //       style={{
        //         flex: 1,
        //         paddingHorizontal: 10,
        //         justifyContent: "center",
        //         alignItems: "center",
        //       }}
        //     >
        //       <Entypo name="magnifying-glass" size={24} color="black" />
        //     </View>
        //   </Link>
        // ),
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "首页",
          href: "/tabScreens/home",
          tabBarIcon: ({color}) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="main"
        options={{
          title: "主页",
          tabBarIcon: ({color}) => (
            <FontAwesome size={28} name="video-camera" color={color} />
          ),
          href: {
            pathname: "/tabScreens/main",
            params: {id: 1},
          },
        }}
      />
      <Tabs.Screen
        name="me"
        options={{
          title: "我的",
          tabBarIcon: ({color}) => (
            <FontAwesome size={28} name="user" color={color} />
          ),
          href: {
            pathname: "/tabScreens/main",
            params: {id: 1},
          },
        }}
      />
    </Tabs>
  );
}
