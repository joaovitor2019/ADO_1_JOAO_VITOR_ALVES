import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Pressable, Image,Modal } from 'react-native';
import Constants from 'expo-constants';


const ShowDetalhes = ({display,toogleModal,mensagem}) => (   
    <Modal
          animationType="slide"
          transparent={true}
          visible={display}
          onRequestClose={toogleModal}
    >

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
                <Pressable onPress={toogleModal}>
                  <Text>{mensagem}</Text>
                </Pressable>
          </View>
        </View>
    
    </Modal>
        
 )

const Pessoa = ({nome,email,link}) => {
    
    //state para controle do Modal
    const [modal,setModal] = React.useState(false)

    function mudaModal(){
      setModal(!modal)
    }

    return(
    <View>
      <ShowDetalhes display={modal} toogleModal={mudaModal} mensagem={email}/>
      
      <Pressable onPress={mudaModal}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: link,
          }}
        />

        <Text style={styles.paragraph}>{nome}</Text>
      </Pressable>
    </View>
    )
}


const DATA = [
        {
            "id": 7,
            "email": "neymar.junior@reqres.in",
            "first_name": "Neymar",
            "last_name": "Júnior",
            "avatar": "https://designe.com.br/wp-content/uploads/2020/08/foto-de-perfil-neymar-twitter-designe-561x634.jpg"
        },
        {
            "id": 8,
            "email": "lionel.messi@reqres.in",
            "first_name": "Lionel",
            "last_name": "Messi",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Lionel_Messi_20180626_%28cropped%29.jpg/399px-Lionel_Messi_20180626_%28cropped%29.jpg"
        },
        {
            "id": 9,
            "email": "Cristiano.Ronaldo@reqres.in",
            "first_name": "Cristiano",
            "last_name": "Ronaldo",
            "avatar": "https://img.a.transfermarkt.technology/portrait/header/8198-1626161872.jpg?lm=1"
        },
        {
            "id": 10,
            "email": "Ronaldo.Fenomeno@reqres.in",
            "first_name": "Ronaldo",
            "last_name": "Nazário",
            "avatar": "https://terceirotempo.uol.com.br/imagens/57/70/qfl_fto_15770.jpg"
        },
        {
            "id": 11,
            "email": "pele@reqres.in",
            "first_name": "Pelé",
            "last_name": "",
            "avatar": "https://portalmorada.com.br/assets/uploads/noticias/ha-63-anos-pele-fazia-o-seu-1o-gol-em-jogo-oficial-pelo-santos-f6Fv.jpg"
        },
        {
            "id": 12,
            "email": "Maradona@reqres.in",
            "first_name": "Maradona",
            "last_name": "",
            "avatar": "https://conteudo.imguol.com.br/c/esporte/df/2020/11/04/diego-maradona-com-a-camisa-da-selacao-argentina-na-copa-de-1994-1604515915668_v2_900x506.jpg.webp"
        }
    ];



//item com uma arrow function
/*const meuItemObj = ({item}) => (
  <View>
      <Text style={styles.paragraph}>{item.title}</Text>
    </View>
)*/



export default function App() {

  //função que renderiza cada item do FlatList
  function meuItem({item}){
    let nomeCompleto = item.first_name + " " + item.last_name
    
    return(
      <Pessoa nome={nomeCompleto} 
              link={item.avatar}
              email={item.email}
      />
    )
  }
  

  return (

    <View style={styles.container}>

      <FlatList
        data={DATA}
        renderItem={meuItem}
        keyExtractor={item => item.id}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'green',
    padding: 8,
  },
  paragraph: {
    margin: 12,
    padding: 12,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'yellow'
  },
  tinyLogo: {
    width: 50,
    height: 50,
    alignSelf: 'center'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
