import React, { useEffect, useState } from 'react';
import MyNav from '../components/MyNav';
import FestivalListHeader from '../components/FestivalList/FestivalListHeader';
import FestivalListMain from '../components/FestivalList/FestivalListMain';
import FestivalListFooter from '../components/FestivalList/FestivalListFooter';
import axios from "axios";

export default function FestivalPage() {
    const [festivalAddress, SetFestivalAddress] = useState();
    const [searchResult, setSearchResult] = useState([]); // 검색 결과를 저장할 상태 추가
    useEffect(() => {
        axios.get("http://localhost:8080/search/fesitvalList")
            .then((res) => {
                const data = res.data;
                console.log("data", data);
                SetFestivalAddress(data);


            })
            .catch((err) => {
                console.log(err);
            })



    }, []);

    // 검색 버튼을 눌렀을 때 실행되는 함수
    const searchFestival = (result) => {
        setSearchResult(result);
    }

    return (
        <div className='h-screen overflow-auto'>
            <MyNav />
            <FestivalListHeader  addressData={festivalAddress} onSearch={searchFestival} />
            {/* 검색 결과를 FestivalListMain 컴포넌트에 전달하여 렌더링 */}
            <FestivalListMain searchResult={searchResult} />
           
        </div>
    )
}
