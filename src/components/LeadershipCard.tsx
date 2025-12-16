"use client"
import Image from "next/image"
import React from "react"

type LeadershipCardProps = {
  image: string
  name: string
  title: string
  company: string
}

const LeadershipCard: React.FC<LeadershipCardProps> = ({ image, name, title, company }) => {
  return (
    <div className="image-box group flex w-full max-w-sm md:max-w-md lg:max-w-lg items-center justify-center flex-col gap-6 rounded-2xl overflow-hidden shadow-md shadow-[var(--textorange)] transition-all duration-300 hover:bg-[var(--textorange)] text-textblue">
      <Image
        src={image}
        width={580}
        height={642}
        alt={name}
        className="w-full object-cover"
      />
      <div className="designation text-center flex flex-col gap-4 font-monte px-4">
        <h1 className='text-[28px] md:text-[32px] lg:text-[40px] font-[500] transition-colors duration-300 group-hover:text-white'>
          {name}
        </h1>
        <div className='text-[16px] md:text-[18px] pb-8 md:pb-12 lg:pb-20 transition-colors duration-300'>
          <p className='text-[var(--textorange)] group-hover:text-[var(--textblue)]'>{title}</p>
          <p className='group-hover:text-white'>{company}</p>
        </div>
      </div>
    </div>
  )
}

export default LeadershipCard
