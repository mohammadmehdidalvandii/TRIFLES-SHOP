import React from 'react';
import style from './Sectors.module.css';
import Link from 'next/link';

function Sectors() {
  return (
   <section className={style.sectors}>
        <div className="containers">
            <div className="row" data-aos="fade-up">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className={style.sectors_content}>
                        <span className={style.sectors_text}>مناطق ماهی و گاو</span>
                        <h4 className={style.sectors_title}>استراحت دو بخش در اینجا</h4>
                        <p className={style.sectors_desc}>لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</p>
                        <div className={style.sectors_links}>
                            <Link href='/' className={`${style.sectors_links} ${'button_white'}`}>پرورش گاو</Link>
                            <Link href='/' className={`${style.sectors_links} ${'button_black'}`}>پرورش ماهی</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src="/images/sector.png" alt="sector-image" className={style.sectors_img} />
                </div>
            </div>
        </div>
   </section>
  )
}

export default Sectors