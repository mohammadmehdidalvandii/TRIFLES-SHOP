import React from 'react';
import style from './BasketInfo.module.css';
import Link from 'next/link';

function BasketInfo() {
  return (
    <section className={style.basketInfo}>
        <div className="containers">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className={style.basketInfo_box}>
                        <h6 className={style.basketInfo_title}>مشخصات </h6>
                        <div className={style.basketInfo_form}>
                            <input type="text" className={style.basketInfo_input} placeholder='نام و نام خانوادگی' />
                            <input type="text" className={style.basketInfo_input} placeholder='شماره همراه' />
                            <input type="text" className={style.basketInfo_input} placeholder='آدرس کامل' />
                            <input type="text" className={style.basketInfo_input} placeholder='کد پشتی ' />
                            <input type="text" className={style.basketInfo_input} placeholder='ایمیل ' />
                            <button className={`${style.basketInfo_form_btn} ${'button_black'}`}>ثبت مشخصات</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                <div className={style.basketInfo_box}>
                        <h6 className={style.basketInfo_title}>مجموع خرید </h6>
                        <ul className={style.basketInfo_items}>
                            <li className={style.basketInfo_item}>
                                <span className={style.basketInfo_item_title}>تعداد محصول :</span>
                                <span className={style.basketInfo_item_text}>2</span>
                            </li>
                            <li className={style.basketInfo_item}>
                                <span className={style.basketInfo_item_title}>کرایه محصول :</span>
                                <span className={style.basketInfo_item_text}>30,000 - تومان</span>
                            </li>
                            <li className={style.basketInfo_item}>
                                <span className={style.basketInfo_item_title}>مجموع قیمت</span>
                                <span className={style.basketInfo_item_text}>70,000 - تومان</span>
                            </li>
                        </ul>
                            <Link href='/' className={`${style.basketInfo_linkNext} ${"button_black"}`}>ادامه خرید</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BasketInfo