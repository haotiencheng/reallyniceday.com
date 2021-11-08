import React, { useRef } from "react";
import emailjs from "emailjs-com";
import logo from "./logo.png";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_htuwf89",
                "template_fafzjxo",
                form.current,
                "user_329dhCoQ4kYweB7aXLYmP"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("Message send successfully!");
                },
                (error) => {
                    console.log(error.text);
                }
            )
            .catch();
    };

    return (
        <section id="Contact">
            <div className="2xl:text-3xl text-2xl text-left mx-4 sm:mx-8 md:mx-16 xl:mx-32 2xl:mx-48 mb-2">
                Contact
                <div className="2xl:mt-2 mt-1 border-b-4 md:w-1/12 w-1/4"></div>
            </div>
            <div className="2xl:text-lg text-lg text-left mx-4 sm:mx-8 md:mx-16 xl:mx-32 2xl:mx-48 mb-4">
                Available for questions, collaborations, projects & coffee.
            </div>

            <div className="relative h-96 mx-4 sm:mx-32 md:mx-48 xl:mx-64 2xl:mx-80 xl:mb-4 mb-2">
                <div id="logo" className="grid h-full z-10">
                    <img
                        src={logo}
                        alt="logo"
                        className="justify-self-center self-center opacity-20"
                    ></img>
                </div>
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="absolute inset-0"
                    id="contact_form"
                >
                    <div className="text-left mb-2">Name *</div>
                    <div className="grid grid-cols-2 gap-x-4">
                        <div className="grid grid-rows-2">
                            <input
                                required="required"
                                type="text"
                                name="user_firstname"
                                className="border-2 h-10 mb-1 bg-transparent"
                            />
                            <label className="justify-self-start text-xs">
                                First Name
                            </label>
                        </div>
                        <div className="grid grid-rows-2">
                            <input
                                required="required"
                                type="text"
                                name="user_lastname"
                                className="border-2 h-10 mb-1 bg-transparent"
                            />
                            <label className="justify-self-start text-xs">
                                Last Name
                            </label>
                        </div>
                    </div>
                    <div className="text-left mb-2">Email Address *</div>
                    <div className="grid">
                        <div className="grid grid-rows-2">
                            <input
                                required="required"
                                type="email"
                                name="user_email"
                                className="border-2 h-10 bg-transparent"
                            />
                        </div>
                    </div>
                    <div className="text-left mb-2">Message *</div>
                    <div className="grid">
                        <div className="grid">
                            <textarea
                                name="message"
                                className="border-2 h-36 bg-transparent"
                            />
                        </div>
                        <div className="flex mt-4 mb-20 w-1/2 md:w-1/3 lg:w-1/6 h-1/4">
                            <input
                                type="submit"
                                value="Submit"
                                className="justify-self-start w-full h-full cursor-pointer bg-primary text-white border hover:border-transparent rounded-full hover:bg-primary-light active:bg-secondary transform duration-300"
                            />
                            <a href="mailto: haotiencheng1217@gmail.com">
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    className=" lg:hidden align-middle text-lg mx-4"
                                />
                            </a>
                            <a href="tel:+886-905-516-617">
                                <FontAwesomeIcon
                                    icon={faPhone}
                                    className="lg:hidden align-middle text-lg"
                                />
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;
