import React from 'react'
import Image from 'next/image'
import Dropdown_Services from './Navigation'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { motion } from 'framer-motion'
import menu from '../public/images/menu.png';
import group from '../public/images/group.png';
import { useState } from 'react'

function Header() {

  const router = useRouter();
  const about = () => {
    router.push('about')
  }
  const home = () => {
    router.push('/')
  }
  const contact = () => {
    router.push('contact')
  }

  const [currentIcon, setCurrentIcon] = useState(menu);
  const handleClick = () => {
    setCurrentIcon(currentIcon === menu ? group : menu);
  };

  const [isListVisible, setListVisible] = useState(false)
  const [isSubListVisible, setSubListVisible] = useState(false)

  const fadeInUp = {
    start: {
      opacity: 0,
      x: 0,
      y: 300,
      z: 0,
      transition: {
        duration: 2
      }
    },
    end: {
      opacity: 1,
      y: 0,
    }
  }

  const navlinks = [
    {
      name: "Home",
      href: "/"
    },
    {
      name: "About Us",
      href: "/about"
    },
    {
      name: "Services +",
      href: "",
    },
    {
      name: "contact",
      href: "/contact",
    }

  ]

  const servicelinks = [
    {
      name: "Our Equipments",
      href: "/ourequipments"
    },
    {
      name: "Financial Services",
      href: "/financialservices"
    },
    {
      name: "HR Services",
      href: "/hrservices"
    },
    {
      name: "Legal Documents",
      href: "/legaldocuments"
    },
    {
      name: "Medical Documents",
      href: "/medicaldocuments"
    },
    {
      name: "Media and Publishing",
      href: "/mediaandpublishing"
    },
    {
      name: "Book Binding",
      href: "/bookbinding"
    }
  ]

  return (
    <div className='py-2 bg-[#CFDBEC] md:mx-32 rounded-[1rem] mt-3 mx-5'>
      <div className='flex flex-row items-center justify-between px-5'>
        <div>
          <img src='/images/dex_logo.png'
            alt='dexdata logo,dexdataprocessing'
            className='w-32' />
        </div>

        <div className='md:hidden flex flex-col'>
          <div onClick={handleClick} className='md:hidden'>
            <Image onClick={() => setListVisible(!isListVisible)} src={currentIcon} className='w-6 h-6' />
          </div>
          <div className='z-50'>{isListVisible && (
            <ul className='absolute right-0 left-0 bg-[#CFDBEC] text-black rounded-2xl pl-4 py-4 mx-5 mt-7'>
              <Link href={'/'} className='hover:text-primary cursor-pointer transform transition duration-300 ease out'>
                <li className="py-2">
                  Home
                </li>
              </Link>
              <Link href={'/about'}
                className='hover:text-primary cursor-pointer transform transition duration-300 ease out'>
                <li className="py-2">
                  About Us
                </li>
              </Link>
              <Link href={''} className=''>
                <li className='pt-2'
                  onClick={() => setSubListVisible(!isSubListVisible)}>
                  <button className={router.pathname === "/ourequipments" || router.pathname === "/medicaldocuments" || router.pathname === "/hrservices" || router.pathname === "/bookbinding" || router.pathname === "/legaldocuments" || router.pathname === "/financialservices" || router.pathname === "/mediaandpublishing" ? "text-[#4451C2]" : ""}>
                    Services +
                  </button>
                  <div className='py-1'>{isSubListVisible && (
                    <ul className='ml-5'>
                      {
                        servicelinks.map((s) => (
                          <Link href={s.href} key={s.name}>
                            <li className='hover:text-secondary cursor-pointer
                             transform transition duration-300 ease out py-[0.3rem]'><button className={router.pathname === s.href ? "text-secondary" : ""}>{s.name}</button></li>
                          </Link>
                        ))
                      }
                    </ul>
                  )}</div></li></Link>
              <Link
                href={'/contact'}
                className='hover:text-primary cursor-pointer transform transition duration-300 ease out'>
                <li className="py-2">
                  Contact</li>
              </Link>
            </ul>
          )}</div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className='md:grid grid-cols-4 justify-around font-semibold hidden'>
          <div onClick={home} className='cursor-pointer mx-5 hover:text-[#4054B2] transform transition duration-300 ease out active:text-blue-500'><p className={router.pathname === "/" ? "text-[#4451C2]" : ""}>Home</p></div>
          <div onClick={about} className='cursor-pointer mx-5 hover:text-[#4054B2] transform transition duration-300 ease out active:text-blue-500'><p className={router.pathname === "/about" ? "text-[#4451C2]" : ""}>About Us</p></div>

          <div className='cursor-pointer mx-5 hover:text-[#4054B2] transform transition duration-300 ease out relative inline-block group z-40 '>
            <p 
            className={router.pathname === "/ourequipments" || router.pathname === "/medicaldocuments" || router.pathname === "/hrservices" || router.pathname === "/bookbinding" || router.pathname === "/legaldocuments" || router.pathname === "/financialservices" || router.pathname === "/mediaandpublishing" ? "text-[#4451C2]" : ""}>
              <span className='py-7'>Services +</span></p>
            <motion.ul initial={fadeInUp.start} whileInView={fadeInUp.end}
              className="absolute hidden group-hover:inline-block bg-[#CFDBEC] text-black py-2 px-6 w-[14rem] text-md font-medium rounded-2xl mt-6">
              {
                servicelinks.map((s) => (
                  <Link href={s.href} key={s.name}>
                    <li className='py-3 hover:text-secondary transform transition duration-300 ease out'>
                      <button className={router.pathname === s.href ? "text-[#4451C2]" : ""}>{s.name}</button>
                    </li>
                  </Link>
                ))
              }
            </motion.ul>
          </div>
          <div onClick={contact} className='cursor-pointer mx-5 hover:text-[#4054B2] transform transition duration-300 ease out'><p className={router.pathname === "/contact" ? "text-[#4451C2]" : ""}>Contact</p></div>
        </motion.div>
      </div>
    </div>
  )
}

export default Header