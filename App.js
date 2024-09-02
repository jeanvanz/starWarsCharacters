import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/pages/Home";
import Character from "./src/pages/Character";
import Starships from "./src/pages/Starships";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          component={Home}
          name="Home"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          component={Character}
          name="Character"
          options={{
            headerStyle: {
              backgroundColor: '#000000',
            },
            headerTitleStyle: {
              color: '#000000'
            }
          }}
        />
        <Stack.Screen
          component={Starships}
          name="Starships"
          options={{
            headerStyle: {
              backgroundColor: '#000000',
            }, headerTitleStyle: {
              color: '#000000'
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}