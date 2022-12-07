import React from 'react'
import section from '../../../../styles/section.module.css'
import controls from '../../../../styles/controls.module.css'
interface IPreview {
    children: React.ReactNode
}

export const Preview = () => {
  return (
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
  )
}
