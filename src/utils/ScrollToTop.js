"use client"
import { useState , useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import style from '../style/ScrollToTop.module.css'


const ScrollToTop = ()=>{
    const [visible , setVisible] =useState(false)

    useEffect(()=>{
        const toggleVisibility = ()=>{
            window.scrollY > 90 ? setVisible(true) : setVisible(false)
        }

        window.addEventListener('scroll' , toggleVisibility)

        return ()=>   window.removeEventListener('scroll' , toggleVisibility)
    },[])

    const scrollToTop = ()=>{
        visible && 
         window.scrollTo({
            top: 0,
            behavior: "smooth",
          });

    }

    return(
        <button
         className={visible ? style.buttonVisible : style.buttonToTop} 
        onClick={scrollToTop}
        >
            <FaArrowUp/>
        </button>
    )
}

export default ScrollToTop