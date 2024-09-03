import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/pages/Home";
import Character from "./src/pages/Character";
import Starships from "./src/pages/Starships";
import Films from "./src/pages/Films";
import Creators from "./src/pages/Creators";
import { TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Octicons';

const Stack = createNativeStackNavigator();

const goToCreators = () => {
  navigation.navigate("Creators");
};

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
          options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: '#000000',
            },
            headerTitleStyle: {
              color: '#000000'
            },
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("Creators")}>
                <Icon name="person" size={30} color="#FFE81F" />
              </TouchableOpacity>
            )
          })}
        />
        <Stack.Screen
          component={Character}
          name="Character"
          options={{
            headerStyle: {
              backgroundColor: '#000000',
            },
            headerTitleStyle: {
              color: '#FFE81F'
            }, headerTintColor: '#FFE81F'
          }}
        />
        <Stack.Screen
          component={Starships}
          name="Starships"
          options={{
            headerStyle: {
              backgroundColor: '#000000',
            }, headerTitleStyle: {
              color: '#FFE81F'
            }, headerTintColor: '#FFE81F'
          }}
        />
        <Stack.Screen
          component={Films}
          name="Films"
          options={{
            headerStyle: {
              backgroundColor: '#000000',
            }, headerTitleStyle: {
              color: '#FFE81F'
            }, headerTintColor: '#FFE81F'
          }}
        />
        <Stack.Screen
          component={Creators}
          name="Creators"
          options={{
            headerStyle: {
              backgroundColor: '#000000',
            }, headerTitleStyle: {
              color: '#FFE81F'
            }, headerTintColor: '#FFE81F'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}