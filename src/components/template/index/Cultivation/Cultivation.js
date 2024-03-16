import React from 'react';
import style from './Cultivation.module.css';
import { FaPlus } from "react-icons/fa6";
import { IoFishOutline } from "react-icons/io5";


function Cultivation() {
  return (
    <section className={style.cultivation}>
        <div className="containers">
        <div className="row">
            <div className="col-12">
                <div className={style.cultivation_title}>
                    <span className={style.cultivation_title_text}>زراعت</span>
                    <h4 className={style.cultivation_title_title}>دسته بندی های زراعت</h4>
                </div>
            </div>
        </div>
        <div className="row mt-5">
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className={style.cultivation_item}>
                    <div className={style.cultivation_item_content}>
                    <span className={style.cultivation_item_icon}>
                        <IoFishOutline/>
                    </span>
                    <span className={style.cultivation_item_type}>30 گونه</span>
                    <h6 className={style.cultivation_item_name}>ماهی بومی</h6>
                    <button className={style.cultivation_item_btn}>
                        <span className={style.cultivation_item_btnIcon}>
                            <FaPlus/>
                        </span>
                    </button>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className={style.cultivation_item}>
                    <div className={style.cultivation_item_content}>
                    <span className={style.cultivation_item_icon}>
                        <IoFishOutline/>
                    </span>
                    <span className={style.cultivation_item_type}>30 گونه</span>
                    <h6 className={style.cultivation_item_name}>ماهی بومی</h6>
                    <button className={style.cultivation_item_btn}>
                        <span className={style.cultivation_item_btnIcon}>
                            <FaPlus/>
                        </span>
                    </button>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className={style.cultivation_item}>
                    <div className={style.cultivation_item_content}>
                    <span className={style.cultivation_item_icon}>
                        <IoFishOutline/>
                    </span>
                    <span className={style.cultivation_item_type}>30 گونه</span>
                    <h6 className={style.cultivation_item_name}>ماهی بومی</h6>
                    <button className={style.cultivation_item_btn}>
                        <span className={style.cultivation_item_btnIcon}>
                            <FaPlus/>
                        </span>
                    </button>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className={style.cultivation_item}>
                    <div className={style.cultivation_item_content}>
                    <span className={style.cultivation_item_icon}>
                        <IoFishOutline/>
                    </span>
                    <span className={style.cultivation_item_type}>30 گونه</span>
                    <h6 className={style.cultivation_item_name}>ماهی بومی</h6>
                    <button className={style.cultivation_item_btn}>
                        <span className={style.cultivation_item_btnIcon}>
                            <FaPlus/>
                        </span>
                    </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Cultivation