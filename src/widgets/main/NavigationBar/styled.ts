import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)(() => ({
    minWidth: "240px",
    height: "100vh",
    boxShadow: "inset -10px 0px 15px -5px rgba(0, 0, 0, 1)",
    background: "linear-gradient(to bottom, rgba(17, 33, 46,0.66) 0%, #11212e 800px)",
    display: "flex",
    flexDirection: "column",
}));