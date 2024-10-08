import ReactDOM from 'react-dom/client'
import {StrictMode} from 'react'
import Navbar from '@/navigation/navbar.tsx'
import './main.css'
import {BrowserRouter} from "react-router-dom";
import Routing from "@/navigation/routing.tsx";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <BrowserRouter>
      <Navbar/>
      <div className="w-auto block m-4">
        <Routing />
      </div>
    </BrowserRouter>
  </StrictMode>,
)
