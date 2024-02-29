import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    padding: "0 30px",
    margin: "0 0 30px 0",
    justifyContent: "space-between",
    boxShadow: "0 0 60px rgb(0 0 0)",
    background:
        "linear-gradient(to bottom, #11212e 0%, rgba(17, 33, 46,0.4) 84px, #11212e 100%)",
}));
