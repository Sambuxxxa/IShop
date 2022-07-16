import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useState } from "react";
import { ProductsContext } from "../../../App";
import Header from "./Header";
import CartItem from "./CartItem";
import uuid from "react-native-uuid";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


export default function CartScreen() {

  const [isFinished, setIsFinished] = useState(false);

  const data = useContext(ProductsContext);

  if (data.cartList.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={styles.box}>
          <Image source={require("../../../assets/image2.png")} style={styles.img} />
          <Text style={styles.title}>Корзина пустая</Text>
          <Text style={styles.text}>Добавьте хотя бы один гаджет,</Text>
          <Text style={styles.text}>что бы оформить заказ.</Text>
        </View>
      </SafeAreaView>
    );
  } else {
    return (isFinished ?
        <SafeAreaView style={styles.container}>
          <Header />

          <View style={styles.box}>
            <Image source={require("../../../assets/image3.png")} style={styles.img} />
            <Text style={styles.title}>Заказ оформлен!</Text>
            <Text style={styles.text}>Ваш заказ #{uuid.v4()}</Text>
            <Text style={styles.text}>скоро будет передан курьерской доставке.</Text>
          </View>

          <View style={{ alignItems: "center", marginBottom: 10 }}>
            <TouchableOpacity
              style={styles.mainButsBox}
              onPress={() => {
                data.setCartList([]);
                setIsFinished(false);
              }}>
              <AntDesign name="left" size={15} color="white" />
              <Text style={styles.butText}>КУПИТЬ ЕЩЁ</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        :
        <SafeAreaView style={styles.container}>

          <Header />

          <FlatList
            data={data.cartList}
            renderItem={({ item }) => (
              <CartItem item={item} />)} />

          <Text style={styles.text2}>
            К оплате: {data.fullPrice}₴
          </Text>

          <View style={styles.butsBox}>

            <TouchableOpacity
              style={styles.mainButsBox}
              onPress={() => {
                data.setCartList([]);
                data.setFullPrice(0);
              }}
            >
              <Text style={styles.butText}>ОЧИСТИТЬ КОРЗИНУ</Text>
              <MaterialIcons name="delete-outline" size={20} color="white" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.mainButsBox}
              onPress={() => {
                setIsFinished(true);
                data.setFullPrice(0);
              }}
            >
              <Text style={styles.butText}>ОФОРМИТЬ ЗАКАЗ</Text>
              <AntDesign name="right" size={15} color="white" />
            </TouchableOpacity>

          </View>

        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  box: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 120,
    height: 120,
  },
  title: {
    // fontFamily: 'mt-bold',
    fontSize: 20,
  },
  text: {
    // fontFamily: 'mt-light',
  },
  text2: {
    // fontFamily: 'mt-light',
    margin: 10,
  },
  butsBox: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 10,
  },
  mainButsBox: {
    backgroundColor: "#9B9B9B",
    width: 170,
    height: 40,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 15,
  },
  butText: {
    // fontFamily: 'mt-light',
    fontSize: 11,
    color: "#fff",
  },
});

