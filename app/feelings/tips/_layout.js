import { Stack } from "expo-router";

export default function Feelings() {
    return <Stack>
        <Stack.Screen name="[emotion]" options={{headerShown: false}}/>
    </Stack>
};