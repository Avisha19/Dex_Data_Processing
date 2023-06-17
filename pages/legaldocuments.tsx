import React from 'react'
import Image from "next/image";
import Header from "../components/Header";
import Footer from '../components/Footer';
import Services from '../components/Services';
import Head from 'next/head';

function LegalDocuments() {

  return (
    <div className='font-main'>
      <Head>
        <title>Legal Documents | Dex Data Processing</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/dex_icon.png" />
      </Head>
        <Header/>
        <div className='mt-3 md:flex flex-row'>
            <div className='mx-2 md:w-[732px] md:ml-56'>
                <img src='/images/legal_documents.jpg' className='w-auto h-auto md:w-[732px] md:h-[366px] rounded-3xl'/>
                <div className='md:flex flex-row pt-8 md::pl-5'>
                    <img src='/images/legal.svg' className='w-8 h-8'/>
                    <p className='text-2xl font-semibold md:pl-5'>Legal Documents Scanning Services</p>
                </div>
                <div className='pt-5 text-[#7A7A7A] text-justify text-sm leading-loose space-y-5'>
                <p>In law firms and corporate law, every client generates different legal documents such as contracts, affidavit, doctor reports, images, power of attorney, etc. which contain crucial information and is at risk of loss or damage or are not easily accessible. The volume of the documents is rapidly growing in every industry, as well as the number of the legal papers requirement of it, and unfortunately much of that is instill in paper form in this Digital world. Vital to the discovery process is searching and finding the document contain important information when required and its possible when all documents is been scanned. Document scanning will make the work of the organizer easier.</p>
                <p>When organization maintains all the scan document of legal papers, it becomes easy for the employees to search an essential document from the scanned files. This will improve the productivity and efficiency of the employees.</p>
                <p>We offer accurate data capture and significant cost saving services. Our expert teams make the scanning hassle free and easy by providing service of Bulk legal document scanning and ensuring an important field are being captured with optimum accuracy by using a high-speed document scanner with OCR and ICR tools, so that we can meet our client requirement.</p>
                </div>

                <div className='mt-10'>

                  <p className='text-2xl font-medium'>Types of Legal Documents we Scan</p>
                  <div className='md:flex flex-row text-[#7A7A7A] justify-between mt-10 ml-5 leading-loose'>
                    <ul className='list-disc pb-10'>
                      <li>Affidavits</li>
                      <li>Memorandums</li>
                      <li>Client Legal Documents</li>
                      <li>Real Estate Document</li>
                      <li>Declaration</li>
                      <li>Partnership deeds</li>
                      <li>Power Of Attorney</li>
                    </ul>
                    <ul className='list-disc pb-10'>
                      <li>Will Documents</li>
                      <li>Court Transit </li>
                      <li>Complaints Document</li>
                      <li>Business Formation Docs</li>
                      <li>Deeds</li>
                      <li>Deed of Guarantee</li>
                    </ul>
                    <ul className='list-disc'>
                      <li>Briefs and Contracts</li>
                      <li>Trust Documents</li>
                      <li>Legal Contracts</li>
                      <li>Litigation</li>
                      <li>Agreements</li>
                      <li>Court Documents</li>
                    </ul>
                  </div>

                  <div className='mt-10'>
                    <p className='text-2xl font-medium'>Searching For Scanned Documents?</p>
                    <div className='pt-5 text-[#7A7A7A] text-justify leading-loose space-y-5'>
                      <p>Our document scanning services allows all the document to be indexed, searched and retrieved via specific criteria as per client requirement. The document can be indexed by client name, case number, account number, customer id, etc.</p>
                      <p>{`Once the Law document is been scanned, employees will be able to search the document in just a couple of words and pull up all the records they need. They don't have to visit any file room, find the right drawer, find the correct file, and then the document. Digitizing Documents will improve overall efficiency.`}</p>
                      <p>Document Scanning Services will improve overall efficiency.</p>
                    </div>
                  </div>

                  <div className='mt-10'>
                    <p className='text-2xl font-medium'>Security Of Your Confidential Documents</p>
                    <p className='pt-5 text-[#7A7A7A] text-justify leading-loose space-y-5'>We understand, that in many document there are certain confidential information as well as sensitive information which needs to be taken care of, which is why we have a plethora of security measures in place to ensure your data is not compromised. We also provide on-site services for documents for the security measures.</p>
                  </div>

                  <div className='mt-10 mb-10'>
                    <p className='text-2xl font-medium'>Outcome and Benefits of Legal Document Scanning :</p>
                    <ul className='list-disc text-[#7A7A7A] pt-5 space-y-3 ml-5'>
                      <li className='leading-loose'>It eliminates the needs to search the document manually from the cumbersome binders to find required Document.</li>
                      <li>{`Eliminates the need to scan the individual's pages in order to distribute further.`}</li>
                      <li>Successful collections and centralization of the HR scanned document effectively.</li>
                      <li>Our document scanning services provides fast and accurate data.</li>
                      <li>Securing the HR record from any kind of internal and external threats.</li>
                      <li>Scan Documents help easy search and retrieval of the particular pages.</li>
                      <li>Document retrieval and distribution time reduce from 20 min to less than 10 seconds.</li>
                    </ul>
                  </div>

                </div>
            </div>
            <Services/>
        </div>

        <Footer/>
    </div>
  )
}

export default LegalDocuments
