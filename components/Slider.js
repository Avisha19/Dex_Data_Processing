import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

let equipments = [
    {
        id: 1,
        description: "Fujitsu Sv600 is an Overhead style contactless scanner,A3 Document Scanning,Auto Book Correction",
        url: "/images/dex8.jpg",
    },
    {
        id: 2,
        description: "Fujitsu fi 6240 : The fastest and most compact scanner (60 ppm ADF/Flatbed)",
        url: "/images/dex9.png",
    },
    {
        id: 3,
        description: "Fujitsu fi7160 : High speed scanner is capable of loading up to 80 sheets at a time",
        url: "/images/dex10.jpg",
    },
    {
        id: 4,
        description: "Kodak i1420 : High speed production scanner for A3,A4 sized document",
        url: "/images/dex11.jpg",
    },
    {
        id: 5,
        description: "Kodak i2800 : High speed production scanner for A4 sized document",
        url: "/images/dex12.jpg",
    },
    {
        id: 6,
        description: "Kodak i3400 : High speed production scanner for A3,A4 sized document",
        url: "/images/dex13.png",
    },
];
var $ = require("jquery");
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

// This is for React JS, Remove this for Next.js
// import OwlCarousel from 'react-owl-carousel';

const Slider = () => {
    const options = {
    
        responsiveClass: true,
        nav: true,
        dots: true,
        autoplay: true,
        smartSpeed: 1000,
        navClass: ["owl-prev", "owl-next"],
        navText: [
            '<img src="/images/arrow-left.png"/>',
            '<img src="/images/arrow-right.png"/>',
        ],
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 3,
            },
        },
    };

    return (
        <div className="md:mx-52 mx-5">
            <div
                className="mt-3 pb-2 bg-white"
                id="owl-carousel-products"
            >
                <ul id="owl-carousel-ul" className="owl-carousel owl-loaded owl-drag">
                    <OwlCarousel
                        className="owl-theme"
                        loop
                        margin={4}
                        nav={true}
                        navText={[
                            '<img src="/images/arrow-left.png"/>',
                            '<img src="/images/arrow-right.png"/>',
                        ]}
                        dots={false}
                        animateIn={true}
                        {...options}
                    >
                        {equipments && equipments.length > 0
                            ? equipments.map((equipment) => {
                                return (
                                    <div
                                        id="featuredProducts"
                                        key={equipment.id}
                                    >
                                        <div className="w-[300px] mx-auto">
                                            <span className="image text-center">
                                                <img
                                                    id={"img" + equipment.id}
                                                    src={equipment.url}
                                                    className="h-[300px]"
                                                />
                                            </span>
                                            <p className="text-center font-main text-md text-gray-600">
                                                {equipment.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })
                            : ""}
                    </OwlCarousel>
                </ul>
                
            </div>
            
        </div>
    );
};
export default Slider;