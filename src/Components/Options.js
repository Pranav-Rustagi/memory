import { SimpleGrid, useRadioGroup } from "@chakra-ui/react"
import RadioCard from "./RadioCard";

const Options = ({ optionList, property, onChangeHandler }) => {
    const { getRootProps, getRadioProps } = useRadioGroup({
        name: property,
        defaultValue: optionList[0],
        onChange: onChangeHandler
    })

    const groupProps = getRootProps();

    return (
        <SimpleGrid columns={optionList.length} spacing={4} {...groupProps}>
            {
                optionList.map((value) => {
                    const radioProps = getRadioProps({ value });
                    return (
                        <RadioCard key={value} {...radioProps}>
                            {value}
                        </RadioCard>
                    )
                })
            }
        </SimpleGrid>
    )
};

export default Options;