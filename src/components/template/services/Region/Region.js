import React from 'react';
import style from './Region.module.css';
import { IoMdCheckmark } from "react-icons/io";


function Region() {
  return (
    <section className={style.region}>
        <div className="containers">
            <div className="row" data-aos='fade-up'>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src="/images/fish.png" alt="" className={style.region_img} />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className={style.region_content}>
                        <span className={style.region_content_text}>منطقه ماهی</span>
                        <h4 className={style.region_content_title}>اگرچه ما مساحت سه گانه زیر کشت را پرورش می دهیم</h4>
                        <p className={style.region_content_desc}>لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</p>
                        <ul className={style.region_items}>
                            <li className={style.region_item}>
                                <span className={style.region_item_icon}>
                                    <IoMdCheckmark/>
                                </span>
                                <span className={style.region_item_text}>
                                ماهی سالم 
                                </span>
                            </li>
                            <li className={style.region_item}>
                                <span className={style.region_item_icon}>
                                    <IoMdCheckmark/>
                                </span>
                                <span className={style.region_item_text}>
                                30 گونه ماهی 
                                </span>
                            </li>
                            <li className={style.region_item}>
                                <span className={style.region_item_icon}>
                                    <IoMdCheckmark/>
                                </span>
                                <span className={style.region_item_text}>
                                خوراک ماهی 
                                </span>
                            </li>
                            <li className={style.region_item}>
                                <span className={style.region_item_icon}>
                                    <IoMdCheckmark/>
                                </span>
                                <span className={style.region_item_text}>
                                ماهی غیربومی 
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row mt-5" data-aos='fade-up'>
                <div className="col-lg-6 col-md-6 col-sm-12">
                <div className={style.region_content}>
                        <span className={style.region_content_text}>منطقه گاو</span>
                        <h4 className={style.region_content_title}>اگرچه ما مساحت سه گانه زیر کشت را پرورش می دهیم</h4>
                        <p className={style.region_content_desc}>لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</p>
                        <ul className={style.region_items}>
                            <li className={style.region_item}>
                                <span className={style.region_item_icon}>
                                    <IoMdCheckmark/>
                                </span>
                                <span className={style.region_item_text}>
                                گاو سالم 
                                </span>
                            </li>
                            <li className={style.region_item}>
                                <span className={style.region_item_icon}>
                                    <IoMdCheckmark/>
                                </span>
                                <span className={style.region_item_text}>
                                30 گونه نژاد گاو 
                                </span>
                            </li>
                            <li className={style.region_item}>
                                <span className={style.region_item_icon}>
                                    <IoMdCheckmark/>
                                </span>
                                <span className={style.region_item_text}>
                                خوراک گاو 
                                </span>
                            </li>
                            <li className={style.region_item}>
                                <span className={style.region_item_icon}>
                                    <IoMdCheckmark/>
                                </span>
                                <span className={style.region_item_text}>
                                خوراک خالص برای گاو 
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src="/images/cow.png" alt="" className={style.region_img} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Region