import { styled, Typography } from "@mui/material";

export const GlobalLabel = styled(Typography)(() => ({
    fontWeight: "500",
    fontFamily: "sans-serif",
    fontSize: "22px",
    padding: "10px 10px 5px 10px",
    letterSpacing: "0.3px",
    color: "#fff",
}));

export const GlobalStatisticsLabel = styled(Typography)(() => ({
    ...GlobalLabel,
    textAlign: "center",
    marginBottom: "10px",
}));
