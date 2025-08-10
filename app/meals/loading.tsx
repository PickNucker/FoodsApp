import React from 'react'
import style from './loading.module.css'
import classes from './page.module.css'
import Link from 'next/link'

type Props = {}

const Loading = (props: Props) => {
  return (
    <>
      <header className={classes.header}>
        <h1 className={classes.h1}>
          Delicious meals <span className={classes.highlight}>for U</span>
        </h1>
        <h2>
          <Link href="/">Home</Link>
        </h2>
        <p className={classes.cta}>
          {/* <Link href="/meals/mealsDynamicRoutes">Meals Dynamic Routes</Link>
          <br />
          <Link href="/community">Community</Link> <br /> */}
          <Link href="/meals/share">Share Your Favourite Recipe</Link>
        </p>
      </header>
      <div className={style.loading}>Feting meals</div>
    </>
  )
}

export default Loading;