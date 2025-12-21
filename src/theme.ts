import { createTheme, ThemeOptions } from '@mui/material/styles';

const getDesignTokens = (mode: 'light' | 'dark'): ThemeOptions => ({
    palette: {
        mode,
        ...(mode === 'dark'
            ? {
                primary: {
                    main: '#0c7bff',
                    light: '#3392ff',
                    dark: '#0066e6',
                },
                secondary: {
                    main: '#8b5cf6',
                    light: '#a78bfa',
                    dark: '#7c3aed',
                },
                background: {
                    default: '#0a0a0f',
                    paper: '#0f0f1a',
                },
                text: {
                    primary: '#f8fafc',
                    secondary: '#94a3b8',
                },
            }
            : {
                primary: {
                    main: '#0c7bff',
                    light: '#3392ff',
                    dark: '#0066e6',
                },
                secondary: {
                    main: '#8b5cf6',
                    light: '#a78bfa',
                    dark: '#7c3aed',
                },
                background: {
                    default: '#ffffff',
                    paper: '#f8fafc',
                },
                text: {
                    primary: '#0f172a',
                    secondary: '#475569',
                },
            }),
    },
    typography: {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        h1: {
            fontFamily: '"Outfit", sans-serif',
            fontWeight: 800,
            fontSize: '4rem',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
        },
        h2: {
            fontFamily: '"Outfit", sans-serif',
            fontWeight: 700,
            fontSize: '2.5rem',
            lineHeight: 1.2,
            letterSpacing: '-0.01em',
        },
        h3: {
            fontFamily: '"Outfit", sans-serif',
            fontWeight: 600,
            fontSize: '1.75rem',
            lineHeight: 1.3,
        },
        h4: {
            fontFamily: '"Outfit", sans-serif',
            fontWeight: 600,
            fontSize: '1.25rem',
            lineHeight: 1.4,
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.7,
        },
        body2: {
            fontSize: '0.875rem',
            lineHeight: 1.6,
        },
        button: {
            textTransform: 'none',
            fontWeight: 600,
        },
    },
    shape: {
        borderRadius: 12,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    padding: '12px 28px',
                    fontSize: '1rem',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                    backgroundImage: 'none',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                },
            },
        },
    },
});

export const lightTheme = createTheme(getDesignTokens('light'));
export const darkTheme = createTheme(getDesignTokens('dark'));
