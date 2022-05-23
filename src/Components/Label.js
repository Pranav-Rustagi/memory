import { FormLabel } from "@chakra-ui/react";

const Label = ({htmlFor, labelText}) => {
    return (
        <FormLabel htmlFor={htmlFor} fontWeight="semibold" color="gray.bermuda">
            {labelText}
        </FormLabel>
    );
}

export default Label;