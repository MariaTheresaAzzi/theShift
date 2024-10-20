import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float2: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateX(-20px)' },
        },
        float3: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateX(-15px)' },
        },
        float: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' },
        },
        shake: {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
          '75%': { transform: 'rotate(-2deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        float2: 'float 4s ease-in-out infinite',
        float3: 'float 5s ease-in-out infinite',
        shake: 'shake 0.6s ease forwards',
        wheelShake: 'wheelShake 0.6s ease-in-out',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
