"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import style from "../Navbar.module.css"

const allLinks = [
  {
    title: "Home",
    path: "/"
  },
  {
    title: "About",
    path: "/about"
  },
  {
    title: "Contact",
    path: "/contact"
  },
  {
    title: "Blog",
    path: "/blog"
  },
]

const Links = () => {
  const pathName = usePathname();

  const [open, setOpen] = useState(false);
  

  // TEMP
  const session = true
  const isAdmin = false

  return (
    <div className={style["links-container"]}>
      <div className={style.links}>
        {
          allLinks.map((link) => (
            <Link key={link.title} href={link.path} className={`${style["nav-link"]} ${pathName === link.path && style.active}`}>
              {link.title}
            </Link>
          ))
        }
        {
          session ? (
            <>
              {isAdmin && 
                <Link href="/admin" className={`${style["nav-link"]} ${pathName === "/admin" && style.active}`}>
                  Admin
                </Link>
              }
              <button className={style["logout-button"]}>Logout</button>
            </>
          ) : (
            <Link href="/login" className={`${style["nav-link"]} ${pathName === "/login" && style.active}`}>Login</Link>
          )
        }
      </div>

      <button className={style["menu-button"]} onClick={() => setOpen(prev => !prev)}>Menu</button>
      {
        open && <div className={style["mobile-links"]}>
        {
          allLinks.map((link) => (
            <Link key={link.title} href={link.path} className={`${style["nav-link"]} ${pathName === link.path && style.active}`}>
              {link.title}
            </Link>
          ))
        }
        </div>
      }
    </div>
  )
}

export default Links