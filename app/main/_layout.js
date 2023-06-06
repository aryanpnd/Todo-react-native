import { Stack, Tabs } from "expo-router"

import { FontAwesome5,Ionicons  } from '@expo/vector-icons';
import { Text } from "react-native";
export default stackLayout = () => {
  return (

      <Tabs >

        <Tabs.Screen name="alltodos" options={{title:"Todos", headerShown: false,tabBarIcon: ({ focused, color }) => (
               <FontAwesome5 name="tasks" size={24} color={focused?"#1C82AD":"#D8D8D8"} />
        )}} />
        <Tabs.Screen name="markedTodos" options={{title:"Completed", headerShown: false,tabBarIcon: ({ focused, color }) => (
              <Ionicons name="checkmark-circle" size={24} color={focused?"#4E9F3D":"#D8D8D8"}  />
        ) }} />
      </Tabs>
        
  )
}