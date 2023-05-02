import { useState } from 'react';
import { Alert, Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enteredValue,setvlue]=useState('');
  const [courseGoal,setGoal]=useState([]);

  function HelloWorld(helotext){
    setvlue(helotext)
  }
  function addbtn(){
    setGoal((currentGoal)=>[...currentGoal,enteredValue])
    console.log(courseGoal)
  }
  return (
    <View style={styles.HA_Main_div}>
    <View style={styles.HA_part1_View}>
      <TextInput onChangeText={HelloWorld} style={styles.container} placeholder='add text'/>
      <Button title='ADD'onPress={addbtn}/>
    </View>
    <FlatList style={styles.HA_part2_view} data={courseGoal} renderItem={(itemData)=>{
      return(
        <View style={styles.HA_text_main_div}>
      <Text style={styles.HA_Veiw_text1} >{itemData.item}</Text>
      </View> 
      )
    }} alwaysBounceVertical={false} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'70%',
    borderWidth:1,
    borderColor:'gray',
    marginRight:10,
    padding:5

  },
  HA_Main_div:{
    paddingTop:60,
    paddingHorizontal:10
    },
    HA_part1_View:{
      flexDirection:'row',
      justifyContent:'center',
      borderBottomWidth:2,
      borderColor:'red',
      paddingBottom:20
    },
    HA_part2_view:{
      padding:20,
    

    },
    HA_text_main_div:{
      justifyContent:'center',
      width:'100%',
      height:40,
      paddingHorizontal:10,
      borderRadius:5,
      backgroundColor:'green',
      marginBottom:5,
    },
    HA_Veiw_text1:{
      color:'white'
    },
    });