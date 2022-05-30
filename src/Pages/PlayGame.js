import { Box, Spacer, VStack } from "@chakra-ui/react";
import { useState } from "react";
import GameScreenHeader from "../Components/GameScreenHeader";
import GameBoard from "../Components/GameBoard";
import GameScreenFooter from "../Components/GameScreenFooter";


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
    
    const [gameState, setGameState] = useState(getInitState(+state.player_count));
    const [activeCards, setActiveCards] = useState([]);
    
    return (
        <Box h="100vh" bg="white.snow" py={[5, 7, 12]} px={[5, 10, 20]}>
            <VStack h="full" justify="start">
                <GameScreenHeader history={props.history} />
                <Spacer />
                <GameBoard 
                    state={state} 
                    gameState={gameState} 
                    setGameState={setGameState} 
                    activeCards={activeCards}
                    setActiveCards={setActiveCards}
                />
                <Spacer />
                <GameScreenFooter 
                    gameState={gameState} 
                    setGameState={setGameState} 
                />
            </VStack>
        </Box>
    );
}

export default PlayGame;