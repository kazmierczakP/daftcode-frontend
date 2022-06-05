import React from 'react';
import {Routes, Route} from "react-router-dom";
import {InputForm} from "../InputForm";
import {PolicyPage} from "../policy";
import {AboutPage} from "../about";
import {ContactPage} from "../contact";

export const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<div>Welcome</div>}/>
            <Route path='*' element={<div>404</div>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/form' element={<InputForm defaultValue={'hello form'}/>}/>
            <Route path='/policy' element={<PolicyPage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
        </Routes>
    )
}