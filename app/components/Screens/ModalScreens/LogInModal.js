import React, {useContext, useState} from "react";
import {Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {AuthContext} from "../../../back/AuthProvider";
import AntDesign from "react-native-vector-icons/AntDesign";
import LinearGradient from "react-native-linear-gradient";
import auth from "@react-native-firebase/auth";

export default function LogInModal() {
  const data = useContext(AuthContext);

  function logIn() {
    auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(() => console.log('successful authorization'))
    data.setIsVisibleLogIn(prevState => !prevState)
  }

  const [isVisiblePass, setIsVisiblePass] = useState(true);

  return (
    <Modal
      visible={data.isVisibleLogIn}>
      <View
        style={styles.container}>
        <Image
          source={require('../../../assets/images/Logo.png')}
          style={{width: 150, height: 150, paddingBottom: 50, alignSelf: 'center'}}/>

        <Text style={{
          alignItems: 'flex-start',
          marginHorizontal: '15%',
          color: '#fff',
          fontSize: 20,
          fontWeight: '300'
        }}>Вход:</Text>

        <LinearGradient
          colors={['#292929', '#1e1e1e']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.inp}>
          <TextInput
            placeholder={'E-mail'}
            placeholderTextColor={'#a6a6a6'}
            style={{color: '#fff'}}
            value={data.email}
            caretHidden={true}
            keyboardType={'email-address'}
            onChangeText={text => data.setEmail(text)}/>
        </LinearGradient>

        <View style={{flexDirection: 'row'}}>
          <LinearGradient
            colors={['#292929', '#1e1e1e']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.inp}>
            <TextInput
              placeholder={'Password'}
              placeholderTextColor={'#a6a6a6'}
              style={{color: '#fff'}}
              value={data.password}
              caretHidden={true}
              secureTextEntry={isVisiblePass}
              onChangeText={text => data.setPassword(text)}/>
          </LinearGradient>
        </View>

        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              logIn()
            }}>
            <LinearGradient
              colors={["#2a7c4e", "#13763D", "#076530"]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.ButBox}>
              <Text style={styles.butText}>Войти</Text>
              <AntDesign name="right" size={20} color="#fff"/>
            </LinearGradient>
          </TouchableOpacity>

          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#fff', fontSize: 12}}>Еще нету аккаунта?</Text>

            <TouchableOpacity
              style={styles.ButBox2}
              onPress={() => {
                data.setIsVisibleLogIn(prevState => !prevState);
                data.setIsVisibleSignIn(prevState => !prevState);
              }}>
              <Text style={styles.butText2}>Создать аккаунт</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  inp: {
    height: 50,
    width: "70%",
    paddingLeft: 10,
    marginTop: 20,
    marginHorizontal: '15%',
    borderRadius: 15,
    color: '#fff'
  },
  ButBox: {
    width: 120,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 15,
    marginTop: 20,
    marginBottom: 15,
  },
  ButBox2: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  butText: {
    fontSize: 17,
    marginRight: 5,
    color: '#fff'
  },
  butText2: {
    fontSize: 12,
    marginLeft: 5,
    color: '#2a7c4e',
  },
})

