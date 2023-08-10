import React from 'react';
import { Map, MapMarker } from "react-kakao-maps-sdk";
export default function MyMap(props) {
  console.log("맵 데이터", props)
  if (!props.data) {
    console.log("Data not available");
    return null; // 데이터가 없을 경우 빈 화면을 반환
  }

  const nameAndLatLng = props.data.map(item => [item.festivalName, item.latitude, item.longitude])
  console.log("nameAndLatLng", nameAndLatLng)


  return (

    <Map
      center={{ lat: 36.477078, lng: 128.026691 }}   // 지도의 중심 좌표
      style={{ width: '800px', height: '600px' }} // 지도 크기
      level={14}                                   // 지도 확대 레벨
    >
      {nameAndLatLng.map((nameAndLatLng, index) => {
        const [name, lat, lng] = nameAndLatLng;

        // 유효한 lat와 lng 값을 가지는 경우에만 MapMarker를 생성합니다.
        if (lat !== null && lng !== null) {
          return (
            <MapMarker key={index} position={{ lat: parseFloat(lat), lng: parseFloat(lng) }}>
              <div style={{ color: "#070" }}>{name}</div>
            </MapMarker>
          );
        }

        return null; // 유효한 데이터가 아닌 경우 MapMarker를 생성하지 않습니다.
      })}
    </Map>

  );
}
