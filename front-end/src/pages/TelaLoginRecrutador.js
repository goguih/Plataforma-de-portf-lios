// TelaLoginRecrutador.js

import React, { Component, useState, setState } from 'react'; 
import {View, Image, StyleSheet, Text, TouchableOpacity, TextInput, TouchableHighlightBase} from 'react-native'; 
import api from "../services/api";
 
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state={ 
            img: require('../../assets/img/violetticon.png'),
            email: "",
            senha: "",
            resultado: ""
        };
    }

login = async() => {
    try{
        const resultado = await api.post("/recrutador/login", {
            email: this.state.email,
            senha: this.state.senha
        });
    
        this.setState({
            resultado: resultado.data.mensagem == "Logado com sucesso" ? resultado.data.mensagem : "Não autorizado"
        });
    } catch (error){
        this.setState({
            resultado: "Não autorizado"
        });
    }
}

render(){ 
    return (  
        <View style={styles.visao}         
            >
                <Image
                source={this.state.img}
                style={styles.imagem}
                
                ></Image>
                
                <TextInput style={styles.input} placeholder="Email" underlineColorAndroid="transparent" onChangeText={email=>this.setState({email})}></TextInput>
                <TextInput style={styles.input} placeholder="Senha" underlineColorAndroid="transparent" onChangeText={senha=>this.setState({senha})}></TextInput>
                <TouchableOpacity
                onPress={this.login}
                style={styles.botaoLogar}
                
                >
                    <View
                    styles={styles.btnArea}
                    >
                      
                        <Text
                        style={styles.btnTexto}
                        >Logar</Text>
                    </View>
                </TouchableOpacity>
            <Text>{this.state.resultado}</Text>
        </View>
    );
}} 

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