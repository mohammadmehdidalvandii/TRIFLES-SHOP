import React from 'react';
import style from './BasketCard.module.css';
import { MdDeleteForever } from "react-icons/md";


function BasketCard() {
  return (
    <section className={style.basketCard}>
        <div className="containers">
            <div className={style.basketCard_wrapper}>
                <div className={style.basketCard_item}>
                    <img src="/images/p-1.png" alt="product img" className={style.basketCard_item_img} />
                    <span className={style.basketCard_item_name}>گل کلم</span>
                    <span className={style.basketCard_item_price}>20,000 - تومان</span>
                    <span className={style.basketCard_item_uint}>واحد : 1کیلو</span>
                    <span className={style.basketCard_item_delete}>
                        <MdDeleteForever/>
                    </span>
                </div>
                <div className={style.basketCard_item}>
                    <img src="/images/p-1.png" alt="product img" className={style.basketCard_item_img} />
                    <span className={style.basketCard_item_name}>گل کلم</span>
                    <span className={style.basketCard_item_price}>20,000 - تومان</span>
                    <span className={style.basketCard_item_uint}>واحد : 1کیلو</span>
                    <span className={style.basketCard_item_delete}>
                        <MdDeleteForever/>
                    </span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BasketCard