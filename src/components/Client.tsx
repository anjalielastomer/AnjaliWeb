"use client";

import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";

const clients = [
	{ name: "Indian Railways", logo: "/clients/Indian Railways.png" },
	{ name: "Chennai Metro", logo: "/clients/Chennai Metro.png" },
	{ name: "RVNL", logo: "/clients/Rvnl.png" },
	{ name: "Delhi Metro", logo: "/clients/Delhi Metro.png" },
	{ name: "Ifcon", logo: "/clients/Ifcon.png" },
	{ name: "Konkan Railway", logo: "/clients/Konkan Railway.png" },
	{ name: "Srilankan Railway", logo: "/clients/Srilankan Railway.png" },
	{ name: "MMRDA", logo: "/clients/MMRDA.png" },
	{ name: "Mumbai Metro", logo: "/clients/Mumbai Metro.png" },
	{ name: "Kolkata Metro", logo: "/clients/Kolkata Metro.png" },
	{ name: "Afcons", logo: "/clients/Afcons.png" },
	{ name: "Bangladesh Rail", logo: "/clients/Bangladesh Rail.png" },
	{ name: "Nagpur Metro", logo: "/clients/Nagpur Metro.png" },
	{ name: "Gujarat Metro", logo: "/clients/Gujrat Metro.png" },
];

// Animation variants
const slideInFromTop: Variants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Variants for the grid container to orchestrate animations
const gridContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            // Stagger the animation of children by 0.08s
            staggerChildren: 0.08,
            // Add a small delay before the grid animation starts
            delayChildren: 0.3,
        }
    }
};

// Variants for each individual grid item
const gridItemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            ease: "easeOut",
            duration: 0.5,
        }
    }
};


const OurClients = () => {
	return (
		<section
			className="relative bg-cover bg-center bg-no-repeat py-20 pb-32 min-h-[860px] flex items-center justify-center"
			style={{ backgroundImage: "url('/train-bg.gif')" }}
		>
			{/* Blurred white box overlay */}
			<div className="absolute inset-0 flex items-center justify-center ">
				<div className="w-[95vw] max-w-6xl rounded-3xl bg-[#ffffff]/30 backdrop-blur-lg shadow-2xl p-0 my-10 md:my-0 py-5 sm:p-10 lg:p-20 flex flex-col gap-10 items-center relative z-10 overflow-hidden">
					<motion.h1
                        initial="hidden"
                        whileInView="visible"
                        variants={slideInFromTop}
                        viewport={{ once: false, amount: 0.5 }}
                        className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-textblue mb-0 md:mb-8 text-center font-raleway mt-5 md:mt-0"
                    >
						Our <span className="text-textorange">Clients</span>
					</motion.h1>

					<motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={gridContainerVariants}
                        viewport={{ once: false, amount: 0.2 }}
                        className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 sm:gap-8 w-full"
                    >
						{clients.map((client, index) => (
							<motion.div
                                key={index}
                                variants={gridItemVariants}
                                className="flex flex-col items-center"
                            >
								<div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28  bg-white rounded-2xl flex items-center justify-center shadow-md p-2 hover:shadow-[0_0_50px_rgba(28,65,153,0.4)] opacity-90 hover:opacity-100">
									<Image
										src={client.logo}
										alt={client.name}
										width={104}
										height={104}
										style={{ objectFit: "contain" }}
									/>
								</div>
								<p className="mt-2 text-[10px] sm:text-xs md:text-xs lg:text-sm font-medium text-center font-monte text-textblue">
									{client.name}
								</p>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>

			{/* Transparent overlay to maintain layering */}
			<div className="absolute inset-0 bg-black opacity-0 pointer-events-none" />
		</section>
	);
};

export default OurClients;
