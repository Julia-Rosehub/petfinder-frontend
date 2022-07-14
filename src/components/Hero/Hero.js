import React from 'react'
import searchAndMatchHero from './../../images/searchAndMatchHero.jpg'

import './Hero.scss'

export const Hero = () => (
  <>
    <div className='hero'>
      <picture>
        <img
          className='hero-img'
          src={searchAndMatchHero}
          alt='hero'
          aria-hidden='true'
        />
      </picture>
      <div className='hero-inner'>
        <div className='hero-inner__body'>
          <h1 className='hero-inner__body-title'>
            Find the Right Dog for You!
          </h1>
          <p className='hero-inner__body-text u-vr4x'>
            Take our interactive new quiz to find the perfect dog to adopt!
          </p>

          <div className='dog-quiz-btn'>
            <a href='/#' className='btn'>
              Start Dog quiz
            </a>
          </div>
        </div>
      </div>
    </div>
  </>
)
