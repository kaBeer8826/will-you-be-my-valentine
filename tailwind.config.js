/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        shake: "shake 0.5s ease-in-out",
        wiggle: "wiggle 0.6s ease-in-out",
        "bounce-pop": "bounce-pop 0.6s ease-in-out",
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0) rotate(0deg)" },
          "10%": { transform: "translateX(-8px) rotate(-2deg)" },
          "20%": { transform: "translateX(8px) rotate(2deg)" },
          "30%": { transform: "translateX(-8px) rotate(-2deg)" },
          "40%": { transform: "translateX(8px) rotate(2deg)" },
          "50%": { transform: "translateX(-8px) rotate(-2deg)" },
          "60%": { transform: "translateX(8px) rotate(2deg)" },
          "70%": { transform: "translateX(-8px) rotate(-2deg)" },
          "80%": { transform: "translateX(8px) rotate(2deg)" },
          "90%": { transform: "translateX(-8px) rotate(-2deg)" },
        },
        wiggle: {
          "0%, 100%": { transform: "scale(1) rotate(0deg)" },
          "25%": { transform: "scale(1.05) rotate(-5deg)" },
          "50%": { transform: "scale(1.1) rotate(5deg)" },
          "75%": { transform: "scale(1.05) rotate(-5deg)" },
        },
        "bounce-pop": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
      },
    },
  },
  plugins: [],
};
