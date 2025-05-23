
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				paper: {
					DEFAULT: '#f5f2e8',
					aged: '#e8e0cc',
					fold: '#d6ceb8',
					sepia: '#F4ECD8',
					yellow: '#FFF9C4',
					pink: '#FFE4E1',
					blue: '#E3F2FD',
					green: '#E8F5E9'
				},
				newspaper: {
					title: '#1a1a1a',
					text: '#333333',
					heading: '#222222',
					subheading: '#444444',
					accent1: '#8B4513', // Brown for a classic newspaper feel
					accent2: '#800000', // Maroon for highlights
					accent3: '#284b63', // Blue for contrasting elements
					highlight: '#fffacd' // Light yellow for highlighting
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'page-turn': {
					'0%': { transform: 'translateX(0%) rotateY(0deg)', transformOrigin: 'left center' },
					'100%': { transform: 'translateX(100%) rotateY(-180deg)', transformOrigin: 'left center' }
				},
				'page-turn-reverse': {
					'0%': { transform: 'translateX(100%) rotateY(-180deg)', transformOrigin: 'left center' },
					'100%': { transform: 'translateX(0%) rotateY(0deg)', transformOrigin: 'left center' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'page-turn': 'page-turn 0.6s ease-in-out forwards',
				'page-turn-reverse': 'page-turn-reverse 0.6s ease-in-out forwards',
				'fade-in': 'fade-in 0.5s ease-in-out forwards'
			},
			backgroundImage: {
				'paper-texture': "url('/paper-texture.png')",
				'paper-gradient': 'linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)'
			},
			columnCount: {
				1: '1',
				2: '2',
				3: '3'
			},
			boxShadow: {
				'newspaper': '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
				'newspaper-hover': '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		function({ addUtilities, theme }: any) {
			const newUtilities = {};
			Object.entries(theme('columnCount') || {}).forEach(([key, value]) => {
				(newUtilities as any)[`.column-count-${key}`] = {
					'column-count': value
				};
			});
			addUtilities(newUtilities);
		}
	],
} satisfies Config;
