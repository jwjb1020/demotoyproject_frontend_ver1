import React from 'react'
import MyNav from '../components/MyNav'
import SearchButton from '../components/SearchButton';
import MyMap from '../components/MyMap';
import MyMapTable from '../components/MyMapTable';
import { useRecoilValue } from 'recoil';
import { searchResultState } from '../recoilState';

export default function SearchPage() {

    //navigate로 전달한 데이터 받을때는 uselocation써야함
    // const location = useLocation();
    // let data = null;
    // if (location.state && location.state.data) {
    //     data = location.state.data;

    //     console.log("데이터 넘어옴", data);
       
    //     // const datalist = data.map((data, index) => {
    //     //     console.log(data, index);
    //     // })
       

    // } else {
    //     console.log("Data not available");
    // }

    //recoil에서 받아온 전역 변수
    const searchResults = useRecoilValue(searchResultState);

    console.log("search", searchResults)

    return (
        <div>
            <MyNav />
          
            <div className='flex justify-center '>
                <MyMapTable data={searchResults} />
                <MyMap data={searchResults} />
            </div>
            <SearchButton />

        </div>
    )
}
