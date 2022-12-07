import Head from 'next/head'
import Image from 'next/image'
import app from '../styles/app.module.scss'
import controls from '../styles/controls.module.css'
import sidebar from '../styles/sidebar.module.css'
import section from '../styles/section.module.css'
import { useState } from 'react'

export default function Home() {

  const [IsOpen, SetOpen] = useState(false);
  const [IsClickProj, SetClickProj] = useState(false);

  return (

    <div className={app.container}>

      <Head>
        <title>Изи.Digital</title>
        <meta name="description" content="Разработка сайта от задумки до запуска." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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

      <main className="__body-container m-0 p-0 w-screen overflow-y-hidden">

       <div className="preview-section w-screen h-screen hhh">
            <div className={section.PGGM_Blk_prew}>
                <h1 className=''>Делаем то - что привлекает людей!</h1>
                <p className=''>
                Современные технологии, масштабируемость, индивидуальность.
                </p>
                <button className={controls.button_start}>
                  Хочу заказать
                </button>
            </div>
       </div>

       <div className="projects-section container mt-50 p-0 h-screen">
          <div>
            <div className={section.title_projects_sec}>
              <h2>Что мы недавно сделали?</h2>
            </div>
            <div className={section.body_projects_sec}>
              <div className="flex-wrap">
                <div className={section.project_card}>
                  <div className={section.visual_body}>
                    <div className="visual_block_text">
                      <p className='visual-title'></p>
                      <p className='visual-text'></p>
                    </div>
                  </div>
                  <div className={section.card_body}>
                    <p className='font-300'>Разработка мобильного приложения, сайт и внутренняя система контроля времени.</p>
                  </div>
                </div>
                <div className={section.project_card}>
                  <div className={section.visual_body}>
                    <div className="visual_block_text">
                      <p className='visual-title'></p>
                      <p className='visual-text'></p>
                    </div>
                  </div>
                  <div className={section.card_body}>
                    <p className='font-300'>Разработка мобильного приложения, сайт и внутренняя система контроля времени.</p>
                  </div>
                </div>
                <div className={section.project_card}>
                  <div className={section.visual_body}>
                    <div className="visual_block_text">
                      <p className='visual-title'></p>
                      <p className='visual-text'></p>
                    </div>
                  </div>
                  <div className={section.card_body}>
                    <p className='font-300'>Разработка мобильного приложения, сайт и внутренняя система контроля времени.</p>
                  </div>
                </div>
                <div className={section.project_card}>
                  <div className={section.visual_body}>
                    <div className="visual_block_text">
                      <p className='visual-title'></p>
                      <p className='visual-text'></p>
                    </div>
                  </div>
                  <div className={section.card_body}>
                    <p className='font-300'>Разработка мобильного приложения, сайт и внутренняя система контроля времени.</p>
                  </div>
                </div>
                <div className={section.project_card}>
                  <div className={section.visual_body}>
                    <div className="visual_block_text">
                      <p className='visual-title'></p>
                      <p className='visual-text'></p>
                    </div>
                  </div>
                  <div className={section.card_body}>
                    <p className='font-300'>Разработка мобильного приложения, сайт и внутренняя система контроля времени.</p>
                  </div>
                </div>
                <div className={section.project_card}>
                  <div className={section.visual_body}>
                    <div className="visual_block_text">
                      <p className='visual-title'></p>
                      <p className='visual-text'></p>
                    </div>
                  </div>
                  <div className={section.card_body}>
                    <p className='font-300'>Разработка мобильного приложения, сайт и внутренняя система контроля времени.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
       </div>

       <div className="skills-section mt-50 p-0 h-screen container">
          <div className="skills-title">
            <h3>Что мы создаем?</h3>
          </div>
          <div className={section.skills_body}>
            <ul className={controls.skills_list}>
              <li className={controls.skill_li_list}>
                <div className={controls.skill_li_ll}>
                  <div className='list-style-part'></div>
                  <p>Design</p>
                </div>
                <div className={controls.skill_li_abs_card}>
                  <div className={controls.card_show_more}>
                      <div className={controls.card_ln}>
                        <p>fdfasdfdsafasdfsdaf</p>
                        <Image src="/jd92df-fj230ffd-2kfcjf42.jpg"
                          alt="JFdjsfjsdjfdsjfsdfs" width={260} height={180}
                          />
                      </div>
                      <div className={controls.card_ln}>
                      <p>fdfasdfdsafasdfsdaf</p>
                        <Image src="/jd92df-fj230ffd-2kfcjf42.jpg"
                          alt="JFdjsfjsdjfdsjfsdfs" width={260} height={180}
                          />
                      </div>
                      <div className={controls.card_ln}>
                      <p>fdfasdfdsafasdfsdaf</p>
                        <Image src="/jd92df-fj230ffd-2kfcjf42.jpg"
                          alt="JFdjsfjsdjfdsjfsdfs" width={260} height={180}
                          />
                      </div>
                  </div>
                </div>
              </li>
            </ul>     
          </div>
       </div>

      </main>

        <footer className={app.footer}>
     
       </footer>
    </div>
  )
}
