import React from 'react';
import { useEffect, useState } from 'react';
export default function MyMap() {

    useEffect(() => {
        const mapScript = document.createElement('script');
    
        mapScript.async = true;
        mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.appkey="977eecb1471519e131bcb216c1c641da"}&autoload=false`;
    
        document.head.appendChild(mapScript);
    
        const onLoadKakaoMap = () => {
          window.kakao.maps.load(() => {
            const mapContainer = document.getElementById('map');
            const mapOption = {
              center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
              level: 3, // 지도의 확대 레벨
            };
            new window.kakao.maps.Map(mapContainer, mapOption);
          });
        };
        mapScript.addEventListener('load', onLoadKakaoMap);
      }, []);
    
      return (
        <div>
          <div id="map" className="w-[32rem] h-[32rem]"></div>
        </div>
      );
}
