import React from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

function Hero() {
    const router = useRouter();
    const redirect = () => {

        router.push('https://wa.me/+919076336198');

    }
    return (
        <div className='md:mx-48 mx-10 md:py-36'>
            <div className='flex flex-row'>
                <div className='flex flex-col'>
                    <div className=''>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }}
                         className='text-5xl md:text-6xl flex flex-col font-semibold font-poppins tracking-wide md:mt-3 mt-[50%]'>
                            <div className='pb-1'><span>Digitize</span></div>
                            <div className='pb-1'><span>Your <span className='text-primary'>DATA</span></span></div>
                            <div className='pb-1'><span>with us !</span></div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 1 }}
                         className=' text-primary mt-10 md:text-xl text-lg font-medium tracking-[1.5px]'>Your Search For a Quality DATA Processing Company ends Now!</motion.div>
                        <div className='mb-20'>
                            <button onClick={redirect} className='mt-14 bg-primary text-white font-semibold px-8 py-3 tracking-[1.5px] rounded-lg hover:shadow-xl  
                            hover:scale-110 transform transition duration-300 ease out'>Digitize Now</button>
                        </div>
                    </div>
                </div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }}
                    className='w-1/2 hidden md:block'>
                    <img
                        src='/images/dex1.svg'
                        alt='DMS, Document management services provided by dexdataprocessing ,dexdataprocessing, dexdata'
                        className='px-16' />
                </motion.div>
            </div>
        </div>
    )
}

export default Hero