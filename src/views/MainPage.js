import React from "react";
import MyHeader from "../components/MyHeader";
import MyNav from "../components/MyNav";
import MyFooter from "../components/MyFooter";
import SearchButton from "../components/SearchButton";



export default function MainPage() {
  return (
    <>
      <MyNav />
      <MyHeader />
      <SearchButton />
      <MyFooter />
    </>
  )
}
