import React, { useEffect } from 'react';
import MyNav from '../components/MyNav';
import FestivalListHeader from '../components/FestivalList/FestivalListHeader';
import FestivalListMain from '../components/FestivalList/FestivalListMain';
import FestivalListFooter from '../components/FestivalList/FestivalListFooter';
import axios from "axios";

export default function FestivalPage() {
    

    useEffect(()=>{
        axios.get("http://localhost:8080/search/fesitvalList")
        .then((res)=>{
            const data = res.data;
            const sido= data.map((data)=>data["sido"])
            console.log(sido);
        })
        .catch((err)=>{
            console.log(err);
        })
        
        

    },[]);

    return (
        <>
            <MyNav />
            <FestivalListHeader/>
            <FestivalListMain/>
            <FestivalListFooter/>
        </>
    )
}
