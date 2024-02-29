import SelectRating from "../SelectRating";
import { Hr, ReviewWrapper } from "../../../ui/styled.ts";
import { memo } from "react";
import WatchStatus from "../WatchStatus";

const LeaveAReview = () => {
    return (
        <ReviewWrapper>
            <WatchStatus />
            <Hr
                sx={{
                    marginBottom: "15px",
                    background: "#c9cdd3",
                }}
            />
            <SelectRating />
        </ReviewWrapper>
    );
};

export default memo(LeaveAReview);
