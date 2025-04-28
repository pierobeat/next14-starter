import React from 'react'
import Links from './links/Links'
import style from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div id={style["nav-container"]}>
      <div className={style.logo}>Logo</div>
      <Links />
    </div>
  )
}

export default Navbar