import { Box, styled } from "@mui/material";

export const ContainerItem = styled(Box)(() => ({
    background: "#221F1F",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    ":hover": {
        background: "#332e2e",
    },
}));
export const ItemText = styled(Box)(() => ({
    fontFamily: "sans-serif",
    color: "#fff",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
}));
