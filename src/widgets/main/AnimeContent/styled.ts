import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)(() => ({
    background: "linear-gradient(to bottom, rgba(17, 33, 46, 0.66) 0%, #11212e 800px), #0e6655",
    width: "100%",
}));

export const FiltersContainer = styled(Box)(() => ({
    height: "60px",
    background: "#FFFFFF26",
    display: "flex",
    alignItems: "center",
    width: "80%",
    margin: "15px 0px 15px 17px",
}));

export const AnimeListContainer = styled(Box)(() => ({
    width: "100%",
    display: "grid",
    justifyItems: "center",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "10px 0px",
}));