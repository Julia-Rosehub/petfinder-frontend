import React, { useState } from 'react'
import { CgClose } from 'react-icons/cg'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import classNames from 'classnames'

import './MobileMenu.scss'
import { MobileMenuNavItem } from './MobileMenuNavItem'
import data from './../../../data/menuItemsData.json'

export const MobileMenu = ({ isVisibleMobileMenu, setVisibleMobileMenu }) => {
  const [visible, setVisible] = useState(false)

  return (
    <div className={classNames('mobileMenu', { open: isVisibleMobileMenu })}>
      <header className='mobileMenu-header'>
        <button
          type='button'
          aria-label='Close Resources Navigation Menu.'
          className='mobileMenu-header-btn'
          onClick={() => setVisibleMobileMenu(false)}
        >
          <CgClose />
        </button>
      </header>
      <div className='mobileMenu-body'>
        <ul className='mobileMenu-body-nav'>
          <MobileMenuNavItem
            data={data}
            setVisible={setVisible}
            visible={visible}
          />
          <li
            className='mobileMenu-body-nav-item
					mobileMenu-body-nav-item_search'
          >
            <form action='/' method='get' autoComplete='off'>
              <div className='field field_icon m-field_iconRight m-field_transparent m-field_noLabel'>
                <input
                  type='text'
                  className='field-input'
                  placeholder='Search Articles'
                />
                <button type='submit' className='field_icon-btn'>
                  <span className='icon icon_md m-icon_colorWhite'></span>
                  <span className='u-isVisuallyHidden'>Search</span>
                </button>
              </div>
            </form>
          </li>
        </ul>
      </div>
      <div className={classNames('mobileMenu-subNavSlider', { open: visible })}>
        <header className='mobileMenu-subNavSlider-header'>
          <button
            aria-label='Go back to the top level navigation.'
            className='mobileMenu-header-btn'
            onClick={() => setVisible(false)}
          >
            <MdOutlineArrowBackIosNew />
          </button>
          <button
            className='mobileMenu-header-btn'
            onClick={() => setVisibleMobileMenu(false)}
          >
            <CgClose />
          </button>
        </header>
      </div>
    </div>
  )
}
