"use client";
import React, { useState } from 'react';
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/SocialIcons.module.css";
import LoadingSpinner from "./LoadingSpinner"
import Lottie from 'react-lottie';
import SendEmail from '../../../public/assets/LottieJson/SendEmail.json'

const EmailSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        clientEmail: '',
        subject: '',
        message: ''
    });

    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setIsLoading(true);

        const response = await fetch('/api/send', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                Accept: "aplication/json",
            },
            body: JSON.stringify(formData)
        })
        console.log(await response.json())

        if (response.status === 200) {
            console.log('Message sent.');
            setEmailSubmitted(true);
            setIsLoading(false);
        }
    };
    
    return (
    <section id="contact" className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
        <div className='absolute w-80 h-80 z-0'></div>
        <div className='z-10'>
            <h5 className="text-2xl font-bold text-white mb-6 md:mb-0 md:col-span-2 md:text-left ml-4 md:ml-28 text-center">Entre em Contato</h5>

            <div className='flex justify-center'>
                <div className="mr-0 md:mr-36 2xl:mr-72">
                    <Lottie
                        options={{
                            loop: true,
                            autoplay: true,
                            animationData: SendEmail
                        }}
                        width={200} height={200}
                    />
                </div>
            </div>
            <p className='text-[#ADB7BE] mb-4 max-w-md text-center md:text-left'>
                {" "}   
                Quer iniciar um projeto, discutir uma ideia ou simplesmente trocar algumas palavras? Estou aqui para ajudar! Você também pode me contratar para trabalhos freelance ou oportunidades de emprego. Entre em contato comigo e vamos transformar sua visão em realidade.
            </p>
            <div className='social flex flex-row gap-2 mt-6 justify-center items-center md:justify-start md:items-start'>
                <Link href="https://github.com/ViniciusRodrigues10" target="_blank">
                    <div className={styles.iconWrapper}>
                        <Image src={GithubIcon} alt="Github Icon" className={styles.icon} />
                    </div>
                </Link>
                <Link href="https://www.linkedin.com/in/viniciusgonzagacavalcante" target="_blank">
                    <div className={styles.iconWrapper}>
                        <Image src={LinkedinIcon} alt="Linkedin Icon" className={styles.icon} />
                    </div>
                </Link>
            </div>
        </div>
        <div>
            <form onSubmit={handleSubmit} className='flex flex-col'>
                <div className='mb-6'>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">
                        Nome
                    </label>
                    <input 
                        name="name"
                        type="text"
                        id="name"
                        required 
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" 
                        placeholder='Seu nome'
                    />
                </div>
                <div className='mb-6'>
                    <label htmlFor="clientEmail" className="block mb-2 text-sm font-medium text-white">
                        Seu melhor email
                    </label>
                    <input 
                        name="clientEmail"
                        type="email"
                        id="clientEmail"
                        required 
                        value={formData.clientEmail}
                        onChange={handleChange}
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" 
                        placeholder='jose@gmail.com'
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="subject" 
                        className="block mb-2 text-sm font-medium text-white"
                    >
                        Assunto
                    </label>
                    <input
                        name="subject"
                        type="text"
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
                        placeholder="Coloque um título para sua mensagem"
                    /> 
                </div>
                <div className='mb-6'>
                    <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium text-white"
                    >
                        Mensagem
                    </label>
                    <input 
                        type="text"
                        name="message"
                        id="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
                        placeholder="Vamos falar sobre..." 
                    />
                </div>
                <button
                    type="submit"
                    className={`rounded-lg w-full ${isLoading ? 'bg-primary-900 font-medium py-2.5 px-5' : 'bg-primary-600 hover:bg-primary-900 text-white font-medium py-2.5 px-5'}`}
                    disabled={isLoading}
                >
                    {isLoading ? <LoadingSpinner />: "Enviar mensagem"}
                </button>
                {
                    emailSubmitted && (
                        <p className="text-green-500 text-sm mt-2">
                            E-mail enviado com sucesso!
                        </p>
                    )
                }
            </form>
        </div>    
    </section>
    )
}

export default EmailSection