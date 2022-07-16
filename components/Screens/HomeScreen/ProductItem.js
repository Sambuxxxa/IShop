import React, {useContext} from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {ProductsContext} from "../../../App";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {PRODUCTS} from "../../../data/PRODUCTS";

export default function ProductItem({item, addToCartList}) {
  const data = useContext(ProductsContext);

  function setSelectedItem() {
    data.setIsVisibleDescriptionModal(!data.isVisibleDescriptionModal);
    data.setSelectedItem(PRODUCTS.filter((box) => {
      if (box.id === item.id) {
        return box;
      }
    }));
  }

  return (
    <TouchableOpacity
      onPress={() => {
        setSelectedItem();
      }}>
      <LinearGradient
        colors={["#292929", "#202020", "#1E1E1E", "#1E1E1E"]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.mainBox}>
        <Image
          source={item.img}
          style={styles.img}/>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.priceBox}>
          <View>
            <Text style={styles.titlePrice}>Цена:</Text>
            <Text style={styles.price}>{item.price}₴</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              addToCartList(item);
            }}>
            <MaterialCommunityIcons name="basket-plus-outline" size={24} color="#fff"/>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainBox: {
    width: 150,
    height: 220,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 20,
    padding: 5,
  },
  img: {
    width: 140,
    height: 140,
  },
  title: {
    fontSize: 15,
    height: 40,
    color: "#fff",
  },
  titlePrice: {
    fontSize: 10,
    color: "#a6a6a6",
  },
  price: {
    fontSize: 10,
    marginLeft: 5,
    color: "#a6a6a6",
  },
  priceBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
