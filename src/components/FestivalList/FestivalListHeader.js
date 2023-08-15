import React, { useEffect, useState } from 'react';
import FestivalListSeachButton from './FestivalListSeachButton';

export default function FestivalListHeader({ addressData, onSearch }) {
    const [selectedSido, setSelectedSido] = useState(""); // 선택된 시도 상태 저장
    const [selectedSigungu, setSelectedSigungu] = useState(""); // 선택된 시군구 상태 저장
    const [sigunguList, setSigunguList] = useState([]); // 시군구 목록 상태 저장

    // 시도 선택이 변경될 때 실행되는 함수
    const handleSidoChange = (event) => {
        const selectedSidoValue = event.target.value;
        setSelectedSido(selectedSidoValue);
        setSelectedSigungu(""); // 시도가 변경되면 시군구 선택 초기화
    };

    // 선택된 시도에 따라 시군구 목록을 업데이트
    useEffect(() => {
        if (selectedSido !== "") {
            // 선택된 시/도에 해당하는 시군구 목록 필터링
            const filteredSigunguList = addressData.filter((item) => item.sido === selectedSido);
            setSigunguList(filteredSigunguList);
        }
    }, [selectedSido, addressData]);

    // 중복되지 않은 시/도 목록 추출
    const uniqueSidoList = addressData ? [...new Set(addressData.map((item) => item.sido))].sort() : [];

    // 시군구 선택이 변경될 때 실행되는 함수
    const handleSigunguChange = (event) => {
        const selectedSigunguValue = event.target.value;
        setSelectedSigungu(selectedSigunguValue);
    };

    const handleSearch = (result) => {
        // 검색 결과를 FestivalPage 컴포넌트의 상태로 전달
        onSearch(result);
    };
    

    return (
        <div className='flex justify-center sticky top-0'>
            {/* 시도 선택 드롭다운 */}
            <select value={selectedSido} onChange={handleSidoChange}>
                <option value="">시도 선택</option>
                {uniqueSidoList.map((item) => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}
            </select>

            {/* 선택된 시도에 따른 시군구 목록 드롭다운 */}
            <select value={selectedSigungu} onChange={handleSigunguChange}>
                <option value="">시군구 선택</option>
                {sigunguList.map((sigungu, index) => (
                    <option key={index} value={sigungu.sigungu}>
                        {sigungu.sigungu}
                    </option>
                ))}
            </select>

            {/* FestivalListSeachButton 컴포넌트에 선택된 시도와 시군구 전달 */}
            <FestivalListSeachButton
                selectedSido={selectedSido}
                selectedSigungu={selectedSigungu}
                onSearch={handleSearch}
            />
        </div>
    );
}
