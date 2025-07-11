import Production1 from '@/components/Production1'
import Production2 from '@/components/Production2'
import Production3 from '@/components/Production3'
import Production4 from '@/components/Production4'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <>
            <div className='w-full min-h-screen relative overflow-x-hidden'>
                {/* <Image width={4} height={5000} src={"/lines/line-real.png"} alt='line' className='rotate-50 absolute top-0 left-[50%] z-39 translate-x-[50%]'></Image>
                <Image width={4} height={5000} src={"/lines/line-real.png"} alt='line' className='rotate-50 absolute top-10 left-[50%] z-39 translate-x-[50%]'></Image>
                <Image width={4} height={5000} src={"/lines/line-real.png"} alt='line' className='rotate-50 absolute top-20 left-[50%] z-39 translate-x-[50%]'></Image> */}
                <Production1 />
                <Production2 />
                <Production3 />
                <Production4 />
            </div>
        </>
    )
}

export default page