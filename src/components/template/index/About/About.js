import TitleCenter from '@/components/module/TitleCenter/TitleCenter';
import style from './About.module.css';
import { FaCheck } from "react-icons/fa6";


function About() {
  return (
    <section className={style.about}>
        <div className="containers">
            <div className="row">
                <div className="col-12">
                    <TitleCenter
                        text='درباره ما'
                        title='محصولات ارگانیک ما برای سلامتی بدن انسان مفید هستند'
                        desc='لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.'        
                    />
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className={style.about_content}>
                        <h5 className={style.about_content_title}>محصولات ارگانیک ما سالم هستند؟</h5>
                        <p className={style.about_content_desc}>لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</p>
                        <ul className={style.about_items}>
                            <li className={style.about_item}>
                                <span className={style.about_item_icon}>
                                    <FaCheck/>
                                </span>
                                <span className={style.about_item_text}>به زندگی سالم برگردید</span>
                            </li>
                            <li className={style.about_item}>
                                <span className={style.about_item_icon}>
                                    <FaCheck/>
                                </span>
                                <span className={style.about_item_text}>سبک زندگی سالم</span>
                            </li>
                            <li className={style.about_item}>
                                <span className={style.about_item_icon}>
                                    <FaCheck/>
                                </span>
                                <span className={style.about_item_text}>آگاه شوید</span>
                            </li>
                            <li className={style.about_item}>
                                <span className={style.about_item_icon}>
                                    <FaCheck/>
                                </span>
                                <span className={style.about_item_text}>انرژی و متابولیسم</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src="/images/about-1.jpg" alt="about-img" className={style.about_img} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About