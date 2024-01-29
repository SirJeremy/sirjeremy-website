import { useState } from 'react'
import { NavLink } from "react-router-dom"
import { SocialGithub, SocialX, SocialLinkedin, SocialFacebook } from 'src/components/SocialIcons';
import FunnyJoke from 'src/components/FunnyJoke';

import githubLogo from 'src/assets/github-mark-white.svg';

const rootStyles = "sticky top-0 navbar-y w-full min-w-[400px] backdrop-blur-sm text-unamed-100 bg-gradient-to-r from-unamed-500/60 to to-unamed-200/50";
const containerStyles = "page-block flex flex-row gap-10 py-4";
const socialContainerStyles = "flex flex-row gap-2";
const linkStyles = "whitespace-nowrap font-semibold hover:text-accentl";
const activeLinkStyles = "whitespace-nowrap font-semibold text-accent drop-shadow-[0_0px_4px_rgba(255,202,194,0.25)]";
const iconStyles = "inline align-text-top w-6 -my-0.5";

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
                <SocialGithub className={iconStyles}/>
                GitHub
            </a>

            <div className={socialContainerStyles}>
              <a href='https://www.linkedin.com/in/sirjeremy/' target='_blank' rel='noopener noreferrer' className={linkStyles}>
                <span className='sr-only'>Linked-In</span>
                <SocialLinkedin className={iconStyles}/>
              </a>
              <FunnyJoke className={linkStyles}>
                <span className='sr-only'>Facebook</span>
                <SocialFacebook className={iconStyles}/>
              </FunnyJoke>
              <FunnyJoke className={linkStyles}>
                <span className='sr-only'>X, formally known as Twitter</span>
                <SocialX className={iconStyles + " p-0.5"}/>
              </FunnyJoke>
            </div>
        </div>
    </div>
  )
}

export default NavigationBar;
