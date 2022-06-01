import { Button, SimpleGrid } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GameBoard = ({state, randomVals}) => {
    const size = +state.grid_size[0];
    const buttonStyle = { bg: "arapawa", color: "white.snow" };

    return (
        <SimpleGrid columns={size} w={["80vw", "70vw", "55vh"]} h={["80vw", "70vw", "55vh"]} maxH="400px" maxW="400px" gap={8 - size}>
            {
                [...Array(size * size).keys()].map((el, ind) => {
                    return (
                        <Button key={el} rounded="full" h="full" bg="arapawa" color="white.snow" fontSize="2rem"
                            _hover={buttonStyle} _active={buttonStyle} _focus={buttonStyle}
                        >
                            {
                                state.theme === "numbers" ? 
                                randomVals[ind] :
                                <FontAwesomeIcon icon={randomVals[ind]} />
                            }
                        </Button>
                    )
                })
            }
        </SimpleGrid>
    );
}

export default GameBoard;