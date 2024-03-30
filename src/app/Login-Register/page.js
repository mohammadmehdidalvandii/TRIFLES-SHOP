'use client'
import PageHeader from '@/components/module/PageHeader/PageHeader';
import Login from '@/components/template/login-register/Login/Login';
import Register from '@/components/template/login-register/Register/Register';
import React from 'react';

function page() {
  return (
    <>
        <PageHeader
            title='ورود یا ثبت نام'
        />
       <div className="containers">
       <div className="row mt-5">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <Login/>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <Register/>
            </div>
        </div>
       </div>
    </>
  )
}

export default page