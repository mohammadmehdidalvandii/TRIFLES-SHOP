import React from 'react';
import style from './Info.module.css';

function Info() {
  return (
    <section className={style.info}>
        <ul className={style.info_items}>
            <li className={style.info_item}>
                <span className={style.info_item_title}>نام تجاری :</span>
                <span className={style.info_item_text}>کلم</span>
            </li>
            <li className={style.info_item}>
                <span className={style.info_item_title}>رنگ :</span>
                <span className={style.info_item_text}>سفید</span>
            </li>
            <li className={style.info_item}>
                <span className={style.info_item_title}>اندازه :</span>
                <span className={style.info_item_text}>کوچیک - متوسط - بزرگ</span>
            </li>
            <li className={style.info_item}>
                <span className={style.info_item_title}>وزن :</span>
                <span className={style.info_item_text}>-</span>
            </li>
            <li className={style.info_item}>
                <span className={style.info_item_title}>ابعاد :</span>
                <span className={style.info_item_text}>-</span>
            </li>
        </ul>
    </section>
  )
}

export default Info