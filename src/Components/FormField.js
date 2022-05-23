import { FormControl } from "@chakra-ui/react";
import Label from "./Label";
import Options from "./Options";

const FormField = ({ property, labelText, optionList, setGameState }) => {
    const onChangeHandler = (val) => {
        setGameState(gameState => ({
            ...gameState,
            [property]: val
        }));
    };

    return (
        <FormControl>
            <Label htmlFor={property} labelText={labelText} />
            <Options
                property={property}
                optionList={optionList}
                onChangeHandler={onChangeHandler}
            />
        </FormControl>
    );
}

export default FormField;