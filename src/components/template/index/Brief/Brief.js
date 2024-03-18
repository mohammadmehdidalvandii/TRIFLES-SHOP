import React from 'react'
import style from './Brief.module.css';
import TitleCenter from '@/components/module/TitleCenter/TitleCenter';
import Link from 'next/link';

function Brief() {
  return (
    <section className={style.brief}>
        <div className="containers">
            <div className="row" data-aos="fade-up">
                <div className="col-12">
                    <TitleCenter
                        text='خلاصه'
                        title='می توانیم در برداشت محصول به شما کمک کنیم'
                        desc='لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.'
                    />
                </div>
            </div>
            <div className="row mt-5" data-aos="fade-up">
                <div className="col-12">
                    <div className={style.brief_content}>
                        <Link href='/' className={`${style.brief_link} ${'button_white'}`}>زراعت</Link>
                        <img src="/images/brief.png" alt="brief-image" className={style.brief_img} />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Brief