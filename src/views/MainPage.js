import React from "react";
import MyHeader from "../components/MyHeader";
import MyNav from "../components/MyNav";
import MyFooter from "../components/MyFooter";
import SearchButton from "../components/SearchButton";



export default function MainPage() {
  return (
    <div className='h-screen overflow-auto'>
      <MyNav />
      <MyHeader />
      <SearchButton />
      <MyFooter />
    </div>
  )
}
