import React, { useContext } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import Header from "./Header";
import ProductItem from "./ProductItem";
import { ProductsContext } from "../../../App";
import SignInModal from "../ModalScreens/SignInModal";
import LogInModal from "../ModalScreens/LogInModal";


export default function HomeScreen() {

  const data = useContext(ProductsContext);

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <FlatList
        data={data.searchedItems}
        renderItem={({ item }) => (
          <ProductItem item={item} addToCartList={data.addToCartList} />
        )}
        numColumns={2}
        columnWrapperStyle={styles.flat}
        endFillColor={"#fff"}
      />


      <View style={styles.listProducts}>

      </View>

      <SignInModal />
      <LogInModal />

      <StatusBar
        backgroundColor={'#1E1E1E'}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
  },
  listProducts: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  flat: {
    // marginLeft: 20
    justifyContent: "space-evenly",
  },
});

