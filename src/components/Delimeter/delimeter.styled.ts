import { Box, styled } from "@mui/material";

export const HrLine = styled(Box)(() => ({
    height: "2px",
    background: "#11212e",
    width: "100%",
}));

export const HrDashed = styled(Box)(() => ({
    height: "2px",
    background: "none",
    borderTop: "2px dashed #d1d5da",
    width: "100%",
}));
