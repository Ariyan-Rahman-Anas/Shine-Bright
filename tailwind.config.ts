import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				whiteCustom: '#fff',
				blackCustom: '#000',
				// mainBg: '#FDF9FF',
				mainBg: '#FFF',
				heroBG: '#D9D9D9',
				mColor1: '#f6ebfb',
				mColor2: '#f0def8',
				mColor3: '#e9cef5',
				mColor4: '#e1bef2',
				mColor5: '#daadee',
				mColorBase: '#d29deb',
				mColorBase2: '#B758E4',
				mColor6: '#af83c4',
				mColor7: '#8c699d',
				mColor8: '#694f76',
				mColor9: '#46344e',
				mColor10: '#2a1f2f',
				mColor11: '#F7E5FF',
				mColor12: '#EECAFF',
				mColor13: '#FCF6FF',
				mColor14: '#25122E',
				mColor15: '#F1D0FFE0',
				mColor16: '#F7E5FFCC',
				mColor17: '#5B2C72',
				mColor18: '#F1DEFA',
				mColor19: '#CB8EE8',
				mColor20: '#7A3B98',
				// mNavFooter:"#fffaf0",
				mNavFooter:"#F7D9E6",
				// mBtnBg:"#bcaa9a",
				mBtnBg:"#A53860",

				sColorBase2: '#EFC29C',
				sColorBase3: '#C8996D',
				sColor1: '#fbf6f1',
				sColor2: '#f9f0e8',
				sColor3: '#f6e9dd',
				sColor4: '#f3e1d2',
				sColor5: '#f0dac6',
				sColorBase: '#edd2bb',
				sColor6: '#c6af9c',
				sColor7: '#9e8c7d',
				sColor8: '#77695e',
				sColor9: '#4f463e',
				sColor10: '#2f2a25',
				sColor11: '#35210E',
				sColor12: '#C8996D99',
				sColor13: '#EFC29CCC',
				// sNavFooter:"#f0fff0",
				sNavFooter:"#DDEEF0",
				// sBtnBg:"#8EA38E",
				sBtnBg:"#48A6A7",


				bColor1: '#cecccf',
				bColor2: '#adabae',
				bColor3: '#848186',
				bColor4: '#5b565e',
				bColor5: '#322c35',
				bColorBase: '#09020d',
				bColor6: '#08020b',
				bColor7: '#060109',
				bColor8: '#050107',
				bColor9: '#030104',
				bColor10: '#020003',
				error: '#B40A0D',
				success: '#1AB52E',
				warning: '#FFC107',
				info: '#0040AA',
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
			fontFamily: {
				chivo: 'var(--font-chivo)',
				bayon: 'var(--font-bayon)',
				yellowtail: 'var(--font-yellowtail)',
			},
			maxWidth: {
				'1200': '1230px',
				'1400': '1430px',
				'1600': '1630px',
				'1920': '1920px'
			},
			screens: {
				'3xl': '1920px'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		// [require('@tailwindcss/typography')],
		function ({ addUtilities }: any) {
			addUtilities({
				'.overflow-left-hidden': {
					// 'clip-path': 'inset(0 0 0 0px)',
					// 'overflow': 'hidden',
					'margin-left': '0',
					'padding-left': '0',
					'clip-path': 'inset(0 -100vw -14vh 0)',
					'position': 'relative',
				}
			})
		}
	],
};
export default config;