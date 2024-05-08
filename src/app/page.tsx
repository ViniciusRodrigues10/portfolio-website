import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";  
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vinícius Rodrigues",
  description: "Portfolio Vinícius Rodrigues",
  icons: {
    icon: "./favicon.ico",
  },
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#030303]">
      <Navbar/>
      <div className="container mt-16 mx-auto px-12">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  )
}
