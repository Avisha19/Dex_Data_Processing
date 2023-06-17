import React from 'react'
import Image from "next/image";
import Header from "../components/Header";
import Footer from '../components/Footer';
import Services from '../components/Services'
import Head from 'next/head';

function MedicalDocuments() {

  return (
    <div className='font-main'>
      <Head>
        <title>Medical Documents | Dex Data Processing</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/dex_icon.png" />
      </Head>
        <Header/>
        <div className='mt-3 md:flex flex-row'>
            <div className='mx-2 md:w-[732px] md:ml-56'>
                <img src='/images/dex16.jpg' className='w-full h-auto md:w-[732px] md:h-[366px] rounded-3xl'/>
                <div className='md:flex flex-row pt-8 md:pl-5'>
                    <img src='/images/user.svg' className='w-8 h-8'/>
                    <p className='text-2xl font-semibold md:pl-5'>Medical Documents Scanning Service</p>
                </div>
                <div className='pt-5 text-[#7A7A7A] text-justify text-sm leading-loose space-y-5'>
                <p>{`In the growing digital world, it's widely acknowledged that the healthcare industry will be significantly highly benefited from document scanning services. Nowadays, there is an ever-increasing demand for technology that improves and enhances patients' services, experience, and care whilst reducing overall cost by adopting a new digital journey of getting all the active and inactive patient's files to get scanned into electronic format..`}</p>
                <p>Scanning a small amount of medical records going forward may be no problem to handle in-house, but digitizing and indexing the large volume of back log records may be difficult for the organization, as the staff has more important thing to do besides scanning - like treating patients!</p>
                <p>Document scanning help to boost the productivity and efficiency of the employees as they will be able to search and retrieve the document into fraction of seconds. Company can easily migrate scanned documents into any another format like pdf, jpg etc.</p>
                <p>Our company offers accurate data capturing and even provide significant cost saving services. Our expert teams make the document scanning hassle free and easy by providing service of Bulk medical document scanning and ensuring an important field are being captured with optimum accuracy by using a high-speed document scanner with OCR and ICR tools, so that we can meet our client requirement.</p>
                </div>

                <div className='mt-10'>

                  <p className='text-2xl font-medium'>Types of Medical Documents we Scan</p>
                  <div className='md:flex flex-row text-[#7A7A7A] justify-between mt-10 ml-5 leading-loose'>
                    <ul className='list-disc pb-10'>
                      <li>Insurance Documents of the patients</li>
                      <li>Patient Files</li>
                      <li>Patient History</li>
                      <li>Progress Note</li>
                    </ul>
                    <ul className='list-disc pb-10'>
                      <li>Demographic</li>
                      <li>Vital Sign</li>
                      <li>Diagnosis</li>
                      <li>Allergies Report</li>
                    </ul>
                    <ul className='list-disc'>
                      <li>Lab test results</li>
                      <li>Medication</li>
                      <li>Patient Prescription</li>
                    </ul>
                  </div>

                  <div className='mt-10'>
                    <p className='text-2xl font-medium'>Searching For Scanned Documents?</p>
                    <div className='pt-5 text-[#7A7A7A] text-justify leading-loose space-y-5'>
                      <p>Our document scanning services allows all the document to be indexed, searched and retrieved via specific criteria as per client requirement. Scanned Document can be indexed as per the client requirement.</p>
                      <p>{`Once the Medical document is been scanned, employees will be able to search the document in just a couple of words and pull up all the records they need. They don't have to visit any file room, find the right drawer, find the correct file, and then the document.`}</p>
                      <p>Documents Scanning service will improve overall efficiency.</p>
                    </div>
                  </div>

                  <div className='mt-10'>
                    <p className='text-2xl font-medium'>Security Of Your Confidential Documents</p>
                    <p className='pt-5 text-[#7A7A7A] text-justify leading-loose space-y-5'>We understand, that in many document there are certain confidential information as well as sensitive information which needs to be taken care of, which is why we have a plethora of security measures in place to ensure your data is not compromised. We also provide on-site services for documents for the security measures.</p>
                  </div>

                  <div className='mt-10 mb-10'>
                    <p className='text-2xl font-medium'>Outcome and Benefits of Medical Document Scanning :</p>
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

export default MedicalDocuments
