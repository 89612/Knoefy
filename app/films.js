import { useState, useEffect, useRef } from "react";
import { styled } from 'nativewind';
import { AntDesign } from '@expo/vector-icons';
import { Video } from 'expo-av';
import { View, Pressable, Text } from "react-native";
import { NavigationButton, TitleBlock, WhiteBackground } from "../utils/objects";

const StyledDesign = styled(AntDesign);

// This is a template for creating new pages
export default function Template() {
    const videos = {
        "Knoefy Beats!": require("../assets/video/1.mp4"),
        "Knoefy is bang": require("../assets/video/2.mp4"),
        "Knoefy is boos": require("../assets/video/3.mp4"),
        "Knoefy is blij": require("../assets/video/4.mp4"),
        "Knoefy is verdrietig": require("../assets/video/5.mp4"),
    };
    const [videoIndex, setVideoIndex] = useState(0);
    const [videoSource, setVideoSource] = useState(videos[Object.keys(videos)[0]]);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        setVideoSource(videos[Object.keys(videos)[videoIndex]]);
        setIsPlaying(false);  // Reset play state when video changes
    }, [videoIndex]);

    const goBack = () => {
        if (videoIndex > 0) {
            setVideoIndex(videoIndex - 1);
        }else {
            setVideoIndex(Object.keys(videos).length - 1);
        }
    };

    const goForward = () => {
        if (videoIndex < Object.keys(videos).length - 1) {
            setVideoIndex(videoIndex + 1);
        }else {
            setVideoIndex(0);
        }
    };

    const togglePlayPause = async () => {
        if (isPlaying) {
            await videoRef.current.pauseAsync();
        } else {
            await videoRef.current.playAsync();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <WhiteBackground>
            <TitleBlock text="Filmpjes" margin="8%" />
            <NavigationButton direction="left" onPress={goBack} />
            <View className="flex-1">
                <View className="flex-3 bg-black">
                    <Video
                        ref={videoRef}
                        source={videoSource}
                        rate={1.0}
                        volume={1.0}
                        isMuted={false}
                        resizeMode="contain"
                        shouldPlay={false}  // Set to false to control play/pause manually
                        className="w-full h-full"
                    />
                </View>
                <View className="flex-1 flex-row justify-between items-center px-4">
                    <Pressable onPress={goBack}>
                        <StyledDesign
                            name="caretleft"
                            color="#3DA3D5"
                            size={40}
                        />
                    </Pressable>
                    <View className="flex-1 justify-center items-center mt-10">
                        <Text className='text-4xl font-caveat'>{Object.keys(videos)[videoIndex]}</Text>
                        <View className="flex-row justify-center items-center mt-4">
                            <Pressable onPress={togglePlayPause}>
                                <StyledDesign
                                    name={isPlaying ? "pausecircleo" : "playcircleo"}
                                    color={isPlaying ? "red" : "green"}
                                    size={40}
                                />
                            </Pressable>
                        </View>
                    </View>
                    <Pressable onPress={goForward}>
                        <StyledDesign
                            name="caretright"
                            color="#3DA3D5"
                            size={40}
                        />
                    </Pressable>
                </View>
                
            </View>
        </WhiteBackground>
    );
}

