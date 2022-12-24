import { Button, SimpleGrid } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useMemo } from "react";

const GameBoard = ({ state, gameState, setGameState, randomVals }) => {
    const size = +state.grid_size[0];
    const fontSize = size === 4 ? "2rem" : "1.5rem";
    const afterPseudo = {
        content: "''",
        width: "100%",
        height: "100%",
        borderRadius: "100%",
        backgroundColor: "arapawa",
        position: "absolute",
        transition: "0.5s"
    };

    const hoverStyle = {
        _after: { ...afterPseudo, backgroundColor: "shakespeare" },
    }

    const boardVals = useMemo(() => {
        if (state.theme === "numbers") {
            return [...randomVals];
        } else {
            return randomVals.map(val => <FontAwesomeIcon icon={val} />);
        }
    }, [randomVals, state.theme]);

    const move = useCallback((index) => {
        if (gameState.player_count === 1) {
            setGameState((prevState) => {
                const newState = { ...prevState };
                newState.active.push(index);
                if (newState.active.length === 2) {
                    newState.solo_moves++;
                    setTimeout(() => {
                        const first = JSON.stringify(randomVals[newState.active[0]]);
                        const second = JSON.stringify(randomVals[newState.active[1]]);
                        setGameState((prevState) => {
                            const newState = { ...prevState };
                            if (first === second) {
                                newState.matched.push(newState.active[0], newState.active[1]);
                            }
                            newState.active = [];
                            if(newState.matched.length === randomVals.length) {
                                newState.gameOver = true;
                            }
                            return newState;
                        });
                    }, 1000);
                }
                return newState;
            });
        } else {
            setGameState((prevState) => {
                const stateObj = {...prevState};
                stateObj.active.push(index);

                if(stateObj.active.length === 2) {
                    stateObj[`player${stateObj.turn}`].moves++;
                    setTimeout(() => {
                        const first = JSON.stringify(randomVals[stateObj.active[0]]);
                        const second = JSON.stringify(randomVals[stateObj.active[1]]);
                        setGameState((prevState) => {
                            let stateObj = {...prevState};
                            if (first === second) {
                                stateObj[`player${stateObj.turn}`].matches++;
                                stateObj.high_score = Math.max(stateObj.high_score, stateObj[`player${stateObj.turn}`].matches);
                                stateObj.matched.push(stateObj.active[0], stateObj.active[1]);
                            }
                            stateObj.turn = stateObj.turn === stateObj.player_count ? 1 : stateObj.turn + 1;
                            stateObj.active = [];
                            if(stateObj.matched.length === randomVals.length) {
                                stateObj.gameOver = true;
                            }
                            return stateObj;
                        })
                    }, 1000);
                }

                return stateObj;
            });
        }
    }, [setGameState, randomVals, gameState]);

    return (
        <SimpleGrid columns={size} w={["80vw", "70vw", "55vh"]} h={["80vw", "70vw", "55vh"]} maxH="400px" maxW="400px" gap={8 - size} position="relative">
            {
                boardVals.map((el, i) => {
                    const disable = gameState.matched.includes(i) || gameState.active.includes(i);
                    let after = { ...afterPseudo };
                    if (disable) {
                        after.transform = "scale(0)!important";
                    }
                    return (
                        <Button key={i} rounded="full" h="full" className="game-button"
                            bg={gameState.matched.includes(i) ? "spindle" : "tangerine.light"}
                            color="white.snow" fontSize={fontSize}
                            _after={after} _hover={hoverStyle}
                            onClick={() => {
                                if (!disable && gameState.active.length < 2) {
                                    move(i);
                                }
                            }}
                        >
                            {el}
                        </Button>
                    )
                })
            }
        </SimpleGrid>
    );
}

export default GameBoard;