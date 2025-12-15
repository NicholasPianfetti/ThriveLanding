/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			// Main brand colors (sage green) - used throughout the site
  			brand: {
  				'50': '#f4f8f6',
  				'100': '#e6eeea',
  				'200': '#cddcd4',
  				'300': '#b3c9be',
  				'400': '#9bb7aa',
  				'500': '#7f9f92',
  				'600': '#67877a',
  				'700': '#526e63',
  				'800': '#3f554c',
  				'900': '#2d3c36'
  			},
  			// Hero section colors - dark forest green and beige
  			hero: {
  				'bg-dark': '#1a2f23',      // Dark forest green background
  				'bg-light': '#2d4a38',     // Lighter forest green (for gradients)
  				'accent': '#e8dcc4',       // Beige accent
  				'accent-dark': '#d4c5a9',  // Darker beige (for hover states)
  				'text': '#f5f0e8',         // Off-white text color
  				'text-muted': '#c9bda8',   // Muted beige text
  			},
  			neutral: {
  				'50': '#fafbf9',
  				'100': '#f3f5f2',
  				'200': '#e4e8e3',
  				'300': '#d1d6d0',
  				'400': '#a8b0a8',
  				'500': '#7c857e',
  				'600': '#5f6a63',
  				'700': '#49544e',
  				'800': '#343d38',
  				'900': '#202724'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

