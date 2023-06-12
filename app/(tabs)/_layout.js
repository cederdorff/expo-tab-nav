import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    tabBarIcon: () => <Ionicons name="home-outline" size={24} />
                }}
            />
            <Tabs.Screen
                name="second"
                options={{
                    title: "Tab two",
                    tabBarIcon: () => <Ionicons name="albums-outline" size={24} />
                }}
            />
        </Tabs>
    );
}
