import './Navbar.css'
import logo from './img/logo.png'
import Button from '../Button/Button';
import { useTranslation } from 'react-i18next';

function Navbar() {
        const { t, i18n } = useTranslation();
        const handleChange = (event) => {
            const selectedLanguage = event.target.value;
            i18n.changeLanguage(selectedLanguage);
        }

 

    return (
        <div className="navbar">
            <div className="container navbar__container">
                <ul className="navbar__list">
                    <li className="navbar__item">
                        <a onClick={() => window.scrollTo({top:0})} className="navbar__link-logo" href="App.jsx"><img className="navbar__img" src={logo} alt="" /></a>
                    </li>
                    
                    <li className="navbar__item">
                        <a onClick={() => window.scrollTo({top:0})} className="navbar__link" href="#Header">{t("navbar.link1")}</a>
                    </li>
                    <li className="navbar__item">
                        <a onClick={() => window.scrollTo({top:0})} className="navbar__link" href="#About">{t("navbar.link2")}</a>
                    </li>
                    <li className="navbar__item">
                        <a onClick={() => window.scrollTo({top:0})} className="navbar__link" href="#Main">{t("navbar.link3")}</a>
                    </li>
                    <li className="navbar__item">
                        <a onClick={() => window.scrollTo({top:0})} className="navbar__link" href="#Section">{t("navbar.link4")}</a>
                    </li>
                    <li className="navbar__item">
                        <a onClick={() => window.scrollTo({top:0})} className="navbar__link" href="#Contact">{t("navbar.link5")}</a>
                    </li>
                </ul>
                
                <div className="navbar__wrapper">
                <select name="Lng" id="lng" onChange={handleChange} value={i18n.language}>
                    <option value="uz">UZ</option>
                    <option value="en">EN</option>
                </select>
                </div>
                <div className="buton">
                <Button title={t("navbar.btn_t")}/>
                </div>
            </div>
        </div>
        
    )
}

export default Navbar