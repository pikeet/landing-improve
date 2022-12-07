import Head from 'next/head'
import Image from 'next/image'
import app from '../styles/app.module.scss'
import controls from '../styles/controls.module.css'
import section from '../styles/section.module.css'
import { useState } from 'react'
import { NavBar } from '../components/theme/default/section/NavBar';
import { ContainerFluid } from '../components/theme/default/props/ContainerFluid';
import { Container } from '../components/theme/default/props/container'
import { Preview } from '../components/theme/default/section/Preview'

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

      <NavBar />
      <main>
        <ContainerFluid classes="__body-container m-0 p-0 w-screen overflow-y-hidden">

          <Preview />

          <Container classes="container">
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
              <div className={section.skills_body}>
                <ul className={controls.skills_list}>
                  <li className={controls.skill_li_list}>
                    <div className={controls.skill_li_ll}>
                      <div className={controls.list_style_PART}>
                        <div className='PART_Line'></div>
                      </div>
                      <p>Design</p>
                    </div>
                    <div className={controls.card_show_more}>
                        <div className={controls.list_content_hover}>
                          <p>Web</p>
                          <p>Mobile</p>
                          <p>Brand</p>
                        </div>
                        <div className={controls.PART_vector_line}></div>
                    </div>
                  </li>

                    <li className={controls.skill_li_list}>
                    <div className={controls.skill_li_ll}>
                      <div className={controls.list_style_PART}>
                        <div className='PART_Line'></div>
                      </div>
                      <p>Develop</p>
                    </div>
                    <div className={controls.card_show_more}>
                        <div className={controls.list_content_hover}>
                          <p>Web</p>
                          <p>Mobile</p>
                          <p>heal load</p>
                        </div>
                        <div className={controls.PART_vector_line}></div>
                    </div>
                  </li>

                    <li className={controls.skill_li_list}>
                    <div className={controls.skill_li_ll}>
                      <div className={controls.list_style_PART}>
                        <div className='PART_Line'></div>
                      </div>
                      <p>Marketing</p>
                    </div>
                    <div className={controls.card_show_more}>
                        <div className={controls.list_content_hover}>
                          <p>Ya.Ads</p>
                          <p>VK</p>
                          <p>MyTG</p>
                        </div>
                        <div className={controls.PART_vector_line}></div>
                    </div>
                  </li>


                </ul>     
              </div>
          </div>
          </Container>

          </ContainerFluid>
      </main>
      

        <footer className={app.footer}>
     
       </footer>
    </div>
  )
}
