import React, {useState} from 'react';
import {StyleSheet,} from 'react-native';
import HomeScreen from './app/components/Screens/HomeScreen/HomeScreen';
import CartScreen from './app/components/Screens/CartScreen/CartScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import uuid from 'react-native-uuid';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {PRODUCTS} from "./app/data/PRODUCTS";
import DescriptionModal from "./app/components/Screens/ModalScreens/DescriptionModal";
import SignInModal from "./app/components/Screens/ModalScreens/SignInModal";
import LogInModal from "./app/components/Screens/ModalScreens/LogInModal";
import AuthProvider from "./app/back/AuthProvider";

const Tab = createBottomTabNavigator();

export const ProductsContext = React.createContext();

export default function App() {

  const [searchResult, setSearchResult] = useState('');

  const [searchedItems, setSearchedItems] = useState(PRODUCTS);

  const [fullPrice, setFullPrice] = useState(0);

  const [cartList, setCartList] = useState([]);

  const addToCartList = item => {
    setCartList(prevCartList => [
      ...prevCartList,
      {title: item.title, price: item.price, img: item.img, id: uuid.v1()},
    ]);
    setFullPrice(prevFullPrice => (prevFullPrice += item.price2));
  };

  const [selectedItem, setSelectedItem] = useState(PRODUCTS);

  const [isVisibleDescriptionModal, setIsVisibleDescriptionModal] = useState(false);


  const data = {
    addToCartList,
    cartList,
    setCartList,
    fullPrice,
    setFullPrice,
    searchedItems,
    isVisibleDescriptionModal,
    setIsVisibleDescriptionModal,
    setSelectedItem,
    selectedItem,
    searchResult,
    setSearchResult,
    setSearchedItems,
  };


  return (
    <NavigationContainer>
      <ProductsContext.Provider value={data}>
        <AuthProvider>
          <Tab.Navigator
            initialRouteName="Feed"
            screenOptions={{
              tabBarActiveTintColor: '#fff',
              headerShown: false,
              tabBarHideOnKeyboard: true,
              tabBarStyle: {backgroundColor: '#1e1e1e'}
            }}
          >
            <Tab.Screen
              name="Feed"
              component={HomeScreen}
              options={{
                tabBarLabel: 'Главная',
                tabBarIcon: ({color, size}) => (
                  <MaterialCommunityIcons
                    name="home"
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Notifications"
              component={CartScreen}
              options={{
                tabBarLabel: 'Корзина',
                tabBarIcon: ({color, size}) => (
                  <MaterialCommunityIcons
                    name="basket-outline"
                    size={size}
                    color={color}
                  />
                ),
                tabBarBadge: cartList.length,
              }}
            />
          </Tab.Navigator>

          <DescriptionModal/>
          <SignInModal/>
          <LogInModal/>
        </AuthProvider>
      </ProductsContext.Provider>
    </NavigationContainer>
  )
}
