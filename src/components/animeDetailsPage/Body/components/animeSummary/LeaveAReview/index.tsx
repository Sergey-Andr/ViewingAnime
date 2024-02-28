import SelectRating from "../SelectRating";
import { GlobalContainerMain, Hr } from "../../../ui/styled.ts";
import { memo } from "react";
import WatchStatus from "../WatchStatus";

const LeaveAReview = () => {
    return (
        <GlobalContainerMain
            sx={{
                maxWidth: "100%",
                background: "linear-gradient(0deg, #ebebf1 0%, #eff3f6 100%)",
                border: "2px solid #c9cdd3",
                boxSizing: "border-box",
                padding: "16px",
            }}
        >
            <WatchStatus />
            <Hr
                sx={{
                    marginBottom: "15px",
                    background: "#c9cdd3",
                }}
            />
            <SelectRating />
        </GlobalContainerMain>
    );
};

export default memo(LeaveAReview);
