import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons, FontAwesome  } from "@expo/vector-icons";

//imports para o upload de imagens de perfil
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import Axios from "axios";
import {Picker} from '@react-native-picker/picker';


export default function TelaPerfil() {
    
    const [avatar, setAvatar] = useState();
    const [linkFacebook, setFacebook] = useState();
    const [linkTwitter, setTwitter] = useState();
    const [linkLinkedin, setLinkedin] = useState();
    const [nomeHab, setNomehab ] = useState("");
    const [nivelHab,setNivelHab] = useState("");

    {/* funções para funcionamento do upload */}

    //pedindo permissão para acesso a camera IOS
    async function imagePickerCall() {
      if (Constants.platform.ios) {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  
        if (status !== "granted") {
          alert("Nós precisamos dessa permissão.");
          return;
        }
      } 

      const data = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All
      }); 
  
      if (data.cancelled) {
        return;
      }
  
      if (!data.uri) {
        return;
      }
  
      setAvatar(data);
    }
  
    async function uploadImage() {
      const data = new FormData();
  
      data.append("avatar", {
        uri: avatar.uri,
        type: avatar.type
      });
  
      await Axios.post("http://localhost:3333/files", data);
    }
  
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                {/*imagem perfil*/}
                <View style={{ alignSelf: "center", marginTop:50}}>
                    <View style={styles.profileImage}>
                        <Image source={{
                              uri: avatar
                              ? avatar.uri
                              : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" }} 
                              style={styles.image}  />                              
                    </View> 

                    {/*botao add outra imagem de perfil*/}                                    
                    <TouchableOpacity style={styles.add}onPress={imagePickerCall}>
                        <Ionicons name="ios-add" size={42} color="#DFD8C8" style={{ alignItems:"center" }}></Ionicons>
                    </TouchableOpacity>

                   
                </View>

                 {/* Botão de alterar dados 
                 <TouchableOpacity style={styles.changePerfil}>
                        <FontAwesome name="pencil-square-o" size={38} color="#8B008B" style={{alignItems:"center"}}/>
                 </TouchableOpacity> */}

                  {/*  nome da pessoa */}
                  <View style={styles.infoContainer}>
                        <Text style={[styles.text, {fontWeight:"200", fontSize: 32}]}>
                            Joãozinho da silva
                        </Text>
                  </View>


                  <View style={[styles.statsContainer, {justifyContent:"center"}]}>
                      {/* cargo */}
                        <View style={styles.statsBox}>
                            <Text style={[styles.text, { fontSize: 20, left: 10 }]}>Auxiliar de TI</Text>                        
                        </View>

                        {/*local trabalho */}
                        <View style={[styles.statsBox, { borderColor: "#000", borderLeftWidth: 2}]}>
                            <Text style={[styles.text, { fontSize: 20, alignSelf:"baseline", left: 10}]}>Conchichina LTDA.</Text>                        
                        </View>                    
                  </View>

                 {/* separador */}
                  <View style={styles.viewStyleForLine} />

                    {/*contatos 
                  <View>
                        <Text style={[styles.text, {fontSize: 26, textAlign:"center", marginTop:10}]}>
                            Contatos
                        </Text>
                  </View>   */}     

                  
                  {/*container com dados links*/}
                  <View style={[styles.statsContainer,{borderRadius:20}]}>
                        {/*facebook*/}
                        <TouchableOpacity style={{right:80}} onPress={linkFacebook} >
                                <FontAwesome name="facebook-square" size={60} color="#8B008B" />     
                        </TouchableOpacity>


                        {/*twitter*/}
                        <TouchableOpacity onPress={linkTwitter}>
                                <FontAwesome name="twitter-square" size={60} color="#8B008B" />     
                        </TouchableOpacity>
                        

                        {/*Linkedin*/}
                        <TouchableOpacity  style={{left:80}} onPress={linkLinkedin}>
                                <FontAwesome name="linkedin-square" size={60} color="#8B008B" />     
                        </TouchableOpacity>
                   
                   </View>


                 {/* separador */}
                  <View
                    style={styles.viewStyleForLine} />

                 {/* Experiência */}
                  <View>
                      <Text style={[styles.text, {fontSize: 26, textAlign:"center", marginTop:10}]}>
                          Experiência 
                      </Text>
                  </View>
                 <View>
                     <Text style={styles.textXP}>Cargo</Text>
                     <Text style={styles.textXP}>Organização</Text>
                     <Text style={styles.textXP}>Data de inicio</Text>
                     <Text style={styles.textXP}>Data Término</Text>
                     <Text style={styles.textXP}>Descrição</Text>
                    
                     <View style={styles.LineXP} />
                     
                 </View>

                  {/* separador */}
                  <View style={styles.viewStyleForLine} />

                  {/* Habilidade */}
                  <View>
                      <Text style={[styles.text, {fontSize: 26, textAlign:"center", marginTop:10}]}>
                          Habilidade 
                      </Text>
                  </View>
                  
                  <View style={{top:30}}>

                    {/*select Nome*/}
                    <Text style={{textAlign:"center"}}>Nome</Text>
                    <Picker
                        selectedValue={nomeHab}
                        onValueChange={(itemValue, itemIndex) =>
                            setNomeHab(itemValue)
                    }>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                    </Picker>

                    {/*select Nivel*/}
                    <Text style={{textAlign:"center"}}>Nivel</Text>
                    <Picker
                        selectedValue={nivelHab}
                        onValueChange={(itemValue, itemIndex) =>
                            setNivelHab(itemValue)
                    }>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                    </Picker>

                      
                  </View>

                   {/* separador */}
                   <View style={[styles.viewStyleForLine,{top:10}]} />

                 {/* Projetos */}
                  <View style={{top:10}}>
                      <Text style={[styles.text, {fontSize: 26, textAlign:"center", marginTop:10}]}>
                          Projetos 
                      </Text>
                  </View>
                 <View>
                     <Text style={styles.textXP}>Nome</Text>
                     <Text style={styles.textXP}>Descrição</Text>
                     <Text style={styles.textXP}>Data de inicio</Text>
                     <Text style={styles.textXP}>Data Término</Text>
                     
                    
                     <View style={styles.LineXP} />
                     
                 </View>

                 {/* separador */}
                 <View style={[styles.viewStyleForLine,{top:10}]} />

                {/* certificados*/}

                <View style={{top:10}}>
                      <Text style={[styles.text, {fontSize: 26, textAlign:"center", marginTop:10}]}>
                          Certificados 
                      </Text>
                </View>
                <View style={styles.perfilView}>                    
                    <Image
                        style={[styles.certificados,{top:20}]}
                        source={require('../../assets/img/certificadodigital.jpeg') }
                   />
                    <View style={styles.viewbotaoAdd}>
                        <TouchableOpacity style={[styles.buttonOpacity,{top:20}]}>
                            <Text style={styles.botaoadd}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    text: {      
        color: "#52575D",
        
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
        marginHorizontal: 16
    },
    subText: {
        fontSize: 12,
        color: "#AEB5BC",
        textTransform: "uppercase",
        fontWeight: "500"
    },
    profileImage: {
        width: 140,
        height: 140,
        borderRadius: 100,
        overflow: "hidden"        
    },
    add: {
        backgroundColor: "#8B008B",
        position: "absolute",
        top: 5,
        left: -3,
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    changePerfil: {   
        bottom: 240,
        left: 340,
        marginBottom:100,
        width: 40,
        height: 40,        
        alignItems: "flex-end",
        justifyContent: "flex-end"
    },
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 16
    },
    statsContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 32
    },
    statsBox: {
        alignItems: "center",
        flexGrow: 1
    },
    mediaImageContainer: {
        width: 180,
        height: 200,
        borderRadius: 12,
        overflow: "hidden",
        marginHorizontal: 10
    },
    mediaCount: {
        backgroundColor: "#8B008B",
        position: "absolute",
        top: "50%",
        marginTop: -50,
        marginLeft: 30,
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        shadowColor: "rgba(0, 0, 0, 0.38)",
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 20,
        shadowOpacity: 1
    },
    recent: {
        marginLeft: 78,
        marginTop: 32,
        marginBottom: 6,
        fontSize: 10
    },
    recentItem: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 16
    },
    activityIndicator: {
        backgroundColor: "#CABFAB",
        padding: 4,
        height: 12,
        width: 12,
        borderRadius: 6,
        marginTop: 3,
        marginRight: 20
    },

    viewStyleForLine: {
        borderBottomColor: "black", 
        borderBottomWidth: StyleSheet.hairlineWidth, 
        alignSelf:'stretch',
        width: "100%",
        marginTop: 20
      },

      LineXP: {
        borderBottomColor: "black", 
        borderBottomWidth: StyleSheet.hairlineWidth, 
        alignSelf:'center',
        width: "80%",
        marginTop: 20
      },

      textXP: {
          left: 20
      },

      perfilView:{
        alignItems:'center'    
      },

      certificados:{
        height:220,
        width:400,
        marginBottom:10,
      },

      viewbotaoAdd:{
        marginBottom:30,        
      },

      botaoadd:{
        fontSize:30,
        textAlign:'center',
        fontWeight: 'bold',
        color: '#FFFFFF',
        
      },

      buttonOpacity:{
        alignItems: "center",
        backgroundColor: "#9333FF",
        height:40,
        width:40
      }
      
});