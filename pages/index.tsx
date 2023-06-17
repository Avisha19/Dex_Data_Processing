import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import MediumCard from '../components/MediumCard'
import cards1 from '../Cards1.json'
import SmallCard from '../components/SmallCard'
import { useRouter } from 'next/router'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'


export default function Home() {
  const router = useRouter();

  const redirect = () => {

    router.push('https://wa.me/+919076336198');

  }
  const fadeInDown = {
    start: {
      opacity: 0,
      x: 0,
      y: -100,
      z: 0,
      transition: {
      }
    },
    end: {
      opacity: 1,
      y: 0,
    }
  }
  return (
    <div className='font-main'>
      <Head>
        <title>Home-Dex Data Processing</title>
        <meta name="description" content=" DEX DATA is India's Leading Document Digitization & Management Company. We are equipped with the latest high speed scanner to provide fast, high quality and cost-effective document scanning service in Mumbai and across India."></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property='og:image' content='https://www.dexdatapro.in/images/dex_logo.png'></meta>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/dex_icon.png" />
      </Head>
      <Header />
      <Hero />
      <About />
      <MediumCard />
      <div className='hidden md:block md:mx-40'>
        <motion.div initial={fadeInDown.start} whileInView={fadeInDown.end} transition={{ delay: 0.3 }} className='grid md:grid-cols-3 justify-items-center text-white text-3xl text-center font-semibold'>
          <div className='bg-[#1D74E1] rounded-[1rem] w-36 py-1'>5000+</div>
          <div className='bg-[#1D74E1] rounded-[1rem] w-36 py-1'>90000+</div>
          <div className='bg-[#1D74E1] rounded-[1rem] w-36 py-1'>5+</div>
        </motion.div>

        <div className='grid md:grid-cols-3 justify-items-center text-xl font-semibold'>
          <div className='flex flex-row bg-card1 rounded-xl px-4 py-2 border-3 border-black border-[1.5px] hover:shadow-2xl items-center'>
            <img src='/images/dex3.png' className='h-10' alt='' />
            <div>Documents Processed</div>
          </div>
          <div className='flex flex-row bg-card1 rounded-xl px-4 py-2 border-black border-[1.5px] hover:shadow-2xl items-center'>
            <img src='/images/dex3.png' className='h-10' alt='' />
            <div>Documents Converted</div>
          </div>
          <div className='flex flex-row bg-card1 rounded-xl px-4 py-2 border-black border-[1.5px] hover:shadow-2xl items-center'>
            <img src='/images/dex3.png' className='h-10' alt='' />
            <div>Years Of Experience</div>
          </div>
        </div>
      </div>

      <div className='md:mx-40 md:pt-20 md:flex flex-row mx-5'>
        <div className='md:w-1/2 bg-card1 rounded-3xl'>
          <div className='md:px-7 w-auto px-4'>
            <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} 
            className='md:text-2xl text-lg font-bold text-black pb-6 pt-10 tracking-[1.5px]'>Experience that builds TRUST !</motion.h1>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5, delay: 0.5 }}><span className='text-secondary md:text-xl'>We have been in this domain for more than a decade !!</span></motion.p>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5, delay: 0.5 }} className='leading-loose font-semibold text-sm md:text-md pt-2'>Our presence ensures that you can trust us for scraping, scanning, capturing and uploading data. Our professional qualities attract you to stay connected with us for a long time. It helps your business to reach a great height. This trust gradually builds up loyalty. We always see it in offshore and onshore scanning partners.</motion.p>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5, delay: 0.5 }} className='leading-loose font-semibold text-sm md:text-md pt-7 pb-7'>Over time, we have opted in advanced and upgraded tools and techniques. They automate our support & serviced without any seam. This consistent practice keeps us tied in a strong business relationship or for being loyal.</motion.p>
          </div>
        </div>
        <div className='hidden md:block md:w-1/2 relative'>
          <img src='/images/dex4.svg' className='absolute md:px-20 sm:mx-7 mt-2' alt=''/>
        </div>
      </div>
      <div className=''>
        <div className='md:text-4xl text-lg font-semibold md:mx-40 md:pt-32 pt-5 mx-5 pl-2'>What Are We Reknowned For??</div>
        <SmallCard />
      </div>
      <div className='flex justify-center'>
      {/* <iframe src="https://www.youtube.com/embed/XAEQCvaDPZA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen className='md:mx-40 md:mt-24 rounded-3xl border-2 md:w-[1200px] md:h-[650px] mx-2'></iframe> */}
      </div>

      {/* <div className='mt-20 mb-1'>
        <div className='relative max-w-max'>
          <img
           src='images/contact_dex.jpg' 
           className='md:max-w-max brightness-75 relative' />
          <div className='absolute inset-0 flex items-center justify-center'>
            <button onClick={redirect} className='flex flex-row bg-primary bg-opacity-90 px-10 md:px-16 py-2 rounded-2xl items-center'>
              <div><img src='/images/call.svg' className='pr-3 filter:b' /></div>
              <div>
                <p className='text-white font-semibold'>Call Now</p>
              </div>
            </button>
          </div>
        </div>
      </div> */}


      <div className='md:w-full'>
        <Footer />
      </div>
    </div>

  )
}
