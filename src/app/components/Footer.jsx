import React from 'react';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className='footer border z-10 border-t-[#363535] border-b-transparent border-l-transparent border-r-transparent text-white'>
        <div className='container p-12 justify-between mx-auto md:flex'>
          <span>Vinícius Rodrigues</span>
          <p className='text-slate-600 mt-4 md:mt-0'>{currentYear} Todos os direitos reservados.</p>
        </div>
    </footer>
  )
}

export default Footer;