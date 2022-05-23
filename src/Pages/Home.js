import { Box, Button, Center, Heading, useToken, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const Home = () => {
    const [snow] = useToken("colors", ["white.snow"]);
    const divRef = useRef(null);

    useEffect(() => {
        if(divRef.current)
            divRef.current.classList.add("fadeIn");
    }, []);

    return (
        <Center h="100vh" bg="tangaroa">
            <div ref={divRef}>
                <VStack spacing={20}>
                    <Box>
                        <Heading color={"snow"} size="4xl">memory</Heading>
                    </Box>
                    
                    <Box w="full" textAlign="center">
                        <Link to="/game/new">
                            <Button
                                bg={"tangerine.dark"}
                                color={snow}
                                _hover={{ bg: "tangerine.darker", transform: "scale(1.025)" }}
                                _focus={{ outline: "none", boxShadow: "none" }}
                                _active={{ bg: "tangerine.light" }}
                                size="lg"
                                w={"60%"}
                            >
                                Start
                            </Button>
                        </Link>
                    </Box>
                </VStack>
            </div>
        </Center>
    );
}

export default Home;