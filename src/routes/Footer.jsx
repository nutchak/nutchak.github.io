import React from 'react';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';

export function Footer() {
	return (
		<div className="sticky top-0 z-40 flex h-auto w-full items-center justify-between border-t-2 border-Concrete font-inter text-xl font-bold xl:px-32 xl:py-4">
			<div className="flex flex-col gap-4 tracking-wider">
				<div className="pb-4">
					<h2 className="text-m">Nutcha Kiraniphonphan</h2>
				</div>
				<div className="text-sm ">
					<p className="py-1">Phone: +47 91 18 59 89</p>
					<p className="py-1">Email: nutchakirani@gmail.com</p>
					<p className="inline-flex gap-4 py-4">
						<span>
							<a href="https://www.linkedin.com/in/nutchak">
								<AiFillLinkedin />
							</a>
						</span>
						<span>
							<a href="https://github.com/nutchak">
								<AiFillGithub />
							</a>
						</span>
					</p>
				</div>
			</div>
		</div>
	);
}
