import { Button, HStack, Show, Spacer } from "@chakra-ui/react"
import Logo from "./Logo"

const GameScreenHeader = ({ history, resetBoard, setShowMenu }) => {
    
    return (
        <HStack w={["80vw", "80vw", "700px", "850px"]}>
            <Logo fill="#000" h="24" />
            <Spacer />
            <Show above="sm">
                <HStack spacing={5}>
                    <Button
                        bg={"tangerine.dark"}
                        color="white.snow"
                        rounded="full"
                        _hover={{ bg: "tangerine.faded" }}
                        _focus={{ outline: "none", boxShadow: "none" }}
                        _active={{ transform: "scale(0.95)" }}
                        px={6}
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
                        onClick={() => {
                            history.replace("/game/new");
                        }}
                    >
                        New Game
                    </Button>
                </HStack>
            </Show>
            <Show below="sm">
                <Button
                    bg={"tangerine.dark"}
                    color="white.snow"
                    rounded="full"
                    _hover={{ bg: "tangerine.faded" }}
                    _focus={{ outline: "none", boxShadow: "none" }}
                    _active={{ transform: "scale(0.95)" }}
                    px={6}
                    onClick={() => {
                        setShowMenu((showMenu) => !showMenu);
                    }}
                >
                    Menu
                </Button>
            </Show>
        </HStack>
    );
}

export default GameScreenHeader;