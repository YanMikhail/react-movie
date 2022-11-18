import {createContext, useState} from "react";

const  ThemeContext  =  createContext(false);

const  ThemeProvider  =  ({ children })  =>  {
    const  [dark, setDark]  =  useState(false);
    const toggleTheme =  ()  =>  {
        setDark(!dark);
    };
    return  (
        <ThemeContext.Provider value={{ dark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
export  {  ThemeContext,  ThemeProvider  };