/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx,html}'],
	theme: {
		extend: {
			colors: {
				/* 1 */
				Azalea: '#F2B3D6',
				Perano: '#B7AEF2',
				Eucalyptus: '#238C6E',
				Shamrock: '#2BD999',
				Pampas: '#F2EEEB',

				/* 2 */
				VanillaIce: '#F2D5E8',
				LilacBush: '#9E82D9',
				MoonRaker: '#C7B3F2',
				Iceberg: '#D8F0F2',
				Corn: '#F2B705',

				/* 3 */
				Azalea3: '#F2B3D1',
				Cerulean: '#11A0D9',
				Observatory: '#048C66',
				Turbo: '#F2E205',
				Corn3: '#F2B705',

				/* 4 */
				Illusion: '#F291D0',
				CeruleanBlue: '#323AD9',
				CaribbeanGreen: '#04D99D',
				ButterCup: '#F2B90C',
				Trinidad: '#F24405',

				/* 5 */
				Concrete: '#F2F2F2',
				Alto: '#D9D9D9',
				Grey: '#8C8C8C',
				MineShaft: ' #262626',
				CodGrey: '#0D0D0D',

				CornFlowerBlue: '#417CF2',
				CornFlowerBlueLight: '#6393F2',
				Portica: '#F2E963',
				Tacha: '#D9C359',
				Carnation: '#F26363',
				CatskillWhite: '#f8fafc',
				FrenchRose: '#EF476F',
				Tarawera: '#073B4C',
				BlueChill: '#118AB2',
				GoldenTainoi: '#FFD166',
				Deco: '#D4E09B',
				AppleBlossom: '#A44A3F',
				EbonyClay: '#202C39',
				NewOrleans: '#F2D492',
				Sandybrown: '#F29559',
				RoseFog: '#DFB2AC',
				PickledBluewood: '#283845',
				DarkVanilla: '#D6B39F',
				PowderAsh: '#B4C5C0',
				DoubleSpanishWhite: '#E5D4B5',
				Dallas: '#6B4B20',
				Whiskey: '#D0AA69',
				BlackOlive: '#172310',
				Panache: '#f9fcf8',
				SwansDown: '#e3f2ec',
				Plantation: '#2b5f4b',
				SilverChalice: '#B0B0B0',
				WoodSmoke: '#101214',

				'text-l': '#010e14',
				'background-l': '#ffffff',
				'primary-l': '#6a84fb',
				'secondary-l': '#fdc5aa',
				'accent-l': '#d6b005',

				'text-d': '#ffffff',
				'background-d': '#010e14',
				'primary-d': '#6a84fb',
				'secondary-d': '#0e0500',
				'accent-d': '#fce478',

				/*
				'text-l': '#021d22',
				'background-l': '#fafeff',
				'primary-l': '#d1280a',
				'secondary-l': '#c8f5fc',
				'accent-l': '#ee2e0c',
				'text-d': '#fafeff',
				'background-d': '#021d22',
				'primary-d': '#d1280a',
				'secondary-d': '#02242a',
				'accent-d': '#faa899',
				*/
			},
			screens: {
				xs: '480px' /* Mobile */,
				ss: '620px',
				sm: '768px' /* Tablet -> */,
				md: '1060px' /* Desktop */,
				lg: '1200px',
				xl: '1700px',
			},
			fontSize: {
				title: '2rem',
				body: '1rem',
				small: '0.75rem',
				display: '10rem',
			},
			fontFamily: {
				sans: ['Montserrat', 'sans-serif'],
				serif: ['Roboto Slab', 'serif'],
				display: ['Abril Fatface', 'cursive'],
				mono: ['Roboto Mono', 'monospace'],
				inter: ['Inter', 'sans-serif'],
				staatliches: ['Staatliches', 'cursive'],
			},
			boxShadow: {
				nav: '20px solid #000',
			},
		},
	},
	plugins: [require('prettier-plugin-tailwindcss')],
};
