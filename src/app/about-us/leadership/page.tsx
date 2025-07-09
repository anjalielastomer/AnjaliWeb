"use client"
import React from 'react'
import LeadershipCard from '@/components/LeadershipCard'

const leaders = [
  {
    image: "/aboutus/leadership/person1.jpg",
    name: "Mr. Surojit Das",
    title: "Co-Founder & Managing Director",
    company: "Anjali Elastomer Pvt. Ltd."
  },
  {
    image: "/aboutus/leadership/person2.jpg",
    name: "Mr. Sanjib Das",
    title: "Co-Founder & Independent Director",
    company: "Anjali Elastomer Pvt. Ltd."
  }
]

const page = () => {
  return (
    <div className='w-full min-h-screen py-[120px] md:py-[180px] flex flex-col gap-10 px-4 md:px-0'>
      {/* Heading */}
      <div className='w-full text-center'>
        <h1 className='text-[40px] md:text-[60px] lg:text-[84px] font-extrabold font-raleway leading-tight'>
          Our <span className='text-orange-500'>Leadership</span>
        </h1>
        <p className='text-[16px] md:text-[18px] lg:text-[20px] font-[500] font-monte mt-2'>
          The Invisible <span className='text-orange-500'>Force</span> behind our <span className='text-orange-500'>Competent</span> Team
        </p>
      </div>

      {/* Cards */}
      <div className='flex flex-col md:flex-row items-center justify-center gap-8'>
        {leaders.map((leader, index) => (
          <LeadershipCard
            key={index}
            image={leader.image}
            name={leader.name}
            title={leader.title}
            company={leader.company}
          />
        ))}
      </div>
    </div>
  )
}

export default page
