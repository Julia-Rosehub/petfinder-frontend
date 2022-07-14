import React from 'react'

import { Link } from 'react-router-dom'
import classNames from 'classnames'

export const ContentCardItemMin = ({ dataItems, current }) => (
  <>
    {dataItems.map((item, index) => (
      <div
        key={index}
        className={classNames('contentCard contentCard_storyGuide', {
          active: index === current
        })}
      >
        <div className='contentCard-body'>
          <div className='contentCard-body-details'>
            <h3 className='txt m-txt_xl m-txt_bold m-txt_colorAltS1 m-txt_alignCenter u-vr1x'>
              {item.title}
            </h3>
            <p className='txt m-txt_alignCenter u-vr6x'>{item.text}</p>
          </div>
        </div>
        <div className='contentCard-footer u-isHidden_minLg'>
          <Link
            to='/#'
            className='contentCard-footer-cta contentCard-footer-cta_colorAltS1'
          >
            Learn More
          </Link>
        </div>
      </div>
    ))}
  </>
)
