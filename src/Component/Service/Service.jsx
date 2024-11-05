import './Service.css'
import Button from '../Button/Button'
import Card from '../Card/Card'
import { t } from 'i18next'
import { useState, useEffect } from 'react'
import bino from './img/bino.png'
import home from './img/home.png'
import three from './img/three.png'


function Service() {
  const [data,setdata] = useState([])
  console.log(data)
  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=19477575a2d141ef9e5f593ad529ab45")
    .then((res) => res.json())
    .then((item) => setdata(item?.articles))
  },[])
 

  return (
    <div className="service">
      <div className="container service__container">
        <div className="service__wrap">
  <h1 className="service__title">{t("service.title")}</h1>
        <Button title={t("service.btn")} bg={"white"} cl={"#211F54"} border={"3px solid #EFF0F6"}/>
        </div>
        <div className="service__box">
          {/* {data?.length>0?data?.map((element,i)=>(
            <Card  img src={bino} title={element?.author} text={element?.title}/>
          )
          ):
          console.log("ma'lumot kelmadi")
} */}
        </div>
      </div>
    </div>
  )
}

export default Service