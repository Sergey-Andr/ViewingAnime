import { Box } from "@mui/material";
import { FC } from "react";
import { HrDashed, HrLine } from "./delimeter.styled.ts";

type DelimeterProps = {
    variant?: "dashed" | "line";
};

const StyledVariants = {
    dashed: HrDashed,
    line: HrLine,
};

export const Delimeter: FC<DelimeterProps> = ({ variant = "line" }) => {
    const HrRenderer = StyledVariants[variant];

    return (
        <Box>
            <HrRenderer />
        </Box>
    );
};
