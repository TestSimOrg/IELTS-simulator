// question/QuestionOption.jsx
import React from "react";
import { Text, Radio, Select, Group, Grid } from "@mantine/core";
export const QuestionRadio = ({ QuestionOption }) => {
    // if there are more than 6 options, use a dropdown instead of radio buttons
    if (QuestionOption.length <= 6) {
        return (
            <Radio.Group>
                <Grid pt={10}>
                    {QuestionOption.map((option, optionIndex) => (
                        <Grid.Col pl={20} span={12} justify="center" key={optionIndex}>
                            <Radio
                                value={option}
                                label={option}
                                iconColor="gray.5"
                                color="rgba(0, 255, 8, 1)"
                                variant="outline"
                            ></Radio>
                        </Grid.Col>
                    ))}
                </Grid>
            </Radio.Group>
        );
    } else {
        return (
            <div>
                <Select
                    data={QuestionOption}
                    placeholder="Select an option"
                    ml={"15%"}
                    mr={"15%"}
                    comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 }, shadow: 'md' }}
                ></Select>     
            </div>
        );
    }
};
