import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header';
import Hero from '@/components/Hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Afrah's Studio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          {/* MUST CHANGE TO CLIENT'S ADOBE ACCOUNT EMBEDDED LINK */}
          @import url("https://use.typekit.net/ppc6pkj.css");
        </style>
      </Head>

      <div className='md:hidden'>
        <Header/>
      </div>

      <Hero/>
    </>
  )
}
