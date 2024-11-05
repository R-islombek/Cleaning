import './Footer.css'
import logo from './img/logo.png'
import Button from '../Button/Button'
import { t } from 'i18next'

function Footer() {
 

  return (
    <div className="footer">
        <div className="container footer__container">
            <ul className="footer__list">
                <li className="footer__item">
  <h3 className="footer__name">{t("footer.name")}</h3>
                    <p className="footer__text">Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do eiusmo.</p>
                </li>
                <li className="footer__item">
  <h4 className="footer__title">{t("footer.title1")}</h4>
  <p className="footer__text">{t("footer.text1")}</p>
                    <a className="footer__link"href="tel:(414) 567 - 2109">(414) 567 - 2109</a><br/>
                    <a className="footer__link" href="email">contact@cleaning.com</a>
                </li>
                <li className="footer__item">
  <h3 className="footer__title">{t("footer.title2")}</h3>
  <h3 className="footer__title">{t("footer.title3")}</h3>
  <p className="footer__text">{t("footer.text2")}</p>
  <h3 className="footer__title">{t("footer.title4")}</h3>
  <p className="footer__text">{t("footer.text3")}</p>
                </li>
                <li className="footer__item">
  <h3 className="footer__title">{t("footer.title5")}</h3>
                <a className="footer__sublink" href="tel:(414) 567 - 2109">(414) 567 - 2109</a>
                <p className="footer__text">Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do eiusmod.</p>
               <div className="footer__btn">
               <Button title={t("footer.btn")} wh={"250px"}/>
               </div>
                </li>
            </ul>
            <hr/>
            <div className="footer__box">
                <a href="App.jsx"><img className="footer__img" src={logo} alt=""/></a>
  <p className="footer__subtext">{t("footer.text4")}</p>
            </div>
        </div>
    </div>
  )
}

export default Footer