"use client";
import React, { useState } from 'react';
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/SocialIcons.module.css";

const EmailSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        clientEmail: '',
        subject: '',
        message: ''
    });

    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 
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
        }
    };
    
    return (
    <section id="contact" className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
        <div className='absolute w-80 h-80 z-0'></div>
        <div className='z-10'>
            <h5 className='text-xl font-bold text-white my-2'>Entre em Contato</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
                {" "}   
                Quer iniciar um projeto, discutir uma ideia ou simplesmente trocar algumas palavras? Estou aqui para ajudar! Você também pode me contratar para trabalhos freelance ou oportunidades de emprego. Entre em contato comigo e vamos transformar sua visão em realidade.
            </p>
            <div className='social flex flex-row gap-2'>
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
                        Name
                    </label>
                    <input 
                        name="name"
                        type="text"
                        id="name"
                        required 
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" 
                        placeholder='Your name'
                    />
                </div>
                <div className='mb-6'>
                    <label htmlFor="clientEmail" className="block mb-2 text-sm font-medium text-white">
                        Your email
                    </label>
                    <input 
                        name="clientEmail"
                        type="email"
                        id="clientEmail"
                        required 
                        value={formData.clientEmail}
                        onChange={handleChange}
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" 
                        placeholder='jacob@google.com'
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="subject" 
                        className="block mb-2 text-sm font-medium text-white"
                    >
                        Subject
                    </label>
                    <input
                        name="subject"
                        type="text"
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
                        placeholder="Just saying hi"
                    /> 
                </div>
                <div className='mb-6'>
                    <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium text-white"
                    >
                        Message
                    </label>
                    <input 
                        type="text"
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
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
                {
                    emailSubmitted && (
                        <p className="text-green-500 text-sm mt-2">
                            Email sent sucessfully!
                        </p>
                    )
                }
            </form>
        </div>    
    </section>
    )
}

export default EmailSection