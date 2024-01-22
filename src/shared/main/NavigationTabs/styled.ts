import { Box, Button, styled, Typography } from "@mui/material";

export const Wrapper = styled(Button)(() => ({
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