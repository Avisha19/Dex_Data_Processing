import React from 'react'
import Image from "next/image";
import Header from "../components/Header";
import Footer from '../components/Footer';
import Services from '../components/Services';
import Head from 'next/head';

function FinancialServices() {

  return (
    <div className='font-main'>
      <Head>
        <title>Financial Services | Dex Data Processing</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/dex_icon.png" />
      </Head>
        <Header/>
        <div className='mt-3 md:flex flex-row'>
            <div className='mx-2 md:w-[732px] md:ml-56'>
                <img src='/images/financial_scanning.jpg' className='w-auto h-auto md:w-[732px] md:h-[366px] rounded-3xl'/>
                <div className='md:flex flex-row pt-8 md:pl-5'>
                    <img src='/images/empty-wallet.svg' className='w-8 h-8'/>
                    <p className='text-2xl font-semibold md:pl-5'>Financial Documents Scanning Service</p>
                </div>
                <div className='pt-5 text-[#7A7A7A] text-justify text-md leading-loose space-y-5'>
                <p>{`In today's world, everyone has to maintain financial record regardless what they do. Every company is expected to save accounts document like tax return, income tax return, cheque, purchase invoice for audit purpose for an extended period of time, as document contain certain sensitive information. Efficiency and productivity are the most critical aspect for the company, so document scanning will help the company to stay ahead of the competitors from which the company can be fast, accurate and ahead of the curve. When company maintain all the scan documents of finance, it becomes easy for the employee to search an important document from the scanned files. We help our customers to scan all the physical records of invoice, tax return etc and get real-time access to all the document scanning papers of finance.`}</p>
                <p>Our company offer accurate data capture and significant cost saving services. We scan all the documents in PDF, JPG, Tiff etc format. Our expert teams make document scanning invoice hassle-free and easy by ensuring that important data field like Invoice date and number, PO number, vendor name, supplier code, item name, etc is extracted with optimum accuracy by using high-speed document scanner with OCR and ICR tools, so that we can meet our client requirements.</p>
                </div>

                <div className='mt-10'>

                  <p className='text-2xl font-medium'>Types of Financial Documents we Scan</p>
                  <div className='md:flex flex-row text-[#7A7A7A] justify-between mt-10 ml-5 leading-loose'>
                    <ul className='list-disc pb-10'>
                      <li>Clients Files</li>
                      <li>Purchase invoice</li>
                      <li>Sales Invoice</li>
                      <li>Accounts Payable</li>
                      <li>Accounts Receivable</li>
                      <li>Contracts</li>
                    </ul>
                    <ul className='list-disc pb-10'>
                      <li>Ledgers</li>
                      <li>Historical Data</li>
                      <li>Loan Application</li>
                      <li>Investment Forms</li>
                      <li>Interest Statement</li>
                      <li>Credit Statement</li>
                    </ul>
                    <ul className='list-disc'>
                      <li>Financial Statement</li>
                      <li>Tax Records</li>
                      <li>Debit and Credit note</li>
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
                    <p className='text-2xl font-medium'>Outcome and Benifits of Financial Document Scanning :</p>
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

export default FinancialServices
