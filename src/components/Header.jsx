import { LuShoppingBasket } from "react-icons/lu";

export const Header = () => {
    return (

        <>
            <div className="h-50 w-full flex justify-end bg-[url('/src/assets/cabezalho.jpg')] bg-cover bg-center">
                

                <div className="h-10 w-10 bg-zinc-200 rounded-full flex items-center
                justify-center text-2xl mt-4 mr-4">
                    <LuShoppingBasket />
                </div>
            </div>
        </>


    )
}





