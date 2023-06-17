import React from 'react'
import Header from '../components/Header'
import Footer from '@/components/Footer'
import MediumCard from '@/components/MediumCard'
import cards1 from '../Cards1.json'
import Slider from '../components/Slider'
import Head from 'next/head'

function OurEquipments() {

  return (
    <div className='font-main'>
      <Head>
        <title>Our Equipments | Dex Data Processing</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/dex_icon.png" />
      </Head>
        <Header/>
        <div className="md:mx-52 pt-16 flex flex-row items-center md:text-2xl text-lg font-semibold pb-5 mx-5">
            <img src='/images/verify-1.svg' className='h-12'/>
            <p className="font-semibold pl-3">We Scan Your Documents with The Best Equipments !</p>
        </div>

        <Slider/>
        
        <div className='md:mx-48 mx-10'>
            <div className='flex flex-row items-center'>
              <div>
                <img src='/images/dex3.png' className='hover:animate-pulse'/>
              </div>
              <div>
                <p className='pl-3 md:text-2xl text-lg font-bold tracking-[1.5px]'>{`DEX DATA'S Document Scanning Services`}</p>
              </div>
            </div>
        </div>
        <div className=''> 
          <MediumCard/>
        </div>
        <Footer/>
    </div>
    
  )
}

export default OurEquipments




