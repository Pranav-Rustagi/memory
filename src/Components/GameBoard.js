import { Button, SimpleGrid } from "@chakra-ui/react";

const GameBoard = ({state}) => {
    const size = +state.grid_size[0];
    return (
        <SimpleGrid columns={size} w={["80vw", "70vw", "55vh"]} h={["80vw", "70vw", "55vh"]} maxH="400px" maxW="400px" gap={8 - size}>
            {
                [...Array(size * size).keys()].map(el => {
                    return (
                        <Button rounded="full" h="full" bg="arapawa" color="white.snow" fontSize="2rem">
                            
                        </Button>
                    )
                })
            }
        </SimpleGrid>
    );
}

export default GameBoard;