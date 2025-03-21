/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const safeListFile = 'safelist.txt'

// colors.indigo
const SAFELIST_COLORS = 'colors'

module.exports = {
	mode: 'jit',
	content:  [
		"./index.html",
    	"./src/**/*.{js,ts,jsx,tsx}", 
		'./safelist.txt'
	],
	darkMode: 'class',
		theme: {
			fontFamily: {
				sans: [
					'Inter',
					'ui-sans-serif',
					'system-ui',
					'-apple-system',
					'BlinkMacSystemFont',
					'"Segoe UI"',
					'Roboto',
					'"Helvetica Neue"',
					'Arial',
					'"Noto Sans"',
					'sans-serif',
					'"Apple Color Emoji"',
					'"Segoe UI Emoji"',
					'"Segoe UI Symbol"',
					'"Noto Color Emoji"',
				],
				serif: [
					'ui-serif',
					'Georgia',
					'Cambria',
					'"Times New Roman"',
					'Times',
					'serif',
				],
				mono: [
					'ui-monospace',
					'SFMono-Regular',
					'Menlo',
					'Monaco',
					'Consolas',
					'"Liberation Mono"',
					'"Courier New"',
					'monospace',
				],
			},
			screens: {
				xs: '576',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px',
			},
			extend: {
				colors: {
					primary: {
					  900: '#0A196F',
					  800: '#102527',
					  700: '#1A37A7',
					  600: '#2648C8',
					  500: '#3563E9', // Default
					  400: '#658DF1',
					  300: '#85A8F8',
					  200: '#AEC8FC',
					  100: '#D6E4FD',
					  50: '#FFFFFF', // White
					},
					success: {
					  900: '#3B6506',
					  800: '#4C7A0B',
					  700: '#659711',
					  600: '#7FB519',
					  500: '#9CD323', // Default
					  400: '#BCE455',
					  300: '#D3F178',
					  200: '#E8FAA6',
					  100: '#FSFCD2',
					},
					error: {
					  900: '#7A0619',
					  800: '#930B16',
					  700: '#B71112',
					  600: '#DB2719',
					  500: '#FF4423', // Default
					  400: '#FF7559',
					  300: '#FFAA7A',
					  200: '#FFC8A6',
					  100: '#FFEDD3',
					},
					warning: {
					  900: '#7A4D0B',
					  800: '#936312',
					  700: '#B7821D',
					  600: '#D8A32A',
					  500: '#FFC73A', // Default
					  400: '#FFD96B',
					  300: '#FFEA88',
					  200: '#FFF8B0',
					  100: '#FFF8D7',
					},
					info: {
					  900: '#102E7A',
					  800: '#1A4393',
					  700: '#2A60B7',
					  600: '#3D81DB',
					  500: '#54A6FF', // Default
					  400: '#7EC2FF',
					  300: '#98D3FF',
					  200: '#BAE5FF',
					  100: '#DCF3FF',
					},
					secondary: {
					  900: '#040815',
					  800: '#080C19',
					  700: '#0D121F',
					  600: '#131825',
					  500: '#1A202C', // Default
					  400: '#596780',
					  300: '#90A3BF',
					  200: '#C3D4E9',
					  100: '#E0E9F4',
					},
				  },
				
				typography: (theme) => ({
					DEFAULT: {
						css: {
							color: theme('colors.gray.500'),
							maxWidth: '65ch',
						},
					},
					invert: {
						css: {
							color: theme('colors.gray.400'),
						},
					},
				}),
			},
		},
	plugins: [
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		require('./twSafelistGenerator')({
            path: safeListFile,
            patterns: [
                `text-{${SAFELIST_COLORS}}`,
				`bg-{${SAFELIST_COLORS}}`,
				`dark:bg-{${SAFELIST_COLORS}}`,
				`dark:hover:bg-{${SAFELIST_COLORS}}`,
				`dark:active:bg-{${SAFELIST_COLORS}}`,
				`hover:text-{${SAFELIST_COLORS}}`,
				`hover:bg-{${SAFELIST_COLORS}}`,
				`active:bg-{${SAFELIST_COLORS}}`,
				`ring-{${SAFELIST_COLORS}}`,
				`hover:ring-{${SAFELIST_COLORS}}`,
				`focus:ring-{${SAFELIST_COLORS}}`,
				`focus-within:ring-{${SAFELIST_COLORS}}`,
				`border-{${SAFELIST_COLORS}}`,
				`focus:border-{${SAFELIST_COLORS}}`,
				`focus-within:border-{${SAFELIST_COLORS}}`,
				`dark:text-{${SAFELIST_COLORS}}`,
				`dark:hover:text-{${SAFELIST_COLORS}}`,
				`h-{height}`,
				`w-{width}`,
            ],
        }),
        require('@tailwindcss/typography'),
	],
};
