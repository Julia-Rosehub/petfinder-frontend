import React from 'react'

import { HomeAd } from './../HomeAd/HomeAd'
import { ContentCardItem } from './ContentCardItem'
import { Slider } from './Slider'

import data from './contentData.json'

export const StoryGuide = () => (
  <>
    <div className='storyGuide u-vr8x'>
      <div className='storyGuide-header'>
        <div className='storyGuide-header-inner'>
          <h2 className='txt m-txt_xxl m-txt_alignCenter'>
            Planning to Adopt a Pet?
          </h2>
        </div>
      </div>
      <div className='storyGuide-body'>
        <div className='grid grid-gutter u-isHidden_maxLg'>
          {data.map((item, i) => (
            <ContentCardItem key={i} title={item.title} text={item.text} />
          ))}
        </div>
        <Slider />
      </div>
    </div>
    <HomeAd />
  </>
)
