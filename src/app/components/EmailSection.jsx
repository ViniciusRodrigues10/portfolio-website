"use client";
import React, { useState } from 'react';
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmite = async(e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

        const options = {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json',
            },

            body: JSONdata, 
        };

        const response = await fetch(endpoint, options);
        const resData = await response.json();

        if (response.status === 200) {
            console.log('Message sent.');
            setEmailSubmitted(true);
        }
    };
    
    return (
    <section id="contact" className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
        <div className='absolute ame="absolute w-80 h-80 z-0'></div>
        <div className='z-10'>
            <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
                {" "}   
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid cupiditate beatae nemo exercitationem facere veritatis laborum deleniti tempore quas nulla excepturi voluptatibus deserunt odio, minima aut eaque ab voluptatum velit!
            </p>
            <div className='social flex flex-row gap-2'>
                <Link href="guthub.com">
                    <Image src={GithubIcon} alt="Github Icon" />
                </Link>
                <Link href="linkedin.com">
                    <Image src={LinkedinIcon} alt="Github Icon" />
                </Link>
            </div>
        </div>
        <div>
            <form action="https://formsubmit.co/007d0733b41c1d57bbc3e636b88391ae" method="POST" className='flex flex-col'>
                <div className='mb-6'>
                    <label for="email" className="block mb-2 text-sm font-medium text-white">
                        Your email
                    </label>
                    <input 
                        name="email"
                        type="email"
                        id="email"
                        required 
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" 
                        placeholder='jacob@google.com'
                    />
                </div>
                {/* <div className="mb-6">
                    <label for="subject" className="block mb-2 text-sm font-medium text-white">
                        Subject
                    </label>
                    <input
                        name="email"
                        type="text"
                        id="subject"
                        className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
                        placeholder="Just saying hi"
                    /> 
                </div> */}
                <div className='mb-6'>
                    <label
                        for="message"
                        className="block mb-2 text-sm font-medium text-white">
                            Message
                    </label>
                    <input 
                        type="text"
                        name="message"
                        id="message"
                        className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
                        placeholder="Let's talk about..." 
                    />
                </div>
                <button
                    type="submit"
                    className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                >
                    Send Message    
                </button>
                {/* {
                    emailSubmitted && (
                        <p className="text-green-500 text-sm mt-2">
                            Email sent sucessfully!
                        </p>
                    )
                } */}
            </form>
        </div>    
    </section>
    )
}

export default EmailSection