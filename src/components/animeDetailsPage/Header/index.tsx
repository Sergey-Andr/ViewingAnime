import { memo } from "react";
import {
    AnimeDate,
    AnimeTitle,
    ContainerTitle,
    Hr,
    Wrapper,
} from "./ui/styled.ts";
import { useParams } from "react-router-dom";
import { useGetCurrentAnimeQuery } from "../../../hooks/queries/useGetCurrentAnime.ts";

const AnimeDetailsHeader = () => {
    const { animeId } = useParams();

    const { data } = useGetCurrentAnimeQuery(animeId ? +animeId : null);
    const startDate = data?.created_at.slice(0, 4) ?? "...";
    const endDate = data?.end_date?.slice(0, 4) ?? "...";

    return (
        <Wrapper>
            <ContainerTitle>
                <AnimeTitle>{data?.title || '"anime name"'}&nbsp;</AnimeTitle>
                <AnimeDate>
                    {startDate !== endDate
                        ? startDate + "-" + endDate
                        : startDate}
                </AnimeDate>
            </ContainerTitle>
            <Hr />
        </Wrapper>
    );
};

export default memo(AnimeDetailsHeader);
