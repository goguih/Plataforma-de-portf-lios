// TelaLoginCriador.js

import React, { useState } from 'react'; 
import {View, Image, StyleSheet, Text, TouchableOpacity, TextInput} from 'react-native'; 
import Requests from "../services/Requests";

export default function App(props){
    const [img, setImg] = useState(require('../../assets/img/violetticon.png'));
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [ token, setToken ] = useState("");
    const [ resultado, setResultado ] = useState("");
    
    const login = async() => {
        const resultado = await Requests.login({ email, senha });

        if(resultado != false){
            props.navigation.navigate('CriadorPort', { id: resultado.id });
        }
        else
            setResultado("Não autorizado");
    }

    return (
        <View style={styles.visao}>
            <Image source={img} style={styles.imagem}></Image>
            <TextInput style={styles.input} placeholder="Email" underlineColorAndroid="transparent" onChangeText={email => setEmail(email)}></TextInput>
            <TextInput style={styles.input} placeholder="Senha" underlineColorAndroid="transparent" onChangeText={senha => setSenha(senha)}></TextInput>
            <TouchableOpacity onPress={login} style={styles.botaoLogar}>
            <View styles={styles.btnArea}>
                <Text style={styles.btnTexto}>Logar</Text>
            </View>
                </TouchableOpacity>
            <Text>{resultado}</Text>
        </View>
    );
};

const styles = StyleSheet.create({ 
    input:{
        height:45,
        borderWidth: 1,
        borderColor:'#222',
        margin:10,
        fontSize: 20,
        padding: 10,
        borderRadius:5,
        backgroundColor:'#FFF',
        width:230    
    },
    visao:{
        backgroundColor:'#8B008B',
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    imagem:{
        width: 250,
        height: 250,
    },
    textoFrase:{
        fontSize:20,
        color:'#fff',
        margin: 30,
        fontStyle:'italic',
        textAlign: 'center'
    },
    botaoLogar:{
        width: 230,
        height: 50,
        borderWidth: 3,
        borderColor: '#FFF',
        borderRadius: 35,
        backgroundColor:'#800080',
    }, 
    btnArea:{
        flex:1,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center'
    },
    btnTexto:{
        fontSize: 27,
        fontWeight:'bold',
        color: '#fff',
        textAlign:'center'
    }
});