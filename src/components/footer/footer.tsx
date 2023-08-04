import { useTheme } from "next-themes";
import Head from "next/head";

const Index = () => {
  const { theme, setTheme } = useTheme();
  return (
    <footer className="flex items-center justify-center dark:bg-black w-screen h-screen">
      <Head>
        <title>Current theme^ {theme}</title>
      </Head>
      <button
        onClick={() => setTheme("light")}
        className="border p-3 mr-5 border-base-100 text-base-100"
      >
        Light
      </button>
      <button
        className="border p-3 border-black dark:border-white text-black dark:text-white"
        onClick={() => setTheme("dark")}
      >
        Dark
      </button>
    </footer>
  );
};

export default Index;
