import React from 'react';
import style from './Register.module.css';
import Link from 'next/link';


function Register() {
  return (
    <section className={style.register}>
        <div className="row">
            <div className="col-12">
                <h3 className={style.register_title}>ایجاد حساب کاربری</h3>
            <form action="#" className='form'>
                    <input type="text" className='form_input'  placeholder='نام کاربری *'/>
                    <input type="text" className='form_input'  placeholder='ایمیل *'/>
                    <input type="text" className='form_input'  placeholder='رمزعبور *'/>
                    <button className="form_submit button_black">ثبت نام</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Register