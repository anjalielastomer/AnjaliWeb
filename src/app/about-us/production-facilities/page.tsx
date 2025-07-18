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
                <Production1 />
                <Production2 />
                <Production3 />
                <Production4 />
            </div>
        </>
    )
}

export default page