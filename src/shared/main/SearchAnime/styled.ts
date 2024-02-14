import { styled, TextField } from "@mui/material";

export const SearchAnime = styled(TextField)(() => ({
    background: "rgba(255,255,255,0.2)",
    borderRadius: "200px",
    ".MuiInputBase-root": {
        borderRadius: "200px",
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
