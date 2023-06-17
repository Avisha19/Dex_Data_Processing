import React, { useRef, useState, FormEvent } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from "next/head";

type Props = {}

type Inputs = {
    name: String;
    email: String;
    subject: String;
    message: String;
    phone:String;
};

export default function ContactForm({ }: Props) {
    const { register,
        handleSubmit,
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href = `mailto:satish@dexdatapro.in?subject=Enquiry&body=
        phone Number: ${formData.phone}${" "}
        Client Name : ${formData.name}${" "}
        Message : ${formData.message}`;
    };


    return (
        <div className="font-main">
            <Head>
                <title>Contact | Dex Data Processing</title>
                <meta name="description" content='Call Us:+91-8879631505 +91-7977017717'/>
                <meta property='og:image' content='https://www.dexdatapro.in/images/dex_logo.png'/>
                <link rel="icon" type="image/png" sizes="32x32" href="/images/dex_icon.png" />
            </Head>
            <Header/>
            <div className="md:mx-40 md:flex flex-row">
                <div className="md:w-1/2 flex justify-center items-center">
                     <img src="/images/dex7.svg" className="h-[500px] w-[500px]"/>
                </div> 
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    id="form"
                    className="mt-6 md:mt-20 flex flex-col space-y-7 md:w-1/2 mx-10"
                >
                    <label className="text-sm lg:text-base" htmlFor="name">
                        Name*
                        <span className="flex flex-col">
                            <input
                                required
                                className="bg-[#FAFAFA] py-2 outline-none placeholder-[#9999A5] text-sm focus:border-primary mt-2 border border-gray-200 items-center pl-4 rounded-xl"
                                type="text"
                                // name="name"
                                placeholder="Your Name"
                                {...register('name')}
                            />
                        </span>
                    </label>

                    <label className="text-sm lg:text-base" htmlFor="email">
                        Email*
                        <span className="flex flex-col">
                            <input
                                required
                                className="bg-[#FAFAFA] py-2 outline-none placeholder-[#9999A5] text-sm focus:border-primary mt-2 border border-gray-200 items-center pl-4 rounded-xl"
                                type="email"
                                // name="email"
                                placeholder="example@email.com"
                                {...register('email')}
                            />
                        </span>
                    </label>

                    <label className="text-sm lg:text-base" htmlFor="phone">
                        Contact*
                        <span className="flex flex-col">

                            <input
                                required
                                className="bg-[#FAFAFA] py-2 outline-none placeholder-[#9999A5] text-sm focus:border-primary mt-2 border border-gray-200 items-center pl-4 rounded-xl"
                                type="text"
                                // name="phone"
                                placeholder="Your contact number"
                                {...register('phone')}
                            />
                        </span>
                    </label>
                    
                    <label className="text-sm lg:text-base" htmlFor="message">
                        Message*
                        <span className="flex flex-col">
                            <textarea
                                required
                                className="bg-[#F8F8F8] py-2 outline-none placeholder-[#9999A5] text-sm focus:bg-[#EBEBEB] mt-2 items-center pl-4 rounded-xl h-20"
                                // name="message"
                                placeholder="Your Message Here ..."
                                {...register('message')}
                            />
                        </span>
                    </label>

                    <button
                        className="bg-[#0050C3] text-white mt-4 lg:mt-2 text-xs w-max px-6 py-3 rounded-3xl hover:shadow-xl  
                    hover:scale-110 transform transition duration-300 ease out active:scale-90"
                        type="submit"
                    >Send Message
                    </button>
                </form>
            </div>
            <p className="md:mx-40 text-[#7A7A7A] mt-10 mb-16 mx-10">
                Call Us:
                <p className="pt-1">+91-8879631505</p>
                <p className="pt-1">+91-7977017717</p>
            </p>
            <Footer/>
        </div>
    )
}