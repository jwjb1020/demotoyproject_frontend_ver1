import React from 'react'
import MyNav from '../components/MyNav'
import { useLocation } from 'react-router-dom'
import SearchButton from '../components/SearchButton';
import MyMap from '../components/MyMap';
import MyMapTable from '../components/MyMapTable';

export default function SearchPage() {

    //navigate로 전달한 데이터 받을때는 uselocation써야함
    const location = useLocation();
    let data = null;

    if (location.state && location.state.data) {
        data = location.state.data;

        console.log("데이터 넘어옴", data);
       
        // const datalist = data.map((data, index) => {
        //     console.log(data, index);
        // })
       

    } else {
        console.log("Data not available");
    }



    return (
        <div>
            <MyNav />
            <div className='flex justify-center '>
                <MyMapTable data={data} />
                <MyMap data={data} />
            </div>
            <SearchButton />

        </div>
    )
}
