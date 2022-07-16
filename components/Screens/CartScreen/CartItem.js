import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function CartItem(el) {

  return (
    <View style={styles.mainBox}>
      <View style={{ flexDirection: "row" }}>
        <Image source={el.item.img} style={styles.img} />

        <View style={styles.titleBox}>
          <Text style={styles.title}>{el.item.title}</Text>
          <Text style={styles.price}>{el.item.price}₴</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainBox: {
    flexDirection: "row",
    width: "100%",
    height: 100,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
    alignItems: "center",
    justifyContent: "space-between",
  },
  img: {
    width: 100,
    height: 100,
  },
  title: {
    // fontFamily: "mt-light",
    fontSize: 15,
    height: 40,
  },
  price: {
    // fontFamily: "mt-bold",
    fontSize: 10,
  },
  titleBox: {
    justifyContent: "center",
    width: 150,
    marginLeft: 5,
  },
  icon: {
    marginRight: 5,
  },
});
