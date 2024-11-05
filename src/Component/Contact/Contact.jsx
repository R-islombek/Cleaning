import './Contact.css'
import { useState } from 'react';
import axios from 'axios';
import Button from '../Button/Button';
import { t } from 'i18next';

function Contact() {

    const [loading,setloading] = useState(false);


    const sendMessage = (event) =>{
      setloading(true);
      event.preventDefault();
      const token =  "7067329402:AAEGunIJCoHOAJ1uF_oNy80ya2HbKsMJvgA";''
      const id = -1002022260815;
      const url = `https://api.telegram.org/bot${token}/sendMessage`;
      const name = document.getElementById("name").value;
      const addres = document.getElementById("addres").value;
      const email = document.getElementById("email").value;
      const reques = document.getElementById("reques").value;
      const number = document.getElementById("number").value;
      const day = document.getElementById("day").value;
      const note = document.getElementById("note").value;
      const textContent = `Ismi: ${name} \n Manzili: ${addres} \n Telefon_raqami: ${number} \n Emaili: ${email} \n Talablar: ${reques} \n kuni: ${day} \n Eslatma: ${note}`
      axios({
        url:url,
        method:'POST',
        data:{
          "chat_id": id,
          "text": textContent,
        }
  
      })
      .then((res) =>{
        document.getElementById("form").reset();
        alert("Yuborildi")
      }).catch((error) =>{
        console.log("yuborishda xotilik yuz berdi",error);
      }).finally(() =>{
        setloading(false);
      })
  
    }



  return (
    <div className="contact" id="Contact">
        <div className="container contact__container">
            <div className="contact__left">
  <h1 className="contact__title">{t("contact.title")}</h1>
  <p className="contact__text">{t("contact.text")}</p>
                <div className="contact__wrap">
                <i class="fa-solid fa-phone"></i>
                <p className="contact__subtext">(414) 567 - 2109</p>
                </div>
  <h3 className="contact__subtitle">{t("contact.name")}</h3>
  <p className="contact__text">{t("contact.text2")}</p>
               <div className="contact__btn">
               <Button title={t("contact.btn")} bg={"white"} cl={"#211F54"} wh={"250px"} shadow={"0px 2px 12px 0px #14142B14"}/>
               </div>
            </div>
            <form id="form" onSubmit={sendMessage}>
                <div>
  <label htmlFor="">{t("contact.input1")}</label><br/>
                <input id="name" type="text" required/>
                </div>
                <div>
  <label htmlFor="">{t("contact.input2")}</label><br/>
                <input id="number" type="text" required/><br/>
                </div>
                <div>
  <label htmlFor="">{t("contact.input3")}</label><br/>
                <input id="addres" type="text" required/><br/>
                </div>
                 <div>
  <label htmlFor="">{t("contact.input4")}</label><br/>
                <input id="email" type="text" required/><br/>
                 </div>
                <div>
  <label htmlFor="">{t("contact.label")}</label><br/>
                <input id="reques" type="text" required/><br/>
                </div>
                <div>
  <label htmlFor="">{t("contact.label2")}</label><br/>
                <input id="day" type="text" required/><br/>
                </div>
  <label htmlFor="">{t("contact.label3")}</label><br/>
                <input id="note" type="text" required/><br/>
                <button  class="form__btn" type='submit' loading={loading}>{loading?"Is being sent...":"Submit message"}</button>
            </form>
        </div>
    </div>
  )
}

export default Contact