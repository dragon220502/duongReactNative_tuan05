import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity} from 'react-native';

import { MyContext } from './App';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'
export default function App() {
    let { img, setimg } = useContext(MyContext)
    let navigation = useNavigation()
    
    return (
        
        <View style={styles.container}>
            <View style={{flex: 0.2}}></View>
           <View style={{flex:2, flexDirection:"row", paddingLeft: 20, paddingRight: 20}}>
                <Image style={{flex: 2, width:  "100%", height: "auto", resizeMode:"center"}} source={{uri: img}}></Image>
                <View style={{flex: 0.2}}></View>
                <View style={{flex: 2}}>
                    <Text style={{fontSize: 18, fontWeight: "bold"}}>Điện thoại IPhone 15 ProMax</Text>
                    <Text style={{fontSize: 18, fontWeight: "bold"}}>Hàng chính hãng</Text>
                </View>
           </View>
           <View style={{flex: 0.5}}></View>
           <View style={{flex: 5, backgroundColor: "#C4C4C4", paddingLeft: 20, paddingRight: 20}}>
                <View style={{flex: 0.1}}></View>
                <Text style={{fontSize: 18, fontWeight: "bold"}}>Chọn một màu bên dưới: </Text>
                <View style={{flex: 4, alignItems: "center"}}>
                    <View style={{flex: 0.5}}></View>
                    <TouchableOpacity style={{ backgroundColor: "#333", borderRadius:1,  width: '30%', height: '20%', borderWidth: 1, alignItems: "center", justifyContent: "center"}}
                        onPress={() => setimg("https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg")}
                    />
                    <View style={{flex: 0.2}}></View>
                    <TouchableOpacity style={{ backgroundColor: "#FFE4B5", borderRadius:1,  width: '30%', height: '20%', borderWidth: 1, alignItems: "center", justifyContent: "center"}}
                        onPress={() => setimg("https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-gold-thumbnew-600x600.jpg")}
                    />
                    <View style={{flex: 0.2}}></View>
                    <TouchableOpacity style={{ backgroundColor: "#101010", borderRadius:1,  width: '30%', height: '20%', borderWidth: 1, alignItems: "center", justifyContent: "center"}}
                        onPress={() => setimg("https://cdn.tgdd.vn/Products/Images/42/303891/iphone-15-plus-128gb-den-thumb-600x600.jpg")}
                    />
                    <View style={{flex: 0.2}}></View>
                    <TouchableOpacity style={{ backgroundColor: "#F0F0F0", borderRadius:1,  width: '30%', height: '20%', borderWidth: 1, alignItems: "center", justifyContent: "center"}}
                        onPress={() => setimg("https://cdn.tgdd.vn/Products/Images/42/281570/iphone-15-xanh-thumb-600x600.jpg")}
                    />
                        
                    <View style={{flex: 0.2}}></View>
                </View>
                <View style={{flex: 0.2}}></View>
                <View style={{flex: 0.6}}>
                    <TouchableOpacity style={{backgroundColor: "blue", justifyContent: "center", alignItems: "center", borderWidth: 1, borderRadius: 7}}
                                            onPress={() => navigation.navigate('screen1')}
                    >
                        <Text style={{fontSize: 25, fontWeight: "bold", color: "white"}}>XONG</Text>
                    </TouchableOpacity>
                </View>
           </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    
    
  });
