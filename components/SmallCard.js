import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const SmallCard = () => {
    return (
        <div className='md:mx-40 pt-12 mx-5'>

            <div className='grid md:grid-cols-3 grid-cols-1 gap-x-8'>

                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}
                    className='bg-[#F3F3F3] px-8 py-5 rounded-2xl shadow-primary shadow-md  mb-12'>
                    <div className='flex flex-row items-center'>
                        <div>
                            <img src='/images/lock.svg'
                                alt=" "
                                className='w-8 h-10' />
                        </div>
                        <div className='text-xl font-bold pl-5'>Document Security</div>
                    </div>
                    <div className='text-lg text-[#3A3A3A]'>
                        <p><span className='text-secondary'>DEX DATA</span> Process and workflow gives you assured safety and security of your documents.</p>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}
                 className='bg-[#F3F3F3] px-8 py-5 rounded-2xl shadow-primary shadow-md mb-12'>
                    <div className='flex flex-row items-center'>
                        <div><img src='/images/folder-cross.svg' className='w-8 h-10' /></div>
                        <div className='text-xl font-bold pl-5'>Document Shredding</div>
                    </div>
                    <div className='text-lg text-[#3A3A3A]'>
                        <p><span className='text-secondary'>DEX DATA</span> Offers services of bulk document shredding for any type of documents.</p>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} 
                className='bg-[#F3F3F3] px-8 py-5 rounded-2xl shadow-primary shadow-md mb-12'>
                    <div className='flex flex-row items-center'>
                        <div><img src='/images/folder.svg' className='w-8 h-10' /></div>
                        <div className='text-xl font-bold pl-5'>Document Management</div>
                    </div>
                    <div className='text-lg text-[#3A3A3A]'>
                        <p><span className='text-secondary'>DEX DATA</span> Provides enterprises with the capability to digitally capture and convert documents and files.</p>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} 
                className='bg-[#F3F3F3] px-8 py-5 rounded-2xl shadow-primary shadow-md mb-12'>
                    <div className='flex flex-row items-center'>
                        <div><img src='/images/archive-slash.svg' className='w-8 h-10' /></div>
                        <div className='text-xl font-bold pl-5'>Archiving & Indexing</div>
                    </div>
                    <div className='text-lg text-[#3A3A3A]'>
                        <p><span className='text-secondary'>DEX DATA</span> Organizes and indexes your data according to your specific business needs.</p>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} 
                className='bg-[#F3F3F3] px-8 py-5 rounded-2xl shadow-primary shadow-md mb-12'>
                    <div className='flex flex-row items-center'>
                        <div><img src='/images/lock.svg' className='w-8 h-10' /></div>
                        <div className='text-xl font-bold pl-5'>Document Security</div>
                    </div>
                    <div className='text-lg text-[#3A3A3A]'>
                        <p><span className='text-secondary'>DEX DATA</span> Process and workflow gives you assured safety and security of your documents.</p>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}
                 className='bg-[#F3F3F3] px-8 py-5 rounded-2xl shadow-primary shadow-md mb-12'>
                    <div className='flex flex-row items-center'>
                        <div><img src='/images/courthouse.svg' className='w-8 h-10' /></div>
                        <div className='text-xl font-bold pl-5'>On-Site Scanning</div>
                    </div>
                    <div className='text-lg text-[#3A3A3A]'>
                        <p><span className='text-secondary'>DEX DATA</span> Digitizes your documents without them leaving your office.</p>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} 
                className='bg-[#F3F3F3] px-8 py-5 rounded-2xl shadow-primary shadow-md mb-12'>
                    <div className='flex flex-row items-center'>
                        <div><img src='/images/empty-wallet.svg' className='w-8 h-10' /></div>
                        <div className='text-xl font-bold pl-5'>Cost Effective Solutions</div>
                    </div>
                    <div className='text-lg text-[#3A3A3A]'>
                        <p><span className='text-secondary'>DEX DATA</span> Provides top document scanning and management solutions under one virtual roof.</p>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} 
                className='bg-[#F3F3F3] px-8 py-5 rounded-2xl shadow-primary shadow-md mb-12'>
                    <div className='flex flex-row items-center'>
                        <div><img src='/images/lock.svg' className='w-8 h-10' /></div>
                        <div className='text-xl font-bold pl-5'>100% Assured Accuracy</div>
                    </div>
                    <div className='text-lg text-[#3A3A3A]'>
                        <p><span className='text-secondary'>DEX DATA</span> Uses double-key entries and proprietary methodologies for processing precision.</p>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} 
                className='bg-[#F3F3F3] px-8 py-5 rounded-2xl shadow-primary shadow-md mb-12'>
                    <div className='flex flex-row items-center'>
                        <div><img src='/images/smileys.svg' className='w-8 h-10' /></div>
                        <div className='text-xl font-bold pl-5'>24/7 Live Support</div>
                    </div>
                    <div className='text-lg text-[#3A3A3A]'>
                        <p><span className='text-secondary'>DEX DATA</span> Is here 24/7 for your support and help with your queries !</p>
                    </div>
                </motion.div>


            </div>
        </div>
    )
}

export default SmallCard