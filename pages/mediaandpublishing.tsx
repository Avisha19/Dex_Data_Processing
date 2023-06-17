import React from 'react'
import Image from "next/image";
import Header from "../components/Header";
import Footer from '../components/Footer';
import Services from '../components/Services';
import Head from 'next/head';

function MediaAndPublishing() {

  return (
    <div className='font-main'>
      <Head>
        <title>Media and Publishing | Dex Data Processing</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/dex_icon.png" />
      </Head>
        <Header/>
        <div className='mt-3 md:flex flex-row'>
            <div className='mx-2 md:w-[732px] md:ml-56'>
                <img src='/images/media_&_publishing.jpg' className='w-auto h-auto md:w-[732px] md:h-[366px] rounded-3xl'/>
                <div className='md:flex flex-row pt-8 md:pl-5'>
                    <img src='/images/media.svg' className='w-8 h-8'/>
                    <p className='text-2xl font-semibold md:pl-5'>Media And Publishing Scanning Service</p>
                </div>
                <div className='pt-5 text-[#7A7A7A] text-justify text-md leading-loose space-y-5'>
                <p>{`Everybody in this world is engaged with the news of high-resolution images at some level on a periodic basis, as it plays an essential role in people's lives. The newspaper represents a rich record of historic events. As everyone is aware newspapers are in large format and they need the best equipment for document scanning services. The paper used for printing news is very much fragile and can easily tear apart if not preserved well. If stored for a longer period there are chances for image degradation. Every newspaper organization, publisher, marketing organization, media company, etc needs to store the newspaper in a physical format containing advertisements related to their company. In many companies, employees try to scan papers for the organization. There are chances of poor image processing, entire information not getting captured & finding the content you need is only half the battle; the other half is folding and unfolding section while looking for specific articles.`}</p>
                <p className='font-bold text-[#7A7A7A]'>Book Scanning</p>
                <p>Special books deserve special treatment. There are varieties of books such as university books, education books, magazines, manuscripts, etc, digitizing them is important to protect essential information from natural deterioration and disaster recovery. Book document scanning is very much different compared to document or basic record scanning. Our preservation facility is designed with your special collection in mind. We implement the best way to scan documents. It can be scanned in two ways, depending on your book type.</p>
                <p className='font-bold text-[#7A7A7A]'>Non-Destructive Book Document Scanning</p>
                <p>For many years, books and magazines are been used by researchers, Historical texts, authors, etc to record their work for reading and reference. Access to this enormous amount of knowledge has been largely constrained, but not anymore. Our non-destructive document scanning services leave the book completely intact. It is the process of converting the physical books into the digital format without removing or destroying the back of the spine. Our team is been trained in handling fragile book to ensure precious collections are protected and handled in a correct manner.</p>
                <p className='font-bold text-[#7A7A7A]'>Destructive Book Document Scanning</p>
                <p>This process is the fastest turnaround time for scanning the book, unbind old books and digitizing old book to new books. This involve carefully removing thebinding of the book and freeing up the pages and inserting it into the scanner for the bulk scan. It is scanned page by page ensuring the highest quality image and character recognition. After ensuring that it looks great on your E-device, we do new binding of the book.</p>
                <p>Scanning all the newspapers, magazine and book with the best overhead scanner and converting them into the digital format turns out in better quality and enhances the image with higher resolution. Document scanning services will not only improve the productivity and efficiency of the employees but it also help to reduce the office spaces. When company maintains all the scan document of newspaper,books etc, it becomes easy for the users to search an essential document from the scanned files.</p>
                <p>{`Our company is specialized in providing bulk document scanning services and our expert teams make the scanning hassle-free and ensuring that all-important fields are being captured with optimum accuracy by using the best OCR and ICR tools using high-speed document scanner to scan document efficiently to meet client's requirement.`}</p>
                </div>

                <div className='mt-10'>

                  <p className='text-2xl font-medium'>Types of Books that we Scan</p>
                  <div className='md:flex flex-row text-[#7A7A7A] justify-between mt-10 ml-5 leading-loose'>
                    <ul className='list-disc pb-10'>
                      <li>Historic Newspapers</li>
                      <li>Old Newspapers</li>
                      <li>Tabloid</li>
                      <li>Broadsheet</li>
                      <li>Bound Newspapers</li>
                      <li>Loose Sheet newspaper</li>
                    </ul>
                    <ul className='list-disc pb-10'>
                      <li>Bound and Unbound Book</li>
                      <li>Bound volumes of old book</li>
                      <li>Manuals</li>
                      <li>Company Binders</li>
                      <li>Fragile book</li>
                      <li>Laboratory Notebook</li>
                    </ul>
                    <ul className='list-disc'>
                      <li>Schools and University book</li>
                      <li>Journals</li>
                      <li>Engineering Notebook</li>
                      <li>Magazine</li>
                      <li>Comic book</li>
                      <li>Research papers</li>
                      <li>Brouchers</li>
                    </ul>
                  </div>

                  <div className='mt-10'>
                    <p className='text-2xl font-medium'>Searching For Scanned Documents?</p>
                    <div className='pt-5 text-[#7A7A7A] text-justify leading-loose space-y-5'>
                      <p>All the scanned book, newspaper and magazine can be converted into any format. Our document scanning services allows all the document to be indexed, searched and retrieved via specific criteria as per client requirement.</p>
                      <p>Employees will be able to search the document in just a couple of words and pull up all the records they need. They don’t have to visit any filling cabinet, find the right drawer, find the correct file and then the document.</p>
                      <p>Document Scanning Services will improve overall efficiency.</p>
                    </div>
                  </div>

                  <div className='mt-10'>
                    <p className='text-2xl font-medium'>Security Of Your Confidential Documents</p>
                    <p className='pt-5 text-[#7A7A7A] text-justify leading-loose space-y-5'>We understand, that in many document there are certain confidential information as well as sensitive information which needs to be taken care of, which is why we have a plethora of security measures in place to ensure your data is not compromised. We also provide on-site services for documents for the security measures.</p>
                  </div>

                  <div className='mt-10 mb-10'>
                    <p className='text-2xl font-medium'>Outcome and Benifits of Newspaper Scanning :</p>
                    <ul className='list-disc text-[#7A7A7A] pt-5 space-y-3 ml-5'>
                      <li className='leading-loose'>It eliminate the needs to search the document manually from the file cabinet to find required information.</li>
                      <li>Scanned book, newspaper and magazine can be distribute further.</li>
                      <li>Document scanning services enhances the efficiency and faster routing.</li>
                      <li className='leading-loose'>When scanned documents gets converted into searchable PDF through Ocr, users can search through the keywords.</li>
                      <li>Document retrieval and distribution time reduce from 20 min to less than 20 second.</li>
                      <li>Increased performance, productivity and cost benefits.</li>
                      <li>High quality document scanning services of any format.</li>
                      <li>Eliminates misplaced and lost document.</li>
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

export default MediaAndPublishing
