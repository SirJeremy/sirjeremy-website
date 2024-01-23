import { useState } from 'react'
import { NavLink } from "react-router-dom"

import githubLogo from 'src/assets/github-mark-white.svg';

const rootStyles = "sticky top-0 navbar-y w-full min-w-[400px] backdrop-blur-sm text-unamed-100 bg-gradient-to-r from-unamed-500/60 to to-unamed-200/50";
const containerStyles = "page-block flex flex-row gap-10 py-4";
const linkStyles = "whitespace-nowrap font-semibold hover:text-accentl";
const activeLinkStyles = "whitespace-nowrap font-semibold text-accent drop-shadow-[0_0px_4px_rgba(255,202,194,0.25)]";
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
