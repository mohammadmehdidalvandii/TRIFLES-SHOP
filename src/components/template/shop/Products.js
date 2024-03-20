import React from 'react';
import style from './Products.module.css';
import TitleCenter from '@/components/module/TitleCenter/TitleCenter';
import ProductCard from '@/components/module/ProductCard/ProductCard';

function Products() {
  return (
    <section className={style.products}>
        <div className="container">
            <div className="row" data-aos='fade-up'>
                <div className="col-12">
                    <TitleCenter
                        text='فروشگاه ما'
                        title='محصولات مارو خریداری کنید'
                        desc='لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.'
                    />
                </div>
            </div>
            <div className="row mt-5" data-aos='fade-up'>
                <div className="col-12">
                    <div className={style.products_search}>
                        <input type="text" className={style.products_search_input} placeholder='نام محصول را جستجو کنید ...' />
                        <button className={`${style.product_search_btn} ${'button_black'}`}>جستجو</button>
                    </div>
                </div>
            </div>
            <div className="row mt-4" data-aos='fade-up'>
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
        </div>
    </section>
  )
}

export default Products