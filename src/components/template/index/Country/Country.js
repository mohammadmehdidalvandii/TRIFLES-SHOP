import React from 'react'
import style from './Country.module.css';
import TitleCenter from '@/components/module/TitleCenter/TitleCenter';
import { FaPlus } from "react-icons/fa";

function Country() {
  return (
   <section className={style.country}>
        <div className="containers">
            <div className="row" data-aos="fade-up">
                <div className="col-12">
                    <TitleCenter
                        text='مناطق تحت پوشش'
                        title='نقاط فروش و تحویل'
                        desc='لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.'
                    />
                </div>
            </div>
            <div className="row mt-5" data-aos="fade-up">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className={style.country_content}>
                        <h5 className={style.country_content_title}>مساحت موجود</h5>
                        <ul className={style.country_items}>
                            <li className={style.country_item}>
                                <span className={style.country_item_icon}>
                                    <FaPlus/>
                                </span>
                                <span className={style.country_item_text}>اروپا(379)</span>
                            </li>
                            <li className={style.country_item}>
                                <span className={style.country_item_icon}>
                                    <FaPlus/>
                                </span>
                                <span className={style.country_item_text}>استرالیا(10)</span>
                            </li>
                            <li className={style.country_item}>
                                <span className={style.country_item_icon}>
                                    <FaPlus/>
                                </span>
                                <span className={style.country_item_text}>آمریکا(7)</span>
                            </li>
                            <li className={style.country_item}>
                                <span className={style.country_item_icon}>
                                    <FaPlus/>
                                </span>
                                <span className={style.country_item_text}>آژانتین(50)</span>
                            </li>
                            <li className={style.country_item}>
                                <span className={style.country_item_icon}>
                                    <FaPlus/>
                                </span>
                                <span className={style.country_item_text}>روسیه(4)</span>
                            </li>
                            <li className={style.country_item}>
                                <span className={style.country_item_icon}>
                                    <FaPlus/>
                                </span>
                                <span className={style.country_item_text}>مکزیک(10)</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src="/images/map.png" alt="map-image" className={style.country_img} />
                </div>
            </div>
        </div>
   </section>
  )
}

export default Country