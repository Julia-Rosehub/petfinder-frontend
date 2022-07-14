import React, { useRef, useEffect } from 'react'

import classNames from 'classnames'

export const Search = props => {
  let slideRef = useRef('')
  let inputRef = useRef('')

  useEffect(() => {
    const callback = () => {
      if (slideRef.current.classList.contains('open')) {
        inputRef.current.focus()
      }
    }
    slideRef.current.addEventListener('transitionend', callback)
    return () => slideRef.current.removeEventListener('transitionend', callback)
  }, [])

  return (
    <div
      className={classNames('header-inner-main-search-slide', {
        open: props.visibleSearchBar
      })}
      ref={slideRef}
    >
      <label
        className='header-inner-main-search-slide-label'
      >
        <div className='verticalCenter'>Search Articles:</div>
      </label>

      <input
        ref={inputRef}
        className='header-inner-main-search-slide-field'
      ></input>
      <button
        type='submit'
        aria-label='Submit Search'
        className='header-inner-main-search-slide-submit'
      >
        <svg role='img' focusable='false'>
          <use
            xmlnslink='http://www.w3.org/1999/xlink'
            xlinkHref='#icon-search'
          >
            <svg id='icon-search' viewBox='0 0 31.92 31.72'>
              <path d='M19,1.51a12.85,12.85,0,1,0-.7,23,12.91,12.91,0,0,0,.7-23ZM12.93,20.74a7.89,7.89,0,1,1,7.94-7.89A7.93,7.93,0,0,1,12.93,20.74Z'></path>
              <path d='M31.19,27.49,26,22.36a16.51,16.51,0,0,1-3.49,3.54L27.67,31a2.5,2.5,0,0,0,3.53,0A2.46,2.46,0,0,0,31.19,27.49Z'></path>
            </svg>
          </use>
        </svg>
      </button>
      <button
        type='submit'
        onClick={props.makeVisibleSearchBar}
        aria-label='Close Search'
        className='header-inner-main-search-slide-close'
      >
        <svg role='img' focusable='false'>
          <use xmlnslink='http://www.w3.org/1999/xlink' xlinkHref='#icon-close'>
            <svg id='icon-close' viewBox='0 0 31.92 31.72'>
              <path d='M17.27,12.34l6.4-6.4A3.49,3.49,0,0,0,18.74,1l-6.4,6.4L5.93,1A3.49,3.49,0,0,0,1,5.93l6.4,6.4L1,18.74a3.49,3.49,0,0,0,4.94,4.94l6.4-6.4,6.4,6.4a3.49,3.49,0,0,0,4.94-4.94Z'></path>
            </svg>
          </use>
        </svg>
      </button>
    </div>
  )
}
