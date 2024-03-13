"use client"
import Link from 'next/link'
import style from './Banner.module.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination ,Autoplay } from 'swiper/modules';

function Banner() {
  return (
    <section className={style.banner}>
        <div className="containers">
        <Swiper
         rewind={true}
         navigation={true}
         loop={true}
         autoplay={{ delay: 5000 }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination , Autoplay]}
        className="mySwiper home-slider"
      >
        <SwiperSlide>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className={style.banner_content}>
                        <h1 className={style.banner_content_title}>
                            سبزیجات و میوه ها برای سلامتی مفید هستند
                        </h1>
                        <p className={style.banner_content_paraph}>
                        لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.
                        </p>
                        <div className={style.banner_content_buttons}>
                            <Link href='/About' className={`${style.banner_content_btnLink} ${'button_black'}`}>درباره ما</Link>
                            <Link href='/' className={`${style.banner_content_btnLink} ${'button_white'}`}>شرکت ما</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src="/images/banner-1.png" alt="banner-slied" className={style.banner_img} />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className={style.banner_content}>
                        <h1 className={style.banner_content_title}>
                            سبزیجات و میوه ها برای سلامتی مفید هستند
                        </h1>
                        <p className={style.banner_content_paraph}>
                        لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.
                        </p>
                        <div className={style.banner_content_buttons}>
                            <Link href='/About' className={`${style.banner_content_btnLink} ${'button_black'}`}>درباره ما</Link>
                            <Link href='/' className={`${style.banner_content_btnLink} ${'button_white'}`}>شرکت ما</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src="/images/banner-2.png" alt="banner-slied" className={style.banner_img} />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className={style.banner_content}>
                        <h1 className={style.banner_content_title}>
                            سبزیجات و میوه ها برای سلامتی مفید هستند
                        </h1>
                        <p className={style.banner_content_paraph}>
                        لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.
                        </p>
                        <div className={style.banner_content_buttons}>
                            <Link href='/About' className={`${style.banner_content_btnLink} ${'button_black'}`}>درباره ما</Link>
                            <Link href='/' className={`${style.banner_content_btnLink} ${'button_white'}`}>شرکت ما</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src="/images/banner-3.png" alt="banner-slied" className={style.banner_img} />
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
        </div>
    </section>
  )
}

export default Banner