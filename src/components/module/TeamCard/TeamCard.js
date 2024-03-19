import React from 'react';
import style from './TeamCard.module.css';

import Link from 'next/link';
import { FaFacebookF , FaTwitter , FaInstagram  } from "react-icons/fa";

function TeamCard() {
  return (
    <div className={style.teamCard}>
    <img src="/images/team-1.jpg" alt="team-image" className={style.TeamCard_img} />
    <div className={style.teamCard_media}>
        <Link href='/' className={style.teamCard_media_link}>
            <span className={style.teamCard_media_icon}><FaFacebookF/></span>
        </Link>
        <Link href='/' className={style.teamCard_media_link}>
            <span className={style.teamCard_media_icon}><FaTwitter/></span>
        </Link>
        <Link href='/' className={style.teamCard_media_link}>
            <span className={style.teamCard_media_icon}><FaInstagram /></span>
        </Link>
    </div>
    <div className={style.teamCard_content}>
        <h6 className={style.teamCard_content_name}>الماس فرر</h6>
        <span className={style.teamCard_content_job}>بنیانگذار و مدیر عامل</span>
    </div>
</div>
  )
}

export default TeamCard