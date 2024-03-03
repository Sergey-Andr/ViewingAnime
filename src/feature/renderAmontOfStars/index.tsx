import { FaStar } from "react-icons/fa6";

export const renderAmontOfStars = (number = 0) => {
    const stars = [];
    for (let i = 0; i < number; i++) {
        stars.push(
            <FaStar
                key={`field-${i}`}
                style={{
                    width: "25px",
                    height: "25px",
                    fill: "#FFCC00",
                    padding: "2px",
                }}
            />,
        );
    }
    for (let i = number; i < 10; i++) {
        stars.push(
            <FaStar
                key={`empty-${i}`}
                style={{
                    width: "25px",
                    height: "25px",
                    fill: "#91979E",
                    padding: "2px",
                }}
            />,
        );
    }
    return stars;
};
