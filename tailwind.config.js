/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./src/**/*.{js,jsx,ts,tsx}",
    // 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
    "./src/**/*.{js,jsx,ts,tsx}"

  ],
  daisyui: {
    themes: [
      {
        doctorstheme: {
          primary: '#19D3AE',
          secondary: '#0FCFEC',
          accent: "#3A4256",

          neutral: "#3D4451",

          'base-100': "#FFFFFF",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
          
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  // plugins: [require("daisyui"), require('flowbite/plugin')],
  plugins: [require("daisyui")],
}
