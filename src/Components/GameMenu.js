import { Box, Button, Center, Container, VStack } from "@chakra-ui/react";

const GameMenu = ({ resetBoard, history, setShowMenu }) => {
    return (
        <Center h="100vh"
            pos="fixed" w="100vw"
            left="0" top="0"
            _after={{ h: "100vh", w: "100vw", content: "''", bg: "tangaroa", pos: "fixed", left: "0", top: "0", opacity: 0.7, zIndex: 50 }}
        >
            <Container zIndex={100}>
                <Box bg="white.snow" maxW={["95%", "450px", "500px"]} p={10} borderRadius={15} w="full" textAlign="center" mx="auto">
                    <VStack spacing={4}>
                        <Button
                            bg={"tangerine.dark"}
                            color="white.snow"
                            rounded="full"
                            _hover={{ bg: "tangerine.faded" }}
                            _focus={{ outline: "none", boxShadow: "none" }}
                            _active={{ transform: "scale(0.95)" }}
                            px={6}
                            w="full"
                            onClick={() => setShowMenu(show => !show)}
                        >
                            Resume
                        </Button>
                        <Button
                            bg={"blue.pattens"}
                            color="arapawa"
                            rounded="full"
                            _hover={{ bg: "shakespeare", color: "white.snow" }}
                            _focus={{ outline: "none", boxShadow: "none" }}
                            _active={{ bg: "shakespeare", color: "white.snow", transform: "scale(0.95)" }}
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
                    </VStack>
                </Box>
            </Container>
        </Center>
    );
}

export default GameMenu;