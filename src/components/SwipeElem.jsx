import Image from "next/image";

const SwipeElem = () => {
    return (
        <div className="w-[900px] m-auto flex justify-between items-center ">

            <Image
                width={400}
                height={400}
                src={'/img/karset/mainKarsetBg.png'}
            />

            <div className="text-start ml-[50px]">
                <div className="flex items-center">
                    <Image
                        width={80}
                        height={80}
                        src={'/img/line.svg'}
                    />
                    <p className="ml-[8px] text-[16px] italic">Новая коллекция</p>
                </div>
                <h1 className="font-bold text-[44px] text-[#000]">
                    Корректор для <br /> <span className="bg-[#FFCD00]">осанки</span>
                </h1>
                <p className="text-[12px] mt-[10px] mb-3">
                    Купите наш качественный ортопедический корректор для вашего здоровья
                </p>
                <button className="btnDef">Купить сейчас</button>
            </div>
        </div>
    );
};

export default SwipeElem;
