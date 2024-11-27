import { View, StyleSheet, Pressable, Text, Image } from "react-native";
import { NavigationButton, TitleBlock, WhiteBackground } from "../../utils/objects";
import { useState, useEffect } from "react";

export default function Tictactoe() {
    const [tiles, setTiles] = useState(Array(9).fill(0));
    const [state, setState] = useState(0);

    function checkState() {
        const combinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
            [0, 4, 8], [2, 4, 6] // Diagonal
        ];
        
        for (let combination of combinations) {
            const [a, b, c] = combination;
            if (tiles[a] && tiles[a] === tiles[b] && tiles[a] === tiles[c]) {
                return tiles[a];
            }
        }
        return tiles.includes(0) ? 0 : -1; // Return -1 for a draw
    }

    useEffect(() => {
        const state = checkState();
        
        if(state !== 0) {
            setState(state)
            setTimeout(() => {
                setTiles(Array(9).fill(0))
                setState(0);
            }, 2000);
        } else {
            setTimeout(() => {
                if (tiles.filter(tile => tile === 1).length > tiles.filter(tile => tile === 2).length) {
                    const emptyTiles = tiles.map((tile, i) => tile === 0 ? i : -1).filter(i => i !== -1);
                    if (emptyTiles.length > 0) {
                        const randomIndex = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
                        setTiles(prevTiles => prevTiles.map((tile, i) => i === randomIndex ? 2 : tile));
                    }
                }
            }, 600);
        }
    }, [tiles]);

    function onPress(index) {
        const tileCount1 = tiles.filter(tile => tile === 1).length 
        const tileCount2 = tiles.filter(tile => tile === 2).length
        if (tiles[index] === 0 && tileCount1 === tileCount2 && state === 0) {
            setTiles(prevTiles => prevTiles.map((tile, i) => i === index ? 1 : tile));
        }
    }
{/*<Text className="font-caveat text-3xl text-center">{tiles[i] == 1 ? "X" : "O"}</Text>}*/}
    return (
        <WhiteBackground>
            <TitleBlock text="Boter, Kaas en Eieren" margin="8%" />
            <NavigationButton direction="left" />
            <View className="flex-1 flex-row justify-center items-center"> 
                <View className="basis-3/5 h-full flex-row flex-wrap ">
                    {Array(9).fill(0).map((_, i) => (
                        <View className="basis-[33%] h-1/3" key={i}>
                            <Pressable onPress={() => onPress(i)} className={`flex-1 m-1  rounded-xl justify-center ${tiles[i] == 0 ? "bg-board1" : "bg-board2"}`}>
                                {tiles[i] != 0 && <Text className="font-caveat text-3xl text-center">{tiles[i] == 1 ? "X" : "O"}</Text>}
                            </Pressable>
                        </View>
                    ))}
                </View>
                <View className="basis-2/5 h-full ml-5">
                    <View className="basis-1/4 items-center justify-center">
                        <View className="bg-secondary rounded-2xl h-4/5 w-11/12 justify-center ">
                            <View className="w-0 h-0 
                                border-l-[50px] border-l-transparent
                                border-t-[75px] border-t-secondary
                                border-r-[50px] border-r-transparent
                                top-[70%] absolute self-center">
                            </View> 
                            <Text className="font-caveat text-3xl text-center text-black">
                                {state === 0 ? "Jouw beurt!" : state === 1 ? "Jij hebt gewonnen!" : state === 2 ? "Ik heb gewonnen!" : "Gelijkspel!"}
                            </Text>
                        </View>
                    </View>
                    <View className="basis-3/4 h-full justify-center items-center">
                        <Image style={{objectFit: "contain"}} className="h-full w-full" source={
                            state === 0 || state >= 2 ? require("../../assets/knoefy-blij.png") : require("../../assets/knoefy-blij.png")
                        } />
                    </View>
                </View>
            </View>
        </WhiteBackground>
    );
}

