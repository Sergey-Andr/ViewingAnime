import { Box, styled } from "@mui/material";

export const ContainerItem = styled(Box)(() => ({
    background:
        "linear-gradient(to bottom, rgba(17, 33, 46, 0.8) 0%, #11212e 400px),#0e6655",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    ":hover": {
        background:
            "linear-gradient(to bottom, rgba(37, 53, 66, 0.8) 0%, #11212e 400px), #0e6655",
    },
}));
export const ItemText = styled(Box)(() => ({
    fontFamily: "sans-serif",
    color: "#fff",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
}));
