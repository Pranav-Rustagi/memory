import {useEffect, useState } from "react";
import { Flex, HStack, Spacer, Text, Wrap, WrapItem } from "@chakra-ui/react"

const SoloFooter = ({time, moves}) => {
    const min = (~~(time / 60)).toString().padStart(2, "0");
    const sec = (time % 60).toString().padStart(2, "0");

    return (
        <HStack w={["80vw", "80vw", "700px", "850px"]} justify="center" spacing={7} pb={10}>
            <Flex bg="blue.pattens" rounded={6} h={12} width="25%" p={4} align="center">
                <Wrap spacing={5} w="full">
                    <WrapItem alignItems="center">
                        <Text color="gray.bermuda" fontWeight="semibold" fontSize="sm">Time</Text>
                    </WrapItem>
                    <Spacer />
                    <WrapItem>
                        <Text color="arapawa" fontWeight="bold" fontSize="2xl">{`${min}:${sec}`}</Text>
                    </WrapItem>
                </Wrap>
            </Flex>
            <Flex bg="blue.pattens" rounded={6} h={12} width="25%" p={4} align="center">
                <Wrap spacing={5} w="full">
                    <WrapItem alignItems="center">
                        <Text color="gray.bermuda" fontWeight="semibold" fontSize="sm">Moves</Text>
                    </WrapItem>
                    <Spacer />
                    <WrapItem>
                        <Text color="arapawa" fontWeight="bold" fontSize="2xl">{moves}</Text>
                    </WrapItem>
                </Wrap>
            </Flex>
        </HStack>
    )
}



const MultiPlayerFooter = ({turn, player_count}) => {
    return (
        <HStack w={["80vw", "80vw", "700px", "850px"]} justify="center" spacing={7} pb={10}>
            {
                Array(player_count).fill(0).map((_, i) => {
                    return (
                        <Flex bg="blue.pattens" rounded={6} h={12} width="25%" p={4} align="center">
                            <Wrap spacing={5} w="full">
                                <WrapItem alignItems="center">
                                    <Text color="gray.bermuda" fontWeight="semibold" fontSize="sm">{`Player ${i+1}`}</Text>
                                </WrapItem>
                                <Spacer />
                                <WrapItem>
                                    <Text color="arapawa" fontWeight="bold" fontSize="2xl">{0}</Text>
                                </WrapItem>
                            </Wrap>
                        </Flex>
                    )
                })
            }
        </HStack>
    );
}

const GameScreenFooter = ({gameState, setGameState}) => {

    const [timeTaken, setTimeTaken] = useState(0);

    useEffect(() => {
        if(gameState.player_count !== 1) return;

        const timeVar = setInterval(() => {
            if(gameState.gameOver) {
                clearInterval(timeVar);
                return;
            }

            setTimeTaken(timeTaken + 1);
        }, 1000);

        return () => clearInterval(timeVar);

    }, [gameState.gameOver, timeTaken, gameState.player_count]);

    if(gameState.player_count === 1)
        return <SoloFooter time={timeTaken} moves={gameState.solo_moves} />
    else
        return <MultiPlayerFooter turn={gameState.turn} player_count={gameState.player_count} />;
}

export default GameScreenFooter;