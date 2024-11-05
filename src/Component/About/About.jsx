import './About.css'
import img1 from './img/img1.png'
import img2 from './img/img2.png'
import img3 from './img/img3.png'
import Button from '../Button/Button'
import { t } from 'i18next'
function About() {
 

  return (
    <div className="about" id="About">
        <div className="container about__container">
  <h1 className="about__tittle">{t("about.title")}</h1>
  <p className="about__text">{t("about.text")}</p>
            <ul className="about__list">
                <li className="about__item">
                    <img className="about__img" src={img1} alt=""/>
  <h3 className="about__subtitle">{t("about.subtitle1")}</h3>
  <p className="about__subtext">{t("about.subtext1")}</p>
                </li>
                <li className="about__item">
                    <img className="about__img" src={img2} alt=""/>
                    <h3 className="about__subtitle">{t("about.subtitle2")}</h3>
                    <p className="about__subtext">{t("about.subtext2")}</p>
                </li>
                <li className="about__item">
                    <img className="about__img" src={img3} alt=""/>
                    <h3 className="about__subtitle">{t("about.subtitle3")}</h3>
                    <p className="about__subtext">{t("about.subtext3")}</p>
                </li>
            </ul>
            <div className="about__wrap">
                <div className="about__btn">
                <Button title={t("about.btn__t1")}/>
                </div>
                <div className="about__btn">
                <Button title={t("about.btn__t2")} cl={"#211F54"} bg={"white"} border={" 2px solid #EFF0F6"} shadow={"0px 4px 10px 0px #14142B0A"}/>
                </div>
            </div>
        </div>     
    </div>
  )
}

export default About
