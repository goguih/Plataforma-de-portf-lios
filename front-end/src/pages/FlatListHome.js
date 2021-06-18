// FlatListHome.js

import React, {Component} from 'react';
import {View, FlatList, Image, StyleSheet, ScrollView, Text} from 'react-native';


class App extends Component {
    constructor(props){
        super(props);
        this.state ={
            feed:[
                {id:'1', nome: 'Isa', idade:20, email:'isinha@gmail.com'},
                {id:'2', nome: 'Belinha', idade:40, email:'quarentoubelinha@gmail.com'},
                {id:'3', nome: 'Jessica', idade:23, email:'jesga@gmail.com'},
                {id:'4', nome: 'Camila', idade:32, email:'camilacamelo@gmail.com'},
                {id:'5', nome: 'Batolomeu', idade:52, email:'batolomeu@gmail.com'},
            ]
        };
    }
render(){
    return (
        <View style={styles.container}>
         <FlatList 
         data={this.state.feed}
         renderItem={ ({item}) => <Pessoa data={item}/>}
         keyExtractor={(item) => item.id }
         />

        </View>
    );
   

}}

class Pessoa extends Component{
    render(){
        return(
            <View style={styles.areaPessoa}>
                <Text style={styles.textoPessoa}>{this.props.data.nome}</Text>
                <Text style={styles.textoPessoa}>{this.props.data.idade}</Text>
                <Text style={styles.textoPessoa}>{this.props.data.email}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    areaPessoa:{
        backgroundColor:'#222',
        height: 200,
        marginBottom: 15
    },
    textoPessoa:{
        color:'#FFF',
        fontSize:20
    }
});

export default App;

