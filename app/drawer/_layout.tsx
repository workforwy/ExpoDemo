import {GestureHandlerRootView} from "react-native-gesture-handler";
import {Drawer} from "expo-router/drawer";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Drawer screenOptions={{headerShown: false}}>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "index",
            title: "index",
          }}
        />
        <Drawer.Screen
          name="user" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "User",
            title: "user",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
