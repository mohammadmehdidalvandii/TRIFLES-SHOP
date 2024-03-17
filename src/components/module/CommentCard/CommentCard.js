import React from 'react';
import style from './CommentCard.module.css';
import { MdOutlineStar } from "react-icons/md";

function CommentCard() {
  return (
    <div className={style.commentCard}>
    <div className={style.commentCard_img_score}>
        <img src="/images/client-1.jpg" alt="client images" className={style.commentCard_img} />
        <div className={style.commentCard_score}>
            <span className={style.commentCard_score_icon}>
                <MdOutlineStar/>
            </span>
            <span className={style.commentCard_score_icon}>
                <MdOutlineStar/>
            </span>
            <span className={style.commentCard_score_icon}>
                <MdOutlineStar/>
            </span>
            <span className={style.commentCard_score_icon}>
                <MdOutlineStar/>
            </span>
        </div>
    </div>
    <div className={style.commentCard_content}>
    <h6 className={style.commentCard_name}>ادورا المیر</h6>
    <span className={style.commentCard_location_job}> کشاورز - انگلستان</span>
    <p className={style.commentCard_text}>لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</p>
    </div>
</div>
  )
}

export default CommentCard