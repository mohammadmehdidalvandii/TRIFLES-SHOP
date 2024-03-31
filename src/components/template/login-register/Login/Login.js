import React, { useState } from 'react';
import style from './Login.module.css';
import Link from 'next/link';
import swal from 'sweetalert';

function Login() {
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');

  const loginButton = async (e)=>{
    e.preventDefault()
    // validations

    const user = { email , password};

    const res = await fetch('/api/auth/Signin',{
      method: 'POST',
      headers :{"Content-Type": "application/json"},
      body:JSON.stringify(user)
    })
    const data = await res.json();

    console.log("res ==>", res);

    if(res.status === 200 ){
      swal({
        title:"با موفقعیت لاگین شدید",
        icon:"success",
        buttons:"ورود به پنل کاربری",
      }).then(()=>{
        location.replace('/')
      })
    } else if(res.status === 422 || res.status === 401){
      swal({
        title:"کاربری بااین اطلاعات یافت نشد",
        icon:"error",
        buttons:"تلاش مجدد",
      })
    } else if(res.status === 419){
      swal({
        title:"ایمیل یا پشورد صحیح نیست",
        icon:"error",
        buttons:"تلاش مجدد",
      })
    }
  }
  return (
    <section className={style.login}>
        <div className="row">
            <div className="col-12">
                <h3 className={style.login_title}>ورود به حساب کابری</h3>
                <form action="#" className='form'>
                    <input
                    value={email}
                    onChange={(event)=> setEmail(event.target.value)}
                     type="text"
                      className='form_input'
                        placeholder='ایمیل *'
                        />
                    <input
                    value={password}
                    onChange={(event)=> setPassword(event.target.value)}
                     type="password"
                      className='form_input'
                        placeholder='رمزعبور *'
                        />

                    <div className={style.form_box}>
                      <input type="checkbox" name="" id="" className='form_box_checkBox'/>
                      <span className='form_box_text'>مرا به خاطر بسپار</span>
                    </div>
                    <Link href='/' className='form_forget'>رمز عبور فراموش کرده اید ؟</Link>
                    <button className="form_submit button_black" onClick={loginButton}>ورود</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Login