import React, { useContext } from 'react';

const themes = {
    light: {
      foreground: "#467546",
      background: "#485215"
    },
    dark: {
      foreground: "#467094",
      background: "#984546"
    }
  };

const ThemeContext = React.createContext(themes.light);
const UseContextFunctionalCompo = () => {
    return (
        <>
            <ThemeContext.Provider value={themes.dark}>
                <ThemedButton/>
            </ThemeContext.Provider>
            <ThemedButton/>
        </>
    );
};
function ThemedButton() {
    const theme = useContext(ThemeContext);
    return (
      <button style={{ background: theme.background, color: theme.foreground }}>
        I am styled by theme context!
      </button>
    );
  }
export default UseContextFunctionalCompo;