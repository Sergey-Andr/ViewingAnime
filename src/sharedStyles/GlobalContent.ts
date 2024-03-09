import { styled, Typography } from "@mui/material";

export const GlobalContent = styled(Typography)(() => ({
    fontWeight: "500",
    fontFamily: "sans-serif",
    fontSize: "18px",
    letterSpacing: "0.3px",
    color: "#D7D7D7CC",
}));

export const GlobalStatusContent = styled(Typography)(() => ({
    ...GlobalContent,
    fontSize: "16px",
}));
