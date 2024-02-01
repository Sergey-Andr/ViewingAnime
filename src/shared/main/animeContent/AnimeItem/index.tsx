import { AnimeNames, ContainerImg, Wrapper } from "./styled.ts";
import { FC } from "react";
import { IElement } from "../../../../widgets/main/AnimeContent";
import { Link } from "react-router-dom";

interface IAnimeItem {
    el: IElement;
}

const AnimeItem: FC<IAnimeItem> = ({ el }) => {


    return (
        <Wrapper>
            <Link to={`/anime/${el.node.id}`}>
                <ContainerImg>
                    <img style={{
                        border: "5px solid transparent",
                        background: "linear-gradient(to bottom, rgba(17, 33, 46, 0.66) 0%, #11212e 800px), #6bb16e",
                        width: "185px",
                        height: "275px",
                    }}
                         src={el.node.main_picture.large} alt={"Anime image"} />
                </ContainerImg>
                <AnimeNames>{el.node.title}</AnimeNames>
            </Link>
        </Wrapper>
    );
};

export default AnimeItem;