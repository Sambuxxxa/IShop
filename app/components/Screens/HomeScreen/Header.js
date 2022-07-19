import React, {useContext} from "react";
import {View, StyleSheet, TextInput} from "react-native";
import {ProductsContext} from "../../../../App";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import {PRODUCTS} from "../../../data/PRODUCTS";

export default function Header() {
  const data = useContext(ProductsContext);

  function setSearchItem(text) {
    data.setSearchedItems(PRODUCTS.filter(item => {
        return (
          item.title.toLowerCase().includes(text.toLowerCase())
        );
      })
    )
  }

  return (
    <View style={styles.mainBox}>
      <View style={styles.box}>
        <View style={styles.icon}>
          <EvilIcons name="search" size={33} color="white"/>
        </View>
        <TextInput
          style={styles.inp}
          placeholder={'Искать...'}
          placeholderTextColor={'#a6a6a6'}
          onChangeText={(text) => {
            setSearchItem(text);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainBox: {
    backgroundColor: "#1e1e1e",
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  box: {
    height: 45,
    flexDirection: 'row',
    width: '90%',
    backgroundColor: '#1E1E1E',
    margin: 5,
    borderRadius: 20,
    borderWidth: 0.1,
    borderColor: '#a6a6a6'
  },
  inp: {
    width: '97%',
    fontSize: 17,
    marginLeft: 5,
    color: '#fff'
  },
  icon: {
    paddingTop: 8,
  },
  icon2: {
    paddingTop: 11,
    left: -5
  },
})
