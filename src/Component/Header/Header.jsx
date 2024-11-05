import './Header.css'
import img from './img/img.png'
import Button from '../Button/Button'
import { useTranslation } from 'react-i18next';


function Header() {
  const { t, i18n } = useTranslation();
        const handleChange = (event) => {
            const selectedLanguage = event.target.value;
            i18n.changeLanguage(selectedLanguage);
        }
 

  return (
    <div id="Header" className="header">
        <div className="container header__container">
            <div className="header__box">
  <h1 className="header__tittle">{t("header.title")}</h1>
  <p className="header__text">{t("header.text")}</p>
                <div className="header__wrap">
                    <Button title={t("header.btn")}/>
                   <div className="header__sub">
                   <i class="fa-solid fa-phone"></i>
                    <p className="header__subtext"> (414) 567 - 2109</p>
                   </div>
                </div>
            </div>
            <img className="header__img" src={img} alt=""/>
        </div>
    </div>
  )
}

export default Header