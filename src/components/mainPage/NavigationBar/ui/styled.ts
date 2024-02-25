import { Box, Button, styled, Typography } from "@mui/material";

export const WrapperBar = styled(Box)(() => ({
    minWidth: "240px",
    boxShadow: "inset -10px 0px 15px -5px rgba(0, 0, 0, 1)",
    background: "linear-gradient(to bottom, rgba(17, 33, 46,0.66) 0%, #11212e 800px)",
    display: "flex",
    flexDirection: "column",
}));

export const WrapperTab = styled(Button)(() => ({
    borderBottom: "1px solid #FFFFFF7F",
    marginBottom: "5px",
}));


export const Container = styled(Box)(() => ({
    margin: "0 0 5px 15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    width: "100%",
}));

export const Label = styled(Typography)(() => ({
    color: "#FFFFFFFF",
    textAlign: "start",
    lineHeight: "24px",
}));