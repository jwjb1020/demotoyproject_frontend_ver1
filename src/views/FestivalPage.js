import React, { useEffect, useState } from 'react';
import MyNav from '../components/MyNav';
import FestivalListHeader from '../components/FestivalList/FestivalListHeader';
import FestivalListMain from '../components/FestivalList/FestivalListMain';
import FestivalListFooter from '../components/FestivalList/FestivalListFooter';
import axios from "axios";

export default function FestivalPage() {
    const [festivalAddress, SetFestivalAddress] = useState();

    useEffect(()=>{
        axios.get("http://localhost:8080/search/fesitvalList")
        .then((res)=>{
            const data = res.data;
            console.log("data",data);
            SetFestivalAddress(data);
            
           
        })
        .catch((err)=>{
            console.log(err);
        })
        
        

    },[]);

    return (
        <>
            <MyNav />
            <FestivalListHeader addressData={festivalAddress}/>
            <FestivalListMain/>
            <FestivalListFooter/>
        </>
    )
}
