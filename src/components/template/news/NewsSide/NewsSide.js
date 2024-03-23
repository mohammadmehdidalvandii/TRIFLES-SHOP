import React from 'react';
import style from './NewsSide.module.css';

function NewsSide() {
  return (
    <div className={style.newsSide}>
        <h6 className={style.newsSide_title}>دسته بندی ها</h6>
        <ul className={style.newsSide_items}>
            <li className={style.newsSide_item}>
                <span className={style.newsSide_item_icon}></span>
                <span className={style.newsSide_item_text}>کسب و کار</span>
            </li>
            <li className={style.newsSide_item}>
                <span className={style.newsSide_item_icon}></span>
                <span className={style.newsSide_item_text}>حریم خصوصی</span>
            </li>
            <li className={style.newsSide_item}>
                <span className={style.newsSide_item_icon}></span>
                <span className={style.newsSide_item_text}>فناوری</span>
            </li>
            <li className={style.newsSide_item}>
                <span className={style.newsSide_item_icon}></span>
                <span className={style.newsSide_item_text}>نکات</span>
            </li>
            <li className={style.newsSide_item}>
                <span className={style.newsSide_item_icon}></span>
                <span className={style.newsSide_item_text}>دسته بندی  نشده</span>
            </li>
        </ul>
        <h6 className={style.newsSide_title}>پست های اخر</h6>
        <ul className={style.newsSide_items}>
            <li className={style.newsSide_item}>
                <span className={style.newsSide_item_icon}></span>
                <span className={style.newsSide_item_text}>کسب و کار</span>
            </li>
            <li className={style.newsSide_item}>
                <span className={style.newsSide_item_icon}></span>
                <span className={style.newsSide_item_text}>حریم خصوصی</span>
            </li>
            <li className={style.newsSide_item}>
                <span className={style.newsSide_item_icon}></span>
                <span className={style.newsSide_item_text}>فناوری</span>
            </li>
            <li className={style.newsSide_item}>
                <span className={style.newsSide_item_icon}></span>
                <span className={style.newsSide_item_text}>نکات</span>
            </li>
            <li className={style.newsSide_item}>
                <span className={style.newsSide_item_icon}></span>
                <span className={style.newsSide_item_text}>دسته بندی  نشده</span>
            </li>
        </ul>
        <h6 className={style.newsSide_title}>بایگانی</h6>
        <ul className={style.newsSide_items}>
            <li className={style.newsSide_item}>
                <span className={style.newsSide_item_icon}></span>
                <span className={style.newsSide_item_text}>کسب و کار</span>
            </li>
            <li className={style.newsSide_item}>
                <span className={style.newsSide_item_icon}></span>
                <span className={style.newsSide_item_text}>حریم خصوصی</span>
            </li>
            <li className={style.newsSide_item}>
                <span className={style.newsSide_item_icon}></span>
                <span className={style.newsSide_item_text}>فناوری</span>
            </li>
            <li className={style.newsSide_item}>
                <span className={style.newsSide_item_icon}></span>
                <span className={style.newsSide_item_text}>نکات</span>
            </li>
            <li className={style.newsSide_item}>
                <span className={style.newsSide_item_icon}></span>
                <span className={style.newsSide_item_text}>دسته بندی  نشده</span>
            </li>
        </ul>
    </div>
  )
}

export default NewsSide