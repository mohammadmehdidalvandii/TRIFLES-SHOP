import React from 'react';
import style from './QuestionsContent.module.css';
import TitleCenter from '@/components/module/TitleCenter/TitleCenter';
import Accordion from '@/components/module/Accordion/Accordion';

function QuestionContent() {
  return (
    <section className={style.questionContent}>
        <div className="containers">
            <div className="row">
                <div className="col-12">
                    <TitleCenter
                        title='سوالات متداول'
                        desc='لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.'
                    />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                    <Accordion/>
                    <Accordion/>
                    <Accordion/>
                    <Accordion/>
                    <Accordion/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default QuestionContent