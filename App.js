import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShowBooks from "./src/pages/ShowBooks";
import ShowAuthors from "./src/pages/ShowAuthors";
import ShowGenres from "./src/pages/ShowGenres";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="libros">
        <Stack.Screen 
          name="libros" 
          component={ShowBooks} 
          options={{ title: 'Libros' }}
        />
        <Stack.Screen 
          name="autores" 
          component={ShowAuthors} 
          options={{ title: 'Autores' }}
        />
        <Stack.Screen 
          name="generos" 
          component={ShowGenres} 
          options={{ title: 'Generos' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
