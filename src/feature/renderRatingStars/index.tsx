import { Star } from "../../../public/star.tsx";
import { HalfStar } from "../../../public/half-star.tsx";

export const renderRatingStars = (rating = 0) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const maxRating = 10;

    return (() => {
        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(Star("ffcc00", `field-${i}`));
        }

        if (hasHalfStar) {
            stars.push(HalfStar("ffcc00", "FFFFFF99", `key-half`));
        }

        const remainingStars = maxRating - Math.ceil(rating);
        for (let i = 0; i < remainingStars; i++) {
            stars.push(Star("FFFFFF99", `empty-${i}`));
        }

        return stars;
    })();
};