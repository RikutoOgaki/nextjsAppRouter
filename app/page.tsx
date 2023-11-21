import Link from 'next/link'
import style from './page.module.scss'
import { usePathname } from 'next/navigation'


export default function Home() {
  return (
    <>
      <h1 className={style.title}>Hello Home Page!</h1>
      <Link href={'/test'}>test</Link>
      <Link href={'/test/settings'}>setting</Link>
    </>
  )
}