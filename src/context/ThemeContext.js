// import React, { createContext, useState, useContext } from "react";

// // Create a context
// const ThemeContext = createContext();

// // ThemeProvider to wrap around the app
// export const ThemeProvider = ({ children }) => {
//   const [mode, setMode] = useState("light");

//   const toggleMode = () => {
//     setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
//   };

//   return (
//     <ThemeContext.Provider value={{ mode, toggleMode }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// // useTheme hook to access the theme context
// export const useTheme = () => {
//   return useContext(ThemeContext);
// };


import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
