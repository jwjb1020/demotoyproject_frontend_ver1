import React from "react";
import MyHeader from "../components/MyHeader";
import MyNav from "../components/MyNav";
import MyFooter from "../components/MyFooter";
import SearchButton from "../components/SearchButton";
// import AutoSlide from "../components/autoslide/AutoSlide";



export default function MainPage() {
  return (
    <div className='h-screen overflow-auto scrollbar-hide'>
      <MyNav />
      <MyHeader />
      <SearchButton />
      {/* <AutoSlide/>/ */}
      <MyFooter />
    </div>
  )
}
