/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	corePlugins: {
		preflight: true,
	},
	theme: {
		screens: {
			xs: '420px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '1.5rem',
				lg: '2rem',
			},
		},
		extend: {
			colors: {
				pine: {
					50: '#f2f6f4',
					100: '#e1ebe6',
					200: '#c3d8cd',
					300: '#9abdab',
					400: '#6a9b84',
					500: '#477c64',
					600: '#35624e',
					700: '#2a4e40',
					800: '#233f34',
					900: '#1f3a2e',
					950: '#0e2018',
				},
				rose: {
					sand: {
						50: '#fbf5f5',
						100: '#f6e8ea',
						200: '#eccfd3',
						300: '#d9a9b0',
						400: '#c37d87',
						500: '#b25c68',
						600: '#9e4653',
						700: '#833944',
						800: '#6d323c',
						900: '#5c2d35',
						950: '#341419',
					},
				},
				lagoon: {
					50: '#f3f7f9',
					100: '#dde9ef',
					200: '#bdd4df',
					300: '#92b6c9',
					400: '#6d93ad',
					500: '#507993',
					600: '#3e617a',
					700: '#335065',
					800: '#2d4355',
					900: '#293a48',
					950: '#162530',
				},
				cold: {
					50: '#f5f6f5',
					100: '#e6e8e6',
					200: '#ced3cf',
					300: '#aab3ad',
					400: '#808c84',
					500: '#636f68',
					600: '#4e5854',
					700: '#404845',
					800: '#363c3a',
					900: '#2e3332',
					950: '#1d2120',
				},
			},
			fontFamily: {
				sans: [
					'"Segoe UI"',
					'Roboto',
					'"Helvetica Neue"',
					'Arial',
					'system-ui',
					'-apple-system',
					'sans-serif',
				],
				serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
			},
			lineHeight: {
				prose: '1.75',
			},
			boxShadow: {
				soft: '0 4px 24px -8px rgba(31,58,46,0.15), 0 2px 8px -4px rgba(31,58,46,0.08)',
				card: '0 10px 40px -16px rgba(31,58,46,0.25)',
			},
			borderRadius: {
				'3xl': '1.5rem',
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: '68ch',
						a: { textDecoration: 'none' },
						'a:hover': { textDecoration: 'underline' },
					},
				},
			},
		},
	},
	plugins: [],
};
