import React from 'react'
import { Link } from 'react-router-dom'

import { FaRegHeart } from 'react-icons/fa'
import { FaPaw } from 'react-icons/fa'

import pet from './../../images/pet.jpg'
import findAPet from './../../images/find-a-pet.gif'

import './Recommendations.scss'

export const Recommendations = () => (
  <>
    <div className='tier u-vr8x'>
      <div className='ad ad_home'>
        <div>
          <img src={findAPet} alt='Donate now to help more pets.' />
        </div>
      </div>
    </div>
    <div className='recommendations'>
      <div className='recommendations-header u-vr5x'>
        <div className='tier'>
          <Link to='/#'>
            <h2 className='txt txt_h1 m-txt_xxl m-txt_tight m-txt_colorPrimary m-txt_alignCenter'>
              Pets Available for Adoption
            </h2>
          </Link>
        </div>
      </div>
      <div className='recommendations-body'>
        <div className='recommendations-body-inner'>
          <div className='recommendations-results grid grid_gutter grid_stretch'>
            <div className='grid-col grid-col_4 grid-col_1_3'>
              <div className='petCard'>
                <Link to='/#' className='petCard-link' aria-label=''>
                  <div className='petCard-media'>
                    <img
                      className='petCard-media-img'
                      src={pet}
                      alt='Adopt to save a life.'
                    />
                  </div>
                  <div className='petCard-body'>
                    <div className='petCard-body-details'>
                      <span aria-hidden='true'>Olly</span>
                    </div>
                  </div>
                </Link>
                <div className='petCard-favoriteBtn'>
                  <button className='favoriteBtn'>
                    <FaRegHeart color='darkblue' />
                  </button>
                </div>
              </div>
            </div>
            <div className='grid-col grid-col_4 grid-col_1_3'>
              <div className='petCard'>
                <div className='petCard-link'>
                  <a href='/#' aria-label=''>
                    <div className='petCard-media'>
                      <img className='petCard-media-img' src={pet} alt='' />
                    </div>
                    <div className='petCard-body'>
                      <div className='petCard-body-details'>
                        <span aria-hidden='true'>Olly</span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className='petCard-favoriteBtn'>
                  <button className='favoriteBtn'>
                    <FaRegHeart color='darkblue' />
                  </button>
                </div>
              </div>
            </div>
            <div className='grid-col grid-col_4 grid-col_1_3'>
              <div className='petCard'>
                <div className='petCard-link'>
                  <a href='/#' aria-label=''>
                    <div className='petCard-media'>
                      <img className='petCard-media-img' src={pet} alt='' />
                    </div>
                    <div className='petCard-body'>
                      <div className='petCard-body-details'>
                        <span aria-hidden='true'>Olly</span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className='petCard-favoriteBtn'>
                  <button className='favoriteBtn'>
                    <FaRegHeart color='darkblue' />
                  </button>
                </div>
              </div>
            </div>
            <div className='grid-col grid-col_4 grid-col_1_3'>
              <div className='petCard'>
                <div className='petCard-link'>
                  <a href='/#' aria-label=''>
                    <div className='petCard-media'>
                      <img className='petCard-media-img' src={pet} alt='' />
                    </div>
                    <div className='petCard-body'>
                      <div className='petCard-body-details'>
                        <span aria-hidden='true'>Olly</span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className='petCard-favoriteBtn'>
                  <button type='button' className='favoriteBtn'>
                    <FaRegHeart color='darkblue' />
                  </button>
                </div>
              </div>
            </div>

            <div className='grid-col grid-col_4 grid-col_1_3'>
              <div className='actionCard'>
                <div className='actionCard-body actionCard-body_split'>
                  <div className='actionCard-body-icon'>
                    <span className='icon icon_xxl icon_colorWhite'>
                      <FaPaw />
                    </span>
                  </div>
                  <p className='txt m-txt_colorWhite' aria-hidden='true'>
                    245284 more pets available on Petfinder
                  </p>
                </div>
                <div className='actionCard-footer'>
                  <div className='actionCard-footer-cta'>
                    <span aria-hidden='true'>MEET THEM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)
