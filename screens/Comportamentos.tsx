import React from "react";
import { FlatList, StyleSheet,View } from "react-native";
import Card from "../components/card/Card";
import PlayListsIds from '../constants/PlayListsIds'
import Videos from '../screens/Videos'

const Comportamentos = ({navigation}) => {
  const numColumns = 2
  const cardData = [
    { title: 'Comportamento1', img: require('../assets/images/7comportamentos/COMPORTAMENTO1.png'), descricao: 'Comer saudavelmente', navigateTo:'Videos', playListsId: PlayListsIds.playListsIds.comportamento1},
    { title: 'Comportamento2', img: require('../assets/images/7comportamentos/COMPORTAMENTO2.png'), descricao: 'Praticar atividade física', navigateTo: 'Videos',playListId: PlayListsIds.playListsIds.comportamento2 },
    { title: 'Comportamento3', img: require('../assets/images/7comportamentos/COMPORTAMENTO3.png'), descricao: 'Vigiar as taxas', navigateTo: 'Videos',playListId: PlayListsIds.playListsIds.comportamento3 },
    { title: 'Comportamento4', img: require('../assets/images/7comportamentos/COMPORTAMENTO4.png'), descricao: 'Tomar os medicamentos', navigateTo: 'Videos',playListId: PlayListsIds.playListsIds.comportamento4 },
    { title: 'Comportamento5', img: require('../assets/images/7comportamentos/COMPORTAMENTO5.png'), descricao: 'Resolver problemas', navigateTo: 'Videos',playListId: PlayListsIds.playListsIds.comportamento5 },
    { title: 'Comportamento6', img: require('../assets/images/7comportamentos/COMPORTAMENTO6.png'), descricao: 'Adaptar-se saudavelmente', navigateTo: 'Videos',playListId: PlayListsIds.playListsIds.comportamento6 },
    { title: 'Comportamento7', img: require('../assets/images/7comportamentos/COMPORTAMENTO7.png'), descricao: 'Reduzir os riscos', navigateTo: 'Videos',playListId: PlayListsIds.playListsIds.comportamento7 },
  ]

  const formatData = (data, numberColumns) => {
    const numberOfFullRows = Math.floor(data.length / numberColumns);

    let numberOfElementsLastRow = data.length - (numberOfFullRows * numberColumns);

    while (numberOfElementsLastRow !== numberColumns && numberOfElementsLastRow !== 0) {
      data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
      numberOfElementsLastRow = numberOfElementsLastRow + 1
    }
    return data;
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={styles.list}
        data={formatData(cardData, numColumns)}
        numColumns={2}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => {
          if (item.empty == true) {
            return (
              <View style={[styles.item, styles.itemInvisible]}></View>
            )
          }
          return (
            <View style={styles.item}>
              <Card item={item} navigation={navigation} />
            </View>
          )
        }}
      />
    </View>


  )
};

const styles = StyleSheet.create({
  list: {
    marginTop: "7%",
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  item: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around"

  }
});

export default Comportamentos;