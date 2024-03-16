import React from 'react'
import style from './ProductCard.module.css';
import { FaStar , FaPlus   } from "react-icons/fa6";
import { MdSearch } from "react-icons/md";

import Link from 'next/link';

function ProductCard() {
  return (
    <div className={style.productCard}>
                        <img src="/images/p-1.png" alt="product" className={style.productCard_img} />
                        <h4 className={style.productCard_name}>گل کلم</h4>
                        <span className={style.productCard_price}>20,000 - تومان</span>
                        <div className={style.productCard_score}>
                            <span className={style.productCard_score_icon}><FaStar/></span>
                            <span className={style.productCard_score_icon}><FaStar/></span>
                            <span className={style.productCard_score_icon}><FaStar/></span>
                            <span className={style.productCard_score_icon}><FaStar/></span>
                            <span className={style.productCard_score_icon}><FaStar/></span>
                        </div>
                        <div className={style.productCard_links}>
                            <Link href='/' className={`${style.productCard_link} ${"button_white"}`}>
                                <span className={style.productCard_link_icon}>
                                    <MdSearch/>
                                </span>
                                <span className={style.productCard_link_text}>دیدن محصول</span>
                            </Link>
                            <Link href='/' className={`${style.productCard_link} ${"button_white"}`}>
                                <span className={style.productCard_link_icon}>
                                    <FaPlus/>
                                </span>
                                <span className= {style.productCard_link_text}>افزودن به سبد خرید</span>
                            </Link>
                        </div>
                    </div>
  )
}

export default ProductCard