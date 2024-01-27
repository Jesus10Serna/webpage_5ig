import React from 'react'
import Header from "../components/header";
import Footer from "../components/footer"
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

const Services_content = () => {
    const params = useParams(); 
    const [service, setService] = useState('');
    useEffect(()=>{
        console.log("Params_Id:",params.service)
        setService(params.service)
      },[params.id])


  return (
    <div>
        <Header></Header>
        {<h1>Hola: {service}</h1>}
        <Footer></Footer>
    </div>
  )
}

export default Services_content
