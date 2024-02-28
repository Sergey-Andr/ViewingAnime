import { Box, Tooltip, Typography } from "@mui/material";
import { renderAmontOfStars } from "../../../../../../feature/renderAmontOfStars";
import { animeGlobalStore } from "../../../../../../store/Main/AnimeGlobalStore.ts";
import { shallow } from "zustand/shallow";
import { memo, useEffect, useState } from "react";
import { ratingDescriptions } from "../../../../../../constants/ratingDescriptions.ts";
import { SelectRatingWrapper } from "../../../ui/styled.ts";
import { useParams } from "react-router-dom";

const SelectRating = () => {
    const { animeId: id } = useParams();
    const animeId = typeof id !== "undefined" ? +id : 0;

    const { numberOfStars, setNumberOfStars, ratingAnime, setRatingAnime } =
        animeGlobalStore(
            ({
                numberOfStars,
                setNumberOfStars,
                ratingAnime,
                setRatingAnime,
            }) => ({
                numberOfStars,
                setNumberOfStars,
                ratingAnime,
                setRatingAnime,
            }),
            shallow,
        );
    const [isHover, setIsHover] = useState(false);

    useEffect(() => {
        handleHover(ratingAnime[animeId]);
    }, [animeId]);

    const handleHover = (number = 0) => {
        setNumberOfStars(renderAmontOfStars(number));
    };

    return (
        <SelectRatingWrapper
            onMouseEnter={() => {
                setIsHover(true);
            }}
            onMouseLeave={() => {
                setIsHover(false);
                handleHover(ratingAnime[animeId]);
            }}
        >
            {numberOfStars.map((star, i) => {
                return (
                    <Tooltip
                        onClick={() => {
                            handleHover(i + 1);
                            setRatingAnime(animeId, i + 1);
                        }}
                        key={i}
                        onOpen={() => {
                            handleHover(i + 1);
                        }}
                        arrow={true}
                        placement={"top"}
                        title={ratingDescriptions[i]}
                        PopperProps={{
                            sx: {
                                ".MuiTooltip-tooltip": {
                                    background: "#11212e",
                                    fontSize: "14px",
                                    padding: "5px 10px",
                                },
                                ".MuiTooltip-arrow": {
                                    color: "#11212e",
                                },
                            },
                        }}
                        sx={{
                            borderBottomLeftRadius: i === 0 ? "5px" : "0",
                            borderTopLeftRadius: i === 0 ? "5px" : "0",
                            borderBottomRightRadius:
                                i === numberOfStars.length - 1 ? "5px" : "0",
                            borderTopRightRadius:
                                i === numberOfStars.length - 1 ? "5px" : "0",
                            background: "#FFFFFFE5",
                            borderLeft: "2px solid #91979e",
                            position: "relative",
                        }}
                    >
                        <Box>
                            <Box>{star}</Box>
                            {isHover || ratingAnime[animeId] ? (
                                <Typography
                                    sx={{
                                        position: "absolute",
                                        left: i !== 9 ? "30%" : "10%",
                                        top: "125%",
                                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                        //@ts-ignore
                                        color: star?.props?.fill || "#fff",
                                    }}
                                >
                                    {i + 1}
                                </Typography>
                            ) : (
                                <></>
                            )}
                        </Box>
                    </Tooltip>
                );
            })}
        </SelectRatingWrapper>
    );
};

export default memo(SelectRating);
