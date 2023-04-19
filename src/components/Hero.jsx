import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
	return (
		<section className="relative w-full h-screen mx-auto">
			<div
				className={` ${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
			>
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-[#915eff]" />
					<div className="w-1 sm:h-96 h-48 violet-gradient" />
				</div>
				<div>
					<h1 className={`${styles.heroHeadText} text-white`}>
						Hi I'm <span className="text-[#915eff]">Gaurav</span>{" "}
					</h1>
					<p className={`${styles.heroSubText} mt-2 text-white-100`}>
						I currently manage a project which
						<br className="sm:block hidden" /> backs up millions of
						user's
						<br className="sm:block hidden" /> cloud data. <br />
					</p>
					<p className={`${styles.heroHintText} mt-1 text-white-100`}>
						The computer is a 3d model, swipe it!!!
					</p>
				</div>
			</div>

			<ComputersCanvas />

			<div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
				<a href="#about">
					<div className="w-[25px] h-[50px] rounded-3xl border-[2.5px] border-secondary flex justify-center items-start">
						<motion.div
							animate={{ y: [5, 30, 5] }}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: "loop",
							}}
							className="w-2 h-2 rounded-full bg-[#915eff] mb-1"
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
