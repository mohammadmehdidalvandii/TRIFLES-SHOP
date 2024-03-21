import React from 'react';
import style from './Comments.module.css';
import CmCard from '@/components/module/CmCard/CmCard';
import CommentForm from '../CommentForm/CommentForm';

function Comments() {
  return (
    <section className={style.comments}>
        <div className="row">
            <div className="col-lg-6 col-md-12">
               <CmCard/>
               <CmCard/>
               <CmCard/>
               <CmCard/>
            </div>
            <div className="col-lg-6 col-md-12">
                <CommentForm/>
            </div>
        </div>
    </section>
  )
}

export default Comments