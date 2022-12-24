import { Box, Center, Container, Spacer, VStack } from "@chakra-ui/react";
import { useState } from "react";
import GameScreenHeader from "../Components/GameScreenHeader";
import GameBoard from "../Components/GameBoard";
import GameScreenFooter from "../Components/GameScreenFooter";
import generateButtonValues from "../Helpers";
import GameScoreBoard from "../Components/GameScoreBoard";


const getInitState = (player_count) => {
    const stateObj = {
        gameOver: false,
        player_count: player_count,
        matched: [],
        active: []
    };

    if (player_count === 1) {
        stateObj.solo_moves = 0;
    }
    else {
        stateObj.turn = 1;
        stateObj.high_score = -1;
        for (let i = 1; i <= player_count; i++) {
            stateObj[`player${i}`] = { matches: 0, moves: 0 };
        }
    }

    return stateObj;
}

const PlayGame = (props) => {
    const state = props.history?.location?.state;

    const [gameState, setGameState] = useState(getInitState(+state.player_count));
    const [timeTaken, setTimeTaken] = useState(0);
    const [randomVals, setRandomVals] = useState(generateButtonValues(state.theme, ((+state.grid_size[0]) ** 2) / 2));

    const resetBoard = () => {
        setGameState(getInitState(+state.player_count));
        setTimeTaken(0);
        setRandomVals(generateButtonValues(state.theme, ((+state.grid_size[0]) ** 2) / 2));
    }

    return (
        <Box h="100vh" bg="white.snow" py={[5, 7, 12]} px={[5, 10, 20]}>
            <VStack h="full" justify="start">
                <GameScreenHeader history={props.history} resetBoard={resetBoard} />
                <Spacer />
                <GameBoard
                    randomVals={randomVals}
                    state={state}
                    gameState={gameState}
                    setGameState={setGameState}
                />
                <Spacer />
                <GameScreenFooter
                    timeTaken={timeTaken}
                    setTimeTaken={setTimeTaken}
                    gameState={gameState}
                    setGameState={setGameState}
                />
            </VStack>
            {
                gameState.gameOver && (
                    <Center h="100vh"
                        pos="fixed" w="100vw" 
                        left="0" top="0"
                        _after={{ h: "100vh", w: "100vw", content: "''", bg: "tangaroa", pos: "fixed", left: "0", top: "0", opacity: 0.7, zIndex: 50 }}
                    >
                        <Container zIndex={100}>
                            <GameScoreBoard gameState={gameState} history={props.history} resetBoard={resetBoard} timeTaken={timeTaken} />
                        </Container>
                    </Center>
                )
            }
        </Box>
    );
}

export default PlayGame;