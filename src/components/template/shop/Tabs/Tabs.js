"use client"
import React, { useState } from 'react';
import style from './Tabs.module.css';
import Describe from '../Describe/Describe';
import Info from '../info/info';

function Tabs() {
    const [tabMenu , setTabMenu] = useState('describe');
    const handlerMenuTab = (TABID)=>{
        setTabMenu(TABID)
    }
  return (  
    <section className={style.tabs}>
        <div className="containers">
            <div className="row">
                <div className="col-12">
                    <div className={style.tabs_buttons}>
                        <button className={tabMenu === 'describe' ? style.tabs_btn_active : style.tabs_btn} onClick={()=>handlerMenuTab('describe')}>توضیحات</button>
                        <button className={tabMenu === 'info' ? style.tabs_btn_active : style.tabs_btn} onClick={()=>handlerMenuTab('info')}>اطلاعات بیشتر</button>
                        <button className={tabMenu === 'comments' ? style.tabs_btn_active : style.tabs_btn} onClick={()=>handlerMenuTab('comments')}>نظرات</button>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                    {tabMenu === 'describe' && (<Describe/>)}
                    {tabMenu === 'info' && (<Info/>)}
                    {tabMenu === 'comments' && (<h1> section comments </h1>)}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Tabs