import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { ISpecifyAnime } from "../../../../../types/specifyAnime.ts";
import { GlobalTitle } from "../../../../../sharedStyles/GlobalTItle.ts";
import { AboutSeasonContainer, SeasonWrapper } from "./ui/styled.ts";

interface ISeasons {
    data: ISpecifyAnime;
    relation: string;
}

const Seasons: FC<ISeasons> = ({ data, relation }) => {
    return (
        <Link to={`/anime/${data?.id}`} style={{ textDecoration: "none" }}>
            <SeasonWrapper>
                <img
                    src={data?.main_picture?.large}
                    style={{
                        width: "90px",
                        height: "127px",
                        marginRight: "15px",
                    }}
                    alt={"anime icon"}
                />
                <AboutSeasonContainer>
                    <GlobalTitle>{data?.title}</GlobalTitle>

                    <GlobalTitle>Ep - {data?.num_episodes}</GlobalTitle>

                    <GlobalTitle>Relation - {relation}</GlobalTitle>

                    <GlobalTitle>
                        status -{" "}
                        {data?.status === "not_yet_aired"
                            ? "not yet realised"
                            : "realised"}
                    </GlobalTitle>
                </AboutSeasonContainer>
            </SeasonWrapper>
        </Link>
    );
};

export default memo(Seasons);
