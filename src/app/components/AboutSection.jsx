"use client"
import React, { useState, useEffect } from "react";
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
                <li>
                    <span className="font-bold">Front-End:</span>{" "}
                    <span>HTML · CSS · NextJS · React</span>
                </li>
                <li>
                    <span className="font-bold">Back-End:</span>{" "}
                    <span>Django · NestJS · Fastify</span>
                </li>
                <li>
                    <span className="font-bold">Banco de Dados:</span>{" "}
                    <span>MongoDB · MySQL · PostgresSQL</span>
                </li>
                <li>
                    <span className="font-bold">Linguagens:</span>{" "}
                    <span>Python · Java · C/C++ · TypeScript · JavaScript</span>
                </li>
                <li>
                    <span className="font-bold">Tecnologias:</span>{" "}
                    <span>Amazon Web Services · Docker · Git · Github · Gitlab · Grafana · Linux · Windows</span>
                </li>
            </ul>
        )
    },
    {
        title: "Formation",
        id: "formation",
        content: (
            <ul className="list-disc pl-2">
                <li>
                    <span>Engenharia de Computação,</span>{" "}
                    <span className="font-bold">Instituto Federal da Paraíba</span>
                </li>
                <li>
                    <span>Técnico em suporte e manutenção em informática,</span>{" "}
                    <span className="font-bold">SENAI</span>{" "}
                </li>
            </ul>
        )
    },
    {
        title: "Certificações",
        id: "certificações",
        content: (
            <ul className="list-disc pl-2">
                <li className="font-bold">Scrum</li>
            </ul>
        )
    },
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isMid, setIsMid] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            const midScreenWidth = 768;
            const windowWidth = window.innerWidth;
            setIsMid(windowWidth <= midScreenWidth);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleTabChange = (id) => {
        setTab(id);
    }

    return (
        <section id="about" className="text-white mt-20 lg:mt-40 xl:mt-2">
            <div className="md:grid md:grid-cols-2 gap-8 items-center px-4 xl:gap-16 sm:py-16 xl:px-16">
                {isMid ? (
                    <Lottie
                        options={{
                            loop: true,
                            autoplay: true,
                            animationData: CubeAnimation
                        }}
                        width={250} height={250}
                    />
                ) : (
                    <div className="h-full mt-60"> 
                        <Cube3D />
                    </div>
                )}
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">Sobre</h2>
                    <p className="text-base lg:text-lg">Com três anos no mercado financeiro, desenvolvi e implementei robôs para câmbio e CFDs, além de contribuir na BM&FBovespa. Tenho amplo conhecimento em Python, Java, JavaScript, TypeScript e C/C++, capacitando-me a oferecer soluções robustas. Recentemente, tenho focado no desenvolvimento web. Estou em busca de desafios estimulantes para aplicar minha experiência e habilidades, contribuindo para o sucesso e a inovação de novos projetos.</p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton selecTab={() => handleTabChange("skills")} active={tab === "skills"}>
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton selecTab={() => handleTabChange("formation")} active={tab === "formation"}>
                            {" "}
                            Formação{" "}
                        </TabButton>
                        <TabButton selecTab={() => handleTabChange("certificações")} active={tab === "certificações"}>
                            {" "}
                            Certificações{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    )
};

export default AboutSection;