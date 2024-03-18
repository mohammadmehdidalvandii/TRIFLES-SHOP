import React from 'react';
import style from './Blog.module.css';
import TitleCenter from '@/components/module/TitleCenter/TitleCenter';
import ArticleCard from '@/components/module/ArticleCard/ArticleCard';


function Blog() {
  return (
    <section className={style.blog}>
        <div className="containers">
            <div className="row">
                <div className="col-12">
                    <TitleCenter
                        text='وبلاگ ما'
                        title='مقالات و اخبار'
                        desc='لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.'
                    />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <ArticleCard/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <ArticleCard/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <ArticleCard/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blog