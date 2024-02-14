export const HalfStar = (leftSideColor: string, rightSideColor: string, key: string) => (
    <svg width="30px" height="30px" viewBox="0 0 20 20" key={key}
         xmlns="http://www.w3.org/2000/svg">
        <path
            d="M6.92162 16.1425L10.0007 13.9999V3.70626C10.0007 3.48398 10.0007 3.37282 9.97283 3.34797C9.94891 3.32665 9.91492 3.3209 9.88533 3.33321C9.85083 3.34753 9.81433 3.45252 9.74142 3.66249L8.29165 7.8332C8.23675 7.99114 8.2093 8.07011 8.15983 8.12892C8.11613 8.18087 8.06041 8.22136 7.9975 8.24686C7.92628 8.27573 7.84269 8.27744 7.67552 8.28084L4.38897 8.34782C3.80159 8.35982 3.50791 8.36574 3.3907 8.47766C3.28926 8.57449 3.24333 8.71582 3.26848 8.85382C3.29755 9.01316 3.53162 9.19066 3.99979 9.54557L6.6193 11.5316C6.75254 11.6326 6.81917 11.6831 6.85981 11.7483C6.89572 11.8059 6.917 11.8714 6.92182 11.9392C6.92727 12.0158 6.90306 12.0958 6.85463 12.2558L5.90273 15.4022C5.73261 15.9646 5.64755 16.2457 5.71772 16.3918C5.77847 16.5182 5.89872 16.6056 6.03769 16.6242C6.19827 16.6459 6.43939 16.4781 6.92162 16.1425Z"
            fill={`#${leftSideColor}`} />
        <path
            d="M13.0795 16.1463L9.99999 14.0037V3.70946C9.99999 3.48716 9.99999 3.376 10.0278 3.35115C10.0517 3.32982 10.0858 3.32407 10.1153 3.33638C10.1498 3.35071 10.1864 3.4557 10.2593 3.66568L11.7093 7.83661C11.7642 7.99456 11.7916 8.07353 11.8411 8.13235C11.8848 8.18431 11.9406 8.22479 12.0035 8.2503C12.0747 8.27917 12.1583 8.28088 12.3255 8.28428L15.6126 8.35126C16.2 8.36327 16.4938 8.36918 16.611 8.48111C16.7124 8.57794 16.7584 8.71929 16.7332 8.85729C16.7042 9.01663 16.47 9.19414 16.0018 9.54908L13.3819 11.5352C13.2486 11.6362 13.182 11.6867 13.1413 11.7519C13.1054 11.8095 13.0841 11.875 13.0793 11.9428C13.0739 12.0195 13.0981 12.0995 13.1465 12.2595L14.0986 15.4061C14.2687 15.9684 14.3538 16.2496 14.2836 16.3957C14.2229 16.522 14.1026 16.6095 13.9636 16.6281C13.803 16.6498 13.5618 16.4819 13.0795 16.1463Z"
            fill={`#${rightSideColor}`} />
    </svg>

);