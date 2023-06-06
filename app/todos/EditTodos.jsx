import { View, Text, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from '../../styles/styles'
import { useRouter, useSearchParams } from 'expo-router'
import { MyContext } from '../context/appState'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AntDesign, FontAwesome } from '@expo/vector-icons'
import * as Haptics from 'expo-haptics'

export default function EditTodos() {
  const { id } = useSearchParams()
  const router = useRouter()

  const [input, setInput] = useState("")
  const [input2, setInput2] = useState("")
  const [editBtn, setEditBtn] = useState(false)
  const { todos, setTodos, markedTodos, setMarkedTodos } = React.useContext(MyContext);

  const handlePress = () => {
    const newTodo = [...todos]
    newTodo[id].task = input
    newTodo[id].description = input2
    setTodos([...newTodo])
    // console.log(newTodo)
  }

  const handleDel = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    router.push("main")
    setTodos(updatedTodos);
    Haptics.notificationAsync(
      Haptics.NotificationFeedbackType.Success
    )
  }

  const handleMark = (index) => {
    const updatedTodos = [...todos];
    const newelement = updatedTodos.splice(index, 1);
    router.push("main")
    handleDel(index)
    setMarkedTodos(markedTodos.concat(newelement));
    Haptics.notificationAsync(
      Haptics.NotificationFeedbackType.Success
    )

  }

  return (
    <View style={{
      flex: 1,
      alignItems: 'center', gap: 20
    }}>
      <Text style={styles.headText2}>Click on your text to edit</Text>

      <View style={{ flex: 1, width: "100%", flexDirection: "column", justifyContent: "space-around", alignItems: "center", flex: 6, gap: 20, padding: 10 }}>

        <ScrollView style={{ flex: 1, width: "100%" }}>
          <Text style={styles.headText}>Task Name</Text>
          {editBtn ?
            <TextInput
              style={styles.searchInput}
              value={input}
              onChangeText={(text) => setInput(text)}
            /> :
            <TouchableOpacity onPress={() => setEditBtn(true)} style={{ width: "100%" }}>
              <Text style={styles.headText3}>{todos[id].task}</Text>
            </TouchableOpacity>
          }
          <Text style={styles.headText}>Task Description</Text>


          {
            editBtn ?
              <TextInput
                style={styles.searchInput2}
                multiline={true}
                value={(input2.trim()?.length > 0) ? input2 : todos[id].description}
                onChangeText={(text) => setInput2(text)}
              /> : <TouchableOpacity onPress={() => setEditBtn(true)} style={{ width: "100%" }}>
                <Text style={styles.headText3}>{todos[id].description}</Text>
              </TouchableOpacity>
          }

        </ScrollView>
        <View style={{ padding: 10, flexDirection: "row", gap: 10, justifyContent: "space-evenly" }}>
          <TouchableOpacity onPress={handleMark} style={styles.btnMark}>
            <FontAwesome name="check" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleDel} style={styles.btnClearSmall}>
            <AntDesign name="delete" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handlePress} style={styles.btnAdd}>
          <Text style={styles.bigBtnText}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}