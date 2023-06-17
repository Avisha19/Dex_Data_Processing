import React, { useReducer } from 'react'
import Header from '../components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import SmallCard from '@/components/SmallCard'
import Head from 'next/head'

function About() {
  return (
    <div>
        <Head>
            <title>About | Dex Data</title>
            <meta name='description' content='A Digitization and Document scanning company with expertise makes information easily accessible to its owner by turning it into digital format which can be preserved for lifetime'></meta>
            <meta property='og:image' content='https://www.dexdatapro.in/images/dex_logo.png'></meta>
            <link rel="icon" type="image/png" sizes="32x32" href="/images/dex_icon.png" />
        </Head>
        <Header/>

        <div className='md:mx-48 mt-10 md:flex flex-row font-main leading-loose mx-5'>
            <div className='md:w-1/3 flex items-center min-h-full'>
                <div className='flex flex-col'>
                    <p className='md:text-6xl text-2xl font-semibold'>About</p>
                    <p className='text-[#0151C2] text-2xl md:text-6xl font-semibold'>DEX DATA</p>
                </div>
            </div>
            <div className='md:w-2/3 flex flex-col text-md'>
                <div className='md:flex flex-row'>
                    <img src='/images/dex5.png' className='md:w-1/2 hover:scale-110 transform transition duration-300 ease out'/>
                    <p className='md:w-1/2 pt-12'><span className='text-[#0151C2] font-bold'>DEX DATA</span> a non-stop Document Scanning Company is a professional company that is specialized in <span className='text-[#0151C2] font-bold'>making information easily accessible into digital format</span> which can be preserved for lifetime. We deploy our dedicated and skilled staff who are experts insecure document scanning.</p>
                </div>
                <div className='md:flex flex-row mt-5'>
                    <p className='md:w-1/2'><span className='text-[#0151C2] font-bold'>DEX DATA</span> a Digitization and Document scanning company with expertise makes information easily accessible to its owner by turning it into digital format which can be preserved for lifetime. Our services include document <span className='text-[#0151C2] font-bold'>scanning</span> digitization services and <span className='text-[#0151C2] font-bold'>document management system</span></p>
                    <img src='/images/dex6.png' className='md:w-1/2 hover:scale-110 transform transition duration-300 ease out'/>
                </div>
            </div>
        </div>

        <div className='md:mx-48 font-main leading-loose mt-10 mx-5'>
            <p  className='md:text-2xl text-lg font-semibold '>Advantages Of Choosing <span className='font-bold text-[#0151C2]'>{`DEX DATA'S Scanning Service`}</span> and Document Management System</p>
            <ul className='list-disc text-md mt-5 mx-5'>
                <li>We use high end high speed document imaging and scanning equipments to provide with fast, high quality and cost effective document scanning services</li>
                <li>We can scan any type of documents.Proven quality assurance as per the client expectation</li>
                <li>System Integration and document management capabilitiesOn-site scanning projects experts</li>
                <li>We have various security measures in place to ensure the safety of the sensitive data that you entrust with us</li>
                <li>Our Growth is because of repeated orders from our existing clients which are reward to us</li>
            </ul>
        </div>

        <div className='md:mx-48 mt-20 font-main leading-loose mx-5'>
            <p className='text-[1.5rem] font-semibold text-[#0151C2]'>Our Values</p>
            <div className='text-md'>
                <p>We deliver solutions that solve real client problem and possess a strong desire to win in the marketplace. We enjoy our work and support each other in the achievement of our personal and professional goals. We possess a positive collective spirit derived from individual enthusiasm and vigor. We believe in setting proper expectations and exceeding them. We meet commitments with speed and excellence.</p>
                <p>Our core value is to deliver positive customer care experience.</p>
                <p>We have years of experience in providing customer services, through which the productivity and efficiency of the employee have improved the company performances.</p>
            </div>
        </div>

        <div className='md:mx-48 mt-20 font-main leading-loose mx-5'>
            <p className='text-[1.5rem] font-semibold text-[#0151C2]'>Our Mission</p>
            <p className='text-md'>To provide the ultimate solutions for our customers and make them a part of our family. This is how we act and develop as a business.</p>
        </div>

        <div className='md:mx-5 mx-5'>
            <SmallCard/>
        </div>
        <Footer/>
    </div>
  )
}

export default About