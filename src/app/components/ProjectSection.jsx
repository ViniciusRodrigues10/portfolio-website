"use client"
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from "./ProjectTag";
import { motion, useInView} from "framer-motion";

const projectsData = [
  {
    id: 8,
    title: "Market Clock",
    description: "Market Clock exibe horários das principais bolsas de valores.",
    image: "/images/projects/market-clock-portfolio.png",
    tag: ["Frontend"],
    gitUrl: "https://github.com/ViniciusRodrigues10/market-clock",
    previewUrl: "https://market-clock.netlify.app/"
  },
  {
    id: 7,
    title: "React Portfolio Website",
    description: "Descubra minha trajetória, projetos e habilidades no meu portfólio.",
    image: "/images/projects/website-portfolio.png",
    tag: ["Fullstack", "Frontend", "Backend"],
    gitUrl: "https://github.com/ViniciusRodrigues10/portfolio-website/tree/main",
    previewUrl: "https://portfolio-vinicius-rodrigues.netlify.app/"
  },
  {
    id: 6,
    title: "X-men",
    description: "Explore os poderes dos X-Men neste site simples e informativo.",
    image: "/images/projects/x-men.png",
    tag: ["Frontend"],
    gitUrl: "https://github.com/ViniciusRodrigues10/x-men",
    previewUrl: "https://viniciusrodrigues10.github.io/x-men/"
  },
  {
    id: 5,
    title: "DevSteam",
    description: "Clone da Steam para descobrir, comprar e jogar jogos de PC.",
    image: "/images/projects/devsteam.png",
    tag: ["Frontend"],
    gitUrl: "https://github.com/ViniciusRodrigues10/steam/tree/main",
    previewUrl: "https://replica-steam.netlify.app/"
  },
  {
    id: 4,
    title: "Landing Page Confresso BH",
    description: "Landing page para congresso: detalhes de palestrantes e tudo sobre o evento.",
    image: "/images/projects/landing-page-congresso-bh.png",
    tag: ["Frontend"],
    gitUrl: "https://github.com/ViniciusRodrigues10/landing-page-congresso-bh",
    previewUrl: "https://darling-klepon-4573e1.netlify.app/"
  },
  {
    id: 3,
    title: "Real Time Polls",
    description: "Sistema de votação em tempo real: seguras e escaláveis.",
    image: "/images/projects/real-time-polls.png",
    tag: ["Backend"],
    gitUrl: "https://github.com/ViniciusRodrigues10/real-time-polls",
    previewUrl: "/"
  },
  {
    id: 2,
    title: "Vehicle Tracking",
    description: "Rastreamento de veículos com roteamento otimizado para logística.",
    image: "/images/projects/vehicle-tracking.png",
    tag: ["Fullstack", "Frontend", "Backend"],
    gitUrl: "https://github.com/ViniciusRodrigues10/vehicle-tracking",
    previewUrl: "/"
  },
  {
    id: 1,
    title: "Study Async",
    description: "Educação personalizada com interação e monitoramento.",
    image: "/images/projects/study-async.png",
    tag: ["Fullstack", "Frontend", "Backend"],
    gitUrl: "https://github.com/ViniciusRodrigues10/study-psw",
    previewUrl: "/"
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("Frontend");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProject = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  
  return (
    <section id="projects" className='mt-20'>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Meus Projetos
      </h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        <ProjectTag
          onClick={handleTagChange}
          name="Frontend"
          isSelected={tag === "Frontend"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Backend"
          isSelected={tag === "Backend"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Fullstack"
          isSelected={tag === "Fullstack"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProject.map((project, index) => (
          <motion.li 
            key={index}
            variants={cardVariants} 
            initial="initial" 
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection