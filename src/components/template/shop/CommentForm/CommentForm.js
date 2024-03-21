import React from 'react';
import style from './CommentForm.module.css';

function CommentForm() {
  return (
    <div className={style.commentForm}>
    <input type="text" className={style.commentForm_input}  placeholder='نام شما'/>
    <input type="text" className={style.commentForm_input}  placeholder='ایمیل شما'/>
    <textarea className={style.commentForm_text} placeholder='پیام شما'></textarea>
    <button className={`${style.commentForm_btn} ${'button_black'}`}>ارسال</button>
</div>
  )
}

export default CommentForm