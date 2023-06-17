import React from 'react'
import Image from "next/image";
import Header from "../components/Header";
import Footer from '../components/Footer';
import Services from '../components/Services';
import Head from 'next/head';

function BookBinding() {

  return (
    <div className='font-main'>
      <Head>
        <title>Book Binding | Dex Data Processing</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/dex_icon.png" />
      </Head>
        <Header/>
        <div className='mt-3 md:flex flex-row'>
            <div className='mx-2 md:w-[732px] md:ml-56'>
                <img src='/images/booklet_scanning_&_binding.jpg' className='w-auto h-auto md:w-[732px] md:h-[366px] rounded-3xl'/>
                <div className='md:flex flex-row pt-8 md:pl-5'>
                    <img src='/images/user.svg' className='w-8 h-8'/>
                    <p className='text-2xl font-semibold md:pl-5'>Book Binding and Booklet scanning Services</p>
                </div>
                <div className='pt-5 text-[#7A7A7A] text-justify text-sm leading-loose space-y-5'>
                <p>While punching there are chances of making mistakes eg . alignment issues , incomplete holes etc. , the punch hole of the paper gets damaged due to daily use and unknowingly you can lose important documents from the files . chances of missing papers get increased and can become major issue during some critical work like audits etc. When number of files get increased after certain duration then it will become very difficult to search for any specific record. You may also need extra time and money for  storing the above mentioned large pile of documents.</p>
                </div>
                <p className='text-2xl pt-5 font-medium'>Solution :</p>
                <ul className='list-disc text-md pt-5 text-[#7A7A7A] text-justify leading-loose pl-5'>
                    <li>{`Book Binding i.e. by binding all of your previous year's files.`}</li>
                    <li>In binding, all pages of your files are sewn together. So that, in case bound files fallen accidentally then the pages will not come out.</li>
                    <li>{`Binding will empty your box files which you can use for your newly created documents so you don't have to buy new box-files.`}</li>
                    <li>Binding of documents takes less space than the box-files, which means that if there are 5 box files in a storage cabinet, then at least 7 binding files will fit in that space.</li>
                </ul>
                

                <div className='mt-10'>

                <div className='mt-10'>
                    <p className='text-2xl font-medium'>Security Of Your Confidential Documents</p>
                    <p className='pt-5 text-[#7A7A7A] text-justify leading-loose space-y-5 pb-3'>We understand, that in many document there are certain confidential information as well as sensitive information which needs to be taken care of, which is why we have a plethora of security measures in place to ensure your data is not compromised. We also provide on-site services for documents for the security measures.</p>
                  </div>

                  

                </div>
            </div>
            <Services/>
        </div>

        <Footer/>
    </div>
  )
}

export default BookBinding
