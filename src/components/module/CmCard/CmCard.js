import React from 'react';
import style from './CmCard.module.css';

function CmCard() {
  return (
    <div className={style.commentCard}>
    <h5 className={style.commentCard_userName}>محمدمهدی</h5>
    <span className={style.commentCard_date}>1402/12/14</span>
    <p className={style.commentCard_desc}>لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</p>
</div>
  )
}

export default CmCard