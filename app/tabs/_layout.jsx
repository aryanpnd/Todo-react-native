import { Stack, Tabs } from "expo-router"

export default () => {
    return (
        <>
            <Stack >
                <Stack.Screen name="addTodos" options={{headerTitle:"Add Todos",headerTitleAlign:"center"}}/>
                <Stack.Screen name="list" />
            </Stack>
        </>
    )
}