import { Star } from "../../../public/star.tsx";
import { HalfStar } from "../../../public/half-star.tsx";

export const renderRatingStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const maxRating = 10;

    return (() => {
        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(Star("ffcc00"));
        }

        if (hasHalfStar) {
            stars.push(HalfStar("ffcc00"));
        }

        const remainingStars = maxRating - Math.ceil(rating);
        for (let i = 0; i < remainingStars; i++) {
            stars.push(Star("00000099"));
        }

        return stars;
    })();
};