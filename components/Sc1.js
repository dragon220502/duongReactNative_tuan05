import React, {useContext } from 'react';
import {useNavigation} from "@react-navigation/native"
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { MyContext } from "./App"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'


export default function App() {

    let { img, setimg } = useContext(MyContext)
    let navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={{flex: 0.3}}></View>
            <Image style={{flex: 10, width: "100%", height:  "auto", resizeMode: "center"}} source={{uri : img}}></Image>
            <View style={{flex: 0.3}}></View>
            <Text style={{fontSize: 20, justifyContent: "center", fontFamily: "Roboto" }}>IPhone 15 Pro Max - Hàng chính hãng </Text>
            <View style={{flex: 0.3}}></View>
            <View style={{flex: 1, flexDirection: "row"}}>
                <Image style={{flex:1, height: "auto",  objectFit:  "contain", width:"100%",alignItems: "center"}} source={{uri:'https://www.pngmart.com/files/23/Stars-PNG.png'}}></Image>
                <Text style={{flex: 1,fontSize: 18, fontFamily: "Roboto",justifyContent:"center", alignSelf: "center" , textAlign: 'center'}}>(Xem 828 đánh giá)</Text>
            </View>
            <View style={{flex: 0.3}}></View>
            <View style={{flex: 1, flexDirection: "row"}}>
                <View style={{flex: 0.1}}></View>
                <Text style={{fontSize: 25,fontWeight: "bold", fontFamily: "Roboto" }}>1.790.000 đ</Text>
                <View style={{flex: 0.8}}></View>
                <Text style={{fontSize: 25, fontFamily: "Roboto" }}><del>1.790.000 đ</del></Text>
            </View>
            <View style={{flex: 1, flexDirection: "row"}}>
                <Text style={{color: "red",fontSize: 20,fontWeight: "bold", fontFamily: "Roboto" }}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                <View style={{flex: 0.1}}></View>
                <Image style={{style:1, width: 30, height:25}} source={{uri: "https://banner2.cleanpng.com/20171217/911/question-mark-png-5a36990254fb11.7952315915135275543481.jpg"}}></Image>
            </View>
            <View style={{flex: 0.3}}></View>
            <TouchableOpacity style={{flex: 1, borderRadius:3, justifyContent:'center', alignItems:'center', borderWidth: 0.2,borderRadius:5}}
                                onPress={() => navigation.navigate('screen2')} 
            >
                <Text style={{fontFamily: "Roboto", fontSize: 20, fontWeight: "bold"}}>4 MÀU - CHỌN MÀU</Text>
            </TouchableOpacity>
            <View style={{ flex: 1.5 }}></View>
            <TouchableOpacity style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'red', borderRadius:7}}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}> CHỌN MUA</Text>
            </TouchableOpacity>

            <View style={{ flex: 0.5 }}></View>
        </View>
        

    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingLeft:'5%',
      paddingRight:'5%',
    },
    
  
  });