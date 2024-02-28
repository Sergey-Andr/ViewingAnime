import { memo } from "react";
import AnimeInfoSidebar from "./components/animeInfoSidebar";
import AnimeSummary from "./components/animeSummary";

const AnimeDetailsBody = () => {
    return (
        <>
            <AnimeSummary />
            <AnimeInfoSidebar />
        </>
    );
};

export default memo(AnimeDetailsBody);
