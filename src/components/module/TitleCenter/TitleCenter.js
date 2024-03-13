import React from 'react'
import style from './TitleCenter.module.css'

function TitleCenter({text , title , desc}) {
  return (
   <div className={style.titleCenter}>
        <span className={style.TitleCenter_text}>{text}</span>
        <h3 className={style.TitleCenter_title}>{title}</h3>
        <p className={style.TitleCenter_paraph}>{desc}</p>
   </div>
  )
}

export default TitleCenter