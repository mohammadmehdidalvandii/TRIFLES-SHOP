import React from 'react';
import style from './AboutUs.module.css';
import TitleCenter from '@/components/module/TitleCenter/TitleCenter';

function AboutUs() {
  return (
    <section className={style.aboutUs}>
        <div className="containers">
            <div className="row" data-aos='fade-up'>
                <div className="col-12">
                    <TitleCenter
                        text='درباره ما'
                        title='محصولات ارگانیک ما برای سلامتی بدن انسان مفید هستند'
                        desc='لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. بوده است.'
                    />
                </div>
            </div>
            <div className="row mt-5" data-aos="fade-up">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src="/images/about-1.jpg" alt="about-image" className={style.aboutUs_img} />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className={style.aboutUs_content}>
                        <h4 className={style.aboutUs_content_title}>محصولات ارگانیک ما سالم هستند؟</h4>
                        <p className={style.aboutUs_content_desc}>لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</p>
                        <p className={style.aboutUs_content_desc}>لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</p>
                        <p className={style.aboutUs_content_desc}>لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</p>
                        <p className={style.aboutUs_content_desc}>لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</p>
                        <p className={style.aboutUs_content_desc}>لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUs