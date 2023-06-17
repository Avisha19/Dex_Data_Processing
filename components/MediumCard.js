import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { motion,useScroll,useInView } from 'framer-motion'

function MediumCard() {
    const router = useRouter()
    const medical_documents = () =>{
        router.push('medicaldocuments')
      }
    
      const financial_services = () =>{
        router.push('financialservices')
      }
    
      const hr_services = () =>{
        router.push('hrservices')
      }
    
      const legal_documents = () =>{
        router.push('legaldocuments')
      }
    
      const media_and_publishing = () =>{
        router.push('mediaandpublishing')
      }
    
      const book_binding = () =>{
        router.push('bookbinding')
      }

      const fadeInUp={
        start:{
            opacity: 0,
            x: 0,
            y: 300,
            z: 0,
            transition:{
                duration:2
            }
        },
        end:{
            opacity: 1,
            y: 0,
        }
      }

  return (
    <div className=''>
    <motion.div initial={fadeInUp.start} whileInView={fadeInUp.end} 
    className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 md:mx-40 justify-items-center mt-7'>
        {/* <div className='h-auto w-80 mb-24 bg-card1 rounded-3xl pb-10 flex flex-col'> */}
        <div className='rounded-3xl h-auto w-80 mb-7 md:mb-24 bg-card1 pb-10 flex flex-col'>
            <div className='cursor-pointer rounded-3xl'>
                <img src='/images/financial_scanning.jpg' className='rounded-3xl'/>
            </div>
            <div>
                <p className='cursor-pointer md:text-3xl text-xl font-semibold pl-3 pt-7' onClick={financial_services}>Financial Scanning</p>
            </div>
            <div className='pt-4 px-3 text-gray-600'>
                <p className='md:text-lg text-sm'>Converting finance documents into digital format improves security, efficiency, compliance , saves space, time and money.</p>
            </div>
        </div>
        <div className=' flex flex-col h-auto w-80 mb-7 md:mb-24 bg-card1 rounded-3xl pb-10'>
            <div className='cursor-pointer rounded-3xl'>
                <img src="/images/legal_documents.jpg" className='rounded-3xl'/>
            </div>
            <div>
                <p className='cursor-pointer md:text-3xl text-xl font-semibold pl-3 pt-7' onClick={legal_documents}>Legal Documents</p>
            </div>
            <div className='pt-4 px-3 text-gray-600'>
                <p className='md:text-lg text-sm'>Converting all legal records in digital format allows you to search view, manage and distribute important documents with ease.</p>
            </div>
        </div>
        <div className=' flex flex-col rounded-3xl h-auto w-80 mb-7 md:mb-24 bg-card1 pb-10'>
            <div className='cursor-pointer rounded-3xl'>
                <img src="/images/human_resources.jpg" className='rounded-3xl'/>
            </div>
            <div>
                <p className='cursor-pointer md:text-3xl text-xl font-semibold pl-3 pt-7' onClick={hr_services}>Human Resources</p>
            </div>
            <div className='pt-4 px-3 text-gray-600'>
                <p className='md:text-lg text-sm'>HR department tends to be paper-intensive and it is tedious to manage it in physical format- that is where DEXDATA comes in.</p>
            </div>
        </div>
    </motion.div>
    <motion.div transition={{}} initial={fadeInUp.start} whileInView={fadeInUp.end} 
    className='grid grid-cols-1 md:grid-cols-3 md:mx-40 justify-items-center'>
        <div className=' flex flex-col h-auto w-80 mb-7 md:mb-24 bg-card1 rounded-3xl pb-10'>
            <div className='cursor-pointer rounded-3xl'>
                <img src="/images/media_&_publishing.jpg" className='rounded-3xl'/>
            </div>
            <div>
                <p className='cursor-pointer md:text-3xl text-xl font-semibold pl-3 pt-7' onClick={media_and_publishing}>Media & Publishing</p>
            </div>
            <div className='pt-4 px-3 text-gray-600'>
                <p className='md:text-lg text-sm'>We are experts at creating digital-archives of magazines, newspapers photos, film, and more for publishing companies.</p>
            </div>
        </div>
        <div className=' flex flex-col rounded-3xl h-auto w-80 mb-7 md:mb-24 bg-card1 pb-10'>
            <div className='cursor-pointer rounded-3xl'>
                <img src="/images/medical_documents.jpg" className='rounded-3xl'/>
            </div>
            <div>
                <p className='cursor-pointer md:text-3xl text-xl font-semibold pl-3 pt-7' onClick={medical_documents}>Medical Documents</p>
            </div>
            <div className='pt-4 px-3 text-gray-600'>
                <p className='md:text-lg text-sm'>Ease of retrieving information from the scanned medical, patient records if they are in digital format.</p>
            </div>
        </div>
        <div className=' flex flex-col rounded-3xl h-auto w-80 mb-24 bg-card1 pb-10'>
            <div className='cursor-pointer rounded-3xl'>
                <img src="/images/booklet_scanning_&_binding.jpg" className='rounded-3xl'/>
            </div>
            <div>
                <p className='cursor-pointer md:text-3xl text-xl font-semibold pl-3 pt-7' onClick={book_binding}>Booklet Scanning & Binding</p>
            </div>
            <div className='pt-4 px-3 text-gray-600'>
                <p className='md:text-lg text-sm'>Digitizing a variety of Newsletters, Recipe Booklets, Instruction Manuals, Reference Guides, Portfolios Coil/Spiral Binding and Saddle Stitched.</p>
            </div>
        </div>
    </motion.div>
    </div>
  )
}

export default MediumCard