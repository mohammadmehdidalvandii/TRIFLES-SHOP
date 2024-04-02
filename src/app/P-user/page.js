import React from 'react';
import style from '../../style/p-user.module.css';

function page() {
  return (
    <section className={style.p_user}>
        <div className="containers">
            <div className="row">
                <div className="col-lg-9 col-md-9 col-sm-12">
                    sidebar 
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                    content
                </div>
            </div>
        </div>
    </section>
  )
}

export default page