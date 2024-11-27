import { StyleSheet, View, Text, Pressable, ImageBackground, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from "expo-router";
import { styled } from 'nativewind';
import { GestureHandlerRootView } from "react-native-gesture-handler";

const StyledDesign = styled(AntDesign)

// Used as a title for certain pages
export function TitleBlock({text, arrow, margin}) {
    /*
    const style = StyleSheet.create({
        arrow: {
            width: 0,
            height: 0,
            borderLeftWidth: 30, 
            borderLeftColor: "transparent",
            borderRightWidth: 30, 
            borderRightColor: "transparent",
            borderBottomWidth: 30, 
            borderBottomColor: "#ffde59",
            position: "absolute",
            bottom: -20, 
            right: -1, 
            transform: [{ rotate: "180deg" }],
        },
    });
    */
        
    const xMargin = margin ? "mx-[10%]" : "mx-0";
    return <View className={`bg-primary p-2 rounded-xl mb-3 ${xMargin} justify-center`}>
        <Text className="text-center font-caveat text-xl md:text-2xl lg:text-4xl text-black">{text}</Text>
        {
            //arrow && <View style={style.arrow}></View>
        }
    </View>
}

export function Background({className, children}) {
    return <ImageBackground className={`flex-1 ${className}`} source={require("../assets/knoefy-background.png")}>
        <StatusBar hidden={true} />
        {children}
    </ImageBackground>
}

export function WhiteBackgroundPlain({center, className, children}) {
    return <GestureHandlerRootView>
        <View className={`w-4/5 h-4/5 bg-white ${!center && "m-auto"} rounded-2xl p-10 ${className}`}>
            {children}
        </View>
    </GestureHandlerRootView>
}

// Used as a white background for certain pages
export function WhiteBackground({children}) {
    return <Background>
        <WhiteBackgroundPlain>
            {children}
        </WhiteBackgroundPlain>
    </Background>
}

export function Octagon({textClassName}) {
    const blocks = []
    for (let i = 0; i < 3; i++) {
        const rotation = i == 1 ? "rotate-[60deg]" : i == 2 ? "rotate-[120deg]" : "";
        blocks.push(<View key={i} className={`absolute h-[200%] z-10 aspect-square rounded-sm ${textClassName} ${rotation}`}></View>)
    }
}

export function NavigationButton({ direction, onPress=null }) {
    const router = useRouter();
    const [clickable, setClickable] = useState(false);

    useEffect(() => {
        if(direction == "left") {
            setClickable(router.canGoBack());
        } else if (direction == "right") {
            setClickable(onPress != null);
        }
    }, [])

    function defaultOnPress() {
        if (clickable) {
            if (direction == "left") {
                router.back();
            } else if (direction == "right") {
                onPress();
            }
        }
    }

    const blocks = []
    for (let i = 0; i < 3; i++) {
        const bgColor = clickable ? "bg-primary" : "bg-secondary";
        const rotation = i == 1 ? "rotate-[60deg]" : i == 2 ? "rotate-[120deg]" : "";
        blocks.push(<View key={i} className={`w-full h-full rounded-sm absolute ${bgColor} ${rotation}`}></View>)
    }

    const left = direction == "left" ? "-left-8" : "-right-8";
    return <Pressable className={`absolute w-16 lg:w-24 justify-center ${left} aspect-square -top-8`} onPress={defaultOnPress}>
        {blocks}
        <StyledDesign 
            name={direction == "left" ? "caretleft" : "caretright"} 
            className="self-center"
            color="white"
            size={40}  
        />
    </Pressable>
}