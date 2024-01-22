import { Box } from "@mui/material";
import { tabs } from "./config";
import { ReactElement } from "react";
import NavigationTab from "../../../shared/main/NavigationTabs";

const NavigationBar = (): ReactElement => {
    return (
        <Box sx={{
            maxWidth: "240px",
            height: "100vh",
            background: "linear-gradient(to bottom, rgba(17, 33, 46,0.66) 0%, #11212e 800px)",
            display: "flex",
            flexDirection: "column",
        }}>
            {tabs.map((tab) => (
                <NavigationTab tab={tab} />
            ))}
        </Box>
    );
};

export default NavigationBar;