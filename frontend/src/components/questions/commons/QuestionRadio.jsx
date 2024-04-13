// question/QuestionOption.jsx
import React from "react";
// import { Grid, RadioGroup, FormControlLabel, Radio, FormControl, Select, MenuItem
// } from "@mui/material";

// export const QuestionRadio = ({ QuestionOption }) => {
//     // if there are more than 6 options, use a dropdown instead of radio buttons
//     if (QuestionOption.length <= 6) {
//         return (
//             <RadioGroup row>
//                 {QuestionOption.map((option, optionIndex) => (
//                     <Grid item xs={4} key={optionIndex}>
//                         <FormControlLabel
//                             value={optionIndex}
//                             control={<Radio />}
//                             label={option}
//                             />
//                     </Grid>
//                 ))}
//             </RadioGroup>
//         );
//     }
//     else {
//         return (
//             <FormControl fullWidth>
//                 <Select>
//                     {QuestionOption.map((option, optionIndex) => (
//                         <MenuItem value={optionIndex} key={optionIndex}>
//                             {option}
//                         </MenuItem>
//                     ))}
//                 </Select>
//             </FormControl>
//         );
//     }
// };

import { Text, Radio, Select, Group, Grid } from "@mantine/core";
export const QuestionRadio = ({ QuestionOption }) => {
    // if there are more than 6 options, use a dropdown instead of radio buttons
    if (QuestionOption.length <= 6) {
        return (
            <Radio.Group>
                <Grid>
                    {QuestionOption.map((option, optionIndex) => (
                        <Grid.Col span={12} /*span={{ xs: 12, md: 6, lg: 4}}*/ justify="center" key={optionIndex}>
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
            <Select
                data={QuestionOption}
                placeholder="Select an option"
            ></Select>     
        );
    }
};
