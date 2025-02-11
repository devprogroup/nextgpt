"use client";

import React from "react";

export const Circuit = ({
    width = 42,
    height = 42,
    fill = "#7525FF"
}) => (
    <svg width={width} height={height} viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_5394_3551)">
            <rect x="3" y="3.5" width="36" height="36" rx="8" fill={fill} />
            <rect x="3" y="3.5" width="36" height="36" rx="8" fill="url(#paint0_linear_5394_3551)" fillOpacity="0.2" />
            <g filter="url(#filter0_dddd_5394_3551)">
                <path d="M15 29.75C16.2426 29.75 17.25 28.7426 17.25 27.5C17.25 26.2574 16.2426 25.25 15 25.25C13.7574 25.25 12.75 26.2574 12.75 27.5C12.75 28.7426 13.7574 29.75 15 29.75Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.25 13.75L16.75 17.25M16.75 13.75L13.25 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M25.25 25.75L28.75 29.25M28.75 25.75L25.25 29.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17.5 27.5H19C20.1046 27.5 21 26.6046 21 25.5V17.5C21 16.3954 21.8954 15.5 23 15.5H28" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M26.75 13.25L29 15.5L26.75 17.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
        </g>
        <rect x="1.5" y="2" width="39" height="39" rx="9.5" stroke="white" strokeWidth="3" />
        <defs>
            <filter id="filter0_dddd_5394_3551" x="3" y="7.5" width="36" height="36" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect1_dropShadow_5394_3551" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="4" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0470588 0 0 0 0 0.0588235 0 0 0 0 0.0784314 0 0 0 0.16 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5394_3551" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect2_dropShadow_5394_3551" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0470588 0 0 0 0 0.0588235 0 0 0 0 0.0784314 0 0 0 0.1 0" />
                <feBlend mode="normal" in2="effect1_dropShadow_5394_3551" result="effect2_dropShadow_5394_3551" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect3_dropShadow_5394_3551" />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0470588 0 0 0 0 0.0588235 0 0 0 0 0.0784314 0 0 0 0.05 0" />
                <feBlend mode="normal" in2="effect2_dropShadow_5394_3551" result="effect3_dropShadow_5394_3551" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect4_dropShadow_5394_3551" />
                <feOffset dy="0.5" />
                <feGaussianBlur stdDeviation="0.5" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.047292 0 0 0 0 0.0579748 0 0 0 0 0.0793404 0 0 0 0.05 0" />
                <feBlend mode="normal" in2="effect3_dropShadow_5394_3551" result="effect4_dropShadow_5394_3551" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow_5394_3551" result="shape" />
            </filter>
            <linearGradient id="paint0_linear_5394_3551" x1="21" y1="3.5" x2="21" y2="39.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <clipPath id="clip0_5394_3551">
                <rect x="3" y="3.5" width="36" height="36" rx="8" fill="white" />
            </clipPath>
        </defs>
    </svg>

)

export const Notebook = ({
    width = 42,
    height = 42,
    fill = "#7525FF"
}) => (
    <svg width={width} height={height} viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1.5" y="2" width="39" height="39" rx="19.5" fill={fill} />
        <rect x="1.5" y="2" width="39" height="39" rx="19.5" fill="url(#paint0_linear_5394_3656)" fillOpacity="0.2" />
        <rect x="1.5" y="2" width="39" height="39" rx="19.5" stroke="white" strokeWidth="3" />
        <g filter="url(#filter0_dddd_5394_3656)">
            <path d="M19.75 30.75H15.75C14.6454 30.75 13.75 29.8546 13.75 28.75V14.25C13.75 13.1454 14.6454 12.25 15.75 12.25H26.25C27.3546 12.25 28.25 13.1454 28.25 14.25V21.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22.75 30.7502V28.4168L26.5 24.6668C27.1443 24.0225 28.189 24.0225 28.8333 24.6668C29.4777 25.3112 29.4777 26.3558 28.8333 27.0002L25.0833 30.7502H22.75Z" stroke="white" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round" />
            <path d="M17.75 16.25H24.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M17.75 20.25H20.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </g>
        <defs>
            <filter id="filter0_dddd_5394_3656" x="3" y="7.5" width="36" height="36" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect1_dropShadow_5394_3656" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="4" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0470588 0 0 0 0 0.0588235 0 0 0 0 0.0784314 0 0 0 0.16 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5394_3656" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect2_dropShadow_5394_3656" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0470588 0 0 0 0 0.0588235 0 0 0 0 0.0784314 0 0 0 0.1 0" />
                <feBlend mode="normal" in2="effect1_dropShadow_5394_3656" result="effect2_dropShadow_5394_3656" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect3_dropShadow_5394_3656" />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0470588 0 0 0 0 0.0588235 0 0 0 0 0.0784314 0 0 0 0.05 0" />
                <feBlend mode="normal" in2="effect2_dropShadow_5394_3656" result="effect3_dropShadow_5394_3656" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect4_dropShadow_5394_3656" />
                <feOffset dy="0.5" />
                <feGaussianBlur stdDeviation="0.5" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0470588 0 0 0 0 0.0588235 0 0 0 0 0.0784314 0 0 0 0.05 0" />
                <feBlend mode="normal" in2="effect3_dropShadow_5394_3656" result="effect4_dropShadow_5394_3656" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow_5394_3656" result="shape" />
            </filter>
            <linearGradient id="paint0_linear_5394_3656" x1="21" y1="3.5" x2="21" y2="39.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
        </defs>
    </svg>

)

export const Listing = ({
    width = 42,
    height = 42,
    fill = "none"
}) => (
    <svg width={width} height={height} viewBox="0 0 42 44" fill={fill} xmlns="http://www.w3.org/2000/svg">
        <rect x="1.5" y="2" width="39" height="39" rx="9.5" fill="#7525FF" />
        <rect x="1.5" y="2" width="39" height="39" rx="9.5" fill="url(#paint0_linear_5394_3700)" fillOpacity="0.2" />
        <rect x="1.5" y="2" width="39" height="39" rx="9.5" stroke="white" strokeWidth="3" />
        <g filter="url(#filter0_dddd_5394_3700)">
            <path d="M16.543 18.9978L17.668 19.7478L19.5396 17.2522M22.808 18.5H25.308M22.75 24.5H25.25M16.543 24.9989L17.668 25.7489L19.5396 23.2534M14.75 29.75H27.25C28.3546 29.75 29.25 28.8546 29.25 27.75V15.25C29.25 14.1454 28.3546 13.25 27.25 13.25H14.75C13.6454 13.25 12.75 14.1454 12.75 15.25V27.75C12.75 28.8546 13.6454 29.75 14.75 29.75Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <filter id="filter0_dddd_5394_3700" x="3" y="7.5" width="36" height="36" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect1_dropShadow_5394_3700" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="4" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0470588 0 0 0 0 0.0588235 0 0 0 0 0.0784314 0 0 0 0.16 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5394_3700" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect2_dropShadow_5394_3700" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0470588 0 0 0 0 0.0588235 0 0 0 0 0.0784314 0 0 0 0.1 0" />
                <feBlend mode="normal" in2="effect1_dropShadow_5394_3700" result="effect2_dropShadow_5394_3700" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect3_dropShadow_5394_3700" />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0470588 0 0 0 0 0.0588235 0 0 0 0 0.0784314 0 0 0 0.05 0" />
                <feBlend mode="normal" in2="effect2_dropShadow_5394_3700" result="effect3_dropShadow_5394_3700" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect4_dropShadow_5394_3700" />
                <feOffset dy="0.5" />
                <feGaussianBlur stdDeviation="0.5" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.047292 0 0 0 0 0.0579748 0 0 0 0 0.0793404 0 0 0 0.05 0" />
                <feBlend mode="normal" in2="effect3_dropShadow_5394_3700" result="effect4_dropShadow_5394_3700" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow_5394_3700" result="shape" />
            </filter>
            <linearGradient id="paint0_linear_5394_3700" x1="21" y1="3.5" x2="21" y2="39.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
        </defs>
    </svg>

)


export const HeadPhone = ({
    width = 42,
    height = 42,
    fill = "none"
}) => (
    <svg width={width} height={height} viewBox="0 0 42 43" fill={fill} xmlns="http://www.w3.org/2000/svg">
        <rect x="1.5" y="2" width="39" height="39" rx="9.5" fill="#7525FF" />
        <rect x="1.5" y="2" width="39" height="39" rx="9.5" fill="url(#paint0_linear_5394_3730)" fillOpacity="0.2" />
        <rect x="1.5" y="2" width="39" height="39" rx="9.5" stroke="white" strokeWidth="3" />
        <g filter="url(#filter0_dddd_5394_3730)">
            <path d="M13.75 19.25V19C13.75 15.2721 16.9959 12.25 21 12.25C25.0041 12.25 28.25 15.2721 28.25 19V19.25M21 29.1429V29.75C21 30.3023 21.4477 30.75 22 30.75H24C26.4853 30.75 28.5 28.7353 28.5 26.25M13.25 19.25H14.75V25.75H13.25C12.4216 25.75 11.75 25.0784 11.75 24.25V20.75C11.75 19.9216 12.4216 19.25 13.25 19.25ZM27.25 19.25H28.75C29.5784 19.25 30.25 19.9216 30.25 20.75V24.25C30.25 25.0784 29.5784 25.75 28.75 25.75H27.25V19.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <filter id="filter0_dddd_5394_3730" x="3" y="7.5" width="36" height="36" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect1_dropShadow_5394_3730" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="4" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0470588 0 0 0 0 0.0588235 0 0 0 0 0.0784314 0 0 0 0.16 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5394_3730" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect2_dropShadow_5394_3730" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0470588 0 0 0 0 0.0588235 0 0 0 0 0.0784314 0 0 0 0.1 0" />
                <feBlend mode="normal" in2="effect1_dropShadow_5394_3730" result="effect2_dropShadow_5394_3730" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect3_dropShadow_5394_3730" />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0470588 0 0 0 0 0.0588235 0 0 0 0 0.0784314 0 0 0 0.05 0" />
                <feBlend mode="normal" in2="effect2_dropShadow_5394_3730" result="effect3_dropShadow_5394_3730" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect4_dropShadow_5394_3730" />
                <feOffset dy="0.5" />
                <feGaussianBlur stdDeviation="0.5" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.047292 0 0 0 0 0.0579748 0 0 0 0 0.0793404 0 0 0 0.05 0" />
                <feBlend mode="normal" in2="effect3_dropShadow_5394_3730" result="effect4_dropShadow_5394_3730" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow_5394_3730" result="shape" />
            </filter>
            <linearGradient id="paint0_linear_5394_3730" x1="21" y1="3.5" x2="21" y2="39.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
        </defs>
    </svg>
)
