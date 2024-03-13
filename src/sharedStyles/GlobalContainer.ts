import { Box, styled } from "@mui/material";

export const GlobalContainer = styled(Box)(() => ({
    border: "3px solid #3D3737",
    borderRadius: "5px",
    height: "fit-content",
    width: "100%",
    marginBottom: "20px",
}));

export const GlobalRelatedContainer = styled(Box)(() => ({
    border: "3px solid #3D3737",
    borderRadius: "5px",
    height: "fit-content",
    width: "100%",
    marginBottom: "20px",
    
    boxSizing: "border-box",
    textAlign: "center",
    padding: "15px 15px 0 15px",
}));
