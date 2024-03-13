"use client";
import React, { useState } from 'react'
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    const [isButtonHovered, setIsButtonHovered] = useState(false);

    return (
        <section className='lg:py-16'>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div
                    className='col-span-8 place-self-center text-center sm:text-left justify-self-start'
                >
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600'>Hello, I'm{" "}</span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                "Vinicius",
                                1000,
                                "Web Developer",
                                1000,
                                "Mobile Developer",
                                1000,
                                "UI/UX Designer",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolore unde consequuntur nam placeat rerum vitae explicabo corrupti. Rem laborum iste commodi fuga expedita possimus esse necessitatibus eligendi obcaecati debitis.</p>
                    <div>
                        <button 
                            className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:transform hover:scale-105 hover:bg-slate-200 text-white'
                            onMouseEnter={() => setIsButtonHovered(true)}
                            onMouseLeave={() => setIsButtonHovered(false)}
                        >
                            Hire Me
                            <span className="neon-glow"></span>
                        </button>
                        <button 
                            className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:transform hover:scale-105 hover:bg-slate-800 text-white mt-3'
                            onMouseEnter={() => setIsButtonHovered(true)}
                            onMouseLeave={() => setIsButtonHovered(false)}
                        >
                            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
                            <span className="neon-glow"></span>
                        </button>
                    </div>
                </div>
                <div className='col-span-4 place-self-center mt-4 lg:mt-0'>
                    <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                        <Image 
                            src='/images/hero-image.png'
                            alt='hero image'
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2'
                            width={300}
                            height={300}
                        />
                    </div>
                    
                </div>
            </div>
            <style jsx>{`
                .neon-glow {
                    position: absolute;
                    content: '';
                    top: 0px;
                    left: 0px;
                    right: 0px;
                    bottom: 0px;
                    z-index: -1;
                    border-radius: inherit;
                    background-color: transparent;
                    box-shadow: 0 0 5px rgba(255, 255, 255, 0.5), 0 0 15px rgba(255, 255, 255, 0.5), 0 0 30px rgba(255, 255, 255, 0.5), 0 0 50px rgba(255, 0, 222, 0.5), 0 0 75px rgba(255, 0, 222, 0.5), 0 0 100px rgba(255, 0, 222, 0.5);
                }

                @media only screen and (max-width: 640px) {
                    .neon-glow {
                        display: none;
                    }
                }
            `}</style>
        </section>
    );
}

export default HeroSection;