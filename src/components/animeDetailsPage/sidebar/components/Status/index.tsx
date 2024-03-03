import { Box, Tooltip } from "@mui/material";
import { FC, memo, ReactNode } from "react";
import { GlobalStatusContent } from "../../../../../sharedStyles/GlobalContent.ts";

interface IAnimeStatus {
    icon: ReactNode;
    label: string;
    status?: number;
}

const Status: FC<IAnimeStatus> = ({ icon, label, status = 0 }) => {
    const stat = +status;
    return (
        <Tooltip
            arrow={true}
            title={label ? label : "..."}
            PopperProps={{
                sx: {
                    ".MuiTooltip-tooltip": {
                        fontSize: "18px",
                        padding: "5px 20px",
                        background: "#11212e",
                    },
                    ".MuiTooltip-arrow": {
                        color: "#11212e",
                    },
                },
            }}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Box>
                <Box>{icon}</Box>
                <GlobalStatusContent>
                    {stat.toLocaleString("en")}
                </GlobalStatusContent>
            </Box>
        </Tooltip>
    );
};

export default memo(Status);
