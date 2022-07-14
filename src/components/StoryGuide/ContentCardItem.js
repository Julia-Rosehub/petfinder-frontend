import React from 'react'

export const ContentCardItem = ({ title, text }) => (
  <div className='grid-col grid-col_1_3'>
    <div className='contentCard contentCard_storyGuide'>
      <div className='contentCard-body'>
        <div className='contentCard-body-details'>
          <h3 className='txt m-txt_xl m-txt_bold m-txt_colorAltS1 m-txt_alignCenter u-vr1x'>
            {title}
          </h3>
          <p className='txt u-vr6x'>{text}</p>
          <div>
            <button className='btn btn_borderAlt m-btn_wide'>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  </div>
)
