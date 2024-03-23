import React from 'react';
import style from './NewsInfo.module.css';

function NewsInfo() {
  return (
    <div className={style.newsInfo}>
    <img src="/images/blog-1.jpg" alt="news-details" className={style.newsInfo_img} />
    <div className={style.newsInfo_date_creator}>
        <span className={style.newsInfo_date}>2 فروردین 1403</span>
        <span className={style.newsInfo_creator}>ارسال شد توسط : مدیرسایت</span>
    </div>
    <h4 className={style.newsInfo_title}>استفاده از علوم داده و تجزیه و تحلیل در زندگی</h4>
    <p className={style.newsInfo_shortDesc}>لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</p>
</div>
  )
}

export default NewsInfo