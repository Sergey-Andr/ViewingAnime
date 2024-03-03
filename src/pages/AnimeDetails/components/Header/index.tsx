import { memo } from "react";
import { ContainerTitle, Date, Title, Wrapper } from "./ui/styled.ts";
import { useParams } from "react-router-dom";
import { useGetCurrentAnimeQuery } from "../../../../hooks/queries/useGetCurrentAnime.ts";
import { Hr } from "../../../../sharedStyles/GlobalHr.ts";

const AnimeDetailsHeader = () => {
    const { animeId } = useParams();

    const { data } = useGetCurrentAnimeQuery(animeId ? +animeId : null);
    const startDate = data?.start_date?.slice(0, 4) ?? "...";
    const endDate = data?.end_date?.slice(0, 4) ?? "...";

    return (
        <Wrapper>
            <ContainerTitle>
                <Title>{data?.title || '"anime name"'}&nbsp;</Title>
                <Date>
                    {startDate !== endDate
                        ? startDate + " - " + endDate
                        : startDate}
                </Date>
            </ContainerTitle>
            <Hr />
        </Wrapper>
    );
};

export default memo(AnimeDetailsHeader);
