import React, {useContext} from "react";
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import {AuthContext} from "../../../App";
import AntDesign from "react-native-vector-icons/AntDesign";
import LinearGradient from "react-native-linear-gradient";

export default function LogInModal() {
  const data = useContext(AuthContext);

  return (
    <Modal
      visible={data.isVisibleLogIn}
      animationType={'slide'}>
      <LinearGradient
        colors={["#141318", "#1D1C21", "#26252C"]}
        style={styles.container}>
        <Image
          source={require('../../../assets/apple.png')}
          style={{width: 150, height: 150, paddingBottom: 50}}/>

        <TextInput
          placeholder={'E-mail'}
          placeholderTextColor={'#95D815'}
          style={styles.inp}
          value={data.email}
          onChangeText={text => data.setEmail(text)}/>

        <TextInput
          placeholder={'Password'}
          placeholderTextColor={'#95D815'}
          style={styles.inp}
          value={data.password}
          onChangeText={text => data.setPassword(text)}/>

        <View style={{flexDirection: 'row', width: '70%', justifyContent: 'space-evenly'}}>
          <TouchableOpacity
            style={styles.ButBox}
            onPress={() => {
              data.setIsVisibleLogIn(prevState => !prevState);
            }}>
            <Text style={styles.butText}>LogIn</Text>
            <AntDesign name="right" size={20} color="black"/>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.ButBox}
            onPress={() => {
              data.setIsVisibleLogIn(prevState => !prevState);
              data.setIsVisibleSignIn(prevState => !prevState);
            }}>
            <Text style={styles.butText}>SignIn</Text>
            <AntDesign name="right" size={20} color="black"/>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inp: {
    height: 50,
    width: "70%",
    paddingLeft: 10,
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#95D815',
    color: '#fff'
  },
  ButBox: {
    backgroundColor: '#95D815',
    width: 120,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 15,
    marginTop: 20,
  },
  butText: {
    fontSize: 17,
    marginRight: 5,
  }
})

