import React from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native';

function Feed() {


  const posts = [
    {
      id: '1',
      author: 'Isinha',
      //picture_url:
        //'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
      //likes: 1272,
      description: 'Descrição da atualização de portfolio',
      hashtags: '#java #html',
      //place: 'Jundaí',
      experiencia:'Todas as experiencias',
      habilidades: 'Todas as habilidades',
      projeto: 'Todos os projetos (links)'
    }
    // {
    //   id: '2',
    //   author: 'Isinha',
    //   picture_url:
    //     'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
    //   likes: 1272,
    //   description: 'Descrição da atualização de portfolio',
    //   hashtags: '#java #html',
    //   place: 'Jundaí',
    //   experiencia:'Todas as experiencias',
    //   habilidades: 'Todas as habilidades',
    //   projeto: 'Todos os projetos (links)'
    // },
    // {
    //   id: '3',
    //   author: 'Isinha',
    //   picture_url:
    //     'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
    //   likes: 1272,
    //   description: 'Descrição da atualização de portfolio',
    //   hashtags: '#java #html',
    //   place: 'Jundaí',
    //   experiencia:'Todas as experiencias',
    //   habilidades: 'Todas as habilidades',
    //   projeto: 'Todos os projetos (links)'
    // }
  ];

  function renderItem({ item: post }) {
    return (
      <View style={styles.post}>
        <View style={styles.postHeader}>
          <View style={styles.userInfo}>
            <Text style={styles.author}>{post.author}</Text>
            <Text style={styles.place}>{post.place}</Text>
          </View>
          <View style={styles.postOptions}>
            <TouchableOpacity>
              <Image source={require('../../../../assets/img/options.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate('TelaPerfil')}>
          <Image
            style={styles.picture_url}
            source={{ uri: post.picture_url }}
          />
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <View style={styles.actions}>
            <View style={styles.leftActions}>
              <TouchableOpacity style={styles.action}>
                <Image source={require('../../../../assets/img/like.png')} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.action}>
               
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../../../../assets/img/send.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={styles.likes}>{post.likes} likes</Text>
            <Text style={styles.hashtags}>{post.hashtags}</Text>
            <Text style={styles.description}>{post.description}</Text>
            <Text style={styles.description}>{post.experiencia}</Text>
            <Text style={styles.description}>{post.habilidades}</Text>
            <Text style={styles.hashtags}>{post.projeto}</Text>
          </View>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView>
        <View>
    <TextInput style={styles.input} placeholder="Portfólios" underlineColorAndroid="transparent"></TextInput>
      </View>
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    input:{
        height:40,
        borderWidth: 1,
        borderColor:'#222',
        margin:5,
        fontSize: 15,
        padding: 10,
        borderRadius:5,
        backgroundColor:'#FFF',
        width:230,
        fontWeight: 'bold', 
        
      },
  post: {
    marginVertical: 15
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
    marginBottom: 15
  },
  postOptions: {},
  userInfo: {},
  author: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold'
  },
  place: {
    fontSize: 12,
    color: '#666'
  },
  picture_url: {
    width: '100%',
    height: 400
  },
  footer: {
    paddingHorizontal: 15
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15
  },
  action: {
    marginRight: 8
  },
  leftActions: {
    flexDirection: 'row'
  },
  likes: {
    fontWeight: 'bold',
    fontSize: 12
  },
  hashtags: {
    color: '#002D5E'
  },
  description: {
    color: '#000',
    lineHeight: 18
  }
});

export default Feed;