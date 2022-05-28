import { Box, Button, VStack } from "@chakra-ui/react";
import { useState } from "react";
import FormField from "./FormField"

const GameStateForm = ({history}) => {
    const [gameState, setGameState] = useState({
        theme: "icons",
        player_count: '1',
        grid_size: "4x4"
    });

    return (
        <Box bg="white.snow" maxW={["95%", "450px", "500px"]} p={7} borderRadius={15} w="full">
            <form>
                <VStack spacing={7}>
                    <VStack spacing={5} w="full">
                        <FormField
                            property="theme"
                            labelText="Select Theme"
                            optionList={["Icons", "Numbers"]}
                            setGameState={setGameState}
                        />
                        <FormField
                            property="player_count"
                            labelText="Number of Players"
                            optionList={["1", "2", "3", "4"]}
                            setGameState={setGameState}
                        />
                        <FormField
                            property="grid_size"
                            labelText="Grid Size"
                            optionList={["4x4", "6x6"]}
                            setGameState={setGameState}
                        />
                    </VStack>

                    <Button
                        bg={"tangerine.dark"}
                        color="white.snow"
                        rounded="full"
                        fontSize="1.35rem"
                        _hover={{ bg: "tangerine.darker" }}
                        _focus={{ outline: "none", boxShadow: "none" }}
                        _active={{ bg: "tangerine.light" }}
                        size="lg"
                        w="full"
                        onClick={() => {
                            history.replace("/game/play", gameState);
                        }}
                    >
                        Start Game
                    </Button>
                </VStack>
            </form>
        </Box>
    );
};

export default GameStateForm;   