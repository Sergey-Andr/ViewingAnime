import { Star } from "../../../public/star.tsx";

export const renderAmontOfStars = (number = 0) => {
    const stars = [];
    for (let i = 0; i < number; i++) {
        stars.push(Star("FFCC00", `field-${i}`));
    }
    for (let i = number; i < 10; i++) {
        stars.push(Star("91979e", `empty-${i}`));
    }
    return stars;
};
