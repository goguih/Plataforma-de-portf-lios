import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';



export default function ViolettInicialScreen({ navigation }) { 
    
        return(

            <View
            style={styles.container}
            
            >
                <Image
                source={require('../../assets/img/violetticon.png')}
                style={styles.img}
                ></Image>
                <Text style={styles.timer}>Violett</Text>
                <View
                style={styles.btnArea}
                >
                    <TouchableOpacity
                    style={styles.btn}
                    onPress={ () => navigation.navigate('LoginCriador')}
                    >
                    <Text
                    style={styles.btnText}

                    >Fazer Login</Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigation.navigate('CadastroCriador')}

                    >
                    <Text
                    style={styles.btnText}

                    >Cadastre-se!</Text>

                    </TouchableOpacity>

                   
                </View> 
                <View
                    style={styles.ultimoTempo}
                    >
                        <Text style={styles.ultimoTempo}>
                    veja os termos de segurança
                        </Text>

                    </View>

            </View>

            );      

}


    const styles = StyleSheet.create({ 
        container:{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'#8B008B'

},
        img:{
            width:250,
            height:250
        },

        timer:{
            color:'#FFF',
            fontSize:65,
            fontWeight: 'bold'

        },
        btnArea:{
            flexDirection:'row',
            marginTop: 70,
            height:40,

        },
        btn:{
            flex:1,
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: 40,            backgroundColor:'#FFF',
            height:40,
            margin:18,
            borderRadius:9
        }, 
        btnText:{

            fontSize:20,
            fontWeight:'bold',
            color:'#8B008B',
            fontStyle:'italic',
            

        },
        ultimoTempo:{
            marginTop:40
            
        },
        tempotexto:{
            fontSize: 25,
            fontStyle:'italic',
            color:'#FFF'
        }
});



