"use client";

import React from "react";
interface PropType {
    width?: number,
    height?: number,
    fill?: string
}
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

export const TopicIcon = ({ width = 18, height = 18, fill = "none" }: PropType) => (
    <svg width={width} height={height} viewBox="0 0 18 18" fill={fill} xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_ddd_5011_17260)">
            <path d="M8.50633 1.45313C8.22726 1.37485 7.93313 1.33301 7.62962 1.33301C6.23029 1.33301 5.03907 2.21951 4.58513 3.461C3.29548 3.7549 2.33333 4.90816 2.33333 6.28671C2.33333 6.92741 2.54163 7.51994 2.89357 7.99967C2.54163 8.47941 2.33333 9.07194 2.33333 9.71261C2.33333 10.8395 2.97629 11.8151 3.91382 12.2945C4.41047 13.677 5.73263 14.6663 7.28704 14.6663C7.71933 14.6663 8.13427 14.5896 8.51847 14.449C8.50647 14.406 8.5 14.3606 8.5 14.3138V11.3347V11.333C8.5 10.4125 7.7538 9.66634 6.83333 9.66634C6.55719 9.66634 6.33333 9.44247 6.33333 9.16634C6.33333 8.89021 6.55719 8.66634 6.83333 8.66634C7.46396 8.66634 8.04347 8.88527 8.5 9.25121V4.66633V4.665V1.533C8.5 1.50581 8.5022 1.47913 8.50633 1.45313Z" fill="white" />
            <path d="M9.48161 14.449C9.86581 14.5896 10.2807 14.6663 10.713 14.6663C12.2675 14.6663 13.5896 13.677 14.0863 12.2945C15.0238 11.8151 15.6667 10.8395 15.6667 9.71261C15.6667 9.07194 15.4585 8.47941 15.1065 7.99967C15.4585 7.51994 15.6667 6.92741 15.6667 6.28671C15.6667 4.90816 14.7046 3.7549 13.4149 3.461C12.961 2.21951 11.7698 1.33301 10.3705 1.33301C10.0669 1.33301 9.77281 1.37485 9.49374 1.45313C9.49788 1.47913 9.50008 1.50581 9.50008 1.533V4.66877C9.50141 5.58813 10.2471 6.333 11.1667 6.333C11.4429 6.333 11.6667 6.55686 11.6667 6.83301C11.6667 7.10914 11.4429 7.33301 11.1667 7.33301C10.5361 7.33301 9.95661 7.11407 9.50008 6.74814V14.3138C9.50008 14.3606 9.49361 14.406 9.48161 14.449Z" fill="white" />
        </g>
        <defs>
            <filter id="filter0_ddd_5011_17260" x="-1" y="0" width="20" height="20" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect1_dropShadow_5011_17260" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5011_17260" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect2_dropShadow_5011_17260" />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0" />
                <feBlend mode="normal" in2="effect1_dropShadow_5011_17260" result="effect2_dropShadow_5011_17260" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect3_dropShadow_5011_17260" />
                <feOffset dy="0.5" />
                <feGaussianBlur stdDeviation="0.5" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0" />
                <feBlend mode="normal" in2="effect2_dropShadow_5011_17260" result="effect3_dropShadow_5011_17260" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_5011_17260" result="shape" />
            </filter>
        </defs>
    </svg>

)

export const ChunkingStrategy = ({ width = 18, height = 18, fill = "none" }: PropType) => (
    <svg width={width} height={height} viewBox="0 0 16 17" fill={fill} xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M7.99992 1.99316C8.27605 1.99316 8.49992 2.21702 8.49992 2.49316V14.8265C8.49992 15.1026 8.27605 15.3265 7.99992 15.3265C7.72378 15.3265 7.49992 15.1026 7.49992 14.8265V2.49316C7.49992 2.21702 7.72378 1.99316 7.99992 1.99316ZM1.33325 5.15983C1.33325 4.14731 2.15407 3.3265 3.16659 3.3265H5.99992V13.9932H3.16659C2.15407 13.9932 1.33325 13.1724 1.33325 12.1598V5.15983ZM9.99992 3.3265H12.8333C13.8458 3.3265 14.6666 4.14731 14.6666 5.15983V12.1598C14.6666 13.1724 13.8458 13.9932 12.8333 13.9932H9.99992V3.3265Z" fill="#868C98" />
    </svg>

)

export const TrashIcon = ({ width = 14, height = 14, fill = "#868B98" }: PropType) => (
    <svg width={width} height={height} viewBox="0 0 14 14" fill={fill} xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M4.05563 2.33398C4.52013 1.16265 5.66292 0.333984 7.0003 0.333984C8.33767 0.333984 9.48047 1.16265 9.94497 2.33398H13.1663C13.4425 2.33398 13.6663 2.55784 13.6663 2.83398C13.6663 3.11013 13.4425 3.33398 13.1663 3.33398H12.3018L11.7458 11.952C11.6835 12.9167 10.883 13.6673 9.91626 13.6673H4.08309C3.1164 13.6673 2.3158 12.9167 2.25356 11.952L1.69756 3.33398H0.833008C0.556865 3.33398 0.333008 3.11013 0.333008 2.83398C0.333008 2.55784 0.556865 2.33398 0.833008 2.33398H4.05563ZM5.17408 2.33398C5.55924 1.73248 6.2336 1.33398 7.0003 1.33398C7.767 1.33398 8.44136 1.73248 8.82651 2.33398H5.17408ZM5.99967 6.16732C5.99967 5.89118 5.77582 5.66732 5.49967 5.66732C5.22353 5.66732 4.99967 5.89118 4.99967 6.16732V9.83398C4.99967 10.1101 5.22353 10.334 5.49967 10.334C5.77582 10.334 5.99967 10.1101 5.99967 9.83398V6.16732ZM8.49967 5.66732C8.77582 5.66732 8.99967 5.89118 8.99967 6.16732V9.83398C8.99967 10.1101 8.77582 10.334 8.49967 10.334C8.22353 10.334 7.99967 10.1101 7.99967 9.83398V6.16732C7.99967 5.89118 8.22353 5.66732 8.49967 5.66732Z" fill={fill} />
    </svg>
)

export const EditIcon = ({ width = 16, height = 16, fill = "#868B98" }: PropType) => (
    <svg width={width} height={height} viewBox="0 0 16 16" fill={fill} xmlns="http://www.w3.org/2000/svg">
        <path d="M13.7047 3.42369C12.9888 2.70773 11.828 2.70773 11.112 3.42369L5.20397 9.33174C4.86015 9.67554 4.66699 10.1419 4.66699 10.6281V12.8344C4.66699 13.1106 4.89085 13.3344 5.16699 13.3344H7.37333C7.85953 13.3344 8.32586 13.1413 8.66966 12.7975L14.5777 6.88941C15.2937 6.17345 15.2937 5.01265 14.5777 4.29669L13.7047 3.42369Z" fill={fill}/>
        <path d="M1.16699 3.33203C0.890852 3.33203 0.666992 3.55589 0.666992 3.83203C0.666992 4.10818 0.890852 4.33203 1.16699 4.33203H6.16699C6.44313 4.33203 6.66699 4.10818 6.66699 3.83203C6.66699 3.55589 6.44313 3.33203 6.16699 3.33203H1.16699Z" fill={fill}/>
        <path d="M1.16699 6C0.890852 6 0.666992 6.22386 0.666992 6.5C0.666992 6.77617 0.890852 6.99997 1.16699 6.99997H4.16699C4.44313 6.99997 4.66699 6.77617 4.66699 6.5C4.66699 6.22386 4.44313 6 4.16699 6H1.16699Z" fill={fill}/>
    </svg>
)