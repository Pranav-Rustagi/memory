import { Box, useRadio } from "@chakra-ui/react";

const RadioCard = (props) => {
    const { getInputProps, getCheckboxProps } = useRadio(props);
    const inputProps = getInputProps();
    const checkboxProps = getCheckboxProps();

    return (
        <Box as="label" w="full">
            <input {...inputProps} />
            <Box
                {...checkboxProps}
                cursor="pointer"
                borderRadius={20}
                fontWeight="semibold"
                fontSize="1.1rem"
                textAlign="center"
                bg="spindle"
                color="white.snow"
                _hover={{ bg: "shakespeare" }}
                _checked={{ bg: "arapawa" }}
                py={1.5}
            >
                { props.children }
            </Box>
        </Box>
    );
}

export default RadioCard;