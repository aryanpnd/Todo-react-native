import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import { Stack, useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import Todos from '../todos/todos'
import styles from '../../styles/styles'
import { MyContext } from '../context/appState'

export default function alltodos() {
    const router = useRouter()
    const { todos } = React.useContext(MyContext);

    const [todosCount, setTodosCount] = useState(false)

    useEffect(() => {
        (Object.keys(todos).length === 0) ? setTodosCount(false) : setTodosCount(true)
    }, [todos])


    return (
        <View style={{ flex: 1 }}>
            <Stack.Screen options={{ headerShown: true, headerTitle: "My Todos", headerTitleAlign: "center" }} />

            <View style={{ flex: 1.1, flexDirection: "row", justifyContent: "space-between", width: "100%", paddingVertical: 30, paddingHorizontal: 10 }}>
                <Text style={styles.headText}>{` All Todos: ${Object.keys(todos).length}`}</Text>

                <View>
                    <TouchableOpacity onPress={() => router.push('tabs/addTodos')} style={styles.btnDone}>
                        <Text style={{ color: "white", fontWeight: "bold" }}>Add todo</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flex: 6, justifyContent: 'center' }}>

                <View style={{ flex: 1, width: "100%" }}>
                    {
                        todosCount ?
                            <ScrollView>
                                <Todos />
                            </ScrollView> :
                            <>
                                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 10 }}>
                                    <Text style={styles.headText3}>Your Todos list is empty</Text>
                                    <Text style={styles.headText3}>Add some tasks</Text>
                                </View>
                            </>
                    }
                </View>
            </View>

            <View style={{ flex: 1, padding: 10 }}>
                <TouchableOpacity onPress={() => router.push('tabs/addTodos')} style={styles.btn}>
                    <Text style={styles.bigBtnText}>Add a todo</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}