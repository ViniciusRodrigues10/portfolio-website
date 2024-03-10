import React from 'react'

const TabButton = ({ active, selecTab, children}) => {
const buttonClasses = active ? "text-white border-purple-500 border-b" : "text-[#ADB7BE]";

    return (
    <button onClick={selecTab}>
        <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
            {children}
        </p>
    </button>
  );
};

export default TabButton