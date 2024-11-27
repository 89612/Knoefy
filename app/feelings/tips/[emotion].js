import { Pressable, View, Text } from "react-native";
import { TitleBlock, WhiteBackground, NavigationButton } from "../../../utils/objects";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useLocalSearchParams } from "expo-router";

function Tip({ color, tip, opened, setOpened, i }) {
    const onPress = () => {
        if (opened === i) {
            return setOpened(null);
        }
        setOpened(i);
    };

    return (
        <Pressable
            className={`w-2/5 p-2 ${opened === i ? 'absolute inset-0 z-10  h-[102%] w-full' : 'relative h-48 '} ${color} rounded-xl justify-center items-center mr-4 mb-5 -mt-2`}
            onPress={onPress}
            key={i}
        >
            <Text className="text-black text-4xl font-caveat text-center">{`Tip ${i + 1}`}</Text>
            {opened === i && (
                <Text className="text-black font-caveat text-4xl p-4 text-center">{tip}</Text>
            )}
        </Pressable>
    );
}

export default function Tips() {
    const { emotion } = useLocalSearchParams();
    const [opened, setOpened] = useState(null);
    const { t } = useTranslation();

    const colors = {
        0: "bg-tip1",
        1: "bg-tip2",
        2: "bg-tip3",
        3: "bg-tip4",
    }

    return (
        <WhiteBackground>
            <TitleBlock text={t('tips.title')} margin={true} />
            <NavigationButton direction="left" />
            <View className="flex-1 flex-wrap flex-row items-start justify-center m-2 mt-10">
                {t(`tips.${emotion}`, { returnObjects: true }).map((tip, i) => (
                    <Tip
                        color={colors[i]}
                        tip={tip}
                        opened={opened}
                        setOpened={setOpened}
                        i={i}
                        key={i}
                    />
                ))}
            </View>
        </WhiteBackground>
    );
}
