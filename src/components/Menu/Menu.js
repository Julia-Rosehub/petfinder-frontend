import React, { useState } from 'react'
import classNames from 'classnames'
import { FaTelegram } from 'react-icons/fa'

import { Recommendations } from '../Recommendations/Recommendations'
import { StoryGuide } from './../StoryGuide/StoryGuide'
import { Flush } from './../Flush/Flush'
import { LocationNavigator } from './LocationNavigator'

import './Menu.scss'
import './../StoryGuide/StoryGuide.scss'

export const Menu = () => {
  const [showingLocationPopup, setShowingLocationPopup] = useState(false)
  const [isNavigator, setIsNavigator] = useState(false)
  const [inputValue, setInputValue] = useState()
  const [error, setError] = useState('')

  const onClick = () => {
    const { geolocation } = navigator

    if (!geolocation) {
      setError('Geolocation is not supported.')
      return
    }
    setIsNavigator(true)
  }

  return (
    <>
      <div className='u-pullUpLarge u-vr8x'>
        <div className='findAPetMenu'>
          <div className='findAPetMenu-inner'>
            <div className='findAPetMenu-locationInputContainer'>
              <div className='u-posRel'>
                <div
                  className='comboBox comboBox_findAPet'
                  aria-expanded='false'
                >
                  <input
                    value={
                      inputValue
                        ? inputValue.latitude + '-' + inputValue.longitude
                        : ''
                    }
                    id='FindAPetGeoSearch'
                    name='FindAPetGeoSearch'
                    className='comboBox-input'
                    placeholder='Enter City, State, or ZIP'
                    onClick={() => setShowingLocationPopup(true)}
                    onBlur={() => setShowingLocationPopup(false)}
                    readOnly
                  />
                </div>
                <ul
                  className={classNames('listBox listBox_findAPet', {
                    listBox_visible: showingLocationPopup
                  })}
                >
                  <span onClick={onClick}>
                    <FaTelegram /> Use current location
                  </span>
                </ul>
              </div>
            </div>
            <button className='findAPetMenu-button findAPetMenu-button_dogs'>
              <span className='findAPetMenu-buttonIcon'>
                <svg role='img'>
                  <use
                    xmlnslink='http://www.w3.org/1999/xlink'
                    xlinkHref='#icon-dog'
                  >
                    <svg id='icon-dog' viewBox='0 0 101.8 87.7'>
                      <path d='M100.1 27.8C81 27.8 81 44.5 81 50v26.8c0 2.9-2.3 5.2-5.2 5.2h-.6c-2.9 0-5.2-2.3-5.2-5.2v-8.5c0-2.6-1.2-5.2-3.1-6.8-1.6-1.4-3.6-2-5.7-1.7l-18.1 2.7c-5.1.9-8.2 4.1-8.2 8.5v5.9c0 2.9-2.3 5.2-5.2 5.2h-.6c-2.9 0-5.2-2.3-5.2-5.2V35.7H25c.9 0 1.7-.7 1.7-1.7 0-.9-.7-1.7-1.7-1.7H14.1c-6.6 0-9.2-6.4-9.4-6.7-1.7-4.1-1.5-5.7-1.4-6.1.4-.3 2-1.2 7.1-2.2 1.7-.4 3-1.3 4-2.9 1.2-1.7 2.5-3.6 2.8-3.9C19.1 8.3 21 7.4 24.9 7c0 0 3.9-.3 7.6 0h.5l7.1-1.4c1.5-.3 1.7-.1 2.5.9l.1.2c2 2.5 5.7 8.1 6.9 13.3-.4.5-2.4 1.4-4.9 1-2.1-.3-5.8-1.6-7.1-7.1-.2-.9-1.1-1.4-2-1.2s-1.4 1.1-1.2 2c1.4 5.8 5.1 8.7 9 9.5v3.4c0 5.6 3.2 8.9 8.9 8.9h9.2c.9 0 1.7-.7 1.7-1.7 0-.9-.7-1.7-1.7-1.7h-9.2c-3.8 0-5.5-1.7-5.5-5.5v-3.1c.6 0 1.2-.1 1.7-.2 3.2-.7 5-2.6 4.5-4.7-1.3-5.4-5-11.4-7.7-14.8l-.1-.1C44 3.2 42.8 2 39.5 2.6L32.7 4c-4-.4-7.8 0-8 0-4.8.5-7.5 1.8-9.9 4.6-.4.5-2.4 3.3-3 4.1-.6.9-1.2 1.3-2 1.5-4.9 1-7.9 2.2-8.9 3.3-.9.9-1.7 3.2.8 9.5.1.4 3.6 8.7 12.4 8.7h6.4v41.1c0 4.7 3.8 8.5 8.5 8.5h.6c4.7 0 8.5-3.8 8.5-8.5v-5.9c0-3.7 3.4-4.9 5.4-5.2l18-2.6c1.3-.2 2.4.4 3 .9 1.2 1 1.9 2.7 1.9 4.3v8.5c0 4.7 3.8 8.5 8.5 8.5h.6c4.7 0 8.5-3.8 8.5-8.5V50c0-8.8 1.8-18.9 15.8-18.9.9 0 1.7-.7 1.7-1.7s-.4-1.6-1.4-1.6z'></path>
                    </svg>
                  </use>
                </svg>
              </span>
              <span>Find a dog</span>
            </button>
            <button className='findAPetMenu-button findAPetMenu-button_cats'>
              <span className='findAPetMenu-buttonIcon'>
                <svg role='img'>
                  <use
                    xmlnslink='http://www.w3.org/1999/xlink'
                    xlinkHref='#icon-cat'
                  >
                    <svg id='icon-cat' viewBox='0 0 101.8 87.7'>
                      <path d='M100.1 27.8C81 27.8 81 44.5 81 50v26.8c0 2.9-2.3 5.2-5.2 5.2h-.6c-2.9 0-5.2-2.3-5.2-5.2v-8.5c0-2.6-1.2-5.2-3.1-6.8-1.6-1.4-3.6-2-5.7-1.7l-18.1 2.7c-5.1.9-8.2 4.1-8.2 8.5v5.9c0 2.9-2.3 5.2-5.2 5.2h-.6c-2.9 0-5.2-2.3-5.2-5.2V35.7H25c.9 0 1.7-.7 1.7-1.7 0-.9-.7-1.7-1.7-1.7H14.1c-6.6 0-9.2-6.4-9.4-6.7-1.7-4.1-1.5-5.7-1.4-6.1.4-.3 2-1.2 7.1-2.2 1.7-.4 3-1.3 4-2.9 1.2-1.7 2.5-3.6 2.8-3.9C19.1 8.3 21 7.4 24.9 7c0 0 3.9-.3 7.6 0h.5l7.1-1.4c1.5-.3 1.7-.1 2.5.9l.1.2c2 2.5 5.7 8.1 6.9 13.3-.4.5-2.4 1.4-4.9 1-2.1-.3-5.8-1.6-7.1-7.1-.2-.9-1.1-1.4-2-1.2s-1.4 1.1-1.2 2c1.4 5.8 5.1 8.7 9 9.5v3.4c0 5.6 3.2 8.9 8.9 8.9h9.2c.9 0 1.7-.7 1.7-1.7 0-.9-.7-1.7-1.7-1.7h-9.2c-3.8 0-5.5-1.7-5.5-5.5v-3.1c.6 0 1.2-.1 1.7-.2 3.2-.7 5-2.6 4.5-4.7-1.3-5.4-5-11.4-7.7-14.8l-.1-.1C44 3.2 42.8 2 39.5 2.6L32.7 4c-4-.4-7.8 0-8 0-4.8.5-7.5 1.8-9.9 4.6-.4.5-2.4 3.3-3 4.1-.6.9-1.2 1.3-2 1.5-4.9 1-7.9 2.2-8.9 3.3-.9.9-1.7 3.2.8 9.5.1.4 3.6 8.7 12.4 8.7h6.4v41.1c0 4.7 3.8 8.5 8.5 8.5h.6c4.7 0 8.5-3.8 8.5-8.5v-5.9c0-3.7 3.4-4.9 5.4-5.2l18-2.6c1.3-.2 2.4.4 3 .9 1.2 1 1.9 2.7 1.9 4.3v8.5c0 4.7 3.8 8.5 8.5 8.5h.6c4.7 0 8.5-3.8 8.5-8.5V50c0-8.8 1.8-18.9 15.8-18.9.9 0 1.7-.7 1.7-1.7s-.4-1.6-1.4-1.6z'></path>
                    </svg>
                  </use>
                </svg>
              </span>
              <span>Find a cat</span>
            </button>
            <button
              type='button'
              className='findAPetMenu-button findAPetMenu-button_other'
            >
              Find other pets
            </button>
          </div>
        </div>
      </div>
      <Recommendations />
      <StoryGuide />
      <Flush />
      {isNavigator && <LocationNavigator setInputValue={setInputValue} />}
    </>
  )
}
