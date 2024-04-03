import React from 'react';
import style from './Wishlist.module.css';
import ProductCard from '@/components/module/ProductCard/ProductCard';

function Wishlist() {
  return (
    <section className={style.wishlist}>
        <div className="row">
            <div className="col-12">
                <h5 className={style.wishlist_title}>لیست مورد علاقه مندی </h5>
            </div>     
        </div>
        <div className="row mt-5">
            {/* <div className="col-12">
                <p className={style.wishlist_empty}>مورد علاقه ای ندارید </p>
            </div> */}
            <div className="col-lg-4 col-md-6 col-sm-12">
                <ProductCard/>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <ProductCard/>
            </div>
        </div>
    </section>
  )
}

export default Wishlist