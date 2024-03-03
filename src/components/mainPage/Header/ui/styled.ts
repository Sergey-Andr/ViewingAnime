import { Box, styled, TextField } from "@mui/material";

export const SearchAnime = styled(TextField)(() => ({
    background: "#FFFFFFD9",
    width: "330px",
    borderRadius: "200px",
    ".MuiInputBase-root": {
        borderRadius: "200px",
        color: "#000",
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "transparent",
        },
        "&:hover fieldset": {
            borderColor: "transparent",
        },
        "&.Mui-focused fieldset": {
            borderColor: "rgba(255,255,255,0.2)",
            boxShadow: "0 0 10px rgb(0 0 0)",
        },
    },
}));

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
