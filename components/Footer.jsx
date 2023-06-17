import React from 'react'
import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    const router = useRouter();

    const quicklinks = [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "About Us",
            href: "/about"
        },
        {
            name: "Contact",
            href: "/contact"
        }
    ]

    const servicelinks = [
        {
            name:"Our Equipments",
            href:"/ourequipments"
        },
        {
            name: "Financial Services",
            href: "/financialservices"
        },
        {
            name:"HR Services",
            href:"/hrservices"
        },
        {
            name:"Legal Documents",
            href:"/legaldocuments"
        },
        {
            name:"Medical Documents",
            href:"/medicaldocuments"
        },
        {
            name:"Media and Publishing",
            href:"/mediaandpublishing"
        },
        {
            name:"Book Binding",
            href:"/bookbinding"
        }
    ]

  return (
    
    <div className='bg-[#292D32] md:px-10 font-main'>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-y-10 px-5 md:px-32 justify-around py-14 text-[#EAEAEA]'>
        <div className='space-y-4'>
            <h5 className='font-bold text-lg'>Quick Links</h5>
            <ul className='flex flex-col space-y-4'>
                {
                    quicklinks.map((q) => (
                        <Link href={q.href} key={q.name} >
                            <li className='hover:text-secondary cursor-pointer transform transition duration-300 ease out'>
                                <button className={router.pathname === q.href ? "text-secondary" : ""}>{q.name}</button>
                            </li>
                        </Link>
                    ))
                }
            </ul>
        </div>
        <div className='space-y-4 text-md'>
            <h5 className='font-bold text-lg'>Services</h5>
            <div>
                <ul className='flex flex-col space-y-4'>
                    {
                        servicelinks.map((s) => (
                            <Link href={s.href} key={s.name}>
                                <li  className='hover:text-secondary cursor-pointer
                                 transform transition duration-300 ease out'><button className={router.pathname === s.href ? "text-secondary" : ""}>{s.name}</button></li>
                            </Link>
                        ))
                    }
                </ul>
            </div>
        </div>
        <div className=''>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d120406.49553209549!2d72.827902!3d19.425235!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a941b2f07ba1%3A0xc73112c2e911e440!2sApex%20Tower%2C%20Tulinj%20Rd%2C%20near%20Laxmi%20Plywood%2C%20Damodar%20Nagar%2C%20Nalasopara%20East%2C%20Nala%20Sopara%2C%20Maharashtra%20401209%2C%20India!5e0!3m2!1sen!2sus!4v1681365367089!5m2!1sen!2sus" width="400" height="250" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='rounded-3xl w-full pr-2'></iframe>
        </div>
    </div>
    <hr className='pb-5 mx-32 text-white'></hr>
    <div className='flex flex-row justify-center'>
    <SocialIcon url='https://instagram.com/dex_data_processing' fgColor='#ffffff' bgColor='#292D32'
                    className='hover:scale-110' />
    <SocialIcon url='https://facebook.com/dex_data_processing' fgColor='#ffffff' bgColor='#292D32'
                    className='hover:scale-110' />
    </div>
    <div>
        <p className='text-center text-[#EAEAEA] pb-2'>© Dex Data Processing pvt ltd. 2023 |<Link href="https://www.elightlabs.com" className='underline block'>Elightlabs Technologies</Link> </p>
    </div>
</div>
  )
}

export default Footer