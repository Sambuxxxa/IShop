import React, {useState} from 'react';
import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HomeScreen from './components/Screens/HomeScreen/HomeScreen';
import CartScreen from './components/Screens/CartScreen/CartScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import uuid from 'react-native-uuid';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { PRODUCTS } from "./data/PRODUCTS";
import DescriptionModal from "./components/Screens/ModalScreens/DescriptionModal";

const Tab = createBottomTabNavigator();

export const ProductsContext = React.createContext();

export const AuthContext = React.createContext();

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
  const [isVisibleLogIn, setIsVisibleLogIn] = useState(false);
  const [isVisibleSignIn, setIsVisibleSignIn] = useState(false);

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

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
  const authData = {
    isVisibleLogIn,
    setIsVisibleLogIn,
    isVisibleSignIn,
    setIsVisibleSignIn,
    password,
    setPassword,
    email,
    setEmail,
  };

  return (
    <NavigationContainer>
      <ProductsContext.Provider value={data}>
        <AuthContext.Provider value={authData}>
          <Tab.Navigator
            initialRouteName="Feed"
            screenOptions={{
              tabBarActiveTintColor: '#000000',
              headerShown: false,
              tabBarHideOnKeyboard: true,
            }}>
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

          <DescriptionModal />

        </AuthContext.Provider>
      </ProductsContext.Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
