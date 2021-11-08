import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Dance.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 3,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
        slidesToSlide: 2,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

function Dance() {
    return (
        <section id="Dance" className="mb-16">
            <div className="2xl:text-3xl text-2xl text-left mx-4 sm:mx-8 md:mx-16 xl:mx-32 2xl:mx-48 mb-4">
                Dance
                <div className="2xl:mt-2 mt-1 border-b-4 md:w-1/12 w-1/4"></div>
            </div>
            <div className="h-full mx-4 sm:mx-8 md:mx-16 xl:mx-32 2xl:mx-48 xl:mb-4 mb-2">
                <Carousel responsive={responsive} className="h-1/2">
                    <div className="z-0 h-96 sm:pr-4">
                        <YoutubeEmbed embedId="dZPpfpoNbN0" />
                    </div>
                    <div className="z-0 h-96 sm:pr-4">
                        <YoutubeEmbed embedId="2EiVMQWT20Y?start=368" />
                    </div>
                    <div className="z-0 h-96 sm:pr-4">
                        <YoutubeEmbed embedId="Wzs1H506OQ8" />
                    </div>
                    <div className="z-0 h-96 sm:pr-4">
                        <YoutubeEmbed embedId="M1Zl2SjAqZk" />
                    </div>
                </Carousel>
            </div>
        </section>
    );
}

export default Dance;
