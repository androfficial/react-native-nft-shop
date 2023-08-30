import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useAppFonts } from './hooks/useAppFonts';
import { theme } from './themes/defaultTheme';
import Home from './screens/Home';
import Details from './screens/Details';

const Stack = createStackNavigator();

const App = () => {
  const { loaded, error } = useAppFonts();

  if (!loaded || error) return null;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName='Home'
      >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Details' component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
