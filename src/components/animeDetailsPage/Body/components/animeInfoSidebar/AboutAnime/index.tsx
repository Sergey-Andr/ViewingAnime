import { Box } from "@mui/material";
import {
    AboutItemContainer,
    AboutWrapper,
    GlobalContainerMain,
    GlobalContentMain,
    GlobalLabelMain,
    GlobalTitleMain,
    Hr,
} from "../../../ui/styled.ts";
import { memo } from "react";
import { useParams } from "react-router-dom";
import { useGetCurrentAnimeQuery } from "../../../../../../hooks/queries/useGetCurrentAnime.ts";

const AboutAnime = () => {
    const { animeId } = useParams();
    const { data } = useGetCurrentAnimeQuery(animeId ? +animeId : null);
    return (
        <GlobalContainerMain>
            <GlobalLabelMain>About anime</GlobalLabelMain>
            <Hr />
            <AboutWrapper>
                <AboutItemContainer>
                    <GlobalTitleMain>Duration</GlobalTitleMain>
                    <GlobalContentMain>
                        {Math.floor((data?.average_episode_duration ?? 0) / 60)}
                        m per ep.
                    </GlobalContentMain>
                </AboutItemContainer>

                <AboutItemContainer>
                    <GlobalTitleMain>episodes</GlobalTitleMain>
                    <GlobalContentMain>{data?.num_episodes}</GlobalContentMain>
                </AboutItemContainer>

                <AboutItemContainer>
                    <GlobalTitleMain>Year</GlobalTitleMain>
                    <GlobalContentMain>
                        {!data
                            ? "..."
                            : data?.created_at?.slice(0, 4) +
                                  " -- " +
                                  data?.end_date?.slice(0, 4) ?? "current time"}
                    </GlobalContentMain>
                </AboutItemContainer>

                <AboutItemContainer>
                    <GlobalTitleMain>Genres</GlobalTitleMain>
                    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                        {data?.genres.map((el, i) => (
                            <GlobalContentMain key={el.name}>
                                {el.name}
                                {data.genres.length - 1 !== i && ", "}&nbsp;
                            </GlobalContentMain>
                        )) || "..."}
                    </Box>
                </AboutItemContainer>

                <AboutItemContainer>
                    <GlobalTitleMain>Studio</GlobalTitleMain>
                    <GlobalContentMain>
                        {data?.studios.map((studio, i) => (
                            <span key={studio.id}>
                                {studio.name}
                                {data.studios.length - 1 !== i && ", "}&nbsp;
                            </span>
                        )) || "..."}
                    </GlobalContentMain>
                </AboutItemContainer>
            </AboutWrapper>
        </GlobalContainerMain>
    );
};

export default memo(AboutAnime);
