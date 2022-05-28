import { Center, Container, useToken, VStack } from "@chakra-ui/react";
import Logo from "../Components/Logo";
import GameStateForm from "../Components/GameStateForm";

const NewGame = (props) => {
    const [snow] = useToken("colors", ["white.snow"]);
    return (
        <Center h="100vh" bg="tangaroa">
            <Container>
                <VStack spacing={10}>
                    <Logo fill={snow} h="28" />
                    <GameStateForm history={props.history} />
                </VStack>
            </Container>
        </Center>
    );
}

export default NewGame;