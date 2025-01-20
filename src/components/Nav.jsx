import React from 'react'
import {headerLogo} from '../assets/images'
import {hamburger } from "../assets/icons"
import {navLinks} from '../constants'

function Nav() {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
            <img src={headerLogo} alt="logo" width={130} height={29}/>
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((link, index) => (
                    <li>
                        <a key={index} href={link.href} className='font-montserrat leading-normal text-lg text-slate-gray'>{link.label}</a>
                    </li>
                ))}
            </ul>
            <ul className=' flex max-lg:hidden gap-16'>
                <li>
                    <a href="/" className='font-montserrat leading-normal text-lg text-slate-500'>Login</a>
                </li>
                <li>
                    <a href="/" className='font-montserrat leading-normal text-lg text-slate-500'>Sign Up</a>
                </li>
            </ul>
            <img src={hamburger} alt="hamburger" width={25} height={25} className='hidden max-lg:block'></img>
        </nav>
    </header>
  )
}

export default Nav