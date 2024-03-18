"use client"
import React from "react";
import style from "./FeedBack.module.css";
import TitleCenter from "@/components/module/TitleCenter/TitleCenter";
import CommentCard from "@/components/module/CommentCard/CommentCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";

function FeedBack() {
  return (
    <section className={style.feedBack}>
      <div className="containers">
        <div className="row"  data-aos="fade-up">
            <div className="col-12">
          <TitleCenter text="مشتریان" title="مشتریان ما چه می گویند" />
            </div>
        </div>
           <div className="row mt-5" data-aos="fade-up">
                <div className="col-12">
                <Swiper
             slidesPerView={3}
             spaceBetween={30}
            rewind={true}
            navigation={true}
            loop={true}
            autoplay={{ delay: 5000 }}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination, Autoplay]}
            className="comment_sild"
            // style={{overflow :"unset"}}
          >
            <SwiperSlide>
            <CommentCard/>
            </SwiperSlide>
            <SwiperSlide>
            <CommentCard/>
            </SwiperSlide>
            <SwiperSlide>
            <CommentCard/>
            </SwiperSlide>
            <SwiperSlide>
            <CommentCard/>
            </SwiperSlide>
          </Swiper>
                </div>
           </div>
      </div>
       
    </section>
  );
}

export default FeedBack;
