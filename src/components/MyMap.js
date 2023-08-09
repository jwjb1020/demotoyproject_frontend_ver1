import React from 'react';
import { Map, MapMarker } from "react-kakao-maps-sdk";
export default function MyMap(props) {
  console.log("맵 데이터", props)
  if (!props.data) {
    console.log("Data not available");
    return null; // 데이터가 없을 경우 빈 화면을 반환
  }
  const nameAndLatLng = props.data.map(item=>[item.festivalName,item.latitude,item.longitude])
  console.log(nameAndLatLng)


  return (
    <Map
      center={{ lat: 33.5563, lng: 126.79581 }}   // 지도의 중심 좌표
      style={{ width: '800px', height: '600px' }} // 지도 크기
      level={3}                                   // 지도 확대 레벨
    >
      {nameAndLatLng.map((nameAndLatLng,index) => ( 
      <MapMarker key ={index} position={{ lat: nameAndLatLng[1], lng: nameAndLatLng[2] }}>
        <div style={{ color: "#000" }}>{nameAndLatLng[0]}</div>
      </MapMarker>
      ))}
     
    </Map>

  );
}
