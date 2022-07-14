/** @format */

import React, { useState } from 'react'
import classNames from 'classnames'

export const MobileMenuNavItem = ({ data, visible, setVisible }) => {
  const [activeItem, setActiveItem] = useState(0)

  return (
    <li className='mobileMenu-body-nav-item'>
      <button
        className='mobileMenu-body-nav-item-btn'
        onClick={() => setVisible(true)}
      >
        {data.map(({ title }, i) => (
          <li key={i} className='mobileMenu-body-nav-item'>
            <div
              className='mobileMenu-body-nav-item-btn'
              onClick={() => {
                setActiveItem(i)
              }}
            >
              {title}
            </div>
          </li>
        ))}
      </button>

      <ul className={classNames('mobileMenu-subNav', { open: visible })}>
        {data.map((item, i) => (
          <li key={i} className='mobileMenu-body-nav-item'>
            <button className='mobileMenu-body-nav-item-btn'>
              {activeItem === i
                ? data[i].subMenu.map(({ name }, j) => (
                    <div key={j} className='mobileMenu-subNav-item current'>
                      {name}
                    </div>
                  ))
                : null}
            </button>
          </li>
        ))}
      </ul>
    </li>
  )
}
