import React from "react"




export default function MyHeader() {
    return (
        <div className="relative isolate overflow-hidden bg-[#cce8ff] py-24 sm:py-32">

            <div
                className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                aria-hidden="true"
            >
                <div
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div
                className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                aria-hidden="true"
            >
                <div
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
           
                <div className="mx-auto max-w-7xl px-6  gap-10 flex flex-row lg:px-8 lg:content-start">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight text-[#4F4F4F] sm:text-6xl">Fesit. 당신의 <span className="font-semibold text-[#0881A3]">모든 K-축제</span></h2>
                    <p className="mt-7 text-4xl leading-12 text-[#4F4F4F] font-Cafe24Shiningstar">
                        우리의 추억은 소중하니까,<br />
                        당신에게 필요한 축제!
                    </p>
                    <p className="mt-7 text-2xl text-[#4F4F4F] font-bold">숙소에서 가장 가까운 축제를 찾아보세요.</p>
                </div>
                <img className="ml-8 lg:container mx-auto" src="assets/mainImage.png" alt="메인 이미지"/>
                
            
                
                    
                </div>
            </div>
        
    )
}
