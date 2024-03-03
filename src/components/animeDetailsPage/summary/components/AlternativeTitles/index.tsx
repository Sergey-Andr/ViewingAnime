import { memo } from "react";
import { useParams } from "react-router-dom";
import { useGetCurrentAnimeQuery } from "../../../../../hooks/queries/useGetCurrentAnime.ts";
import { GlobalContainer } from "../../../../../sharedStyles/GlobalContainer.ts";
import { GlobalTitle } from "../../../../../sharedStyles/GlobalTItle.ts";
import { GlobalLabel } from "../../../../../sharedStyles/GlobalLabel.ts";
import { Hr } from "../../../../../sharedStyles/GlobalHr.ts";

const AlternativeTitles = () => {
    const { animeId } = useParams();
    const { data } = useGetCurrentAnimeQuery(animeId ? +animeId : null);
    const titles = Object.values(data?.alternative_titles || []).flat();
    return (
        <GlobalContainer>
            <GlobalLabel>Alternative titles</GlobalLabel>
            <Hr />
            <GlobalTitle
                sx={{
                    lineHeight: "32px",
                    padding: "10px",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                {titles?.map((title) => <span key={title}>{title}</span>)}
            </GlobalTitle>
        </GlobalContainer>
    );
};

export default memo(AlternativeTitles);
