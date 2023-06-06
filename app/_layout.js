import { Stack, Tabs, useSearchParams } from "expo-router"
import { MyProvider } from "./context/appState"
import {ScrollView} from "react-native"

export default stackLayout = () => {
  const { id } = useSearchParams()
  return (
    <MyProvider>
      

      <Stack >

        <Stack.Screen name="tabs" options={{ headerShown: false }} />
        <Stack.Screen name="main" options={{ headerShown: false }} />
      </Stack>
        
    </MyProvider>
  )
}