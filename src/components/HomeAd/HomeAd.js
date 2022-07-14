import React from 'react'

import { Link } from 'react-router-dom'

import './HomeAd.scss'

export const HomeAd = () => (
  <div className='tier u-vr8x'>
    <div className='homeAdSplit'>
      <div className='homeAdSplit-item'>
        <div className='ad ad_slotLoaded'>
          <Link to='/#'>
            <img
              src='https://tpc.googlesyndication.com/simgad/11250052988473659212'
              alt='The Petfinder Foundation helps in disasters. Donate now to help more pets.'
            />
          </Link>
        </div>
      </div>
      <div className='homeAdSplit-item'>
        <div className='ad ad_slotLoaded'>
          <Link to='/#'>
            <img
              src='https://tpc.googlesyndication.com/simgad/11250052988473659212'
              alt='Help pets by giving today to the Petfinder Foundation.'
            />
          </Link>
        </div>
      </div>
    </div>
  </div>
)
