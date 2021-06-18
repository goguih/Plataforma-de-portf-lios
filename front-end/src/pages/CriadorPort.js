import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View, Image, ScrollView, Button } from 'react-native';
import PortfolioId from "../class/PortfolioId";
import Requests from '../services/Requests';

export default function App(props){
  const [ cargoExperiencia, setCargoExperiencia ] = useState("");
  const [ organizacaoExperiencia, setOrganizacaoExperiencia ] = useState("");
  const [ descricaoExperiencia, setDescricaoExperiencia ] = useState("");
  const [ dataInicioExperiencia, setDataInicioExperiencia ] = useState("");
  const [ dataTerminoExperiencia, setDataTerminoExperiencia ] = useState("");
  
  const [ tituloCertificado, setTituloCertificado ] = useState("");
  const [ organizacaoCertificado, setOrganizacaoCertificado ] = useState("");
  const [ dataEmissaoCertificado, setDataEmissaoCertificado ] = useState("");
  const [ urlCertificado, setUrlCertificado ] = useState("");

  const [ nomeProjeto, setNomeProjeto ] = useState("");
  const [ descricaoProjeto, setDescricaoProjeto ] = useState("");
  const [ dataInicioProjeto, setDataInicioProjeto ] = useState("");
  const [ dataTerminoProjeto, setDataTerminoProjeto ] = useState("");

  const [ nomeHabilidade, setNomeHabilidade ] = useState("");
  const [ nivelHabilidade, setNivelHabilidade ] = useState("");

  const [ urlContatoLinkedin, setUrlContatoLinkedin ] = useState("");
  const [ urlContatoGithub, setUrlContatoGithub ] = useState("");
  const [ urlContatoFacebook, setUrlContatoFacebook ] = useState("");

  const [ criadorId, setCriadorId ] = useState(props.route.params.id);

  const criarPortfolio = async() => {
    const resultado = await Requests.criarPortfolio({ criadorId });
    
    if(resultado === false)
      alert("Erro ao cadastrar portfólio!");
    else{
      cadastrarExperiencia();
      cadastrarCertificado();
      cadastrarProjeto();
      cadastrarContato();
      alert("Portfólio cadastrado com sucesso!");
      props.navigation.navigate('TelaHome');
    }
  }

  const cadastrarExperiencia = async() => {
    const resultado = await Requests.cadastrarExperiencia({
      portfolioId: PortfolioId.getId(),
      cargo: cargoExperiencia,
      organizacao: organizacaoExperiencia,
      descricao: descricaoExperiencia,
      dataInicio: dataInicioExperiencia,
      dataTermino: dataTerminoExperiencia
    });

    if(resultado)
      console.log("Experiência cadastrada com sucesso!");
    else
      console.log("Erro ao cadastrar experiência!");
  }

  const cadastrarProjeto = async() => {
    const resultado = await Requests.cadastrarProjeto({
      portfolioId: PortfolioId.getId(),
      nome: nomeProjeto,
      descricao: descricaoProjeto,
      dataInicio: dataInicioProjeto,
      dataTermino: dataTerminoProjeto
    });

    if(resultado)
      console.log("Projeto cadastrado com sucesso!");
    else
      console.log("Erro ao cadastrar projeto!");
  }

  const cadastrarCertificado = async() => {
    const resultado = await Requests.cadastrarCertificado({
      portfolioId: PortfolioId.getId(),
      titulo: tituloCertificado,
      organizacao: organizacaoCertificado,
      url: urlCertificado,
      dataEmissao: dataEmissaoCertificado
    });

    if(resultado)
      console.log("Certificado cadastrado com sucesso!");
    else
      console.log("Erro ao cadastrar certificado!");
  }

  const cadastrarContato = async() => {
    const contatos = [
      {
        portfolioId: PortfolioId.getId(),
        link: urlContatoLinkedin,
        plataforma: "LinkedIn"
      },
      {
        portfolioId: PortfolioId.getId(),
        link: urlContatoGithub,
        plataforma: "GitHub"
      },
      {
        portfolioId: PortfolioId.getId(),
        link: urlContatoFacebook,
        plataforma: "Facebook"
      }
    ]

      contatos.forEach(async(contato) =>  {
      const resultado = await Requests.cadastrarContato(contato);
      if(resultado)
        console.log("Contato cadastrado com sucesso!");
      else
        console.log("Erro ao cadastrar contato!");
    });
  }
  
  // const habilidade = {
  //   initialTags: ['HTML', 'JAVA', 'CSS'],
  //   initialText: '',
  //   stringItem: 0,
  //   stringNivel: 0,
  //   itens: [
  //     { key: 1, nome:'HTML' },
  //     { key: 2, nome:'CSS' },
  //     { key: 3, nome:'JS' },
  //     { key: 4, nome:'Node.js' },
  //     { key: 5, nome:'React' },
  //     { key: 6, nome:'C#' },
  //   ],
  //   itensNivel: [
  //     { key: 1, nome: "Básico" },
  //     { key: 2, nome: "Intermediário" },
  //     { key: 3, nome: "Avançado" }
  //   ]
  // }

  // let itensItem = habilidade.itens.map( (v, k) => {
  //   return <Picker.Item key={k} value={k} label={v.nome}/>
  // });

  // let itensItemNivel = habilidade.itensNivel.map( (v, k) => {
  //   return <Picker.Item key={k} value={k} label={v.nome}/>
  // });

  return(
      <View style={styles.screen}>
        <ScrollView>
        <View>
          <Text style={styles.inputEntrada}>Criação de Portfólio</Text>
        </View>
      <View style={styles.perfilView}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />

      <Text>{` `}</Text>
      <Text style={styles.perfilText}> Foto de perfil</Text>
      </View>
      <Text>{` `}</Text>
        <View style={styles.viewRedeSocial}>
        <Text style={styles.perfilText}>Contatos</Text>
        <TextInput style={styles.inputCertificado} placeholder="Linkedin" underlineColorAndroid="transparent" autoCompleteType="email" onChangeText={link => setUrlContatoLinkedin(link)} />
        <TextInput style={styles.inputCertificado} placeholder="Github" underlineColorAndroid="transparent" autoCompleteType="email" onChangeText={link => setUrlContatoGithub(link)}/>
        <TextInput style={styles.inputCertificado} placeholder="Facebook" underlineColorAndroid="transparent" autoCompleteType="email" onChangeText={link => setUrlContatoFacebook(link)}/>
        <View>
      </View>
      <View>
      <Text>{` 
      `}</Text>
        </View>
        </View>

        <View style={styles.viewRedeSocial}>
        <Text style={styles.perfilText}>Experiência</Text>
        <TextInput style={styles.inputCertificado} placeholder="Nome da Empresa" underlineColorAndroid="transparent" onChangeText={organizacao => setOrganizacaoExperiencia(organizacao)}/>
        <TextInput style={styles.inputCertificado} placeholder="Indique seu Cargo" underlineColorAndroid="transparent" onChangeText={cargo => setCargoExperiencia(cargo)}/>
        <Text style={styles.certificadoText}> Início </Text>                           
        <TextInput style={styles.inputExperienciaInicio} placeholder="DD/MM/YYYY" underlineColorAndroid="transparent" onChangeText={dataInicio => setDataInicioExperiencia(dataInicio)}/>

        <Text style={styles.certificadoText}> Fim  </Text>                            
        <TextInput style={styles.inputExperienciaInicio} placeholder="DD/MM/YYYY" underlineColorAndroid="transparent" onChangeText={dataTermino => setDataTerminoExperiencia(dataTermino)} />

        <TextInput style={styles.inputQuemVoceEh} placeholder="Descrição das atividades" underlineColorAndroid="transparent" onChangeText={descricao => setDescricaoExperiencia(descricao)}/>
        <View>
      </View>
      <View>
      <Text>{` 
      `}</Text>
        </View>
        </View>
        <View style={styles.viewRedeSocial}>
          <Text style={styles.perfilText}>Habilidade</Text>
          <select className="habilidade">
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="js">JS</option>
            <option value="node">Node.js</option>
            <option value="react">React</option>
            <option value="csharp">C#</option>
          </select>
          <select className="nivel">
            <option>Básico</option>
            <option>Intermediário</option>
            <option>Avançado</option>
          </select>
          {/* <Picker
          style={styles.pickercolor}
          selectedValue={habilidade.stringItem}
          onValueChange={(itemValue, itemIndex) => habilidade.stringItem = itemValue}>
              {itensItem}
          </Picker>
          <Picker
          style={styles.pickercolor}
          selectedValue={habilidade.stringNivel}
          onValueChange={(itemValue, itemIndex) => habilidade.stringNivel = itemValue}>
              {itensItemNivel}
          </Picker> */}
        <View>
      </View>
      <View>
      <Text>{` 
      `}</Text>
        </View>
        </View>
      <View style={styles.perfilView}>
      <Text style={styles.perfilText}> Certificado</Text>
      </View>
      <View style={styles.certificadoView}>
        <Text style={styles.certificadoText}> Título </Text>
        <TextInput style={styles.inputCertificado} placeholder="Digite o título do certificado" underlineColorAndroid="transparent" onChangeText={titulo => setTituloCertificado(titulo)} />
        <Text style={styles.certificadoText}> Organização emissora </Text>
        <TextInput style={styles.inputCertificado} placeholder="Digite o nome da organização a qual foi emitido" underlineColorAndroid="transparent" onChangeText={organizacao => setOrganizacaoCertificado(organizacao)} />
        <Text style={styles.certificadoText}> Data de emissão </Text>
        <TextInput style={styles.inputExperienciaInicio} placeholder="DD/MM/YYYY" underlineColorAndroid="transparent" onChangeText={dataEmissao => setDataEmissaoCertificado(dataEmissao)}/>
        <Text style={styles.certificadoText}> URL </Text>
        <TextInput style={styles.inputCertificado} placeholder="url" underlineColorAndroid="transparent" onChangeText={url => setUrlCertificado(url)} />
      </View>
      <View>
      <Text>{` 
      `}</Text>
        </View>
      

      <View style={styles.perfilView}>
      <Text style={styles.perfilText}> Projeto</Text>
      </View>
      <View style={styles.certificadoView}>
        <TextInput style={styles.inputCertificado} placeholder="Nome do Projeto" underlineColorAndroid="transparent" onChangeText={(nome) => setNomeProjeto(nome)} />
       <TextInput style={styles.inputQuemVoceEh} placeholder="Descrição do Projeto" underlineColorAndroid="transparent" onChangeText={(descricao) => setDescricaoProjeto(descricao)} />       
      <Text style={styles.certificadoText}> Início </Text>                           
        <TextInput style={styles.inputExperienciaInicio} placeholder="DD/MM/YYYY" underlineColorAndroid="transparent" onChangeText={(dataInicio) => setDataInicioProjeto(dataInicio) }/>
        <Text style={styles.certificadoText}> Fim  </Text>                            
        <TextInput style={styles.inputExperienciaInicio} placeholder="DD/MM/YYYY" underlineColorAndroid="transparent" onChangeText={(dataTermino) => setDataTerminoProjeto(dataTermino)}/>
      </View>
      <View>
      <Text>{` 
      `}</Text>
        </View>
      
      </ScrollView>

      <View>
      <Button
        title="Criar portfólio"
        onPress={criarPortfolio}
        color='#9333FF'
      />
      </View>
      </View>
    );
  };

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#B533FF',
  },
  container: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
  },
  tag: {
    backgroundColor: '#9333FF',
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  textTag: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#FFFFFF',
    color: '#606060',
    fontWeight: 'bold',
  },
  inputEntrada:{
    textAlign:'center',
    fontSize:30,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  inputExperienciaInicio:{
    height:36, 
    width: 130,   
    margin:10,
    fontSize: 15,
    padding: 10,
    borderRadius:5,
    backgroundColor:'#FFF',
  },
  inputExperienciaFim:{
    height:36, 
    width: 40,   
    margin:10,
    fontSize: 15,
    padding: 10,
    borderRadius:5,
    backgroundColor:'#FFF',
  },
  perfilText:{
    fontSize:25,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#FFFFFF',
    backgroundColor: 'rgb(200,150,395)',
    width: 380,
    textAlign: 'center'
  },
  perfilView:{
    alignItems:'center'
  },
  tinyLogo: {
    width: 150,
    height: 150
  },
  pickercolor:{
    color:'#000',
    fontSize: 15,
    margin:10,
  },
  textQuemVoceEh:{
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  certificadoView:{
    fontSize:15,
    fontWeight: '100',
    color: '#FFFFFF',
  },
  certificadoText:{
    fontSize:15,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  dateComponente:{
    width:350
  },
  inputCertificado:{
    height:36,    
    margin:10,
    fontSize: 15,
    padding: 10,
    borderRadius:5,
    backgroundColor:'#FFF',
  },
  inputQuemVoceEh:{
    height:70,    
    margin:10,
    fontSize: 15,
    padding: 10,
    borderRadius:5,
    backgroundColor:'#FFF',
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