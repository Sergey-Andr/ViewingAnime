import SelectRating from "../SelectRating";
import { memo } from "react";
import WatchStatus from "../WatchStatus";
import { ReviewWrapper } from "./ui/styled.ts";
import { HrReview } from "../../../../../sharedStyles/GlobalHr.ts";

const LeaveAReview = () => {
    return (
        <ReviewWrapper>
            <WatchStatus />
            <HrReview />
            <SelectRating />
        </ReviewWrapper>
    );
};

export default memo(LeaveAReview);
