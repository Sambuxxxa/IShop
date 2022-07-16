import React, { useContext } from "react";
import { Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ProductsContext } from "../../../App";
import AntDesign from "react-native-vector-icons/AntDesign";
import Octicons from "react-native-vector-icons/Octicons";
import Feather from "react-native-vector-icons/Feather";
import { DESCRIPTIONS } from "../../../data/DESCRIPTIONS";
import Ionicons from "react-native-vector-icons/Ionicons";


export default function DescriptionModal() {

  const data = useContext(ProductsContext);

  return (
    <Modal
      visible={data.isVisibleDescriptionModal}
      style={styles.mainBox}
      animationType={"slide"}>
      <View style={{backgroundColor: '#1E1E1E'}}>
        <View
          style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <TouchableOpacity
            onPress={() => data.setIsVisibleDescriptionModal(prevState => !prevState)}
            style={{ marginLeft: 15, marginTop: 8, }}>
            <Ionicons name="return-down-back" size={26} color="white" />
          </TouchableOpacity>
          <View style={styles.titleBox}>
            <Text style={styles.title}>{data.selectedItem[0].title}</Text>
          </View>
        </View>

        <ScrollView>
          <Image source={data.selectedItem[0].img} style={styles.img} />

          <Text style={styles.price}>{data.selectedItem[0].price}₴</Text>

          <View
            style={{
              width: "95%",
              height: 1,
              backgroundColor: "#a6a6a6",
              alignSelf: "center",
            }}
          />

          <View
            style={{
              flexDirection: "row",
              height: 50,
              justifyContent: "flex-start",
              alignItems: "center",
              marginTop: 5,
            }}>
            <View style={{ margin: 4, marginLeft: 10 }}>
              <Octicons name="location" size={30} color="white" />
            </View>

            <View>
              <Text style={styles.title}>Самовывоз: </Text>
              <Text style={{ color: "#9B9B9B" }}>Киев</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              height: 50,
              justifyContent: "flex-start",
              alignItems: "center",
              marginBottom: 5,
            }}>
            <View style={{ margin: 2, marginLeft: 10 }}>
              <Feather name="package" size={30} color="white" />
            </View>

            <View>
              <Text style={[styles.title, { textAlign: "left" }]}>
                Доставка:{" "}
              </Text>
              <Text style={{ color: "#a6a6a6" }}>
                Новая почта, Meest, Укрпочта
              </Text>
            </View>
          </View>

          <View
            style={{
              width: "95%",
              height: 1,
              backgroundColor: "#a6a6a6",
              alignSelf: "center",
            }}
          />

          <View style={{ margin: 10, marginBottom: 50 }}>
            <Text style={{color: "white"}}>{DESCRIPTIONS[0].description}</Text>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 350,
    height: 350,
    alignSelf: 'center'
  },
  titleBox: {
    width: "95%",
    padding: 10,
  },
  title: {
    // fontFamily: 'i-semiBold',
    fontSize: 17,
    textAlign: "center",
    color: '#fff'

  },
  price: {
    // fontFamily: 'mt-light',
    fontSize: 20,
    margin: 10,
    color: '#fff'
  },
});

