import React from 'react'
import style from './Shop.module.css';
import TitleCenter from '@/components/module/TitleCenter/TitleCenter';
import ProductCard from '@/components/module/ProductCard/ProductCard';
import Link from 'next/link';



function Shop() {
  return (
    <section className={style.shop}>
        <div className="containers">
            <div className="row">
                <div className="col-12">
                    <TitleCenter
                        text='به فروشگاه ما مراجعه کنید'
                        title='محصولات ما را بخرید'
                        desc='لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.'
                    />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <ProductCard/>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <ProductCard/>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <ProductCard/>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <ProductCard/>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                    <Link href='/' className={`${style.shop_link} ${"button_black"}`}>مشاهده بیشتر</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Shop