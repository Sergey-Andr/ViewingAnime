import { AnimeNames, ContainerImg, NoneImgContainer, NoneImgText, Wrapper } from "./ui/styled.ts";
import { FC, memo } from "react";
import { IElement } from "../../../../widgets/main/AnimeContent";
import { Link } from "react-router-dom";

interface IAnimeItem {
    el: IElement;
}

const AnimeItem: FC<IAnimeItem> = ({ el }) => {
    return (
        <Wrapper>
            <Link to={`/anime/${el.node?.id}`}
                  style={{ textDecoration: "none" }}
            >
                {el.node?.main_picture?.large ?
                    <ContainerImg>
                        <img style={{
                            border: "5px solid transparent",
                            background: "linear-gradient(to bottom, rgba(17, 33, 46, 0.66) 0%, #11212e 800px), #6bb16e",
                            width: "185px",
                            height: "275px",
                        }}
                             src={el.node?.main_picture?.large} alt={"Anime image"} />
                    </ContainerImg>
                    :
                    <NoneImgContainer>
                        <NoneImgText>
                            NONE IMAGE
                        </NoneImgText>
                    </NoneImgContainer>
                }
                <AnimeNames>{el.node?.title}</AnimeNames>
            </Link>
        </Wrapper>
    );
};

export default memo(AnimeItem);