import React from "react";
import "./Portfolio.css";
import smart_brain from "./Smart Brain.png";
import stock_cc from "./Stock CC.png";
import robofriends from "./Robofriends.png";
import openInNewTab from "../../Functions/openInNewTab";

function Portfolio() {
    const titleScc = "Stock Chart Creator\n ";
    const titleRobo = "Robofriends\n ";
    const tagScc = "#JQuery #RapidAPI #Bootstrap\n  ";
    const tagRobo = "#React #Tachyons\n  ";
    return (
        <section id="Portfolio" className="mb-16">
            <div className="2xl:text-3xl text-2xl text-left mx-4 sm:mx-8 md:mx-16 xl:mx-32 2xl:mx-48 mb-4">
                Portfolio
                <div className="2xl:mt-2 mt-1 border-b-4 md:w-1/12 w-1/4"></div>
            </div>
            <div className="mx-4 sm:mx-8 md:mx-16 xl:mx-32 2xl:mx-48 xl:mb-4 mb-2 z-0">
                <div className="grid md:grid-cols-3 grid-cols-1">
                    <div className="content w-full aspect-w-1 aspect-h-1">
                        <div className="content-overlay"></div>
                        <img
                            src={smart_brain}
                            alt="smart_brain"
                            className="content-image object-fill"
                        />
                        <div className="content-details fadeIn-bottom">
                            <h1 className="content-title 2xl:text-3xl lg:text-2xl md:text-xl text-xl text-gray-200 xl:mx-4 2xl:my-6 mx-2 my-2 font-semibold">
                                Celebrity Look Alike Face-recognition App
                            </h1>
                            <hr className="md:w-6 w-4 md:border-2  xl:mx-4 mx-2 my-4 border-secondary"></hr>
                            <h2 className="xl:text-lg md:text-sm sm:text-sm text-md text-secondary xl:mx-4 mx-2 my-2 font-semibold">
                                #React #Postgresql #Node.js #Express #Clarifai
                                API #Bcrypt #Tachyons
                            </h2>
                            <div className="grid grid-cols-2 gap-x-4 xl:mx-4 mx-2 2xl:my-6 my-4">
                                <div
                                    className="rounded-full cursor-pointer bg-tertiary-light text-center align-middle md:text-xl text-lg text-primary-dark hover:text-tertiary hover:scale-110 transform duration-300"
                                    onClick={() =>
                                        openInNewTab(
                                            "https://github.com/haotiencheng/facerecognitionbrain"
                                        )
                                    }
                                >
                                    Source Code
                                </div>
                                <div
                                    className="rounded-full cursor-pointer bg-gray-200 text-center align-middle md:text-xl text-lg text-primary hover:text-tertiary hover:scale-110 transform duration-300"
                                    onClick={() =>
                                        openInNewTab(
                                            "https://haotiencheng.github.io/facerecognitionbrain/"
                                        )
                                    }
                                >
                                    Live Demo
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content w-full aspect-w-1 aspect-h-1 z-0">
                        <div className="content-overlay"></div>
                        <img
                            src={stock_cc}
                            alt="stock_cc"
                            className="content-image object-fill"
                        />
                        <div className="content-details fadeIn-bottom">
                            <h1 className="content-title 2xl:text-3xl lg:text-2xl md:text-xl text-xl text-gray-200 xl:mx-4 2xl:my-6 mx-2 my-2 whitespace-pre-wrap">
                                {titleScc}
                            </h1>
                            <hr className="md:w-6 w-4 md:border-2  xl:mx-4 xl:my-4 mx-2 my-2 border-secondary"></hr>
                            <h2 className="xl:text-lg md:text-sm sm:text-sm text-md text-secondary xl:mx-4 xl:my-4 mx-2 my-2 sm:font-bold whitespace-pre-wrap">
                                {tagScc}
                            </h2>
                            <div className="grid grid-cols-2 gap-x-4 xl:mx-4 mx-2 2xl:my-6 my-4">
                                <div
                                    className="rounded-full cursor-pointer bg-tertiary-light text-center align-middle md:text-xl text-lg text-primary-dark hover:text-tertiary hover:scale-110 transform duration-300"
                                    onClick={() =>
                                        openInNewTab(
                                            "https://github.com/haotiencheng/haotiencheng.github.io/tree/master/final"
                                        )
                                    }
                                >
                                    Source Code
                                </div>
                                <div
                                    className="rounded-full cursor-pointer bg-gray-200 text-center align-middle md:text-xl text-lg text-primary hover:text-tertiary hover:scale-110 transform duration-300"
                                    onClick={() =>
                                        openInNewTab(
                                            "https://haotiencheng.github.io/final/"
                                        )
                                    }
                                >
                                    Live Demo
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content w-full aspect-w-1 aspect-h-1 z-0">
                        <div className="content-overlay"></div>
                        <img
                            src={robofriends}
                            alt="robofriends"
                            className="content-image object-fill"
                        />
                        <div className="content-details fadeIn-bottom">
                            <h1 className="content-title 2xl:text-3xl lg:text-2xl md:text-xl text-xl text-gray-200 xl:mx-4 2xl:my-6 mx-2 my-2 whitespace-pre-wrap">
                                {titleRobo}
                            </h1>
                            <hr className="md:w-6 w-4 md:border-2  xl:mx-4 xl:my-4 mx-2 my-2 border-secondary"></hr>
                            <h2 className="xl:text-lg md:text-sm sm:text-sm text-md text-secondary xl:mx-4 xl:my-4 mx-2 my-2 font-bold whitespace-pre-wrap">
                                {tagRobo}
                            </h2>
                            <div className="grid grid-cols-2 gap-x-4 xl:mx-4 mx-2 2xl:my-6 my-4">
                                <div
                                    className="rounded-full cursor-pointer bg-tertiary-light text-center align-middle md:text-xl text-lg text-primary-dark hover:text-tertiary hover:scale-110 transform duration-300"
                                    onClick={() =>
                                        openInNewTab(
                                            "https://github.com/haotiencheng/robofriends"
                                        )
                                    }
                                >
                                    Source Code
                                </div>
                                <div
                                    className="rounded-full cursor-pointer bg-gray-200 text-center align-middle md:text-xl text-lg text-primary hover:text-tertiary hover:scale-110 transform duration-300"
                                    onClick={() =>
                                        openInNewTab(
                                            "https://haotiencheng.github.io/robofriends"
                                        )
                                    }
                                >
                                    Live Demo
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {/* <button
                    href="\portfolio"
                    className="bg-transparent hover:bg-primary text-secondary font-bold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded transform duration-300 "
                >
                    Click to watch more
                </button> */}
            </div>
        </section>
    );
}

export default Portfolio;
