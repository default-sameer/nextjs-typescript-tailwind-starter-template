import React from 'react';
import NavBar from './NavBar'
import Link from 'next/link'

interface Props {
    children: React.ReactNode
}

export default function Layout({ children }: Props) : JSX.Element {
    return (
        <>
            <NavBar />
            <div className="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <main>{children}</main>
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                    <ul className="flex menu pt-2 overflow-y-auto w-44 bg-base-100 h-auto text-base-content items-center">
                    <li>
                        <Link href={'/'}>
                        <a>Home</a>
                        </Link>
                    </li>
                    <div className="divider"></div> 
                    <li>
                        <Link href={'/about'}>
                        <a>About</a>
                        </Link>
                    </li>
                    </ul>
                </div>
            </div>
        </>
    )
}