import React, { useState } from 'react';
import {Link} from "react-router-dom";
import './styles.css';
import MenuIcon from '@mui/icons-material/Menu';

export const Navigation = () => {
    const [navigationVisible, setNavigationVisible] = useState<boolean>(true)
    const handleShowMobileNav = () => {
        setNavigationVisible(!navigationVisible)
    }

    return (
        <div className='Navigation'>
            <div>
                logo
                <MenuIcon onClick={handleShowMobileNav} className='Navigation-mobile'/>
            </div>
            {navigationVisible && <div className='Navigation-links'>
                <Link className='App-link' to={'/'}>Home</Link>
                <Link className='App-link' to={`/about`}>About</Link>
                <Link className='App-link' to={'/form'}>Form</Link>
                <Link className='App-link' to={'/policy'}>Policy</Link>
                <Link className='App-link' to={'/contact'}>Contact</Link>
            </div>}
        </div>
    )
}