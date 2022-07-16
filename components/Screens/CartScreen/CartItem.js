import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

export default function CartItem(el) {

  return (
    <LinearGradient
      colors={['#292929', '#1e1e1e']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={styles.mainBox}
    >
      <View style={{ flexDirection: "row" }}>
        <Image source={el.item.img} style={styles.img} />

        <View style={styles.titleBox}>
          <Text style={styles.title}>{el.item.title}</Text>
          <Text style={styles.price}>{el.item.price}₴</Text>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainBox: {
    flexDirection: "row",
    width: "100%",

    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 20,
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
    color: '#fff'
  },
  price: {
    // fontFamily: "mt-bold",
    fontSize: 10,
    color: '#fff'

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
