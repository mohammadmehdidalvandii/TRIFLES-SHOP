import React from 'react';
import style from './Login.module.css';
import Link from 'next/link';

function Login() {
  return (
    <section className={style.login}>
        <div className="row">
            <div className="col-12">
                <h3 className={style.login_title}>ورود به حساب کابری</h3>
                <form action="#" className='form'>
                    <input type="text" className='form_input'  placeholder='ایمیل *'/>
                    <input type="text" className='form_input'  placeholder='رمزعبور *'/>
                    <div className={style.form_box}>
                      <input type="checkbox" name="" id="" className='form_box_checkBox'/>
                      <span className='form_box_text'>مرا به خاطر بسپار</span>
                    </div>
                    <Link href='/' className='form_forget'>رمز عبور فراموش کرده اید ؟</Link>
                    <button className="form_submit button_black">ورود</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Login