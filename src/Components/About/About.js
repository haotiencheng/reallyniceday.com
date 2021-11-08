import React from "react";
import "./About.css";
import htmlsvg from "./html.svg";
import csssvg from "./css.svg";
import javascriptsvg from "./javascript.svg";
import jquerysvg from "./jquery.svg";
import gitsvg from "./git.svg";
import microsoftsvg from "./microsoft.svg";
import Nodejssvg from "./Nodejs.svg";
import pythonsvg from "./python.svg";
import reactsvg from "./react.svg";
import vscodesvg from "./vscode.svg";
import postgresqlsvg from "./postgresql.svg";
import tailwindcsssvg from "./tailwindcss.svg";

function About() {
    return (
        <section id="About" className="mb-16">
            <div className="2xl:text-3xl text-2xl text-left mx-4 sm:mx-8 md:mx-16 xl:mx-32 2xl:mx-48 mb-4">
                Skill set
                <div className="2xl:mt-2 mt-1 border-b-4 md:w-1/12 w-1/4"></div>
            </div>
            <div className="skillsContainer sectionContainer mx-4 sm:mx-8 md:mx-16 xl:mx-32 2xl:mx-48 bg-gray-100 mb-4">
                <ul className="skillsGrid place-items-center gap-x-4 sm:gap-x-8 md:gap-x:14 lg:gap-x:20 xl:gap-x:28 2xl:gap-x-36 gap-y-6 2xl:gap-y-12">
                    <li className="hover:shadow-xl">
                        <div className="grid place-items-center">
                            <img src={htmlsvg} alt="icon" />
                            <p className="pt-2 font-bold">HTML</p>
                        </div>
                    </li>
                    <li className="hover:shadow-xl">
                        <div className="grid place-items-center">
                            <img src={csssvg} alt="icon" />
                            <p className="pt-2 font-bold">CSS</p>
                        </div>
                    </li>
                    <li className="hover:shadow-xl">
                        <div className="grid place-items-center">
                            <img src={javascriptsvg} alt="icon" />
                            <p className="pt-2 font-bold">Javascript</p>
                        </div>
                    </li>
                    <li className="hover:shadow-xl">
                        <div className="grid place-items-center">
                            <img src={jquerysvg} alt="icon" />
                            <p className="pt-2 font-bold">JQuery</p>
                        </div>
                    </li>
                    <li className="hover:shadow-xl">
                        <div className="grid place-items-center">
                            <img src={reactsvg} alt="icon" />
                            <p className="pt-2 font-bold">React</p>
                        </div>
                    </li>
                    <li className="hover:shadow-xl">
                        <div className="grid place-items-center">
                            <img src={Nodejssvg} alt="icon" />
                            <p className="pt-2 font-bold">Node.js</p>
                        </div>
                    </li>
                    <li className="hover:shadow-xl">
                        <div className="grid place-items-center">
                            <img src={postgresqlsvg} alt="icon" />
                            <p className="pt-2 font-bold">PostgreSQL</p>
                        </div>
                    </li>
                    <li className="hover:shadow-xl">
                        <div className="grid place-items-center">
                            <img src={tailwindcsssvg} alt="icon" />
                            <p className="pt-2 font-bold">TailwindCSS</p>
                        </div>
                    </li>
                    <li className="hover:shadow-xl">
                        <div className="grid place-items-center">
                            <img src={pythonsvg} alt="icon" />
                            <p className="pt-2 font-bold">Python</p>
                        </div>
                    </li>
                    <li className="hover:shadow-xl">
                        <div className="grid place-items-center">
                            <img src={gitsvg} alt="icon" />
                            <p className="pt-2 font-bold">Git</p>
                        </div>
                    </li>
                    <li className="hover:shadow-xl">
                        <div className="grid place-items-center">
                            <img src={vscodesvg} alt="icon" />
                            <p className="pt-2 font-bold">VS Code</p>
                        </div>
                    </li>
                    <li className="hover:shadow-xl">
                        <div className="grid place-items-center">
                            <img src={microsoftsvg} alt="icon" />
                            <p className="pt-2 font-bold">M365</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default About;
