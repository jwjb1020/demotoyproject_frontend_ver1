import React, { useEffect, useState } from 'react';
import FestivalListSeachButton from './FestivalListSeachButton';

export default function FestivalListHeader({ addressData }) {
    const [selectedSido, setSelectedSido] = useState(""); // 선택된 시도 상태 저장
    const [sigunguList, setSigunguList] = useState([]); // 시군구 목록 상태 저장

    const handleSidoChange = (event) => {
        const selectedSidoValue = event.target.value;
        setSelectedSido(selectedSidoValue);
    };

    useEffect(() => {
        if (selectedSido !== "") {
            // 선택된 시/도에 해당하는 시군구 목록 필터링
            const filteredSigunguList = addressData.filter((item) => item.sido === selectedSido);
            setSigunguList(filteredSigunguList);
        }
    }, [selectedSido, addressData]);

    // 중복되지 않은 시/도 목록 추출
    const uniqueSidoList = [...new Set(addressData.map((item) => item.sido))].sort();

    return (
        <div className='flex justify-center'>
            <select value={selectedSido} onChange={handleSidoChange}>
                <option value="">시도 선택</option>
                {uniqueSidoList.map((item) => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}
            </select>

            {/* 선택된 시도에 따른 시군구 목록을 보여주는 select 박스 */}
            <select>
                <option value="">시군구 선택</option>
                {sigunguList.map((sigungu, index) => (
                    <option key={index} value={sigungu.sigungu}>
                        {sigungu.sigungu}
                    </option>
                ))}
            </select>

            <FestivalListSeachButton />
        </div>
    );
}
