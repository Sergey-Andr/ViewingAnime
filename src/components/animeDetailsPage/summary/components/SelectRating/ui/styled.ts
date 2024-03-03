import { Box, styled } from "@mui/material";

export const SelectRatingWrapper = styled(Box)(() => ({
    display: "flex",
    borderLeft: "0",
    width: "fit-content",
    borderRadius: "5px",
    marginBottom: "15px",
}));

export const StarContainer = styled(Box)(() => ({
    border: "1px solid #91979E",
    background: "#000000B3",
}));
