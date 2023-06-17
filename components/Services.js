import React from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'
import { useRouter } from 'next/router'

function Services() {

    const router = useRouter()

    const servicelinks = [
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
        },
        {
            name: "Our Equipments",
            href: "/ourequipments"
        }
    ]

  return (
    <div>
        <div className='ml-10 mt-20'>
                <p className='text-2xl font-medium mb-4'>Services We Provide:</p>
                <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}} className='flex flex-col font-semibold text-[#7A7A7A]'>
                  {
                    servicelinks.map((s) => (
                        <Link href={s.href} key={s.name}>
                            <p className='hover:text-[#0050C3] transform transition duration-300 ease out text-left mb-5'>
                                <button className={router.pathname === s.href ? "text-[#4451C2]" : ""}>{s.name}</button>
                            </p>
                        </Link>
                    ))
                  }
                </motion.div>
            </div>
    </div>
  )
}

export default Services