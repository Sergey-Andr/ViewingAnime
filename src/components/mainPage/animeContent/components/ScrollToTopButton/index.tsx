import { ArrowUp } from "../../../../../../public/arrow-up.tsx";
import { memo } from "react";
import { WrapperArrow } from "../../ui/styled.ts";

const ScrollToTopButton = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <WrapperArrow onClick={scrollToTop}>
            <ArrowUp color={"#b7b7b7"} />
        </WrapperArrow>
    );
};

export default memo(ScrollToTopButton);