"use client"
import React, { useState } from 'react';
import style from './Accordion.module.css';
import { FaPlus , FaMinus } from "react-icons/fa";

function Accordion() {
    const [showAccordion , setShowAccordion] = useState(false);

    const handlerShowAccordion = ()=>{
        setShowAccordion(!showAccordion)
    }

  return (
    <div className={style.accordion}>
    <div className={style.accordion_title_icon} onClick={handlerShowAccordion}>
        {showAccordion ?(
               <span className={style.accordion_icon}>
               <FaMinus />
           </span>
        ):(
            <span className={style.accordion_icon}>
            <FaPlus/>
        </span>
        )}
     
        <h6 className={style.accordion_title}> چرا ما از این شرکت محصولاتی را خریداری می کنیم؟ </h6>
    </div>
    {showAccordion && (
    <p className={showAccordion ? style.accordion_desc_ani : style.accordion_desc}> لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. </p>
    )}
</div>
  )
}

export default Accordion