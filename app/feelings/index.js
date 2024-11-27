import { TitleBlock, WhiteBackground, NavigationButton } from "../../utils/objects";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { useTranslation } from "react-i18next";


function Emotion({href, image}) {
    const router = useRouter();
    const redirect = () => {
        router.push(href);
    }

    return <Pressable className="flex-1 items-center justify-center" onPress={redirect}>
        <Image source={image} style={{objectFit: "contain"}} className="h-full w-full"/>
    </Pressable>
}


export default function Emotions() {
    const { t } = useTranslation();

    return <WhiteBackground>
        <TitleBlock text={t('feelings.title')} margin={true}/>
        <NavigationButton direction="left" clickable={true}/>
        <View className="flex-1 justify-center align-middle flex-row">
            <Emotion href="/feelings/blij" image={require("../../assets/knoefy-blij.png")} />
            <Emotion href="/feelings/bang" image={require("../../assets/knoefy-bang.png")} />
            <Emotion href="/feelings/verdrietig" image={require("../../assets/knoefy-verdrietig.png")} />
            <Emotion href="/feelings/boos" image={require("../../assets/knoefy-boos.png")} />
        </View> 
    </WhiteBackground>
}
