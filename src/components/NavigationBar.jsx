import { useState } from 'react'
import { NavLink } from "react-router-dom"
import { SocialGithub, SocialX, SocialLinkedin, SocialFacebook } from 'src/components/SocialIcons';
import FunnyJoke from 'src/components/FunnyJoke';

const rootStyles = "fixed top-0 navbar-y w-full min-w-[400px] backdrop-blur-sm text-unamed-100 bg-gradient-to-r from-unamed-500/60 to to-unamed-200/50";
const containerStyles = "page-block flex flex-row gap-3 py-4";
const socialContainerStyles = "flex flex-row-reverse gap-2 ml-auto flex flex-wrap overflow-hidden h-6";
const linkStyles = "mr-auto min-w-fit whitespace-nowrap font-semibold hover:text-accentl";
const activeLinkStyles = linkStyles + " text-accent drop-shadow-[0_0px_4px_rgba(255,202,194,0.25)]";
const iconStyles = "inline align-text-top h-6 -my-0.5 min-w-fit";
const socialLinkStyles = linkStyles + " !mr-0 ml-auto";
const socialIconStyles = iconStyles + " max-w-6 w-full";

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
            <NavLink to='/contact' className={({ isActive }) => isActive ? activeLinkStyles : linkStyles}>
              Contact
            </NavLink>
            <a href='https://github.com/SirJeremy' target='_blank' rel='noopener noreferrer' className={linkStyles}>
                <SocialGithub className={iconStyles}/>
                GitHub
            </a>

            <div className={socialContainerStyles}>
              <a href='https://www.linkedin.com/in/sirjeremy/' target='_blank' rel='noopener noreferrer' className={socialLinkStyles}>
                <span className='sr-only'>Linked-In</span>
                <SocialLinkedin className={socialIconStyles}/>
              </a>
              <FunnyJoke className={socialLinkStyles}>
                <span className='sr-only'>Facebook</span>
                <SocialFacebook className={socialIconStyles}/>
              </FunnyJoke>
              <FunnyJoke className={socialLinkStyles}>
                <span className='sr-only'>X, formally known as Twitter</span>
                <SocialX className={socialIconStyles + " p-0.5"}/>
              </FunnyJoke>
            </div>
        </div>
    </div>
  )
}

export default NavigationBar;
