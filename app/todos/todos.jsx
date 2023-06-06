import { View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { MyContext, MyProvider } from '../context/appState'
import styles from '../../styles/styles';
import * as Haptics from 'expo-haptics'
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';


export default function Todos() {
    const router = useRouter()

    const { todos, setTodos,markedTodos, setMarkedTodos } = React.useContext(MyContext);

    const deleteTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
        Haptics.notificationAsync(
            Haptics.NotificationFeedbackType.Success
          )

    }
    const markTodo = (index) => {
        const updatedTodos = [...todos];
        const newelement = updatedTodos.splice(index, 1);
        deleteTodo(index)
        setMarkedTodos(markedTodos.concat(newelement));
        Haptics.notificationAsync(
            Haptics.NotificationFeedbackType.Success
          )

    }
    return (


        <View style={{ flex: 1, padding: 10, gap: 15 }}>
            {
                todos.map((todo, index) => (

                    <TouchableOpacity onPress={()=>{router.push(`/${index}`)}} key={index} style={index%2==0? styles.todos:styles.todos2}>
                        <Text style={styles.text}>{index + 1}</Text>
                        <Text style={styles.text}>{todo.task}</Text>
                        <TouchableOpacity onPress={markTodo} style={styles.btnMark}><FontAwesome name="check" size={24} color="black" /></TouchableOpacity>
                    </TouchableOpacity>
                ))
            }
        </View>
    )
}