import React from 'react'

function About() {
  return (
    <div className='md:mx-40 mx-5'>
      <div>
        <div>
          <p className='text-3xl font-bold tracking-[1.5px] pt-3'>About Us</p>
          <div className='font-semibold text-sm md:text-lg py-2'>
          <p className=''>Digitization is the new future towards increased efficiency and productivity.
            <span className='text-primary'> {`DEX DATA is India's Leading Document Digitization & Management Company.`}</span></p>
          <span className='text-justify'>We are equipped with the latest high speed scanner to provide fast, high quality and cost-effective document scanning service in Mumbai and across India.</span>
          <div className='pt-4'>Is your organization facing a similar problem? Has storing data in hard copies become an expensive proposition for business? Is your critical business information lost amidst papers, files or cabinets?</div>


          <div className='pt-14'>
            <div className='md:flex flex-row'>
              <div className='md:w-1/2'>
                <img src='/images/dex2.png' className='rounded-[1.5rem]'/>
              </div>
              <div className='mt-3 md:mt-0 md:pl-5 md:w-1/2'>
                  <p className='text-secondary'>DEX DATA Document Scanning and Digitization Services</p>
                  <p className='pt-7 text-justify'>Document scanning in other words is document imaging the process of capturing documents and converting them to digital format via document scanner. Our standard policy is to use the best industrial document scanner for a business document, government record, legal records, book scanning, medical record, educational record, and many more, for easy-search & access, quick retrieve, and distribute the necessary information.</p>
                  <ul className='pt-7 pl-5 list-disc'>
                    <li>Document Digitization</li>
                    <li>Indexing and Archiving</li>
                    <li>Document and Shredding</li>
                    <li>PDF scanning</li>
                    <li>Data Entry Services</li>
                  </ul>
              </div>
            </div>
          </div>

          </div>

          <div className='pt-20 mx-2'>
            <div className='flex flex-row items-center'>
              <div className='md:max-w-max w-[20%]'> 
                <img src='/images/dex3.png' className='hover:animate-pulse h-10 md:h-auto'/>
              </div>
              <div>
                <p className='pl-3 md:text-4xl font-bold tracking-[1.5px]'>{`DEX DATA'S Document Scanning Services`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About