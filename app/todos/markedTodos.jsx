import { View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { MyContext, MyProvider } from '../context/appState'
import styles from '../../styles/styles';
import * as Haptics from 'expo-haptics'
import { useRouter } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';


export default function MarkedTodos() {
    const router = useRouter()

    const { todos, setTodos,markedTodos, setMarkedTodos } = React.useContext(MyContext);

    const deleteTodo = (index) => {
        const updatedTodos = [...markedTodos];
        updatedTodos.splice(index, 1);
        setMarkedTodos(updatedTodos);
        Haptics.notificationAsync(
            Haptics.NotificationFeedbackType.Success
          )

    }
    return (


        <View style={{ flex: 1, padding: 10, gap: 15 }}>
            {
                markedTodos.map((todo, index) => (

                    <TouchableOpacity onPress={()=>{}} key={index} style={index%2==0? styles.todos:styles.todos2}>
                        <Text style={styles.text}>{index + 1}</Text>
                        <Text style={styles.text}>{todo.task}</Text>
                        <TouchableOpacity onPress={deleteTodo} style={styles.btnClearSmall}>
                        <AntDesign name="delete" size={24} color="white" />
                        </TouchableOpacity>
                    </TouchableOpacity>
                ))
            }
        </View>
    )
}