import './Main.css'
import main from './img/main.png'
import Button from '../Button/Button'
import { t } from 'i18next'

function Main() {
 

  return (
    <div className="main" id="Main">
        <div className="container main__container">
            <img className="main__img" src={main} alt=""/>
            <div className="main__box">
  <p className="main__text">{t("main.title")}</p>
  <h1 className="main__title">{t("main.name")}</h1>
                <p className="main__text">{t("main.text")}.</p>
                <div className="main__wrap">
                    <Button title={t("service.btn")}/>
                    <div className="main__subbox">
                    <i class="fa-solid fa-phone"></i>
                    <p className="main__subtext">(414) 567 - 2109</p>
                    </div>

                </div>
            </div>
        </div>  
    </div>
  )
}

export default Main