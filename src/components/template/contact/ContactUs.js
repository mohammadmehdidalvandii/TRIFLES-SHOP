import React from 'react';
import style from './ContactUs.module.css';

import { FaCheck ,FaPhone  } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import TitleCenter from '@/components/module/TitleCenter/TitleCenter';



function ContactUs() {
  return (
   <section className={style.contactUs}>
        <div className="containers">
        <div className="row" data-aos='fade-up'>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className={style.contactUs_item}>
                    <span className={style.contactUs_item_icon}><FaCheck/></span>
                    <h6 className={style.contactUs_item_title}>موقعیت</h6>
                    <span className={style.contactUs_item_text}>میدان آزادی ظلع شرقی </span>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className={style.contactUs_item}>
                    <span className={style.contactUs_item_icon}><MdMail/></span>
                    <h6 className={style.contactUs_item_title}>ایمیل</h6>
                    <span className={style.contactUs_item_text}>trifles@gmail.com</span>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className={style.contactUs_item}>
                    <span className={style.contactUs_item_icon}><FaPhone /></span>
                    <h6 className={style.contactUs_item_title}>تلفن</h6>
                    <span className={style.contactUs_item_text}>021-123457</span>
                    <span className={style.contactUs_item_text}>021-765432</span>
                </div>
            </div>
        </div>
        <div className="row mt-5" data-aos='fade-up'>
            <div className="col-12">
                <TitleCenter
                    title='برای هر سوالی پیام بفرستید'
                    desc='انتقادات و پیشنهادات خود را با ما در میان بگذارید.'
                />
            </div>
            <div className="col-12">
                <form action="#" className={style.contactUs_form}>
                    <div className={`${style.contactUs_form_wrapper} ${'d-md-flex d-block'}`}>
                        <input type="text" className={style.contactUs_form_input}  placeholder='نام'/>
                        <input type="text" className={style.contactUs_form_input}  placeholder='ایمیل'/>
                    </div>
                    <div className={`${style.contactUs_form_wrapper} ${'d-md-flex d-block'}`}>
                        <input type="text" className={style.contactUs_form_input}  placeholder='تلفن'/>
                        <input type="text" className={style.contactUs_form_input}  placeholder='موضوع'/>
                    </div>
                    <textarea className={style.contactUs_form_text} placeholder='پیام شما'></textarea>
                    <button className={`${style.ContactUs_form_submit} ${'button_black'}`}>ارسال</button>    
                </form>
            </div>
        </div>
        </div>
   </section>
  )
}

export default ContactUs