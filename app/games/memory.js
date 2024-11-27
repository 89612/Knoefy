import { Image, View, StyleSheet, Pressable, BackHandler } from "react-native";
import { NavigationButton, TitleBlock, WhiteBackground } from "../../utils/objects";
import React, { useEffect, useState } from "react";

function Tile({tile, onClick}) {
    const opacity = tile.visible || tile.discovered ? "opacity-100" : "opacity-0"
    const background = tile.discovered ? "bg-game1" : "bg-memory"

    return <Pressable className={`rounded-xl h-1/2 w-1/6 m-1 ${background}`} onPress={onClick}>
        <Image source={tile.image} style={{objectFit: "contain"}} className={`h-full w-full ${opacity}`}/>
    </Pressable>
}

export default function Memory() {
    const tiles = [
        {
            name: "blij",
            image: require("../../assets/knoefy-blij.png")
        },
        {
            name: "bang",
            image: require("../../assets/knoefy-bang.png")
        },
        {
            name: "verdrietig",
            image: require("../../assets/knoefy-verdrietig.png")
        },
        {
            name: "boos",
            image: require("../../assets/knoefy-boos.png")
        },
        {
            name: "neutraal",
            image: require("../../assets/knoefy-neutraal.png")
        }
    ]
    const [board, setBoard] = useState([])

    useEffect(() => {
        // tile generation
        if(board.length < tiles.length * 2) {
            while(true) {
                const tile = tiles[Math.floor(Math.random() * tiles.length)]
                if(board.filter(t => t.name === tile.name).length < 2) {
                    setBoard([...board, {
                        ...tile,
                        visible: false,
                        discovered: false
                    }])
                    break
                }
            }
        }
        
        // game logic
        const visibleTiles = board.filter(tile => tile.visible)
        if(visibleTiles.length === 2) {
            if(visibleTiles[0].name === visibleTiles[1].name) {
                setBoard(board.map(tile => {
                    if(tile.name === visibleTiles[0].name) {
                        return {
                            ...tile,
                            discovered: true,
                            visible: false
                        }
                    }
                    return tile
                }))
            } else {
                setTimeout(() => {
                    setBoard(board.map(tile => {
                        if(tile.visible) {
                            return {
                                ...tile,
                                visible: false,
                                discovered: false
                            }
                        }
                        return tile
                    })
                )}, 1000)
            }
        }

        // game end
        if(board.filter(tile => !tile.discovered).length === 0 && board.length > 0) {
            setTimeout(() => {
                setBoard([])
            }, 1000)
        }
    }, [board])

    const onClick = (index) => {
        const tile = board[index]

        // if tile is already visible or discovered, return
        if(tile.visible || tile.discovered) return
        // if there are already 2 visible tiles, return
        if(board.filter(t => t.visible).length >= 2) return

        // update board
        setBoard(board.map((t, i) => {
            if(i === index) {
                return {
                    ...t,
                    visible: true
                }
            }
            return t
        }))
    }

    return <WhiteBackground height="80%" width="80%">
        <TitleBlock text="Memory" margin="8%"/>
        <NavigationButton direction="left"/>
        <View className="flex-row flex-wrap flex-1 items-center justify-center">
            {board.map((tile, index) => (
                <Tile
                    key={index} 
                    onClick={() => onClick(index)} 
                    tile={tile}
                />
            ))}
        </View>
    </WhiteBackground>
}