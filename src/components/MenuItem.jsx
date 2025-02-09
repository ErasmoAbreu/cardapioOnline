import { GiHamburger, GiSteak } from "react-icons/gi";
import { FaPizzaSlice, FaIceCream } from "react-icons/fa";
import { LuBeef } from "react-icons/lu";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState } from "react";



const menu = [
    { text: 'Burgers', icon: <GiHamburger /> },
    { text: 'Pizzas', icon: <FaPizzaSlice /> },
    { text: 'Churrasco', icon: <LuBeef /> },
    { text: 'Sobremesas', icon: <FaIceCream /> },
    { text: 'Steaks', icon: <GiSteak /> },
]

export const MenuItem = () => {

    const [selectItem, setSelectItem] = useState('Burgers')
    console.log(selectItem)

    return (
        <div>

            <Swiper
                spaceBetween={20}
                slidesPerView={2}
                autoplay={{ delay: 3000 }}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1280: {
                        slidesPerView: 5,
                        spaceBetween: -40,
                    },
                }}
                className="w-full max-w-7xl"
            >

                {
                    menu.map((produtos, index) => (

                        <SwiperSlide key={index}>
                            <button className={`flex items-center justify-center gap-2 text-black
                                px-5 py-2 rounded-2xl my-2 w-full transform hover:scale-103 transition-all
                                xl:w-40 ${selectItem === produtos.text ? 'bg-amber-500 text-white' : 'bg-white shadow-md'}`}
                                onClick={() => setSelectItem(produtos.text)}
                                >
                                <span>{produtos.icon}</span>
                                <p>{produtos.text}</p>
                            </button>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}
