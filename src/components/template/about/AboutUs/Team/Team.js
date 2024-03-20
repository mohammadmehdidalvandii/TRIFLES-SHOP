import React from 'react';
import style from './Team.module.css';
import TitleCenter from '@/components/module/TitleCenter/TitleCenter';
import TeamCard from '@/components/module/TeamCard/TeamCard';




function Team() {
  return (
   <section className={style.team}>
        <div className="containers">
            <div className="row" data-aos='fade-up'>
                <div className="col-12">
                    <TitleCenter
                        text='تیم'
                        title='کشاورزان ما'
                        desc='لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.'
                    />
                </div>
            </div>
            <div className="row mt-5" >
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <TeamCard/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <TeamCard/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <TeamCard/>
                </div>
            </div>
        </div>
   </section>
  )
}

export default Team