export const doubleCheckMarksIcon = ({ color }: { color: string }) => (
    <svg
        fill="none"
        stroke={color}
        width="20px"
        height="20px"
        viewBox="0 0 24 24"
        id="check-double"
        data-name="Flat Line"
        xmlns="http://www.w3.org/2000/svg"
    >
        <line
            x1="13.22"
            y1="16.5"
            x2="21"
            y2="7.5"
            style={{
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
            }}
        ></line>
        <polyline
            points="3 11.88 7 16.5 14.78 7.5"
            style={{
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
            }}
        ></polyline>
    </svg>
);
