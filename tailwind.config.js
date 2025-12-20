/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  	extend: {
  		animation: {
  			'bounce-slow': 'bounce 3s infinite',
  			'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  		},
  		colors: {
  			// Main brand colors - vibrant blue from logo
  			brand: {
  				'50': '#e3f2fd',
  				'100': '#bbdefb',
  				'200': '#90caf9',
  				'300': '#64b5f6',
  				'400': '#42a5f5',
  				'500': '#2196f3',
  				'600': '#1e88e5',
  				'700': '#1976d2',
  				'800': '#1565c0',
  				'900': '#0d47a1'
  			},
  			// Hero section colors - blue, black, white
  			hero: {
  				'bg-dark': '#0a0a0a',      // Deep black background
  				'bg-light': '#1a1a1a',     // Lighter black (for gradients)
  				'accent': '#2196f3',       // Vibrant blue accent
  				'accent-dark': '#1976d2',  // Darker blue (for hover states)
  				'text': '#ffffff',         // Pure white text
  				'text-muted': '#a0a0a0',   // Muted gray text
  			},
  			neutral: {
  				'50': '#fafafa',
  				'100': '#f5f5f5',
  				'200': '#e5e5e5',
  				'300': '#d4d4d4',
  				'400': '#a3a3a3',
  				'500': '#737373',
  				'600': '#525252',
  				'700': '#404040',
  				'800': '#262626',
  				'900': '#171717'
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

