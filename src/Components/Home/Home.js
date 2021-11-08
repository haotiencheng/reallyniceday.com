import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "./Home.css";
import hero from "./hero.png";
import openInNewTab from "../../Functions/openInNewTab";

library.add(fab);

function Home() {
    const description =
        "Hao-Tien Cheng aka Really Nice Day,\n A Front-End Web Developer passionate about creating interactive applications and experiences on the web.";
    return (
        <section id="Home" className="mb-16">
            <div className="flex flex-col mx-4 sm:mx-8 md:mx-16 xl:mx-32 2xl:mx-48 place-items-center">
                <div className="items-center justify-center w-1/4 xl:mt-32 mt-24 hero">
                    <img src={hero} alt="hero" className="rounded-full"></img>
                </div>
                <div className="xl:mt-8 mt-4 md:gap-x-8 gap-x-4 grid grid-cols-5">
                    <div
                        onClick={() =>
                            openInNewTab("https://github.com/haotiencheng")
                        }
                    >
                        <FontAwesomeIcon
                            icon={["fab", "github"]}
                            className="text-lg md:text-2xl text-primary transform duration-200 hover:scale-150 hover:text-tertiary cursor-pointer"
                        />
                    </div>
                    <div
                        onClick={() =>
                            openInNewTab("https://medium.com/@really_nice_day")
                        }
                    >
                        <FontAwesomeIcon
                            icon={["fab", "medium"]}
                            className="text-lg md:text-2xl text-primary transform duration-200 hover:scale-150 hover:text-tertiary cursor-pointer"
                        />
                    </div>
                    <div
                        onClick={() =>
                            openInNewTab(
                                "https://www.instagram.com/really_nice_day/"
                            )
                        }
                    >
                        <FontAwesomeIcon
                            icon={["fab", "instagram"]}
                            className="text-lg md:text-2xl text-primary transform duration-200 hover:scale-150 hover:text-tertiary cursor-pointer"
                        />
                    </div>
                    <div
                        onClick={() =>
                            openInNewTab(
                                "https://www.facebook.com/profile.php?id=100001019268579"
                            )
                        }
                    >
                        <FontAwesomeIcon
                            icon={["fab", "facebook"]}
                            className="text-lg md:text-2xl text-primary transform duration-200 hover:scale-150 hover:text-tertiary cursor-pointer"
                        />
                    </div>
                    <div
                        onClick={() =>
                            openInNewTab(
                                "https://www.linkedin.com/in/haotiencheng/"
                            )
                        }
                    >
                        <FontAwesomeIcon
                            icon={["fab", "linkedin"]}
                            className="text-lg md:text-2xl text-primary transform duration-200 hover:scale-150 hover:text-tertiary cursor-pointer"
                        />
                    </div>
                </div>
                <div className="2xl:text-2xl items-center justify-center my-8 text-primary whitespace-pre-wrap">
                    {description}
                </div>
            </div>
        </section>
    );
}

export default Home;
