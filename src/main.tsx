import ReactDOM from 'react-dom/client'
import {StrictMode} from 'react'
import Navbar from '@/navigation/navbar.tsx'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <Navbar />
    <div className="w-auto block m-4"></div>
  </StrictMode>,
)
