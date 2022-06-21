import React from "react";
import { FlatList, StyleSheet,View } from "react-native";
import Card from "../components/card/Card";
import PlayListsIds from '../constants/PlayListsIds'
import Videos from '../screens/Videos'


const TiposDiabetes = ({navigation}) => {
    const numColumns = 2
    const cardData = [
      { title: 'Tipo 1', img: require('../assets/images/TiposDeDiabetes/DIABETESTIPO1.png'), descricao: 'Entenda o que é diabetes tipo 1', navigateTo:'Videos', playListsId: PlayListsIds.playListsIds.diabetesTipo1},
      { title: 'Tipo 2', img: require('../assets/images/TiposDeDiabetes/DIABETESTIPO2.png'), descricao: 'Entenda o que é diabetes tipo 2', navigateTo: 'Videos',playListId: PlayListsIds.playListsIds.diabetesTipo2 },
      { title: 'Diabetes Gestacional', img: require('../assets/images/TiposDeDiabetes/DIABETESGESTACIONAL.png'), descricao: 'Entenda o que é diabetes Gestacional', navigateTo: 'Videos',playListId: PlayListsIds.playListsIds.diabetesGestacional },
      { title: 'Outros Tipos', img: require('../assets/images/TiposDeDiabetes/DIABETESTIPOLADA.png'), descricao: 'Descubra e entenda outros tipos de diabetes ', navigateTo: 'Videos',playListId: PlayListsIds.playListsIds.diabetesTipoMody },
      { title: 'Curiosidades', img: require('../assets/images/TiposDeDiabetes/DIABETESTIPOMODY.png'), descricao: 'Algumas Curiosidades sobre diabetes', navigateTo: 'Videos',playListId: PlayListsIds.playListsIds.diabetesTipoLada },
      
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
}
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
  
export default TiposDiabetes;