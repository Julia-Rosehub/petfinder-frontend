import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import { Search } from './../Search/Search'
import { HeroDropDown } from './HeroDropDown'
import { MobileMenu } from './MobileMenu/MobileMenu'

import { FaHeart, FaSearch } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import './Header.scss'

export const Header = () => {
  const [visibleSearchBar, setVisibleSearchBar] = useState(false)
  const [breedsRotateArrow, setBreedsRotateArrow] = useState(false)
  const [resourcesRotateArrow, setResourcesRotateArrow] = useState(true)
  const [isVisibleMobileMenu, setVisibleMobileMenu] = useState(false)

  return (
    <>
      <div className='site-main'>
        <div className='header'>
          <header className='header-inner'>
            <div className='header-inner-main'>
              <Link
                to='/#'
                className='header-inner-main-logo'
                aria-label='Petfinder'
              >
                <svg
                  role='img'
                  aria-label='Petfinder logo'
                  className={classNames({ open: visibleSearchBar })}
                  viewBox='0 0 379 108.5'
                >
                  <title>logo-consumer</title>
                  <path d='M370.2 30.4c-6.2 0-11 4.3-13.8 8.6.1-1.1.1-2 .1-2.8-.4-3.3-3.4-5.6-6.7-5.2-2.8.3-4.9 2.5-5.2 5.3 0 3.6.8 9.1.8 14.9 0 1 0 1.9-.1 2.8-5.5 5.6-12.3 10-21 10-6.6 0-9.6-2.5-10.9-6.1 15.3-.1 23.1-6.2 23.1-15.4 0-7.1-6.2-12.1-15-12.1-11.5 0-21 8.7-21 22.3-.1 2.8.4 5.6 1.4 8.3-1.3 1.8-3.3 2.8-5.5 2.7-4.3 0-5.9-3.4-5.9-21.8 0-8.9.8-18.6.8-27.1 0-3.3-2.6-6-5.9-6-3.3 0-6 2.6-6 5.9 0 4.8.4 10.1.6 18.2-2.1-1.3-5.2-2.4-10.1-2.4-15 0-23 11.7-23 21.9-.1 2.9.5 5.9 1.5 8.6-1.7 1.6-3.9 2.5-6.2 2.6-2.5 0-5.2-2.2-5.2-10.3 0-1.8.3-9 .3-11.7 0-7-5.1-11.2-12.6-11.2-7.1 0-11.9 4-14.8 8.6.1-1.1.1-2 .1-2.8-.4-3.3-3.4-5.6-6.7-5.2-2.8.3-4.9 2.5-5.2 5.3 0 3.6.8 9.1.8 14.9 0 1 0 1.9-.1 2.8-.5 4.5-7.2 9.5-13 9.5-7.5 0-10.4-4.3-10.4-11.3 0-3.2 2.5-5.5 2.5-9.1 0-4.2-3.3-7.6-7.5-7.7-4.2 0-7.6 3.3-7.7 7.5v.4c0 3.3 2.5 5.6 2.5 8.7 0 7-3.1 11.4-10.4 11.4-5.7 0-13.3-5.4-14-10.6v.2c8.1-7.7 22.3-22.9 22.3-36C163.1 7 157.7.1 148 .1c-12 0-18.2 8.8-18.2 17.9 0 3.8.5 15.9.5 32.8v2.5c-2.8 4.3-6.8 10.2-12.4 10.2-3 0-4.9-2.1-5.7-5.4-.9-3.6-.7-8.4-.7-13.5 0-1.8 0-3.7.1-5.5 3.8.1 7 .1 9.1.1 2.5.1 4.5-1.9 4.6-4.4 0-2.6-1.8-4.5-4.7-4.5-2.6 0-5.7.1-8.6.1.2-4.5.4-8.8.4-12.4.4-3.3-2-6.3-5.3-6.6-3.3-.4-6.3 2-6.6 5.3v1.4c0 1.1.3 6.6.5 12.2-1.2 0-2.3-.1-3.5-.1-2.4-.1-4.5 1.8-4.6 4.2v.3c.1 2.5 2.1 4.4 4.6 4.4 1 0 2.1-.1 3.8-.1v1c0 2-.3 6.7-.6 10.9-6.1 7-13.6 13.1-23.9 13.1-6.6 0-9.6-2.5-10.8-6.1 15.3-.1 23.1-6.2 23.1-15.4 0-7.1-6.2-12.1-15.1-12.1-11.5 0-21 8.7-21 22.3 0 2 .2 4 .7 6-4.2 2.4-8.8 4.2-13.6 5.2 2.9-3.8 4.5-8.5 4.5-13.2 0-14.3-9.9-20.2-20.1-20.2-4.6 0-9.1 1.4-12.7 4.2-.8-2.6-3.2-4.3-5.9-4.2C2.6 30.4 0 33 0 36.3c0 3.6.8 13.4.8 26.4S0 84.3 0 89.3c0 3.5 1.9 5.9 5.1 5.9 3 0 6.9-2.4 6.9-5.9 0-1.3-.5-9.4-.8-19.6 4.9 2.2 10.5 2.6 18 2.6 12.3 0 22.3-4.5 27.6-7.4 3.7 4.8 10.1 7.4 19 7.4 11.1 0 19.8-6.4 24.9-11.2 1.2 7.6 6.5 11.3 15.3 11.3 6.6 0 11.3-4.1 14.3-7.8-.2 11.8-.7 21.4-.7 26.6 0 14.1 7.9 17.2 13.7 17.2 11.7 0 17.9-9.1 17.9-19.4-.1-6.1-2.1-11.9-5.8-16.7 5.3-.1 10.7-1.3 14.9-7.4 4.2 6.6 11.2 7.4 15.3 7.4 5 0 9-2.1 12.4-5.4.5 3.3 3.5 5.6 6.8 5.1 2.8-.4 4.9-2.7 5.1-5.5 0-1.1-.4-5.9-.6-10.4 0-6.1 6.4-16.8 12.1-16.8 2.9 0 4.7 2.5 4.7 6 0 2.7-.3 8-.3 11.5 0 8.3 2.1 15.6 13.8 15.6 4.8-.1 9.4-1.9 13-5.2 4 3.5 9.1 5.3 14.4 5.2 5.9 0 11.6-2.4 15.7-6.8 1.4 3.4 4.6 6.7 11.6 6.7 4.6.1 8.9-1.8 11.9-5.3 3.8 3.4 9.6 5.3 17.1 5.3 8.9 0 16.2-4.1 21.4-8.2 0 .8-.1 1.6-.1 2.3.4 3.3 3.3 5.7 6.6 5.3 2.8-.3 5-2.5 5.3-5.2 0-1.1-.4-6-.6-10.5.1-7.2 7.4-15.9 11-15.9 2.4 0 1.9 3.3 6.3 3.3 3.2 0 5.7-2.6 5.7-5.8 0-2.7-2-7.2-8.7-7.2zm-228.6-12c0-5.1 3-8.9 6.2-8.9 3.6 0 5.1 3.6 5.1 7.4 0 9.4-6.8 18.3-11.8 24.1.1-8.6.5-20.8.5-22.6zM20.8 63.5c-3.6.1-7-1.3-9.6-3.8 0-2.6.1-5 .1-7.3v-.3c0-5.7 4.2-13.1 12-13.1 4.7 0 9.4 3.7 9.4 11.8 0 9-6.3 12.7-11.9 12.7zm53.1-25.6c2.8-.2 5.2 2 5.4 4.8v.3c0 4.7-3 7.7-14.2 7.8 0-10 5.5-12.9 8.8-12.9zm72.7 61.4c-3.2 0-4.9-3-4.9-7.8 0-.5-.2-11.6-.4-22.3 3.3 4.2 10.3 11.5 10.3 21.2-.1 6.5-2.7 8.9-5 8.9zm133.6-48.4c0 5.7-4.3 13.1-12 13.1-4.7 0-9.4-3.7-9.4-11.8 0-9.1 6.3-13.2 12-13.2 3.6-.1 7 1.4 9.4 4.1v7.8zm41.2-13c2.9-.1 5.3 2.1 5.4 5v.1c0 4.5-3 7.6-14.2 7.8-.1-10 5.4-12.9 8.8-12.9zm47.8 31c.1 1.9-1.4 3.6-3.3 3.7h-.3c-1.9.1-3.5-1.4-3.6-3.3v-.4c0-2 1.6-3.6 3.6-3.6s3.6 1.6 3.6 3.6zm-6.5 0c-.1 1.5 1 2.9 2.6 3h.3c1.5.1 2.8-1.1 2.9-2.6v-.4c.1-1.6-1.1-2.9-2.6-3h-.2c-1.5-.1-2.8 1.1-2.9 2.6-.1.2-.1.3-.1.4zm3.6.5c.6-.2 1-.8.9-1.5-.1-.6-.7-.9-1.2-.9h-1.7v3.8h.7v-1.4h.6l1.1 1.3h.8v-.1l-1.2-1.2zm-.4-1.7c.3 0 .6.2.7.5 0 .3-.2.6-.5.7h-1.2v-1.2h1z'></path>
                </svg>
              </Link>
              <button
                type='button'
                className={classNames('header-inner-main-btn', {
                  'u-isOpen': breedsRotateArrow
                })}
                aria-expanded='false'
                onClick={() =>
                  resourcesRotateArrow === false && breedsRotateArrow === false
                    ? setBreedsRotateArrow(true)
                    : resourcesRotateArrow === false &&
                      breedsRotateArrow === true
                    ? setBreedsRotateArrow(false) &&
                      setResourcesRotateArrow(true)
                    : null
                }
              >
                Breeds
              </button>
              <button
                type='button'
                className={classNames('header-inner-main-btn', {
                  'u-isOpen': resourcesRotateArrow
                })}
                aria-expanded='false'
                onClick={() =>
                  breedsRotateArrow === false && resourcesRotateArrow === true
                    ? setResourcesRotateArrow(false)
                    : breedsRotateArrow === true &&
                      resourcesRotateArrow === false
                    ? setBreedsRotateArrow(false) &&
                      setResourcesRotateArrow(true)
                    : setResourcesRotateArrow(true)
                }
              >
                Resources
              </button>
              <button
                type='button'
                aria-label='Search'
                className='header-inner-search-btn'
                onClick={() => setVisibleSearchBar(true)}
              >
                <FaSearch size={25} />
              </button>

              <Search
                makeVisibleSearchBar={() => setVisibleSearchBar(false)}
                visibleSearchBar={visibleSearchBar}
              />
            </div>
            <button
              type='button'
              aria-label='Favorites'
              className='header-inner-favorites-btn'
            >
              <FaHeart />
            </button>
            <button
              className='header-inner-main-resourcesBtn'
              onClick={() => setVisibleMobileMenu(true)}
            >
              <GiHamburgerMenu />
            </button>
            <div className='header-inner-profile'>
              <div className='u-flex'>
                <button
                  id='SignUp_Btn'
                  type='button'
                  aria-label='Sign Up'
                  className='header-inner-profile-btn u-flex'
                >
                  Sign Up
                </button>
              </div>
              <div className='u-flex'>
                <button
                  id='Login_Btn'
                  type='button'
                  aria-label='Log In'
                  className='header-inner-profile-btn u-flex'
                >
                  Log In
                </button>
              </div>
            </div>
          </header>
        </div>
      </div>
      <HeroDropDown
        breedsRotateArrow={breedsRotateArrow}
        resourcesRotateArrow={resourcesRotateArrow}
      />
      <MobileMenu
        isVisibleMobileMenu={isVisibleMobileMenu}
        setVisibleMobileMenu={setVisibleMobileMenu}
      />
    </>
  )
}