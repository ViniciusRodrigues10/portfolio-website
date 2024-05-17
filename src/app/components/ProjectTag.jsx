import React from 'react'

const ProjectTag = ({ name, onClick, isSelected }) => {
    const buttonStyles = isSelected
    ? "tex-twhite border-primary-500"
    : "text-purple-[#ADB7BE] border-slate-600 hover:border-white"
    return (
    <button
        className={`${buttonStyles} rounded-full border-2 px-3 py-2 text-md md:px-6 md:py-3 md:text-xl cursor-pointer`}
        onClick={() => onClick(name)}
    >    
        {name}
    </button>
    )
}

export default ProjectTag