import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchButton() {
  const [findLocation, setFindLocation] = useState("");
  const [findAcommodation, setFindAcmmodation] = useState("")
  const festivalName = useRef(null)

  const navigate =useNavigate();

  const FindHandler = () => {
    const data = {
      // findLocation,
      // findAcommodation,
      // festivalName.current
    }
    // 요청 설정
   
  
    console.log(festivalName.current.value)
    axios.get(`http://localhost:8080/search/find?festivalName=${festivalName.current.value}`)
      .then((response) => {

        const responseData = response.data;
        console.log('Response:', responseData);
        
        navigate("/searchPage",
          {state : {
            data: responseData
          }})

      })
      .catch((error) => {
        console.log('Error:', error);
      })
  };

  return (


    <div className="space-y-6" >
       <hr
        className="my-1 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-80 dark:opacity-100"
      />
      <div className='flex justify-evenly w-full bg-[#dfc5df] py-8 opacity-70 '>

        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            location
          </label>
          <input
            id="location"
            name="location"
            type="text"
            placeholder='지역을 입력해주세요.'

            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={(e) => setFindLocation(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            acommodation
          </label>
          <input
            id="acommodation"
            name="acommodation"
            type="text"
            placeholder='숙소를 입력해주세요.'

            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={(e) => setFindAcmmodation(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            festival
          </label>
          <input
            id=" festival"
            name=" festival"
            type="text"
            placeholder='축제를 입력해주세요.'
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            // onChange={(e) => setFestivalName(e.target.value)}
            ref={festivalName}
          />
        </div>

        <button onClick={FindHandler} className=' bg-[#FFCCCC] rounded-lg border-double border-2 w-40 font-Cafe24Shiningstar font-bold text-xl' >
          검색
        </button>

      </div>
      <hr
        className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-80 dark:opacity-100"
      />

    </div>



  )
}
