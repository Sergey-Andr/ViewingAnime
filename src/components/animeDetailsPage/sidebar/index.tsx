import { Box } from "@mui/material";
import UsersList from "./components/Statistics";
import { memo } from "react";
import { useParams } from "react-router-dom";
import { useGetCurrentAnimeQuery } from "../../../hooks/queries/useGetCurrentAnime.ts";
import { SidebarContainerImg, SidebarWrapper } from "./ui/styled.ts";
import Rating from "./components/Rating";
import About from "./components/About";

const Sidebar = () => {
    const { animeId } = useParams();
    const { data } = useGetCurrentAnimeQuery(animeId ? +animeId : null);

    console.log(data);
    return (
        <Box sx={{ display: "flex" }}>
            <SidebarWrapper>
                <SidebarContainerImg>
                    <img
                        src={data?.main_picture?.large}
                        style={{
                            width: "360px",
                            height: "540px",
                            borderRadius: "10px",
                        }}
                        alt="main anime picture"
                    />
                </SidebarContainerImg>
                <UsersList />
                <Rating />
                <About />
            </SidebarWrapper>
        </Box>
    );
};

export default memo(Sidebar);
