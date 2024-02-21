import { StyleSheet } from 'react-native'
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';


// Navigation
import { NavigationContainer, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//screens
import Cart from './screens/Cart';
// @ts-ignore
import persistStore from 'redux-persist/es/persistStore';
// @ts-ignore
import { PersistGate } from 'redux-persist/integration/react';
import Home2 from './screens/Home2';
import Details from './screens/Cosmetics';
import Phones from './screens/Phones';
import ProductPage from '../components/ProductPage';



export type RootStackParamsList={
  Phones:undefined;
  Home2:undefined,
  Cosmetics:undefined
  Cart:undefined,
  productPage:undefined
}

const persistor = persistStore(store)
const Stack = createNativeStackNavigator<RootStackParamsList>()



const App = () => {
  return (
    <Provider store={store}>
    <PersistGate persistor={persistor}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home2">
          <Stack.Screen name='Home2' component={Home2}
          options={{ headerShown: false }}
          />
          <Stack.Screen name='Phones' component={Phones}
          options={{ headerShown: false }}
          />
          
          <Stack.Screen name='Cosmetics' component={Details}
          options={{ headerShown: false }}
          />
          <Stack.Screen name='Cart' component={Cart}
          options={{ headerShown: false }}
          />
          <Stack.Screen name='productPage' component={ProductPage}
          options={{ headerShown: false }}
          />
      </Stack.Navigator>
    </NavigationContainer>
    </PersistGate>
    </Provider>
  
  )
}

export default App;

const sytles = StyleSheet.create({
  safviewCon:{
    flex:1,
    backgroundColor:"white",
    color:"black"
  },
})
