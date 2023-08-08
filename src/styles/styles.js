const styles = {
	container:
		'grid h-auto w-full grid-cols-1 font-sans pb-16 lg:pb-24',
	title:
		'justify-self-end font-staatliches text-8xl lg:text-9xl p-4',
	containerWrapper:
		'flex w-4/5 flex-col justify-self-center font-sans text-Concrete py-24 px-16 gap-8 max-w-7xl',

	page: 'flex items-center justify-center mx-24 my-36',

	app: 'w-full h-screen overflow-hidden',
	boxWidth: 'xl:max-w-[1280px] w-full',

	background:
		'left-0 top-0 m-0 flex flex-col h-screen items-center justify-center p-0',

	heading2:
		'font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full',
	paragraph:
		'font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]',

	flexCenter: 'flex justify-center items-center',
	flexStart: 'flex justify-center items-start',

	/**
	 * Mobile: x-6 y-4
	 * Tablet: x-10 y-6
	 * Desktop: x-16 y-12
	 */
	paddingX: 'sm:px-16 px-6',
	paddingY: 'sm:py-16 py-6',
	padding: 'sm:px-16 px-6 sm:py-12 py-4',

	marginX: 'sm:mx-16 mx-6',
	marginY: 'sm:my-16 my-6',

	disabledLink: 'font-bold pointer-events-none',
};

export const layout = {
	section: `flex md:flex-row flex-col ${styles.paddingY}`,
	sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

	sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
	sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

	sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
