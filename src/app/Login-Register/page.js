import PageHeader from '@/components/module/PageHeader/PageHeader';
import React from 'react';

function page() {
  return (
    <>
        <PageHeader
            title='ورود یا ثبت نام'
        />
       <div className="containers">
       <div className="row mt-5">
            <div className="col-lg-6 col-md-6 col-sm-12">login</div>
            <div className="col-lg-6 col-md-6 col-sm-12">register</div>
        </div>
       </div>
    </>
  )
}

export default page