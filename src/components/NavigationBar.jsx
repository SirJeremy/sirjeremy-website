import { useState } from 'react'
import { NavLink } from "react-router-dom"

import githubLogo from 'assets/github-mark-white.svg';

const rootStyles = "sticky top-0 navbar-y w-full bg-slate-800/50 text-slate-100 backdrop-blur-sm";
const containerStyles = "page-block flex flex-row gap-10 py-4 ";
const linkStyles = "text-slate-100 hover:text-slate-400";
const activeLinkStyles = "text-blue-300";
const iconStyles = "inline w-4 h-4 m-1 align-top ";

function NavigationBar() {
  return (
    <div className={rootStyles}>
        <div className={containerStyles}>
            <NavLink to='/' className={({ isActive }) => isActive ? activeLinkStyles : linkStyles}>
              Portfolio
            </NavLink>
            <NavLink to='/profile' className={({ isActive }) => isActive ? activeLinkStyles : linkStyles}>
              About Me
            </NavLink>
            <a href='https://github.com/SirJeremy' target='_blank' rel='noopener noreferrer' className={linkStyles}>
                <img src={githubLogo} alt='GitHub Logo' className={iconStyles}/>
                GitHub
            </a>
        </div>
    </div>
  )
}

export default NavigationBar;
