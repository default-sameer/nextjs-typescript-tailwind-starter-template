import React from "react"
import ThemeChanger from "./theme-changer"
import { Sling as Hamburger } from 'hamburger-react'
import Link from "next/link"

const NavBar = () => {
    const [isOpen, setOpen] = React.useState(false)
  return (
    <>
    <div className="navbar bg-base-100">
        <div className="navbar-start">
            <a className="btn btn-ghost normal-case text-xl dark:text-indigo-500">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
            <li>
                <Link href={'/'}>
                <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href={'/about'}>
                <a>About</a>
                </Link>
            </li>
            </ul>
        </div>
        <div className="navbar-end">
            <ThemeChanger />
            <div className="lg:hidden">
                <label htmlFor="my-drawer-4"><Hamburger toggled={isOpen} toggle={setOpen} size={25} direction="left"/></label>
                {/* <label htmlFor="my-drawer-4"><Hamburger toggled={isOpen} toggle={setOpen} size={25} direction="left"/></label> */}
            </div>


        </div>
    </div>
    </>
  )
}

export default NavBar