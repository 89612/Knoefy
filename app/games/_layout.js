import { Stack } from "expo-router";

export default function Games() {
    return <Stack>
        <Stack.Screen name="index" options={{headerShown: false}}/>
        <Stack.Screen name="memory" options={{headerShown: false}}/>
        <Stack.Screen name="tictactoe" options={{headerShown: false}}/>
    </Stack>
};