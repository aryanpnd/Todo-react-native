import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import { Stack, useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import Todos from '../todos/todos'
import styles from '../../styles/styles'
import { MyContext } from '../context/appState'
import MarkedTodos from '../todos/markedTodos'

export default function markedTodos() {
    const router = useRouter()
    const { todos,markedTodos, setMarkedTodos } = React.useContext(MyContext);

    const [todosCount, setTodosCount] = useState(false)

    useEffect(() => {
        (Object.keys(markedTodos).length === 0) ? setTodosCount(false) : setTodosCount(true)
    }, [todos])


    return (<>
        <Stack.Screen options={{ headerShown: true, headerTitle: "My Todos", headerTitleAlign: "center" }} />

        <View style={{ flex: 1 }}>

            <View style={{ flex: 2, flexDirection: "row", justifyContent: "space-between", width: "100%", padding: 10 }}>
                <Text style={styles.headText}>{` Completed Todos: ${Object.keys(markedTodos).length}`}</Text>

            </View>

            <View style={{ flex: 6, justifyContent: 'center' }}>

                    <View style={{ flex: 1, width: "100%" }}>
                        {
                            todosCount ?
                                <ScrollView>
                                    <MarkedTodos />
                                </ScrollView> :
                                <>
                                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center",padding:10 }}>
                                        <Text style={styles.headText3}>Your Completed Todos list</Text>
                                        <Text style={styles.headText3}> is empty</Text>
                                    </View>
                                </>
                        }
                    </View>
            </View>

            <View style={{ flex: 1, padding: 10 }}>
                <TouchableOpacity onPress={() => {setMarkedTodos([])}} style={styles.btnClear}>
                    <Text style={styles.bigBtnText}>Clear todo</Text>
                </TouchableOpacity>
            </View>

        </View>
    </>
    )

}