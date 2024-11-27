import { Stack } from "expo-router";

export default function Feelings() {
    return <Stack>
        <Stack.Screen name="index" options={{headerShown: false}}/>
        <Stack.Screen name="[emotion]" options={{headerShown: false}}/>
        <Stack.Screen name="tips" options={{headerShown: false}}/>
    </Stack>
};