import { Box } from "@mui/material";
import {
    AboutItemContainer,
    AboutWrapper,
} from "../../../../../pages/AnimeDetails/components/Body/ui/styled.ts";
import { memo } from "react";
import { useParams } from "react-router-dom";
import { useGetCurrentAnimeQuery } from "../../../../../hooks/queries/useGetCurrentAnime.ts";
import { GlobalContainer } from "../../../../../sharedStyles/GlobalContainer.ts";
import { GlobalTitle } from "../../../../../sharedStyles/GlobalTItle.ts";
import { GlobalLabel } from "../../../../../sharedStyles/GlobalLabel.ts";
import { Hr } from "../../../../../sharedStyles/GlobalHr.ts";
import { GlobalContent } from "../../../../../sharedStyles/GlobalContent.ts";

const About = () => {
    const { animeId } = useParams();
    const { data } = useGetCurrentAnimeQuery(animeId ? +animeId : null);
    return (
        <GlobalContainer>
            <GlobalLabel>About anime</GlobalLabel>
            <Hr />
            <AboutWrapper>
                <AboutItemContainer>
                    <GlobalTitle>Duration</GlobalTitle>
                    <GlobalContent>
                        {Math.floor((data?.average_episode_duration ?? 0) / 60)}
                        m per ep.
                    </GlobalContent>
                </AboutItemContainer>

                <AboutItemContainer>
                    <GlobalTitle>episodes</GlobalTitle>
                    <GlobalContent>{data?.num_episodes}</GlobalContent>
                </AboutItemContainer>

                <AboutItemContainer>
                    <GlobalTitle>Year</GlobalTitle>
                    <GlobalContent>
                        {!data?.start_date
                            ? "..."
                            : !data?.end_date
                              ? data.start_date.slice(0, 4) + " -- current time"
                              : data.start_date.slice(0, 4) +
                                " -- " +
                                data.end_date.slice(0, 4)}
                    </GlobalContent>
                </AboutItemContainer>

                <AboutItemContainer>
                    <GlobalTitle>Genres</GlobalTitle>
                    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                        {data?.genres.map((el, i) => (
                            <GlobalContent key={el.name}>
                                {el.name}
                                {data.genres.length - 1 !== i && ", "}&nbsp;
                            </GlobalContent>
                        )) || "..."}
                    </Box>
                </AboutItemContainer>

                <AboutItemContainer>
                    <GlobalTitle>Studio</GlobalTitle>
                    <GlobalContent>
                        {data?.studios.map((studio, i) => (
                            <span key={studio.id}>
                                {studio.name}
                                {data.studios.length - 1 !== i && ", "}&nbsp;
                            </span>
                        )) || "..."}
                    </GlobalContent>
                </AboutItemContainer>
            </AboutWrapper>
        </GlobalContainer>
    );
};

export default memo(About);
