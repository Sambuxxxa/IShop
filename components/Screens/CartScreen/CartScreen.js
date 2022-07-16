import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useState } from "react";
import { ProductsContext } from "../../../App";
import Header from "./Header";
import CartItem from "./CartItem";
import uuid from "react-native-uuid";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import LinearGradient from "react-native-linear-gradient";


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
        <StatusBar
          backgroundColor={'#1E1E1E'}
        />
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
              <LinearGradient
                colors={["#2a7c4e", "#13763D", "#076530"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.mainButsBox2}
              >
                <AntDesign name="left" size={15} color="white" />
                <Text style={styles.butText}>КУПИТЬ ЕЩЁ</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <StatusBar
            backgroundColor={'#1E1E1E'}
          />
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
              <LinearGradient
                colors={["#2a7c4e", "#13763D", "#076530"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.mainButsBox2}
              >
                <Text style={styles.butText}>ОЧИСТИТЬ КОРЗИНУ</Text>
                <MaterialIcons name="delete-outline" size={20} color="white" />
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.mainButsBox2}
              onPress={() => {
                setIsFinished(true);
                data.setFullPrice(0);
              }}
            >
              <LinearGradient
                colors={["#076530", "#13763D", "#2a7c4e"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.mainButsBox2}
              >
                <Text style={styles.butText}>ОФОРМИТЬ ЗАКАЗ</Text>
                <AntDesign name="right" size={15} color="white" />
              </LinearGradient>
            </TouchableOpacity>

          </View>
          <StatusBar
            backgroundColor={'#1E1E1E'}
          />

        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
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
    color: "#fff",
  },
  text: {
    // fontFamily: 'mt-light',
    color: "#fff",
  },
  text2: {
    // fontFamily: 'mt-light',
    margin: 10,
    color: "#fff",
  },
  butsBox: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 10,
  },
  mainButsBox: {
    backgroundColor: "#a6a6a6",
    width: 170,
    height: 40,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 15,
  },
  mainButsBox2: {
    backgroundColor: "#0E7037",
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

