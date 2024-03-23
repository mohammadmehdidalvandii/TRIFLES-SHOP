import React from 'react';
import style from './NewsContent.module.css';
import { FaCheck } from "react-icons/fa6";


function NewsContent() {
  return (
   <div className={style.newsContent}>
        <h6 className={style.newsContent_title}>چهار عنصر اصلی که ارائه می دهیم:</h6>
        <ul className={style.newsContent_items}>
            <li className={style.newsContent_item}>
                <span className={style.newsContent_item_icon}><FaCheck/></span>
                <span className={style.newsContent_item_text}> مهارت های علمی برای به دست آوردن نتیجه بهتر </span>
            </li>
            <li className={style.newsContent_item}>
                <span className={style.newsContent_item_icon}><FaCheck/></span>
                <span className={style.newsContent_item_text}> مهارت هایی برای برقراری ارتباط به روش جدید </span>
            </li>
            <li className={style.newsContent_item}>
                <span className={style.newsContent_item_icon}><FaCheck/></span>
                <span className={style.newsContent_item_text}> فرصت شغلی مناسب در کمترین زمان </span>
            </li>
            <li className={style.newsContent_item}>
                <span className={style.newsContent_item_icon}><FaCheck/></span>
                <span className={style.newsContent_item_text}> یک محیط کار خوب و مناسب برای کارمند </span>
            </li>
        </ul>
        <h6 className={style.newsContent_title}>استفاده از محصولات ارگانیک :</h6>
        <p className={style.newsContent_desc}>لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده.</p>
   </div>
  )
}

export default NewsContent