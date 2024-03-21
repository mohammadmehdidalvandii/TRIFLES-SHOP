import React from 'react'
import style from './Newspapers.module.css';
import NewsCard from '@/components/module/NewsCard/NewsCard';


function Newspapers() {
  return (
    <section className={style.newspapers}>
        <div className="containers">
          <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                  <NewsCard/>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                  <NewsCard/>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                  <NewsCard/>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                  <NewsCard/>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                  <NewsCard/>
              </div>
          </div>
        </div>
    </section>
  )
}

export default Newspapers