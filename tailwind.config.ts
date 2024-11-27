import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/stories/**/*.{ts,mdx,tsx,js,jsx}",
    "./.storybook/**/*.{ts,js,tsx,jsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dw: {
          black: '#111827',
            white: '#ffffff',
            gray: {
              40: '#f9f9f9',
              50: '#f9fafb',
              100: '#f3f4f6',
              200: '#e5e7eb',
              250: '#ececec',
              300: '#d1d5db',
              400: '#9ca3af',
              450: '#989898',
              500: '#6b7280',
              600: '#4b5563',
              700: '#374151'
            },
            green: {
              50: '#f0fdf4',
              500: '#22c55e',
              600: '#0dad48'
            },
            deepGreen: {
              500: '#2074aa'
            },
            yellow:{
              50: '#fefce8',
              400: '#facc15',
              500: '#eab308',
              600: '#ca8a04',
            },
            amber: {
              50: '#fffbeb',
              100: '#fff5d1',
              400: '#fbbf24'
            },
            red: {
              50: '#fef2f2',
              200: '#fecaca',
              300: '#fca5a5',
              400: '#f87171',
              500: '#ef4444',
              800: '#991b1b'
            },
            sky: {
              50: '#f0f9fffa',
              400: '#38bdf8',
            },
            primary: {
              50: '#eff6ff',
              100: '#dbeafe',
              200: '#bfdbfe',
              300: '#93c6fd',
              400: '#60a5fa',
              500: '#3b82f6',
              600: '#2563eb',
              700: '#2a5caf',
              800: '#204887',
              900: '#193767',
            },
            purple: {
              50: '#fbf2f9',
              200: '#ebc6e4',
              400: '#c454ad',
              500: '#ab3b94',
            },
            orange: {
              500: '#f97316'
            },
            indigo: {
              50: '#eef2ff',
              400: '#818cf8'
            },
            dim: {
              primary: '#3B82F612',
              purple: '#c454ad12'
            },
            kakao: '#ffe351',
            naver: '#22c55e'
        }
      },
    },
  },
  plugins: [],
};
export default config;
