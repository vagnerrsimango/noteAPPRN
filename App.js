import "react-native-gesture-handler";
import Home from "./src/components/Home";
import Header from "./src/components/Header";
import NoteAdd from "./src/components/NoteAdd";
import Detail from "./src/components/Detail";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={Home}
          name="Home"
          options={{
            headerTitle: () => <Header name="Notes" />,
            headerStyle: { backgroundColor: "#8B4513", height: 120 },
          }}
        />
        <Stack.Screen
          component={NoteAdd}
          name="NoteAdd"
          options={{
            headerTitle: () => <Header name="Add Notes" />,
            headerStyle: { backgroundColor: "#8B4513", height: 120 },
          }}
        />
        <Stack.Screen
          component={Detail}
          name="Detail"
          options={{
            headerTitle: () => <Header name="Edit Notes" />,
            headerStyle: { backgroundColor: "#8B4513", height: 120 },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
