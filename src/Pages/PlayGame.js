import { Box, Spacer, VStack } from "@chakra-ui/react";
import { useState } from "react";
import GameScreenHeader from "../Components/GameScreenHeader";
import GameBoard from "../Components/GameBoard";
import GameScreenFooter from "../Components/GameScreenFooter";
import generateButtonValues from "../Helpers";


const getInitState = (player_count) => {
    const stateObj = {
        gameOver: false,
        player_count: player_count
    };

    if(player_count === 1) {
        stateObj.timeTaken = 0;
        stateObj.solo_moves = 0;
    }
    else {
        stateObj.turn = 1;
        while(player_count)
            stateObj[`p${player_count--}_matches`] = [];
    }

    return stateObj;
}

const PlayGame = (props) => {
    const state = props.history?.location?.state;

    console.log(state);
    
    const [gameState, setGameState] = useState(getInitState(+state.player_count));
    const [timeTaken, setTimeTaken] = useState(0);
    const [activeCards, setActiveCards] = useState([]);
    const [randomVals, setRandomVals] = useState(generateButtonValues(state.theme, ((+state.grid_size[0]) ** 2) / 2));

    const resetBoard = () => {
        setGameState(getInitState(+state.player_count));
        setTimeTaken(0);
        setActiveCards([]);
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
                    activeCards={activeCards}
                    setActiveCards={setActiveCards}
                />
                <Spacer />
                <GameScreenFooter 
                    timeTaken={timeTaken}
                    setTimeTaken={setTimeTaken}
                    gameState={gameState}
                    setGameState={setGameState}
                />
            </VStack>
        </Box>
    );
}

export default PlayGame;