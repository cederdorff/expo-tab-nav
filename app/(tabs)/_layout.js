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
                    tabBarActiveTintColor: "#264c59",
                    tabBarInactiveTintColor: "#fff",
                    tabBarActiveBackgroundColor: "#acc6c9",
                    tabBarIcon: () => <Ionicons name="home" size={24} color="white" />
                }}
            />
            <Tabs.Screen
                name="second"
                options={{
                    title: "Tab two",
                    tabBarActiveTintColor: "#264c59",
                    tabBarInactiveTintColor: "#fff",
                    tabBarActiveBackgroundColor: "#acc6c9",
                    tabBarIcon: () => <Ionicons name="albums" size={24} color="white" />
                }}
            />
        </Tabs>
    );
}
