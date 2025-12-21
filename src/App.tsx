import { useState, useMemo } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    const [mode, setMode] = useState<'light' | 'dark'>('dark');

    const theme = useMemo(() => (mode === 'dark' ? darkTheme : lightTheme), [mode]);

    const handleThemeChange = (newTheme: 'light' | 'dark') => {
        setMode(newTheme);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar onThemeChange={handleThemeChange} />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>
        </ThemeProvider>
    );
}

export default App;
