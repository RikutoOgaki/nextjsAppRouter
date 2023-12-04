'use client'

import Image from 'next/image'
import styles from './page.module.scss'
import { Header } from '@/components/template/Header'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Header title='version14の勉強' />
      <h1>next.js</h1>
      <Link href={'/samples/01'}>sample01</Link>
      <Link href={'/samples/02'}>sample02</Link>
    </>
  )
}
