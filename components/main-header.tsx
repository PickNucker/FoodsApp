import Link from 'next/link'
import React from 'react'
import style from './main-header.module.css'
import logo from '@/public/logo.png'
import Image from 'next/image'

const MainHeader = () => {
  return (
    <header className={style.header}>
        <Link className={style.logo} href="/">
            <Image src={logo} alt="A plate fit food on it" priority/>
            NextLevel Food
        </Link>

        <nav className={style.nav}>
            <ul>
                <li>
                    <Link href="/meals">Browse Meals</Link>
                </li>
                <li>
                    <Link href="/community">Foodies Community</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default MainHeader