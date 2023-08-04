import { AppProps } from "next/app";
import { createContext, useCallback, useMemo, useState } from "react";

export const defaultTheme = "light";

interface ThemeContextData {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextData>({
  theme: defaultTheme,
  toggleTheme: () => {},
});

const ClientLayout = ({ Component, pageProps }: AppProps) => {
  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  const contextThemeData = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={contextThemeData}>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
};

export default ClientLayout;
