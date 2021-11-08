import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faPhone,
    faArrowUp,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return (
        <div className="bg-background fixed grid grid-cols-10 bottom-0 w-full 2xl:text-md xl:text-sm text-xs opacity-80">
            <div className="items-center justify-self-start lg:col-span-7 col-span-9 flex mx-4 md:mx-16 h-8 2xl:h-12">
                <div>© Cheng Hao Tien 2021｜</div>
                <div>web developer｜</div>
                <a href="mailto: haotiencheng1217@gmail.com">
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        className="hidden md:inline-block mr-10 md:mr-2"
                    />
                    <span className="hidden lg:inline-block">
                        haotiencheng1217@gmail.com｜
                    </span>
                </a>
                <a href="tel:+886-905-516-617">
                    <FontAwesomeIcon
                        icon={faPhone}
                        className="hidden lg:inline-block md:mr-2"
                    />
                    <span className="hidden md:inline-block">
                        (+886)905-516-617
                    </span>
                </a>
            </div>
            <a
                className="items-center lg:col-span-3 col-span-1 flex justify-self-end mx-4 md:mx-16"
                href="#Home"
            >
                <FontAwesomeIcon icon={faArrowUp} className="mr-2" />
                <span className="hidden md:inline-block">Back to top</span>
            </a>
        </div>
    );
}

export default Footer;
