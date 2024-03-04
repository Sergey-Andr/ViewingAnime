import { styled, TextField } from "@mui/material";

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
            borderColor: "#FFFFFF33",
            boxShadow: "0 0 10px rgb(0 0 0)",
        },
    },
}));
