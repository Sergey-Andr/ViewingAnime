import { AboutAnime, ContainerSubTitle, ExtandSubTitle, SubTitle } from "./styled.ts";
import { Dispatch, FC, ReactElement, SetStateAction, useState } from "react";
import { IAnimeDetails } from "../../../widgets/animeDetailsPage/Header";

const WhatAboutAnime: FC<IAnimeDetails> = ({ data }): ReactElement => {

    const [isOpened, setIsOpened]: [
        isOpened: boolean,
        setIsOpened: Dispatch<SetStateAction<boolean>>,
    ] = useState<boolean>(false);

    return (
        <ContainerSubTitle>
            <AboutAnime>What about anime</AboutAnime>
            <SubTitle
                in={isOpened}
                timeout={1000}
                collapsedSize={70}
                sx={{
                    height: `${isOpened ? "fit-content" : "70px"}`,
                    ":before": {
                        background: `${isOpened ? "none" : "-webkit-linear-gradient(top,rgba(255,255,255,0) 0%,#131C25FF 100%)"}`,
                    },
                }}
            >
                {data.synopsis}
            </SubTitle>
            <ExtandSubTitle
                onClick={() => {
                    setIsOpened(!isOpened);
                }}
            >
                {isOpened ? "Collapse description" : "Details..."}
            </ExtandSubTitle>
        </ContainerSubTitle>
    );
};

export default WhatAboutAnime;