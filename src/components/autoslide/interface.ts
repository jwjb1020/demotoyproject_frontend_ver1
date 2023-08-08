// 슬라이드에 들어가는 요소들의 타입 선언
export interface SlideProps {
    img: string;
    imgTitle: string;
    imgDesc: string;
  }
  
  // 슬라이드에 들어갈 요소들
  export const slideArr: SlideProps[] = [
    {
      img: "https://res.cloudinary.com/jnto/image/upload/w_1640,h_1050,c_fill,f_auto,fl_lossy,q_auto/v1/media/filer_public/f9/45/f9459f0d-3215-4f92-b02d-b1ae6062ac42/barrierfree_manvisual_20211227-04_jrkevq",
      imgTitle: "배리어프리 일본 여행",
      imgDesc: "Feel free with Japan",
    },
    {
      img: "https://res-3.cloudinary.com/jnto/image/upload/w_1640,h_1050,c_fill,f_auto,fl_lossy/v1/media/filer_public/68/35/683536e0-206b-4abf-99ad-b91b427dd637/main_slide_20210810-01_fsaiuu",
      imgTitle: "",
      imgDesc: "",
    },
    {
      img: "https://res-3.cloudinary.com/jnto/image/upload/w_1640,h_1050,c_fill,f_auto,fl_lossy/v1/media/filer_public/47/81/478165c4-72ce-4c1f-ab1a-f7a176022c04/main-slide-20210116_img_2_thhwyq",
      imgTitle: "영상보기 클릭",
      imgDesc: "당신을 기다리며",
    },
    {
      img: "https://res-1.cloudinary.com/jnto/image/upload/w_1640,h_1050,c_fill,f_auto,fl_lossy/v1/media/filer_public/0f/1e/0f1e1e24-a774-4af7-819d-3fdfa9b4de90/main_slide_0709_otfzst",
      imgTitle: "영상보기 클릭",
      imgDesc: "그날을 기다리며",
    },
    {
      img: "https://res-1.cloudinary.com/jnto/image/upload/w_1640,h_1050,c_fill,f_auto,fl_lossy/v1/media/filer_public/c1/ef/c1efe731-88d0-4667-9dae-dcba59ad6f27/img_covid_top_agalhe",
      imgTitle: "코로나19: 모두에게 더욱 안전한 여행을 위하여",
      imgDesc: "달라진 일상 속의 일본 여행",
    },
    {
      img: "https://res-4.cloudinary.com/jnto/image/upload/w_1640,h_1050,c_fill,f_auto,fl_lossy/v1/media/filer_public/0e/74/0e74ea3d-e108-425a-8856-ae8dbdf2a984/main_slide_0630_03_cvvsho",
      imgTitle: "영상보기 클릭",
      imgDesc: "hope lights the way",
    },
    {
      img: "https://res-3.cloudinary.com/jnto/image/upload/w_1640,h_1050,c_fill,f_auto,fl_lossy/v1/media/filer_public/f4/14/f414a29c-779d-4aab-91c1-c21fd0d3af3d/main_slide_20210416-01_rsrfjx",
      imgTitle: "Experiences in Japan",
      imgDesc: "잊지 못할 일본에서의 경험",
    },
    {
      img: "https://res-1.cloudinary.com/jnto/image/upload/w_1640,h_1050,c_fill,f_auto,fl_lossy/v1/media/filer_public/98/d5/98d53c50-6cd1-4f3d-a3c8-f71ddbdcbee5/main_slide_20210416-02_fcrom8",
      imgTitle: "Memories in the Making",
      imgDesc: "Welcome to the official tourism website of Japan",
    },
  ];
  
  // 슬라이드 버튼에 사용될 요소들의 타입 선언
  export interface DirectionBtnType {
    direction: string;
    onClick: () => void;
  }
  
  // 페이지네이션 버튼에 사용될 요소의 타입 선언
  export interface PaginationBtnType {
    slideIndex: number;
    setSlideIndex: React.Dispatch<React.SetStateAction<number>>;
  }