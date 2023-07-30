import React, { createContext, useState, useContext } from 'react';

const BackgroundColorContext = createContext();

export const useBackgroundColor = () => {
    return useContext(BackgroundColorContext);
};


export const BackgroundColorProvider = ({ children }) => {
    const [bgColor, setBgColor] = useState('bg-NewOrleans');

    return (
        <BackgroundColorContext.Provider value={{ bgColor, setBgColor }}>
            <div className={`${bgColor} h-full w-full`}>
                {children}
            </div>
        </BackgroundColorContext.Provider>
    );
};


