import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Todos from '../todos/todos';
import { MyContext } from '../context/appState';
import styles from '../../styles/styles';
import * as Haptics from 'expo-haptics'
import { useRouter } from 'expo-router';


export default function home() {
  const router = useRouter()


  const [input, setInput] = useState("")
  const [input2, setInput2] = useState("")
  const { todos, setTodos } = React.useContext(MyContext);

  function handlePress() {
    check = false
    try {
      ((todos.filter((item) => item.task.toLowerCase().includes(input.toLowerCase())))[0].task === input) ? check = true : check = false
    } catch {
      check = false
    }
    const success = ()=>{
      setTodos([...todos, { task: input.trim(), description: input2 }])
      alert("Todo has been added")
      router.push("main")

    }

    (input.trim()?.length > 0)
      ?
      check
        ?
        alert("Task already exists")
        :success()
      :
      alert("Your task is Empty!!!")

      Haptics.notificationAsync(
        Haptics.NotificationFeedbackType.Success
      )

  }

  return (
    <ScrollView>
    <View style={styles.container}>

      <View style={{ width: "100%", flexDirection: "column", justifyContent: "space-around", alignItems: "center", flex: 6,gap:20,padding:10}}>

        <Text style={styles.headText}>Task Name</Text>
        <TextInput
          style={styles.searchInput}
          value={input}
          onChangeText={(text) => setInput(text)}
          placeholder='Type Something'
          />
          <Text style={styles.headText}>Task Description</Text>
        <TextInput
          style={styles.searchInput2}
          value={input2}
          multiline={true}
          onChangeText={(text) => setInput2(text)}
          placeholder='Type Something'
        />
        <TouchableOpacity onPress={handlePress} style={styles.btnAdd}>
          <Text style={styles.bigBtnText}>Add</Text>
        </TouchableOpacity>
      </View>


    </View>
    </ScrollView>
  )
}
