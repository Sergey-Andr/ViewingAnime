import { Box, styled } from "@mui/material";

export const Hr = styled(Box)(() => ({
    height: "3px",
    background: "#3D3737",
    width: "100%",
}));

export const HrReview = styled(Box)(() => ({
    height: "2px",
    background: "#91979E",
    width: "100%",
    marginBottom: "15px",
}));

export const HrDashed = styled(Box)(() => ({
    height: "3px",
    width: "100%",
    borderTop: "2px dashed #d1d5da",
}));
