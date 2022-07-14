import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import classNames from 'classnames'

import IconDog from './../../images/iconDog.svg'
import IconCat from './../../images/iconCat.svg'

import data from './../../data/menuItemsData.json'

export const HeroDropDown = ({ breedsRotateArrow, resourcesRotateArrow }) => {
  const [activeItemId, setActiveItemId] = useState(null)

  return (
    <>
      <div
        className={classNames('header-dropdown-breeds-menu', {
          'u-isOpen': breedsRotateArrow
        })}
      >
        <ul className='header-dropdown-breeds-menu-list'>
          <li className='header-dropdown-breeds-menu-list-item'>
            <NavLink to='/#' className='icon-dog'>
              <img src={IconDog} alt='Icon Dog' />
              <span className='item-dog-title'>Dog Breeds</span>
            </NavLink>
          </li>
          <li className='header-dropdown-breeds-menu-list-item'>
            <NavLink to='/#' className='icon-cat'>
              <img src={IconCat} alt='Icon Cat' />
              <span className='item-cat-title'>Cat Breeds</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div
        className={classNames('header-dropdown-resources-menu', {
          'u-isOpen': resourcesRotateArrow
        })}
      >
        <ul className='desktopMenu-root-list'>
          {data.slice(1).map((item, i) => (
            <li
              key={i}
              className='desktopMenu-root-item'
              onMouseEnter={() => {
                setActiveItemId(item.id)
              }}
              onMouseLeave={() => {
                setActiveItemId(null)
              }}
            >
              <Link
                to={item.path || '/#'}
                className='desktopMenu-root-item-link'
              >
                {item ? item.title : null}
              </Link>

              {item.subMenu ? (
                <ul
                  className={
                    activeItemId === i + 2
                      ? 'desktopMenu-sub-list active'
                      : 'desktopMenu-sub-list'
                  }
                >
                  {item.subMenu.map(({ name, path }, i) => (
                    <li key={i} className='desktopMenu-sub-item'>
                      <Link
                        to={item.path}
                        className='desktopMenu-sub-item-link'
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
