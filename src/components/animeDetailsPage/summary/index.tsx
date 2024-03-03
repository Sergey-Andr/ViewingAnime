import LeaveAReview from "./components/LeaveAReview";
import Description from "./components/Description";
import AlternativeTitles from "./components/AlternativeTitles";
import RelatedAnime from "./components/RelatedAnime";
import RelatedSeasons from "./components/RelatedSeasons";
import { memo } from "react";
import { WrapperSummary } from "./ui/styled.ts";

const Summary = () => {
    return (
        <WrapperSummary>
            <LeaveAReview />
            <Description />
            <AlternativeTitles />
            <RelatedSeasons />
            <RelatedAnime />
        </WrapperSummary>
    );
};

export default memo(Summary);
