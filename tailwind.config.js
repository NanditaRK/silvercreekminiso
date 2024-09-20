const flowbite = require("flowbite-react/tailwind");
import daisyui from "daisyui"
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    daisyui: {
      theme: ["light"]
    },

    
    extend: {
      
    },
  },
  plugins: [

    flowbite.plugin(),
    daisyui,
  ],
}

