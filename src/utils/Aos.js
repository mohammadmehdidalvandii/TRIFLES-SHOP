"use client"
import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'

function AosInit() {
    useEffect(()=>{ 
        Aos.init({
          delay: 200,
          duration: 500
        });
    },[]);

  return null;
}

export default AosInit