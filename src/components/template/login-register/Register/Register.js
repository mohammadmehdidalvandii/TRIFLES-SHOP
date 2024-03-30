import React, { useState } from 'react';
import style from './Register.module.css';
import swal from 'sweetalert';


function Register() {
  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  const registerSubmit = async (event)=>{
    event.preventDefault()
    // validations 

    const user ={name , email , password }
    
    const res = await fetch('/api/auth/Signup',{
      method:"POST",
      headers:{ "Content-Type": "application/json"},
      body:JSON.stringify(user)
    })
    const data = res.json()


    if(res.status === 201){
      swal(
        {
          text:"ثبت نام شما موفق بود",
          icon:"success",
          button:"ok",
        }
      )
      setName("")
      setEmail("")
      setPassword("")
    }else if(res.status === 422){
      swal(
        {
          Text:" این اطلاعات قبل ثبت شد",
          icon:"error",
          button:"ok",
        }
      )
    }
  } 

  return (
    <section className={style.register}>
        <div className="row">
            <div className="col-12">
                <h3 className={style.register_title}>ایجاد حساب کاربری</h3>
            <form action="#" className='form'>
                    <input
                      value={name}
                      onChange={(e)=> setName(e.target.value)}
                     type="text"
                      className='form_input' 
                       placeholder='نام کاربری *'/>
                    <input
                      value={email}
                      onChange={(e)=> setEmail(e.target.value)}
                     type="email"
                      className='form_input' 
                       placeholder='ایمیل *'/>
                    <input
                      value={password}
                      onChange={(e)=> setPassword(e.target.value)}
                     type="password"
                      className='form_input' 
                       placeholder='رمزعبور *'/>
                    <button className="form_submit button_black" onClick={registerSubmit}>ثبت نام</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Register