import React from 'react';
import style from './Details.module.css';
import { FaStar } from "react-icons/fa";


function Details() {
  return (
    <section className={style.details}>
        <div className="containers">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src="/images/p-1.png" alt="product-image" className={style.details_image} />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className={style.Details_content}>
                        <h4 className={style.Details_content_name}>سبزیجات ارگانیک</h4>
                        <span className={style.Details_content_price}>5400 تومان</span>
                        <div className={style.Details_content_score_cm}>
                            <div className={style.Details_content_score}>
                                <span className={style.Details_content_score_icon}>
                                    <FaStar/>
                                </span>
                                <span className={style.Details_content_score_icon}>
                                    <FaStar/>
                                </span>
                                <span className={style.Details_content_score_icon}>
                                    <FaStar/>
                                </span>
                                <span className={style.Details_content_score_icon}>
                                    <FaStar/>
                                </span>
                                <span className={style.Details_content_score_icon}>
                                    <FaStar/>
                                </span>
                            </div>
                            <button className={style.Details_content_cm}>
                                نظرات - 3
                            </button>
                        </div>
                        <p className={style.Details_content_desc}>لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم متن ساختگی است</p>
                        <span className={style.Details_content_unit}>واحد : کیلو گرم</span>
                        <div className={style.Details_content_count}>
                            <button className={style.Details_content_count_btn}>+</button>
                                <span className={style.Details_content_count_number}>1</span>  
                            <button className={style.Details_content_count_btn}>-</button>  
                        </div>
                        <button className={`${style.Details_content_addBasket} ${"button_black"}`}>افزودن به سبد خرید</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Details