import { styled, Typography } from "@mui/material";

export const GlobalTitle = styled(Typography)(() => ({
    fontWeight: "500",
    fontFamily: "sans-serif",
    fontSize: "18px",
    letterSpacing: "0.3px",
    marginBottom: "5px",
    color: "#fff",
}));

export const GlobalRelatedTitle = styled(Typography)(() => ({
    ...GlobalTitle,
    whiteSpace: "nowrap",
}));

export const GlobalRatingTitle = styled(Typography)(() => ({
    ...GlobalTitle,
    fontSize: "22px",
}));
