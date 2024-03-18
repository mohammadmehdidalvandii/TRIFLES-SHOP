import React from 'react';
import style from './Triple.module.css';
import TitleCenter from '@/components/module/TitleCenter/TitleCenter';
import Link from 'next/link';

function Triple() {
  return (
    <section className={style.triple}>
        <div className="containers">
            <div className="row" data-aos="fade-up">
                <div className="col-12">
                    <TitleCenter
                        text='مناطق تحت پوشش'
                        title='ما مناطق سه گانه مزرعه هستیم'
                        desc='لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد.'
                    />
                </div>
            </div>
            <div className="row mt-5" data-aos="fade-up">
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div className={style.triple_item}>
                        <div className={style.triple_item_image}>
                            <img src="/images/triple-1.jpg" alt="triple-image" className={style.triple_item_img} />
                        </div>
                        <div className={style.triple_item_content}>
                            <span className={style.triple_item_text}>سبزیجات معتبر</span>
                            <h6 className={style.triple_item_paraph}>سبزیجات</h6>
                            <Link href='/' className={style.triple_item_link}>بازید بخش</Link>
                        </div>
                        <div className={style.triple_item_shapes}>
                            <img src="/images/shape-1.png" alt="shape-image" className={style.triple_item_shapes_img} />
                            <img src="/images/shape-2.png" alt="shape-image" className={style.triple_item_shapes_img} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div className={style.triple_item}>
                        <div className={style.triple_item_image}>
                            <img src="/images/triple-2.jpg" alt="triple-image" className={style.triple_item_img} />
                        </div>
                        <div className={style.triple_item_content}>
                            <span className={style.triple_item_text}>نژاد گاو</span>
                            <h6 className={style.triple_item_paraph}>نژاد گاو</h6>
                            <Link href='/' className={style.triple_item_link}>بازید بخش</Link>
                        </div>
                        <div className={style.triple_item_shapes}>
                            <img src="/images/shape-1.png" alt="shape-image" className={style.triple_item_shapes_img} />
                            <img src="/images/shape-2.png" alt="shape-image" className={style.triple_item_shapes_img} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div className={style.triple_item}>
                        <div className={style.triple_item_image}>
                            <img src="/images/triple-3.jpg" alt="triple-image" className={style.triple_item_img} />
                        </div>
                        <div className={style.triple_item_content}>
                            <span className={style.triple_item_text}>ماهی تازه</span>
                            <h6 className={style.triple_item_paraph}>ماهی بومی</h6>
                            <Link href='/' className={style.triple_item_link}>بازید بخش</Link>
                        </div>
                        <div className={style.triple_item_shapes}>
                            <img src="/images/shape-1.png" alt="shape-image" className={style.triple_item_shapes_img} />
                            <img src="/images/shape-2.png" alt="shape-image" className={style.triple_item_shapes_img} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Triple