import React from 'react';
import style from './PageHeader.module.css';
import Link from 'next/link';

function PageHeader({title}) {
  return (
    <section className={style.pageHeader}>
        <div className={style.pageHeader_bg}>
            <div className="containers">
                <div className="row">
                    <div className={style.pageHeader_content}>
                        <h5 className={style.pageHeader_content_title}>{title}</h5>
                        <div className={style.pageHeader_link_text}>
                            <Link href='/' className={style.pageHeader_link}>خانه</Link>
                            <span className={style.pageHeader_icon}></span>
                            <span className={style.pageHeader_text}>{title}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PageHeader