import {ContextOpen} from '../context/ContextOpen'
import { useContext } from 'react';

export const IsOpen = () => {

    const {isOpen} = useContext(ContextOpen)

    console.log(isOpen);
  return (
    <div>
        {
          IsOpen ? 'Aberto' : 'Fechado'     
        }
    </div>
  )
}
