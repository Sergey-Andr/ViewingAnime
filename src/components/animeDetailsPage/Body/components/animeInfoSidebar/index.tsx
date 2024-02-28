import { Box } from "@mui/material";
import { WrapperMain } from "../../ui/styled.ts";
import UsersList from "./Statistics";
import AnimeRating from "./AnimeRating";
import AboutAnime from "./AboutAnime";
import { memo } from "react";
import { useParams } from "react-router-dom";
import { useGetCurrentAnimeQuery } from "../../../../../hooks/queries/useGetCurrentAnime.ts";

const AnimeInfoSidebar = () => {
    const { animeId } = useParams();
    const { data } = useGetCurrentAnimeQuery(animeId ? +animeId : null);
    return (
        <Box>
            <Box sx={{ display: "flex" }}>
                <WrapperMain>
                    <Box
                        sx={{
                            marginBottom: "15px",
                            width: "360px",
                            height: "540px",
                            background: "#1a685b",
                        }}
                    >
                        <img
                            src={data?.main_picture?.large}
                            style={{
                                width: "360px",
                                height: "540px",
                                borderRadius: "10px",
                                border: "2px solid #11212e",
                            }}
                            alt="main anime picture"
                        />
                    </Box>
                    <UsersList />
                    <AnimeRating />
                    <AboutAnime />
                </WrapperMain>
            </Box>
        </Box>
    );
};

export default memo(AnimeInfoSidebar);
