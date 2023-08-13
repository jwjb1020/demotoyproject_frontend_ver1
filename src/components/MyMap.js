import React, { useEffect, useRef, useState } from 'react';
import { Map, MapMarker, ZoomControl } from "react-kakao-maps-sdk";
export default function MyMap(props) {
  //처리해야해 ㅠㅠㅠ
  const [state, setState] = useState()

  const latitude = props.latitude;
  const longitude = props.longitude;
  const festivalName = props.festivalName;

  console.log("map콘솔" + latitude, longitude, festivalName);


  const mapRef = useRef()
  const [style, setStyle] = useState({
    width: "100%",
    height: "450px",
  })


  useEffect(() => {
    const map = mapRef.current
    if (map) map.relayout()
  }, [style])




  return (


    <>
      <Map
        center={{
          // 지도의 중심좌표
          lat: latitude,
          lng: longitude,
        }}
        style={style}
        level={4} // 지도의 확대 레벨
        ref={mapRef}
        onCenterChanged={(map) => setState({
          level: map.getLevel(),
          center: {
            lat: map.getCenter().getLat(),
            lng: map.getCenter().getLng(),
          }
        })}
      // 지도 확대 레벨
      >
        <ZoomControl />

        <MapMarker position={{ lat: parseFloat(latitude), lng: parseFloat(longitude) }}>
          <div style={{ color: "#070" }}>{festivalName}</div>
        </MapMarker>
      </Map>
      <button
        onClick={() => setStyle({ width: "100%", height: "450px" })}
      >
        지도 크기 바꾸기
      </button>
    </>
  );
}
