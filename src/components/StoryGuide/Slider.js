import React, { useState } from 'react'

import { ContentCardItemMin } from './ContentCardItemMin'

import './Slider.scss'

import data from './contentData.json'

export const Slider = () => {
  const [dataItems, setDataItems] = useState(data ? data : null)
  const [current, setCurrent] = useState(0)

  const prevSlide = () => {
    setCurrent(current === 0 ? dataItems.length - 1 : current - 1)
  }

  const nextSlide = () => {
    setCurrent(current === dataItems.length - 1 ? 0 : current + 1)
  }

  if (dataItems == null) return null

  return (
    <div className='carousel u-isHidden_minLg'>
      <div className='flickity-viewport'>
        <ContentCardItemMin dataItems={dataItems} current={current} />
      </div>
      <button
        className='flickity-button flickity-prev-next-button previous'
        onClick={prevSlide}
      ></button>
      <button
        className='flickity-button flickity-prev-next-button next'
        onClick={nextSlide}
      ></button>
      <ol className='flickity-page-dots'>
        {dataItems.map((item, index) => (
          <li
            key={index}
            className={
              item.id === dataItems[current].id ? 'dot is-selected' : 'dot'
            }
            area-label={index + 1}
          ></li>
        ))}
      </ol>
    </div>
  )
}
