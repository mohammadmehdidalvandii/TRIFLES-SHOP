import React from 'react';
import style from './Question.module.css';
import TitleCenter from '@/components/module/TitleCenter/TitleCenter';
import Link from 'next/link';
import Accordion from '@/components/module/Accordion/Accordion';



function Question() {
  return (
    <section className={style.question}>
        <div className="containers">
            <div className="row">
                <div className="col-12">
                    <TitleCenter
                        text='سوالات متداول'
                        title='سوالات متداولی که اغلب مشتریان از ما می پرسند'
                        desc='لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.'
                    />
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12">
                    <Link href='/' className={`${style.question_link} ${'button_black'}`}>شما بپرسید ؟</Link>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                    <Accordion/>
                    <Accordion/>
                    <Accordion/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Question