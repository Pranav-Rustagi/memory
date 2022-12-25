import { Box, Spacer, VStack } from "@chakra-ui/react";
import { useState } from "react";
import GameScreenHeader from "../Components/GameScreenHeader";
import GameBoard from "../Components/GameBoard";
import GameScreenFooter from "../Components/GameScreenFooter";
import generateButtonValues from "../Helpers";
import GameScoreBoard from "../Components/GameScoreBoard";
import GameMenu from "../Components/GameMenu";


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
    const [showMenu, setShowMenu] = useState(false);

    const resetBoard = () => {
        setGameState(getInitState(+state.player_count));
        setTimeTaken(0);
        setRandomVals(generateButtonValues(state.theme, ((+state.grid_size[0]) ** 2) / 2));
        setShowMenu(false);
    }

    return (
        <Box h="100vh" bg="white.snow" py={[5, 7, 12]} px={[5, 10, 20]}>
            <VStack h="full" justify="start">
                <GameScreenHeader history={props.history} resetBoard={resetBoard} setShowMenu={setShowMenu} />
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
                    <GameScoreBoard gameState={gameState} history={props.history} resetBoard={resetBoard} timeTaken={timeTaken} />
                )
            }
            {
                showMenu && (
                    <GameMenu resetBoard={resetBoard} history={props.history} setShowMenu={setShowMenu} />
                )
            }
        </Box>
    );
}

export default PlayGame;