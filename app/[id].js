import { View, Text } from 'react-native'
import React from 'react'
import {useEffect} from 'react'
import { Stack, useSearchParams } from 'expo-router'
import EditTodos from './todos/EditTodos'

export default function detailsPgae() {
    const {id} = useSearchParams()
    
  return (
    <View style={{flex:1}}>
        <Stack.Screen options={{headerTitle:`Edit your Task`,headerTitleAlign:'center'}}/>
      <EditTodos/>
    </View>
  )
}