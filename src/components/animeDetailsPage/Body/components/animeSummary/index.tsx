import LeaveAReview from "./LeaveAReview";
import Description from "./Description";
import AlternativeTitles from "./AlternativeTitles";
import RelatedAnime from "./RelatedAnime";
import { WrapperSummary } from "../../ui/styled.ts";
import RelatedSeasons from "./RelatedSeasons";
import { memo } from "react";

const AnimeSummary = () => {
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

export default memo(AnimeSummary);
