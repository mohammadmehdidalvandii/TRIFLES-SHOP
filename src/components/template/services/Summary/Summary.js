import React from 'react';
import style from './Summary.module.css';

function Summary() {
  return (
    <section className={style.summary}>
        <div className="containers">
            <div className="row" data-aos='fade-up'>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src="/images/brief.png" alt="summary image" className={style.summary_img} />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className={style.summary_content}>
                        <span className={style.summary_content_text}>خلاصه</span>
                        <h4 className={style.summary_content_title}>آنچه ما از چگونگی برداشت محصولات به شما کمک می کنیم</h4>
                        <p className={style.summary_content_desc}>لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</p>
                        <p className={style.summary_content_desc}>لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</p>
                        <button className={`${style.summary_content_btn} ${'button_white'}`}>زراعت</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Summary