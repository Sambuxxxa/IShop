import React, {useContext} from "react";
import {FlatList, SafeAreaView, StatusBar, StyleSheet} from "react-native";
import Header from "./Header";
import ProductItem from "./ProductItem";
import {ProductsContext} from "../../../../App";

export default function HomeScreen() {
  const data = useContext(ProductsContext);

  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <FlatList
        data={data.searchedItems}
        renderItem={({item}) => (
          <ProductItem item={item} addToCartList={data.addToCartList}/>
        )}
        numColumns={2}
        columnWrapperStyle={styles.flat}
        endFillColor={'white'}
        style={{backgroundColor: '#1e1e1e'}}/>
      <StatusBar backgroundColor={'#1E1E1E'}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e",
  },
  listProducts: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  flat: {
    justifyContent: "space-evenly",
  },
});

