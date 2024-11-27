import { TitleBlock, WhiteBackground, NavigationButton } from "../../utils/objects";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { useRouter } from "expo-router";
import { useTranslation } from "react-i18next";

function Game({name, href, color}) {
    const router = useRouter();
    const redirect = () => {
        router.push(href);
    }

    return <Pressable className={`flex-1 rounded-xl h-1/2 w-[95%] ${color} m-4 justify-center`} onPress={redirect}>
        <Text className="text-center font-caveat text-xl lg:text-4xl">{name}</Text>
    </Pressable>
}

export default function Games() {
    const { t } = useTranslation();
    
    return <WhiteBackground>
        <TitleBlock text={t('games.title')} margin={true}/>
        <NavigationButton direction="left" />
        <View className="flex-1 flex-column flex-wrap items-center justify-center w-full">
            <Game name={t('games.memory')} href="/games/memory" color="bg-game1"/>
            <Game name={t('games.tictactoe')} href="/games/tictactoe" color="bg-game2"/>
            {

                //<Game name="Tic Tac Toe" href="/tictactoe" color="#e36464"/>
                //<Game name="Tic Tac Toe" href="/tictactoe" color="#FFDE59"/>
            }
        </View>
    </WhiteBackground>
}

