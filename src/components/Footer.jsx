const Footer = () => {
    return (
        <>
            <footer className="max-w-[1080px] w-[90%] m-auto ss:flex items-center justify-between md:mt-[30px]">
                <div>
                    <h3 className="font-semibold">Адрес</h3>
                    <div className="flex items-center mt-[20px]">
                        <img src="/img/map.svg" alt="" />
                        <p className="text-[#000] ml-[20px] text-[14px] ss:w-[200px] sm:w-[300px]">Узбекистан, Самарканд, Амира Темура 14</p>
                    </div>
                    <div className="flex items-center mt-[10px]">
                        <img src="/img/mailBlack.svg" alt="" />
                        <p className="text-[#000] ml-[20px] text-[14px]">info@company.com</p>
                    </div>
                    <div className="flex items-center mt-[10px]">
                        <img src="/img/phoneBlack.svg" alt="" />
                        <p className="text-[#000] ml-[20px] text-[14px]">+998 99 123 45 67</p>
                    </div>
                </div>

                <div className="xs:flex ss:hidden">

                    <div className="mt-[20px]">
                        <h3 className="font-semibold">Меню</h3>
                        <p className="text-[#000] text-[14px] mt-[20px]">все продукты</p>
                        <p className="text-[#000] text-[14px] mt-[10px]">отзывы</p>
                        <p className="text-[#000] text-[14px] mt-[10px]">свяжитесь с нами</p>
                    </div>
                    <div className="mt-[20px] xs:ml-[30px]">
                        <h3 className="font-semibold">Социальные сети</h3>
                        <p className="text-[#000] text-[14px] mt-[20px]">facebook</p>
                        <p className="text-[#000] text-[14px] mt-[10px]">telegram</p>
                        <p className="text-[#000] text-[14px] mt-[10px]">instagram</p>
                    </div>

                </div>

                <div className="hidden ss:block mt-[20px] ">
                    <h3 className="font-semibold">Меню</h3>
                    <p className="text-[#000] text-[14px] mt-[20px]">все продукты</p>
                    <p className="text-[#000] text-[14px] mt-[10px]">отзывы</p>
                    <p className="text-[#000] text-[14px] mt-[10px]">свяжитесь с нами</p>
                </div>
                <div className="hidden ss:block mt-[20px] xs:ml-[30px]">
                    <h3 className="font-semibold">Социальные сети</h3>
                    <p className="text-[#000] text-[14px] mt-[20px]">facebook</p>
                    <p className="text-[#000] text-[14px] mt-[10px]">telegram</p>
                    <p className="text-[#000] text-[14px] mt-[10px]">instagram</p>
                </div>

            </footer>
            <div className="w-full border-t-[2px] border-[#858585] text-center mt-[20px] py-4">
                <p className="text-[12px] w-[60%] m-auto">Все права защищены © 2022 by Сухроб Равшанов</p>
            </div>
        </>
    );
};

export default Footer;