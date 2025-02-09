import imgLogo from '../assets/img/menuLogo.png'
import { FaStar } from "react-icons/fa";
import { IsOpen } from './IsOpen';


export const HeaderInfo = () => {



  return (
    <div className='flex justify-between items-center -mt-5 bg-[#242424] 
    rounded-t-3xl px-4 py-3 border-b border-zinc-700 md:w-6xl md:mx-auto'>

      <div className='flex items-center gap-2'>
        <img className='w-20' src={imgLogo} alt="logoMenu" />
        <div>
          <h2 className='text-xl font-semibold'>Menu Online</h2>
          <p className='opacity-50'>Fast-food</p>
        </div>
      </div>

      <div className='flex items-center border w-15 h-8 rounded-2xl justify-center gap-2'>
        <div className='text-amber-400'>
          <FaStar />
        </div>
        <p className='font-medium'>4.8</p>
      </div>

      <div>
        <IsOpen />
      </div>

    </div>
  )
}
