import React, { useEffect, useRef, useState } from 'react'
import { Map, MapMarker, ZoomControl } from 'react-kakao-maps-sdk';
import { useRecoilValue } from 'recoil';
import { searchResultState } from '../recoilState';
import { useNavigate } from 'react-router-dom';


export default function MyAcoMap(props) {
    const navigate = useNavigate();
    const mapRef = useRef()
    const [style, setStyle] = useState({
        width: "100%",
        height: "100%",
    })
    const index = props.index;
    const acoData = props.acoData;
    const hoveredMarkerIndex = props.hoveredMarkerIndex;
    console.log("props" + index, acoData);
    // 전역변수에 있는 축제 경도 위도 가져오기
    const addressResult = useRecoilValue(searchResultState);

    let lat = ""
    let lng = ""
    let festivalName = ""
    if (addressResult && addressResult[index]) {
        console.log(addressResult);
        lat = addressResult[index]["latitude"]
        lng = addressResult[index]["longitude"]
        festivalName = addressResult[index]["festivalName"]
        console.log(lat, lng);
    }

    useEffect(() => {
        if (!lat || !lng) {
            alert("축제의 위도, 경도 데이터가 없습니다.");
            navigate('/searchPage'); // navigate 함수를 useEffect 안에서 호출
        }
    }, [lat, lng]);

    //축제 주변에 있는 숙소 경도 위도 가져오기
    // acoData를 매핑하기 전에 정의되었는지 확인하는 체크
    const acoName = acoData ? acoData.map((item) => ({
        name: item.acommodationName,
        latitude: item.latitude,
        longitude: item.longitude
    })) : [];
    console.log(acoName);




    useEffect(() => {
        const map = mapRef.current
        if (map) map.relayout()
    }, [style])
    return (
        <>
            <Map // 지도를 표시할 Container
                center={{
                    // 지도의 중심좌표
                    lat: lat,
                    lng: lng
                }}
                style={
                    style
                }
                level={6} // 지도의 확대 레벨
                ref={mapRef}
            >
                <ZoomControl />

                {acoName.map((position, index) => (
                    <MapMarker
                        key={index}
                        position={{
                            lat: position.latitude,
                            lng: position.longitude
                        }} // 마커를 표시할 위치
                        image={{
                            src: index === hoveredMarkerIndex ? "assets/flag.png" : "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png", // 마커이미지의 주소입니다
                            size: {
                                width: 24,
                                height: 35
                            }, // 마커이미지의 크기입니다
                       
                            

                        }}
                        title={position.name} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                    />
                ))}
                <MapMarker // 마커를 생성합니다
                    position={{
                        // 마커가 표시될 위치입니다
                        lat: lat,
                        lng: lng,
                    }}
                >
                    <span style={{ color: "#070" }}>{festivalName}</span>
                </MapMarker>
            </Map>


        </>
    )
}
