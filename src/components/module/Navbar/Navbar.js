"use client"
import Link from 'next/link'
import style from './Navbar.module.css'
import { MdOutlineSearch , MdOutlineShoppingCart} from "react-icons/md";
import { FaBars , FaTimes } from "react-icons/fa";

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';


function Navbar() {
    const [menuActive , setMenuActive] = useState('/')
    const [showMenu , setShowMenu] = useState(false)
   const pathName = usePathname()

    // Start handler MenuActive Navbar
        useEffect(()=>{
            const path_Name = pathName
            setMenuActive(path_Name)
            setShowMenu(false)
        },[pathName])
    // End handler MenuActive Navbar

     // Start handler showMenu navbarRes
     const handlerShowMenu = ()=>{
        setShowMenu(!showMenu)
     }
 // Start handler showMenu navbarRes
  return (
    <>
    <section className={`${style.navBar} ${`d-none d-lg-block`}`}>
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

    <section className={`${style.navbarRes} ${`d-block d-lg-none`}`}>
        <div className="containers">
            <div className={style.navbarRes_wrapper}>
                <Link href='/' className={style.navbarRes_link_logo}>
                    <img src="/images/logo-1.png" alt="navbarRes-logo" className={style.navbarRes_link_img} />
                </Link>

                <div className={style.navbarRes_menu}>
                    {showMenu ?(
                           <span className={style.navbarRes_menu_icon} onClick={handlerShowMenu}>
                           <FaTimes />
                       </span>
                    ):(
                        <span className={style.navbarRes_menu_icon} onClick={handlerShowMenu}>
                        <FaBars/>
                    </span>
                    )}
                 
                </div>
                {showMenu && (
                    <ul className={style.navbarRes_items_menu}>
                        <li className={style.navbarRes_item_menu}>
                        <Link href='/' className={style.navbarRes_link}>
                        <span className={style.navbarRes_link_icon}>
                            سبد خرید
                        </span>
                        <span className={style.navbarRes_link_number}>0</span>
                    </Link>
                        </li>
                        <li className={style.navbarRes_item_menu}>
                            <Link href='/' className={`${style.navbarRes_item_link} ${menuActive === '/' ? `${style.navbarRes_item_link_active}`:``}`}>
                                خانه
                            </Link>
                        </li>
                        <li className={style.navbarRes_item_menu}>
                            <Link href='/Shop' className={`${style.navbarRes_item_link} ${menuActive === '/Shop' ? `${style.navbarRes_item_link_active}`:``}`}>
                                فروشگاه
                            </Link>
                        </li>
                        <li className={style.navbarRes_item_menu}>
                            <Link href='/Services' className={`${style.navbarRes_item_link} ${menuActive === '/Services' ? `${style.navbarRes_item_link_active}`:``}`}>
                                خدمات
                            </Link>
                        </li>
                        <li className={style.navbarRes_item_menu}>
                            <Link href='/About' className={`${style.navbarRes_item_link} ${menuActive === '/About' ? `${style.navbarRes_item_link_active}`:``}`}>
                                درباره ما
                            </Link>
                        </li>
                        <li className={style.navbarRes_item_menu}>
                            <Link href='/News' className={`${style.navbarRes_item_link} ${menuActive === '/News' ? `${style.navbarRes_item_link_active}`:``}`}>
                                اخبار 
                            </Link>
                        </li>
                        <li className={style.navbarRes_item_menu}>
                            <Link href='/Contact' className={`${style.navbarRes_item_link} ${menuActive === '/Contact' ? `${style.navbarRes_item_link_active}`:``}`}>
                                تماس با ما
                            </Link>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    </section>
    </>
  )
}

export default Navbar