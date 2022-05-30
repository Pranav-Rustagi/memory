import {useEffect, useState } from "react";
import { Flex, HStack, Text } from "@chakra-ui/react"

const SoloFooter = ({time, moves}) => {
    const min = (~~(time / 60)).toString().padStart(2, "0");
    const sec = (time % 60).toString().padStart(2, "0");

    return (
        <HStack w={["80vw", "80vw", "700px", "850px"]} justify="center" spacing={[2, 4, 4, 7]}  pb={10}>
            <Flex bg="blue.pattens" rounded={6} width={["50%", "25%"]} px={4} py={3} align="center" justify="space-between" direction={["column", "column", "row"]}>
                <Text color="gray.bermuda" fontWeight="semibold" fontSize="sm">Time</Text>
                <Text color="arapawa" fontWeight="bold" fontSize={["xl", "xl", "2xl"]}>{`${min}:${sec}`}</Text>
            </Flex>
            <Flex bg="blue.pattens" rounded={6} width={["50%", "25%"]} px={4} py={3} align="center" justify="space-between" direction={["column", "column", "row"]}>
                <Text color="gray.bermuda" fontWeight="semibold" fontSize="sm">Moves</Text>
                <Text color="arapawa" fontWeight="bold" fontSize={["xl", "xl", "2xl"]}>{moves}</Text>
            </Flex>
        </HStack>
    )
}



const MultiPlayerFooter = ({turn, player_count}) => {
    return (
        <HStack w={["80vw", "80vw", "700px", "850px"]} justify="center" spacing={[2, 4, 4, 7]} pb={10}>
            {
                Array(player_count).fill(0).map((_, i) => {
                    const bg = turn === i + 1 ? "tangerine.light" : "blue.pattens";
                    const lblColor = turn === i + 1 ? "white.snow" : "gray.bermuda";
                    const scoreColor = turn === i + 1 ? "white.snow" : "arapawa";
                    const active = turn === i + 1 ? "active" : "";
                    const afterPseudo = turn === i + 1 ? [{}, {}, { content: "'current turn'" }] : {};

                    return (
                        <Flex bg={bg} rounded={6} width="25%" px={4} py={2} align="center" justify="space-between" direction={["column", "column", "row"]} className={active} _after={afterPseudo}>
                            <Text color={lblColor} fontWeight="semibold" fontSize="sm" display={["none", "none", "block"]}>{`Player ${i+1}`}</Text>
                            <Text color={lblColor} fontWeight="semibold" fontSize="sm" display={["block", "block", "none"]}>{`P${i+1}`}</Text>
                            <Text color={scoreColor} fontWeight="bold" fontSize="2xl">{0}</Text>
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