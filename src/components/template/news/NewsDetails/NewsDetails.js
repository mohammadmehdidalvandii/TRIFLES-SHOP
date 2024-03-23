import React from 'react';
import style from './NewsDetails.module.css';
import NewsInfo from '../NewsInfo/NewsInfo';
import NewsContent from '../NewsContent/NewsContent';
import NewsSide from '../NewsSide/NewsSide';

function NewsDetails() {
  return (
    <section className={style.newsDetails}>
        <div className="containers">
            <div className="row">
                <div className="col-lg-8 col-md-12">
                 <NewsInfo/>
                 <NewsContent/>
                </div>
                <div className="col-lg-4 col-md-12">
                <NewsSide/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default NewsDetails