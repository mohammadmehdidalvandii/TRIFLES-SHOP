import React from 'react';
import style from './Send.module.css';


function Send() {
  return (
    <section className={style.send}>
        <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className={style.send_item}>
                    <img src="/images/p-1.png" alt="product" className={style.send_item_img} />
                    <span className={style.send_item_nam}>گل کم</span>
                    <span className={style.send_item_status}>ارسال شد</span>
                    <button className={style.send_item_btn}>خرید دوباره</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Send