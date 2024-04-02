"use client"
import React, { useState } from 'react';
import style from '../../style/p-user.module.css';
import { TiArrowForward } from "react-icons/ti";
import { FaHeart } from "react-icons/fa";
import { MdSend , MdExitToApp  } from "react-icons/md";

function page() {
    const [menu , setMenu ] = useState('dashboard')

    const handlerMenu = (menuID)=>{
        setMenu(menuID)
    }
  return (
    <section className={style.p_user}>
        <div className="containers">
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12">
                <main className={style.sidebar}>
        <div className={style.sidebar_info_user}>
            <img src="/images/team-1.jpg" alt="user-image" className={style.sidebar_info_img} />
            <h4 className={style.sidebar_info_username}>محمدمهدی</h4>
        </div>
        <ul className={style.sidebar_items}>
            <li className={ menu === 'dashboard'? style.sidebar_item_active : style.sidebar_item } onClick={()=>handlerMenu('dashboard')}>
                <span className={style.sidebar_item_icon}>
                    <TiArrowForward/>
                </span>
                <span className={style.sidebar_item_text}>
                    پیشخوان
                </span>
            </li>
            <li className={ menu === 'wishlist'? style.sidebar_item_active : style.sidebar_item } onClick={()=>handlerMenu('wishlist')}>
                <span className={style.sidebar_item_icon}>
                    <FaHeart/>
                </span>
                <span className={style.sidebar_item_text}>
                    مورد علاقه ها
                </span>
            </li>
            <li className={ menu === 'send'? style.sidebar_item_active : style.sidebar_item } onClick={()=>handlerMenu('send')}>
                <span className={style.sidebar_item_icon}>
                    <MdSend/>
                </span>
                <span className={style.sidebar_item_text}>
                    ارسال شد 
                </span>
            </li>
            <li className={style.sidebar_item}>
                <span className={style.sidebar_item_icon}>
                    <MdExitToApp/>
                </span>
                <span className={style.sidebar_item_text}>
                    خروج 
                </span>
            </li>
        </ul>
    </main>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-12">
                    {menu ==="dashboard" && (<h1>dashboard</h1>)}
                    {menu ==="wishlist" && (<h1>wishlist</h1>)}
                    {menu ==="send" && (<h1>send</h1>)}
                </div>
            </div>
        </div>
    </section>
  )
}

export default page