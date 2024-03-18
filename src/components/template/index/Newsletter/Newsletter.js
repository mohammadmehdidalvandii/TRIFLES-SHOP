import React from 'react';
import style from './Newsletter.module.css';
import TitleCenter from '@/components/module/TitleCenter/TitleCenter';

function Newsletter() {
  return (
    <section className={style.newsletter}>
        <div className="containers">
            <div className="row">
                <div className="col-12">
                    <TitleCenter
                        title='عضویت در خبرنامه'
                        desc='لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.'
                    />
                </div>
            </div>
            <div className="row mt-5">
                <div className={style.newsletter_input_btn}>
                    <input type="text"  className={style.newsletter_input}/>
                    <button className={`${style.Newsletter_btn} ${'button_black'}`}>مشترک شدن</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Newsletter