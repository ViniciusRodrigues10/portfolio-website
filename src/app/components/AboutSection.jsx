"use client"
import React, { useTransition, useState, useEffect } from "react";
import TabButton from "./TabButton";
import Cube3D from "./Cube3D";
import Lottie from 'react-lottie';
import CubeAnimation from '../../../public/assets/LottieJson/CubeAnimation.json'

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Node.js</li>
                <li>Node.js</li>
                <li>Node.js</li>
                <li>Node.js</li>
                <li>Node.js</li>
                <li>Node.js</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Fullstack Academy of COde</li>
                <li>University of California, Santa Cruz</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>AWS</li>
                <li>Google Professional Cloud Developer</li>
            </ul>
        )
    },
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const isMidScreen = () => {
        const [isMid, setisMid] = useState(true);
      
        useEffect(() => {
          const handleResize = () => {
            const midScreenWidth = 768;
      
            const windowWidth = window.innerWidth;
      
            setisMid(windowWidth <= midScreenWidth);
          };
      
          handleResize();
          window.addEventListener('resize', handleResize);
      
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        }, []);
      
        return isMid;
    };

    const isMid = isMidScreen();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }

    return (
        <section id="about" className="mt-20 text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center px-4 xl:gap-16 sm:py-16 xl:px-16">
                {!isMid ? (
                    <div className={`h-full mt-60`}> 
                        <Cube3D />
                    </div>
                ) : (
                    <div>
                        <Lottie
                            options={{
                                loop: true,
                                autoplay: true,
                                animationData: CubeAnimation
                            }}
                            width={250} height={250}
                        />
                    </div>
                )}
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About</h2>
                    <p className="text-base lg:text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid ipsa eaque ea nisi explicabo ullam, quod at alias? Laboriosam quod quaerat ut nobis quas eveniet ad provident asperiores, cum illo.</p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton selecTab={() => handleTabChange("skills")} active={tab === "skills"}>
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton selecTab={() => handleTabChange("education")} active={tab === "education"}>
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton selecTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
                            {" "}
                            Certifications{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    )
};

export default AboutSection;