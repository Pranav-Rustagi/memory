import { theme } from "@chakra-ui/react";
import { Center, Container, VStack } from "@chakra-ui/react";
import Logo from "../Components/Logo";
import GameStateForm from "../Components/GameStateForm";

const NewGame = (props) => {
    return (
        <Center h="100vh" bg="tangaroa">
            <Container>
                <VStack spacing={10}>
                    <Logo fill={theme.colors?.white?.snow  || "#fff"} />
                    <GameStateForm history={props.history} />
                </VStack>
            </Container>
        </Center>
    );
}

export default NewGame;