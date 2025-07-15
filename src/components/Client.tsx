"use client";

import Image from "next/image";
import React from "react";

const clients = [
	{ name: "Indian Railways", logo: "/clients/Indian Railways.png" },
	{ name: "Chennai Metro", logo: "/clients/Chennai Metro.png" },
	{ name: "RVNL", logo: "/clients/rvnl.png" },
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

const OurClients = () => {
	return (
		<section
  className="relative bg-cover bg-center bg-no-repeat py-20 pb-32 min-h-[700px] flex items-center justify-center"
  style={{ backgroundImage: "url('/clients/vandebharat.png')" }}
>
			{/* Blurred white box overlay */}
			<div className="absolute inset-0 flex items-center justify-center ">
				<div className="w-[95vw] max-w-6xl rounded-3xl backdrop-blur-md shadow-2xl p-0 my-10 md:my-0 py-5 sm:p-10 flex flex-col items-center relative z-10 overflow-hidden">
            		<h1 className="text-3xl sm:text-4xl font-bold text-textblue mb-8 text-center font-raleway">
						Our <span className="text-textorange">Clients</span>
					</h1>

					<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 sm:gap-8 w-full">
						{clients.map((client, index) => (
							<div key={index} className="flex flex-col items-center">
								<div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-2xl flex items-center justify-center shadow-md p-2">
									<Image
										src={client.logo}
										alt={client.name}
										width={80}
										height={80}
										style={{ objectFit: "contain" }}
									/>
								</div>
								<p className="mt-2 text-[10px] sm:text-xs md:text-xs lg:text-xs text-center font-monte text-gray-700">
									{client.name}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Transparent overlay to maintain layering */}
			<div className="absolute inset-0 bg-black opacity-0 pointer-events-none" />
		</section>
	);
};

export default OurClients;
