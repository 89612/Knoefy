import { View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, clamp, withSpring } from 'react-native-reanimated';
import { WhiteBackground, TitleBlock, NavigationButton, Octagon } from '../../utils/objects';

function Knob({x}) {
    const blocks = []
    for (let i = 0; i < 3; i++) {
        const rotation = i == 1 ? "rotate-[60deg]" : i == 2 ? "rotate-[120deg]" : "";
        blocks.push(<View key={i} className={`absolute h-full w-full rounded-sm bg-sliderknob  ${rotation}`}></View>)
    }

    const style = useAnimatedStyle(() => {
        return {
            transform: [
                {translateX: x.value},
                {rotate: `${x.value % 360}deg`}
            ]
        }
    });

    return <Animated.View style={style} className="h-[200%] z-10 aspect-square absolute top-[-50%]">
        {blocks}
    </Animated.View>
}

function Label({num, x, border}) {
    const style = useAnimatedStyle(() => {
        return {
            backgroundColor: x.value < num * border.value / 10 ? "#C4EAFA" : "#3DA3D5"
        }
    });

    return <Animated.View style={style} className={`rounded-full`}>
        <Text className="font-caveat text-xl lg:text-3xl aspect-square text-center text-black">{num+1}</Text>
    </Animated.View>
}

export default function EmotionLevel() {
    const { emotion } = useLocalSearchParams();
    const borderPos = useSharedValue(0);
    const x = useSharedValue(0);

    // initialize width 
    const onLayout = (event) => {
        const {width, height} = event.nativeEvent.layout
        borderPos.value = width - height * 2;
    }

    // handle gesture
    const gesture = Gesture.Pan().onChange((event) => {
        x.value = clamp(x.value + event.changeX, 0, borderPos.value);;
    });

    const router = useRouter();
    const nextPage = (emotion) => {
        router.push(`/feelings/tips/${emotion}`);
    };

    return (
        <WhiteBackground>
            <TitleBlock text={`Hoe ${emotion} ben je?`} margin={true} />
            <NavigationButton direction="left" />
            <NavigationButton direction="right" onPress={() => nextPage(emotion)}/>
            <View className="justify-center items-center flex-1 mx-[8%]">
                <View className="flex-1 justify-center">
                    {/* numbers */}
                    <View className="justify-between w-full flex-row mb-8">
                        {Array(10).fill(0).map((_, i) => (
                            <Label key={i} num={i} x={x} border={borderPos}/>
                        ))}
                    </View>
                    {/* slider */}
                    <View className="justify-center flex-row items-center" onLayout={onLayout}>
                        <Animated.View className="h-7 bg-slider2 rounded-xl flex-1">
                            <GestureDetector gesture={gesture}>
                                <Knob x={x}/>
                            </GestureDetector>
                            <Animated.View className="h-7 bg-slider1 rounded-xl absolute" style={{width: x}}/>
                        </Animated.View>
                    </View>
                </View>
            </View>
        </WhiteBackground>
    );
}