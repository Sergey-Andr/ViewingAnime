import { FaRegStarHalfStroke, FaStar } from "react-icons/fa6";

export const renderRatingStars = (rating = 0) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const maxRating = 10;

    return (() => {
        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <FaStar
                    fill={"#ffcc00"}
                    style={{
                        width: "25px",
                        height: "25px",
                        marginRight: "2px",
                    }}
                />,
            );
        }

        if (hasHalfStar) {
            stars.push(
                <FaRegStarHalfStroke
                    fill={"#ffcc00"}
                    style={{
                        width: "27px",
                        height: "27px",
                        marginRight: "2px",
                    }}
                />,
            );
        }

        const remainingStars = maxRating - Math.ceil(rating);
        for (let i = 0; i < remainingStars; i++) {
            stars.push(
                <FaStar
                    fill={"#FFFFFF99"}
                    style={{
                        width: "25px",
                        height: "25px",
                        marginRight: "2px",
                    }}
                />,
            );
        }

        return stars;
    })();
};
