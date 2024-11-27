import React from "react";
import { Link, useRouter } from "expo-router";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { TitleBlock, WhiteBackground, WhiteBackgroundPlain, Background } from "../utils/objects";
import { useTranslation } from "react-i18next";

// component for each button that redirects to the other pages
function PageButton({href, photo}) {
    const router = useRouter();
    const click = () => {
        router.push(href);
    }

    return (
        <Pressable className="rounded-full bg-buttons h-1/2 aspect-square" onPress={click}>
            <Image className="h-full w-full object-contain" source={photo}/>
        </Pressable>
    );
}

export default function Index() {
    const { t } = useTranslation();

    return <WhiteBackground center={false}>
        <TitleBlock text={t("index.title")} arrow={true}/>
        <View className="flex-1 justify-around items-center flex-row h-full">
            <PageButton href="/feelings" photo={require("../assets/feelings.png")} />
            <PageButton href="/games" photo={require("../assets/game.png")} />
            <PageButton href="/films" photo={require("../assets/movie.png")} />
        </View>
    </WhiteBackground>
}