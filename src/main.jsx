import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'
import {OpenProvider} from './context/ContextOpen'

createRoot(document.getElementById('root')).render(
  <OpenProvider>
    <App/>
  </OpenProvider>
  
)
