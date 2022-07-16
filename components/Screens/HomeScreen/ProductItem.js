import React, {useContext} from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";
import {ProductsContext} from "../../../App";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { PRODUCTS } from "../../../data/PRODUCTS";

export default function ProductItem({item, addToCartList}) {

  const data = useContext(ProductsContext);

  return (
    <View style={styles.mainBox}>
      <TouchableOpacity
        onPress={() => {
          data.setIsVisibleDescriptionModal(!data.isVisibleDescriptionModal)
          data.setSelectedItem(PRODUCTS.filter((box) => {
            if (box.id === item.id) {
              return box;
            }
          }))
        }}
      >
        <Image
          source={item.img}
          style={styles.img}
        />
        <Text style={styles.title}>
          {item.title}
        </Text>
      </TouchableOpacity>

      <View style={styles.priceBox}>
        <View>
          <Text style={styles.titlePrice}>
            Цена:
          </Text>
          <Text style={styles.price}>
            {item.price}₴
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            addToCartList(item);
          }}
        >
          <MaterialCommunityIcons name="basket-plus-outline" size={24} color="black"/>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  mainBox: {
    width: 140,
    height: 200,
    marginTop: 20,
    marginBottom: 20,
  },
  img: {
    width: 140,
    height: 140,
  },
  title: {
    // fontFamily: 'mt-light',
    fontSize: 15,
    height: 40
  },
  titlePrice: {
    // fontFamily: 'mt-light',
    fontSize: 10,
  },
  price: {
    // fontFamily: 'mt-bold',
    fontSize: 10,
    marginLeft: 5,
  },
  priceBox: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
