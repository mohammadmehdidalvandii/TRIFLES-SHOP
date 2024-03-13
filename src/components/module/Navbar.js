"use client"
import Link from 'next/link'
import style from './Navbar.module.css'
import { MdOutlineSearch , MdOutlineShoppingCart} from "react-icons/md";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';


function Navbar() {
    const [menuActive , setMenuActive] = useState('/')
   const pathName = usePathname()

    // Start handler MenuActive Navbar
        useEffect(()=>{
            const path_Name = pathName
            setMenuActive(path_Name)
        },[pathName])
    // End handler MenuActive Navbar

  return (
    <section className={style.navBar}>
        <div className="containers">
            <div className={style.navbar_wrapper}>
                <Link href='/' className={style.navbar_link_logo}>
                    <img src="/images/logo-1.png" alt="logo-navbar" className={style.navbar_link_img} />
                </Link>
                <ul className={style.navbar_items_menu}>
                    <li className={style.navbar_item}>
                        <Link href='/' className={`${style.navbar_item_link} ${menuActive === '/' ? `${style.navbar_item_link_active}`:``}`}>خانه</Link>
                    </li>
                    <li className={style.navbar_item}>
                        <Link href='/Shop' className={`${style.navbar_item_link} ${menuActive === '/Shop' ?` ${style.navbar_item_link_active}`:``}`}>فروشگاه</Link>
                    </li>
                    <li className={style.navbar_item}>
                        <Link href='/Services' className={`${style.navbar_item_link} ${menuActive === '/Services' ? `${style.navbar_item_link_active}`:``}`}>خدمات </Link>
                    </li>
                    <li className={style.navbar_item}>
                        <Link href='/About' className={`${style.navbar_item_link} ${menuActive === '/About' ? `${style.navbar_item_link_active}`:``}`}>درباره ما</Link>
                    </li>
                    <li className={style.navbar_item}>
                        <Link href='/News' className={`${style.navbar_item_link} ${menuActive === '/News' ? `${style.navbar_item_link_active}`:``}`}>اخبار</Link>
                    </li>
                    <li className={style.navbar_item}>
                        <Link href='/Contact' className={`${style.navbar_item_link} ${menuActive === '/Contact' ? `${style.navbar_item_link_active}`:``}`}>تماس با ما</Link>
                    </li>
                </ul>
                <div className={style.navbar_items}>
                    <div className={style.navbar_search}>
                        <input type="text" className={style.navbar_search_input} />
                        <span className={style.navbar_search_icon}>
                            <MdOutlineSearch/>
                        </span>
                    </div>
                    <Link href='/' className={style.navbar_link}>
                        <span className={style.navbar_link_icon}>
                        <MdOutlineShoppingCart />
                        </span>
                        <span className={style.navbar_link_number}>0</span>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Navbar