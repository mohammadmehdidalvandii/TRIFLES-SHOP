import React from 'react';
import style from './NewsCard.module.css';
import Link from 'next/link';

function NewsCard() {
  return (
    <div className={style.newsCard}>
    <img src="/images/news.jpg" alt="images news" className={style.newsCard_img} />
    <div className={style.newsCard_content}>
        <span className={style.newsCard_content_category_date}> تاریخ موفقیت ، 26 خرداد</span>
        <h4 className={style.newsCard_content_title}>محصولات ما در جهان رشد می کند و تاثیر چشمگیری دارد</h4>
        <p className={style.newsCard_content_desc}>لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</p>
        <Link href='/' className={`${style.newsCard_content_linkMore} ${'button_white'}`}>بیشتر بدانید</Link>
    </div>
    <div className={style.newsCard_bg}></div>
</div>
  )
}

export default NewsCard