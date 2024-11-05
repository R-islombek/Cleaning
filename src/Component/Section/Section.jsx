import './Section.css'
import Button from '../Button/Button'
import section1 from './img/section1.png'
import section2 from './img/section2.png'
import { t } from 'i18next'

function Section() {
 

  return (
    <div className="section" id="Section">
        <div className="container section__container">
            <hr/>
            <div className="section__top">
  <h1 className="section__title">{t("section.title")}</h1>
                <Button title={t("section.btn2")}/>
                <Button title={t("section.btn1")} border={"2px solid #EFF0F6"} shadow={" 0px 4px 10px 0px #14142B0A"} cl={"#211F54"} bg={"white"}/>
            </div>
            <ul className="section__list">
                <li className="section__item">
                    <img className="section__img" src={section1} alt=""/>
                    <div className="section__box">
  <h3 className="section__subtitle">{t("section.name")}</h3>
                        <p className="section__text">Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
                        <p className="section__subtext">Jan 28, 2022</p>
                    </div>
                </li>
                <li className="section__item">
                    <img className="section__img" src={section2} alt=""/>
                    <div className="section__box">
  <h3 className="section__subtitle">{t("section.text")}</h3>
                        <p className="section__text">Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
                        <p className="section__subtext">Feb 1, 2022</p>
                    </div>
                </li>

            </ul>

        </div>
   
     
    </div>
  )
}

export default Section