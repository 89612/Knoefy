import { Text, View, StyleSheet, Image, Platform } from "react-native";
import { Link, Navigator, Slot, Stack } from "expo-router";
import * as NavigationBar from 'expo-navigation-bar';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import React from "react";

import '../utils/i18n'
// inject background image
// load fonts

export default function App() {
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        if (!loaded) {
            if (Platform.OS === "android") {
                NavigationBar.setVisibilityAsync("hidden");
            }
            Font.loadAsync({
                'Caveat Brush': require('../assets/font/CaveatBrush-Regular.ttf'),
            }).then(() => setLoaded(true));
        }
    }, [loaded]);

    if (!loaded) {
        return <View></View>;
    }
    
    return <Stack>
        <Stack.Screen name="index" options={{headerShown: false}}/>
        <Stack.Screen name="feelings" options={{headerShown: false}}/>
        <Stack.Screen name="films" options={{headerShown: false}}/>
        <Stack.Screen name="games" options={{headerShown: false}}/>
    </Stack>

}