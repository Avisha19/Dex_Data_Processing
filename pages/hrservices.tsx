import React from 'react'
import Image from "next/image";
import Header from "../components/Header";
import Footer from '../components/Footer';
import Services from '../components/Services';
import Head from 'next/head';

function HRServices() {

  return (
    <div className='font-main'>
      <Head>
        <title>Human Resources | Dex Data Processing</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/dex_icon.png" />
      </Head>
        <Header/>
        <div className='mt-3 md:flex flex-row'>
            <div className='mx-2 md:w-[732px] md:ml-56'>
                <img src='/images/human_resources.jpg' className='w-auto h-auto md:w-[732px] md:h-[366px] rounded-3xl'/>
                <div className='md:flex flex-row pt-8 md:pl-5'>
                    <img src='/images/user.svg' className='w-8 h-8'/>
                    <p className='text-2xl font-semibold md:pl-5'>Human Resources Document Scanning Service</p>
                </div>
                <div className='pt-5 text-[#7A7A7A] text-justify text-sm leading-loose space-y-5'>
                <p>Human resource documents play a vital role in our day to day life of our business, as they manage all employees and their personal details in the organization from the records to salary to compliances and many more, in one HR personnel file. As we understand, the major responsibility of the human resources is recruiting, on-boarding, insurance, off-boarding process, preparing hr policies and procedures, managing documents like a resume, compliance, contracts, etc. produces a seemingly endless number of documents. Scanning these essential documents makes the work of the organization easier. It helps easy migration of the scan document into specific format.</p>
                <p>Document scanning services will not only improve the productivity and efficiency of the employees but it also helps to reduce the office spaces. When company maintains all the scan document of human resources, it becomes easy for the employees to search an essential document from the scanned files.</p>
                <p>DEX data offers accurate data capture and significant cost saving services. Our expert teams make the scanning hassle free and easy by providing service of Bulk hr document scanning and ensuring an important field like name of the employees, employee number, document name, etc. are being captured with optimum accuracy by using a high-speed document scanner with OCR and ICR tools, so that we can meet our client requirement.</p>
                </div>

                <div className='mt-10'>

                  <p className='text-2xl font-medium'>Types of Human Resources Documents we Scan</p>
                  <div className='md:flex flex-row text-[#7A7A7A] justify-between mt-10 ml-5 leading-loose'>
                    <ul className='list-disc pb-10'>
                      <li>Resume</li>
                      <li>Medical Records</li>
                      <li>HR policy Manuals</li>
                      <li>Compliance Reports</li>
                      <li>Employee Benefits Info</li>
                      <li>Payment Records</li>
                      <li>Offer Letters</li>
                    </ul>
                    <ul className='list-disc pb-10'>
                      <li>Employee Contracts</li>
                      <li>Salary Slip</li>
                      <li>LPerformance Review</li>
                      <li>Experience Letters</li>
                      <li>Employees ID card</li>
                      <li>Certificates & Training</li>
                    </ul>
                    <ul className='list-disc'>
                      <li>Cover Letter</li>
                      <li>HR Forms</li>
                      <li>Retirement & Pension</li>
                      <li>HR Compliance Checklists</li>
                      <li>Educational Documents</li>
                    </ul>
                  </div>

                  <div className='mt-10'>
                    <p className='text-2xl font-medium'>Searching For Scanned Documents?</p>
                    <div className='pt-5 text-[#7A7A7A] text-justify leading-loose space-y-5'>
                      <p>Our document scanning services allows all the document to be indexed, searched and retrieved via specific criteria as per client requirement. Human resources document can be indexed by employee id number, name of the document, name of the employees, etc.</p>
                      <p>{`Employees will be able to search the scan pages in just a couple of words and pull up all the records they need. They don't have to visit any file room, find the right drawer, find the correct file and then the document.`}</p>
                      <p>Document Scanning Services will improve overall efficiency.</p>
                    </div>
                  </div>

                  <div className='mt-10'>
                    <p className='text-2xl font-medium'>Security Of Your Confidential Documents</p>
                    <p className='pt-5 text-[#7A7A7A] text-justify leading-loose space-y-5'>We understand, that in many document there are certain confidential information as well as sensitive information which needs to be taken care of, which is why we have a plethora of security measures in place to ensure your data is not compromised. We also provide on-site services for documents for the security measures.</p>
                  </div>

                  <div className='mt-10 mb-10'>
                    <p className='text-2xl font-medium'>Outcome and Benifits of HR Document Scanning :</p>
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

export default HRServices
