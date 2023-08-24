"use client"
const Slide = () => {
    return (
        <div className="mt-[-90px]">
            <img src="/img/backCorrector.png" className="w-[180px] m-auto" alt="" />
            <div className="text-start">
                <div className="flex items-center justify-between w-[260px]">
                    <div className="w-[100px] h-[3px] bg-[#FFCD00]"></div>
                    <p className="italicWeight font-[300]">Новая коллекция</p>
                </div>
                <p className="text-[32px] font-bold">Корректор для <span className="bg-[#FFCD00]">Осанки</span></p>
                <p className="text-[14px] mt-[15px]">Покупайте нашу качественную корректор для вашего здоровья</p>
                <button className='bg-[#FFCD00] px-4 py-1 text-[14px] rounded-[14px] mt-[15px] font-medium'>КУПИТЬ СЕЙЧАС</button>
            </div>
        </div>
    );
};

export default Slide;