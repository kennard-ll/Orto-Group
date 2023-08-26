import Image from "next/image";

const SwipeElem = () => {
    return (
        <div className="max-w-[900px] m-auto ss:flex justify-between items-center ">

            <div className="flex justify-center ss:hidden">
                <Image
                    width={300}
                    height={300}
                    src={'/img/karset/mainKarsetBg.png'}
                />
            </div>

            <div className="hidden ss:block">
                <Image
                    width={400}
                    height={400}
                    src={'/img/karset/mainKarsetBg.png'}
                />
            </div>

            <div className="text-start">
                <div className="flex items-center">
                    <Image
                        width={70}
                        height={70}
                        src={'/img/line.svg'}
                    />
                    <p className="ml-[8px] text-[14px] italic">Новая коллекция</p>
                </div>
                <h1 className="font-bold text-[36px] text-[#000]">
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
