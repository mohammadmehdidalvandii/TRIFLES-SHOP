import React from 'react'
import style from './ArticleCard.module.css';
import Link from 'next/link';

function ArticleCard() {
  return (
    <div className={style.articleCard}>
    <img src="/images/blog-1.jpg" alt="images-blog" className={style.articleCard_img} />
    <div className={style.articleCard_content}>
        <span className={style.articleCard_date_category}> جزییات فناوری ، 22 فروردین</span>
        <h6 className={style.articleCard_title}>محصولات ما در جهان رشد می کند و تاثیر چشمگیری دارد</h6>
        <p className={style.articleCard_desc}>
        لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.
        </p>
        <Link href='/' className={`${style.articleCard_link} ${'button_white'}` }>بیشتر بدانید</Link>
    </div>
    <div className={style.articleCard_bg}></div>
</div>
  )
}

export default ArticleCard