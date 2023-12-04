'use client'

import Image from 'next/image'
import styles from './page.module.scss'
import { Header } from '@/components/template/Header'

export default function Home() {
  return (
    <>
      <Header title='version14の勉強' />
      <h1>next.js</h1>
    </>
  )
}
