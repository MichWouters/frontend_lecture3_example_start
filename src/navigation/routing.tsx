import {FunctionComponent} from 'react'
import {Route, Routes} from "react-router-dom";
import Foo from "@/pages/foo/foo.tsx";
import Bar from "@/pages/bar/bar.tsx";
import Home from "@/pages/home/home.tsx";
import Class from "@/pages/class/class.tsx";
import PageNotFound from "@/pages/404/pageNotFound.tsx";

const Routing: FunctionComponent = () => {
  return <Routes>
    <Route path="/foo" element={<Foo />} />
    <Route path="/bar" element={<Bar />} />
    <Route path="/" element={<Home />} />
    <Route path="/class" element={<Class />}/>
    <Route path="*" element={<PageNotFound />} />
  </Routes>
}

export default Routing
