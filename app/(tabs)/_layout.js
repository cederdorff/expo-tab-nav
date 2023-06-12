import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#264c59"
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold"
                },
                tabBarStyle: {
                    backgroundColor: "#264c59"
                }
            }}>
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    tabBarIcon: () => <Ionicons name="home-outline" size={24} color="white" />
                }}
            />
            <Tabs.Screen
                name="second"
                options={{
                    title: "Tab two",
                    tabBarIcon: () => <Ionicons name="albums-outline" size={24} color="white" />
                }}
            />
        </Tabs>
    );
}
