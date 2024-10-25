import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const Icons = {
  Arrow: ({ size = 18, ...props }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M1.84924 2.51614L14.1476 0.964572C14.9344 0.865931 15.6521 1.42378 15.7508 2.21057L17.2738 14.2428C17.3724 15.0296 16.8145 15.7474 16.0278 15.846C15.241 15.9447 14.5232 15.3868 14.4246 14.6L13.3328 6.00707L4.12692 17.9828C3.64033 18.6088 2.73833 18.7219 2.11224 18.2353C1.48614 17.7488 1.37306 16.8467 1.85965 16.2207L11.0655 4.24496L2.20645 5.36534C1.41967 5.46398 0.701889 4.90613 0.603248 4.11934C0.504606 3.33256 1.06246 2.61478 1.84924 2.51614Z" fill="currentColor"/>
    </svg>
  ),
  Logo: ({ size = 175, ...props }: IconProps) => (
    <svg width={size} height={(size/175)*53} viewBox="0 0 175 53" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M26.5 0C11.8645 0 0 11.8645 0 26.5C0 41.1355 11.8645 53 26.5 53H106.5C115.05 53 122.654 48.9508 127.5 42.6654C132.346 48.9508 139.95 53 148.5 53C163.136 53 175 41.1355 175 26.5C175 11.8645 163.136 0 148.5 0C139.95 0 132.346 4.04923 127.5 10.3346C122.654 4.04923 115.05 0 106.5 0H26.5Z" fill="currentColor"/>
    </svg>
  ),
  Discord: ({ size = 34, ...props }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_140_191)">
        <path d="M29.2629 6.11158C27.087 5.11279 24.7907 4.40056 22.4316 3.99272C22.4101 3.98873 22.388 3.99159 22.3683 4.0009C22.3486 4.01022 22.3323 4.02551 22.3218 4.04461C22.0267 4.56943 21.6999 5.25394 21.4711 5.79191C18.8915 5.40567 16.325 5.40567 13.7984 5.79191C13.5696 5.24192 13.2309 4.56943 12.9346 4.04461C12.9236 4.02595 12.9073 4.01103 12.8877 4.0018C12.8681 3.99257 12.8462 3.98945 12.8248 3.99286C10.4654 4.39975 8.16898 5.11192 5.99335 6.11144C5.97474 6.1194 5.95905 6.13293 5.94846 6.15018C1.59748 12.6505 0.405478 18.991 0.99029 25.2529C0.991943 25.2682 0.996657 25.2831 1.00415 25.2966C1.01165 25.31 1.02177 25.3219 1.03392 25.3314C3.90456 27.4396 6.68528 28.7194 9.4144 29.5677C9.43562 29.574 9.45827 29.5737 9.47931 29.5668C9.50036 29.5599 9.51879 29.5467 9.53215 29.5291C10.1776 28.6475 10.7531 27.7179 11.2466 26.7404C11.2534 26.727 11.2572 26.7123 11.2579 26.6973C11.2587 26.6824 11.2562 26.6674 11.2507 26.6534C11.2452 26.6395 11.2368 26.6268 11.2261 26.6163C11.2153 26.6058 11.2025 26.5978 11.1884 26.5926C10.2755 26.2463 9.40643 25.8242 8.57033 25.3448C8.55508 25.3358 8.54227 25.3233 8.53304 25.3082C8.5238 25.2931 8.51842 25.276 8.51737 25.2583C8.51632 25.2407 8.51963 25.223 8.52701 25.207C8.53439 25.1909 8.54562 25.1769 8.5597 25.1662C8.73562 25.0343 8.91168 24.8973 9.07962 24.7587C9.09455 24.7464 9.11262 24.7385 9.13179 24.7359C9.15096 24.7333 9.17048 24.7361 9.18814 24.744C14.6808 27.2518 20.6271 27.2518 26.0548 24.744C26.0725 24.7356 26.0922 24.7324 26.1116 24.7348C26.1311 24.7371 26.1494 24.7449 26.1646 24.7573C26.3327 24.8958 26.5086 25.0343 26.6859 25.1662C26.7 25.1768 26.7113 25.1907 26.7188 25.2067C26.7263 25.2227 26.7297 25.2403 26.7288 25.2579C26.7279 25.2755 26.7227 25.2926 26.7136 25.3078C26.7045 25.3229 26.6918 25.3356 26.6767 25.3446C25.8403 25.8332 24.9641 26.2502 24.0575 26.5912C24.0434 26.5966 24.0306 26.6049 24.02 26.6155C24.0093 26.6262 24.001 26.639 23.9957 26.6531C23.9903 26.6671 23.9879 26.6822 23.9888 26.6972C23.9896 26.7123 23.9937 26.727 24.0006 26.7404C24.5046 27.7165 25.08 28.6461 25.7136 29.5277C25.7266 29.5459 25.7449 29.5595 25.766 29.5667C25.7872 29.5739 25.81 29.5742 25.8314 29.5677C28.5736 28.7193 31.3543 27.4395 34.225 25.3314C34.2373 25.3223 34.2476 25.3108 34.2552 25.2975C34.2627 25.2842 34.2674 25.2694 34.2688 25.2542C34.9685 18.0146 33.0966 11.7262 29.3065 6.15144C29.2972 6.13333 29.2817 6.11928 29.2629 6.11158ZM12.0668 21.44C10.4131 21.44 9.05054 19.9218 9.05054 18.0573C9.05054 16.1929 10.3867 14.6747 12.0669 14.6747C13.7601 14.6747 15.1094 16.2062 15.083 18.0574C15.083 19.9218 13.7468 21.44 12.0668 21.44ZM23.2187 21.44C21.5651 21.44 20.2025 19.9218 20.2025 18.0573C20.2025 16.1929 21.5385 14.6747 23.2187 14.6747C24.9119 14.6747 26.2612 16.2062 26.2348 18.0574C26.2348 19.9218 24.9119 21.44 23.2187 21.44Z" fill="currentColor"/>
      </g>
      <defs>
        <clipPath id="clip0_140_191">
          <rect width="33.5616" height="33.5616" fill="white" transform="translate(0.851562)"/>
        </clipPath>
      </defs>
    </svg>
  ),
};

export type Icon = keyof typeof Icons;