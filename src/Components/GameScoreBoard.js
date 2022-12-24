import { Box, Button, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";

const GameScoreBoard = ({ timeTaken, gameState, resetBoard, history }) => {
    const min = (~~(timeTaken / 60)).toString().padStart(2, "0");
    const sec = (timeTaken % 60).toString().padStart(2, "0");
    let count = 0, winner = -1;
    if (gameState.player_count > 1) {
        for (let i = 1; i <= gameState.player_count; i++) {
            if (gameState[`player${i}`].matches === gameState.high_score) {
                count++;
                winner = i;
            }
        }
    }

    return (
        <Box bg="white.snow" maxW={["95%", "450px", "500px"]} p={10} borderRadius={15} w="full" textAlign="center">
            <VStack spacing={7} w="100%">
                <VStack spacing={4}>
                    <Heading>
                        {
                            gameState.player_count === 1 ?
                                "You did it!" :
                                (count === 1 ? "Player " + winner + " won!" : "It's a tie!")
                        }
                    </Heading>
                    <Text color="gray.bermuda" fontSize="sm" fontWeight="bold">
                        Game over!
                        {
                            gameState.player_count === 1 ? " Here's how you got on" : " Here are the results"

                        }
                    </Text>
                </VStack>
                {
                    gameState.player_count === 1 ?
                        (
                            <VStack spacing={2} w="100%">
                                <Flex bg="blue.pattens" rounded={6} w="100%" px={4} py={3} align="center" justify="space-between" direction={["column", "column", "row"]}>
                                    <Text color="gray.bermuda" fontWeight="semibold" fontSize="sm">Time Elapsed</Text>
                                    <Text color="arapawa" fontWeight="bold" fontSize={["xl", "xl", "2xl"]}>{`${min}:${sec}`}</Text>
                                </Flex>
                                <Flex bg="blue.pattens" rounded={6} w="100%" px={4} py={3} align="center" justify="space-between" direction={["column", "column", "row"]}>
                                    <Text color="gray.bermuda" fontWeight="semibold" fontSize="sm">Moves Taken</Text>
                                    <Text color="arapawa" fontWeight="bold" fontSize={["xl", "xl", "2xl"]}>{`${gameState.solo_moves}`}</Text>
                                </Flex>
                            </VStack>
                        ) :
                        (
                            <VStack spacing={2} w="100%">
                                {
                                    [...Array(gameState.player_count).keys()].sort((a, b) => {
                                        return gameState[`player${b + 1}`].matches - gameState[`player${a + 1}`].matches;
                                    }).map((player) => {
                                        const isWinner = gameState[`player${player + 1}`].matches === gameState.high_score;
                                        const background = isWinner ? "arapawa" : "blue.pattens";
                                        const [color1, color2] = isWinner ? ["white.snow", "white.snow"] : ["gray.bermuda", "arapawa"];
                                        return (
                                            <Flex bg={background} rounded={6} w="100%" px={4} py={3} align="center" justify="space-between" direction={["column", "column", "row"]}>
                                                <Text color={color1} fontWeight="semibold" fontSize="sm">{`Player ${player + 1} ${isWinner ? "(Winner)" : ""}`}</Text>
                                                <Text color={color2} fontWeight="bold" fontSize={["xl", "xl", "2xl"]}>{gameState[`player${player + 1}`].matches} Pair{(gameState[`player${player + 1}`].matches > 1) && "s"}</Text>
                                            </Flex>
                                        );
                                    })
                                }
                            </VStack>
                        )
                }
                <HStack w="100%" spacing={5}>
                    <Button
                        bg={"tangerine.dark"}
                        color="white.snow"
                        rounded="full"
                        size="lg"
                        _hover={{ bg: "tangerine.faded" }}
                        _focus={{ outline: "none", boxShadow: "none" }}
                        _active={{ transform: "scale(0.95)" }}
                        px={6}
                        w="full"
                        onClick={resetBoard}
                    >
                        Restart
                    </Button>
                    <Button
                        bg={"blue.pattens"}
                        color="arapawa"
                        rounded="full"
                        size="lg"
                        _hover={{ bg: "shakespeare", color: "white.snow" }}
                        _focus={{ outline: "none", boxShadow: "none" }}
                        _active={{ bg: "shakespeare", color: "white.snow", transform: "scale(0.95)" }}
                        px={6}
                        w="full"
                        onClick={() => {
                            history.replace("/game/new");
                        }}
                    >
                        New Game
                    </Button>
                </HStack>
            </VStack>
        </Box>
    );
}

export default GameScoreBoard;