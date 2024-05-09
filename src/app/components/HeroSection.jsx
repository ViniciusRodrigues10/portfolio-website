"use client";
import React, { useEffect, useState } from 'react'
import Lottie from 'react-lottie';
import { TypeAnimation } from 'react-type-animation';
import { useWindowSize } from '@react-hook/window-size';
import { useMediaQuery } from 'react-responsive';
import ScrollDownAnimation from "./ScrollDownAnimation";
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import RubiksCubeAnimation from '../../../public/assets/LottieJson/RubiksCubeAnimation.json'

const HeroSection = () => {
    const [isButtonHovered, setIsButtonHovered] = useState(false);
    const { scrollY } = useViewportScroll();
    const opacity = useTransform(scrollY, [0, 550], [1, 0]);
    const [width, height] = useWindowSize();
    const isMobile = useMediaQuery({ maxWidth: 1024 });

    const isStandardScreen = () => {
        const [isStandard, setIsStandard] = useState(true);
      
        useEffect(() => {
          const handleResize = () => {
            const standardScreenWidth = 1920;
            
            const windowWidth = window.innerWidth;
      
            setIsStandard(windowWidth <= standardScreenWidth);
          };
      
          handleResize();
          window.addEventListener('resize', handleResize);
      
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        }, []);
      
        return isStandard;
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: "smooth"
            });
        }
    }

    const isStandard = isStandardScreen();
    
    return (
        <section id= "home" className='xl:h-screen xl:flex xl:justify-center xl:items-center'>
            <div className="lg:hidden">
                <Lottie
                    options={{
                        loop: true,
                        autoplay: true,
                        animationData: RubiksCubeAnimation
                    }}
                    width={250} height={250}
                />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-12'>
                <div
                    className='col-span-8 place-self-center text-center sm:text-left justify-self-start'
                >
                    <h1 className='text-white mb-4 text-3xl md:text-5xl lg:text-7xl xl:text-8xl lg:leading-normal font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600'
                        >
                            Hello, I'm{" "}
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                "Vinícius",
                                1000,
                                "Web Developer",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p style={{ fontSize: '18px' }} className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>" Existem duas maneiras de construir um projeto de software. Uma é fazê-lo tão simples que obviamente não há falhas. A outra é fazê-lo tão complicado que não existem falhas óbvias. "<br />- C.A.R. HOAR</p>
                    <div>
                        <button 
                            className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:transform hover:scale-105 hover:bg-slate-200 text-white'
                            onMouseEnter={() => setIsButtonHovered(true)}
                            onMouseLeave={() => setIsButtonHovered(false)}
                            onClick={() => scrollToSection('contact')} 
                        >
                            Contrate-me
                            <span className="neon-glow"></span>
                        </button>
                        <button 
                            className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:transform hover:scale-105 hover:bg-slate-800 text-white mt-3'
                            onMouseEnter={() => setIsButtonHovered(true)}
                            onMouseLeave={() => setIsButtonHovered(false)}
                        >
                            <a 
                                href="https://drive.google.com/file/d/1cNwKL1VXQ33vyZl5qlukN276A2e_McGo/view?usp=sharing"
                                target="_blank"
                                className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'
                            >
                                Download CV
                            </a>
                            <span className="neon-glow"></span>
                        </button>
                    </div>
                </div>
                <div className='col-span-4 place-self-center mt-4 lg:mt-0 hidden lg:block'>
                    <Lottie
                        options={{
                            loop: true,
                            autoplay: true,
                            animationData: RubiksCubeAnimation
                        }}
                        style={{
                            width: ['100%', '100%', '450px', '600px'],
                            height: ['100%', '100%', '450px', '600px'], 
                        }}
                    />
                </div>
            </div>
            <motion.div
                style={{ opacity: opacity }} 
                className='lg:flex justify-center items-center absolute bottom-4 left-0 w-full hidden'>
                    <ScrollDownAnimation />
            </motion.div>

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
                    box-shadow: 
                        0 0 5px rgba(255, 255, 255, 0.5), 
                        0 0 15px rgba(255, 255, 255, 0.5), 
                        0 0 30px rgba(255, 255, 255, 0.5), 
                        0 0 50px rgba(0, 128, 128, 0.5), /* Cor mista de azul e verde */
                        0 0 75px rgba(0, 128, 128, 0.5), /* Cor mista de azul e verde */
                        0 0 100px rgba(0, 128, 128, 0.5); /* Cor mista de azul e verde */
                }
                
                @media only screen and (max-width: 768px) {
                    .neon-glow {
                        display: none;
                    }
                }
                
                
            `}</style>
        </section>
    );
}

export default HeroSection;