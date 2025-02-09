import {ContextOpen} from '../context/ContextOpen'
import { useContext } from 'react';
import { RxClock } from "react-icons/rx";


export const IsOpen = () => {

    const {isOpen} = useContext(ContextOpen)

    console.log(isOpen);
  return (
    <div className={`flex items-center gap-2 ${isOpen ? 'text-green-500': 'text-red-500'}`}>
        <RxClock/>
        {
          isOpen ? 'Aberto' : 'Fechado'    
        }
    </div>
  )
}
