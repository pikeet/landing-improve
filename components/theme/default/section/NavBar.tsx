import React, { useState } from 'react'
import sidebar from '../../../../styles/sidebar.module.css'

export const NavBar = () => {
  
  const [IsOpen, SetOpen] = useState(false);
  return (
    <header className={sidebar.header_landing}>
      <div className='logo-header m-10'>
        <h2> izi </h2>
      </div>
      <div className='header-body d-flex'>              
        <div className={sidebar.menu_items + " " + (IsOpen ? sidebar.sidebar_visible : sidebar.sidebar_unvisible) }>
          <div className={sidebar.sidebar_close} onClick={ () => SetOpen(false) }>
            <div className='sidebar_close_line_1gdc'></div>
            <div className='sidebar_close_line_2'></div>
          </div>
          <ul className='header-ul-strike flex'>
            <li>Что мы сделали?</li>
            <li>Наши скиллы</li>
            <li>Стек технологий</li>
            <li>
              <a className="mailer-address header-mail-address" 
                href='to:mail@mail.ru'>
                  mail@mail.ru
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='m-20'>
        <div className={sidebar.sidebar_burger} onClick={() => SetOpen(true)}>
            <div className="burger-spancil"></div>
        </div>
      </div>        
  </header>
  )
}
