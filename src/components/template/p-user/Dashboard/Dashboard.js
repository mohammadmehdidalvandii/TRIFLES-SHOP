import React from 'react';
import style from './Dashboard.module.css';
import Box from '../Box/Box';



function Dashboard() {
  return (
    <section className={style.dashboard}>
        <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">    
                <Box/>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">    
                <Box/>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">    
                <Box/>
            </div>
        </div>
        <div className="row mt-2">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className={style.dashboard_item}>
                    <h6 className={style.dashboard_item_title}>آخرین خرید شما</h6>
                    <div className={style.dashboard_box}>
                            <h5 className={style.dashboard_box_name}>گل کلم</h5>
                            <span className={style.dashboard_box_code}>#731283</span>
                        <span className={style.dashboard_box_status}>ارسال شد</span>
                    </div>
                    <div className={style.dashboard_box}>
                            <h5 className={style.dashboard_box_name}>گل کلم</h5>
                            <span className={style.dashboard_box_code}>#731283</span>
                        <span className={style.dashboard_box_status}>ارسال شد</span>
                    </div>
                    <div className={style.dashboard_box}>
                            <h5 className={style.dashboard_box_name}>گل کلم</h5>
                            <span className={style.dashboard_box_code}>#731283</span>
                        <span className={style.dashboard_box_status}>ارسال شد</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className={style.dashboard_item}>
                    <h6 className={style.dashboard_item_title}>وضعیت خرید</h6>
                    <div className={style.dashboard_box}>
                            <h5 className={style.dashboard_box_name}>گل کلم</h5>
                            <span className={style.dashboard_box_code}>#731283</span>
                        <span className={style.dashboard_box_status}>درحال تایید</span>
                    </div>
                    <div className={style.dashboard_box}>
                            <h5 className={style.dashboard_box_name}>گل کلم</h5>
                            <span className={style.dashboard_box_code}>#731283</span>
                        <span className={style.dashboard_box_status}>ارسال به مشتری</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Dashboard