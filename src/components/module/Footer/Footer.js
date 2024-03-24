import React from 'react';
import style from './Footer.module.css';
import Link from 'next/link';
import { FaFacebookF , FaTwitter , FaInstagram  ,  FaLinkedinIn ,FaWhatsapp } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { MdOutlinePhone , MdOutlineEmail } from "react-icons/md";




function Footer() {
  return (
    <section className={style.footer}>
        <div className="containers">
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <div className={style.footer_content}>
                        <h4 className={style.footer_title}>درباه تریفلس</h4>
                        <p className={style.footer_desc}>لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد.</p>
                        <div className={style.footer_link_media}>
                            <Link href='/' className={style.footer_link_icon}>
                                    <FaFacebookF/>
                            </Link>
                            <Link href='/' className={style.footer_link_icon}>
                                    <FaTwitter />
                            </Link>
                            <Link href='/' className={style.footer_link_icon}>
                                    <FaInstagram />
                            </Link>
                            <Link href='/' className={style.footer_link_icon}>
                                    <FaLinkedinIn/>
                            </Link>
                            <Link href='/' className={style.footer_link_icon}>
                                <FaWhatsapp />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <h4 className={style.footer_title}>پشتیبانی</h4>
                    <ul className={style.footer_items}>
                        <li className={style.footer_item}>
                            <Link href='/' className={style.footer_item_link}>راهنمایی وسفارش</Link>
                        </li>
                        <li className={style.footer_item}>
                            <Link href='/' className={style.footer_item_link}>بازگشت  ولغو</Link>
                        </li>
                        <li className={style.footer_item}>
                            <Link href='/' className={style.footer_item_link}>برنامه تحویل</Link>
                        </li>
                        <li className={style.footer_item}>
                            <Link href='/' className={style.footer_item_link}>تماس بگیرید</Link>
                        </li>
                        <li className={style.footer_item}>
                            <Link href='/' className={style.footer_item_link}>پرس و جو آنلاین</Link>
                        </li>
                        <li className={style.footer_item}>
                            <Link href='/' className={style.footer_item_link}>حساب کاربری من</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <h4 className={style.footer_title}>پشتیبانی ما</h4>
                    <ul className={style.footer_items}>
                        <li className={style.footer_item}>
                            <Link href='/' className={style.footer_item_link}>محصولات</Link>
                        </li>
                        <li className={style.footer_item}>
                            <Link href='/Questions' className={style.footer_item_link}>سوالات متداول</Link>
                        </li>
                        <li className={style.footer_item}>
                            <Link href='/' className={style.footer_item_link}>ملاقات کنید</Link>
                        </li>
                        <li className={style.footer_item}>
                            <Link href='/' className={style.footer_item_link}>خط منشی خصوصی</Link>
                        </li>
                        <li className={style.footer_item}>
                            <Link href='/' className={style.footer_item_link}>با ما تماس بگیرید</Link>
                        </li>
                        <li className={style.footer_item}>
                        <Link href='/' className={style.footer_item_link}>پرس و جو آنلاین</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <h4 className={style.footer_title}>اطلاعات تماس</h4>
                    <ul className={style.footer_items}>
                        <li className={style.footer_item}>
                            <div className={style.footer_title_icon}>
                                <span className={style.footer_icon}><GrLocation/></span>
                                <span className={style.footer_txt}>موقعیت</span>
                            </div>
                        </li>
                        <li className={style.footer_item}>
                            <span className={style.footer_text}>
                            میدان آزادی 9 شرقی آزادراه، 
                            ایران ، استان تهران 
                            </span>
                        </li>
                        <li className={style.footer_item}>
                        <div className={style.footer_title_icon}>
                                <span className={style.footer_icon}><MdOutlinePhone/></span>
                                <span className={style.footer_txt}>تماس با ما</span>
                            </div>
                        </li>
                        <li className={style.footer_item}>
                            <span className={style.footer_text}>021-12345678</span>
                        </li>
                        <li className={style.footer_item}>
                        <div className={style.footer_title_icon}>
                                <span className={style.footer_icon}><MdOutlineEmail /></span>
                                <span className={style.footer_txt}>ایمیل ما</span>
                            </div>
                        </li>
                        <li className={style.footer_item}>
                            <span className={style.footer_text}>trifles@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12">
                    <div className={style.footer_creator}>
                        <span className={style.footer_creator_text}>تریفلس. تمام حقوق قالب محفوظ است.</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer