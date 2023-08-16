import React, { useEffect, useState } from 'react';

export default function FestivalListMain({ searchResult }) {

  const itemsPerPage = 9; // 한 페이지당 보여줄 항목 수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태 추가
  useEffect(() => {

    // 검색 결과가 변경될 때마다 페이지 상태 초기화
    setCurrentPage(1);
  }, [searchResult]);
  // 전체 페이지 개수 계산
  const totalPages = Math.ceil(searchResult.length / itemsPerPage);

  const handlePageClick = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // 이전 페이지와 다음 페이지의 번호를 계산
  const prevPage = currentPage - 1 >= 1 ? currentPage - 1 : null;
  const nextPage = currentPage + 1 <= totalPages ? currentPage + 1 : null;

  // 페이지 그룹을 나누기 위한 계산
  const currentPageGroup = Math.ceil(currentPage / 10);
  const startPage = (currentPageGroup - 1) * 10 + 1;
  const endPage = Math.min(startPage + 9, totalPages);

  return (
    <div className=''>
      {searchResult.length != 0 ? <div className='flex flex-wrap justify-center'>
        {searchResult.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((item, index) => (
          <div key={index} className="max-w-sm rounded-md overflow-hidden shadow-lg my-4 mx-8 bg-[#6076a7]">
            <img className="w-full" src="assets/Link.png" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl text-slate-50 mb-2">{item.festivalName}</div>
              <p className="text-white text-base font-Myfont">축제 번호 : {item.festivalId}</p>
              <p className="text-white text-base font-Myfont">주소 : {item.address}</p>
              <p className="text-white text-base font-Myfont">홈페이지 : <a href={item.homepage} target='_blank'>{item.homepage}</a></p>
              <p className="text-white text-base font-Myfont">연락처 : {item.tel}</p>
              <p className="text-white text-base font-Myfont">축제내용 : {item.content}</p>
            </div>
          </div>
        ))}
      </div> : <div className='flex justify-center'>검색된 결과가 없습니다.</div>}



      {/* 페이징 컨트롤과 페이지 정보를 렌더링 */}
      <footer className="pagination flex justify-center mt-4">
        <button
          onClick={() => handlePageClick(prevPage)}
          disabled={!prevPage}
          className={`mr-2 ${!prevPage ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          이전 페이지
        </button>
        {startPage !== 1 && (
          <button onClick={() => handlePageClick(1)} className={`mx-2 ${currentPage === 1 ? 'font-bold' : ''}`}>
            1
          </button>
        )}
        {startPage !== 1 && <span className="mx-2">...</span>}
        {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageClick(pageNumber)}
            className={`mx-2 ${currentPage === pageNumber ? 'font-bold' : ''}`}
          >
            {pageNumber}
          </button>
        ))}
        {endPage !== totalPages && <span className="mx-2">...</span>}
        {endPage !== totalPages && (
          <button onClick={() => handlePageClick(totalPages)} className={`mx-2 ${currentPage === totalPages ? 'font-bold text-[#4c3455]' : ''}`}>
            {totalPages}
          </button>
        )}
        <button
          onClick={() => handlePageClick(nextPage)}
          disabled={!nextPage}
          className={`ml-2 ${!nextPage ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          다음 페이지
        </button>
      </footer>

    </div>
  );
}
