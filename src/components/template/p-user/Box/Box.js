import React from 'react';
import style from './box.module.css';
import { FaChartSimple } from "react-icons/fa6";

function Box() {
  return (
    <div className={style.box}>
    <div className={style.box_content}>
        <h6 className={style.box_content_number}>12</h6>
        <h5 className={style.box_content_text}>تعداد خرید</h5>
    </div>
    <span className={style.box_icon}>
        <FaChartSimple/>
    </span>
</div>
  )
}

export default Box