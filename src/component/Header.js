import React from 'react';
import WhiteLogo from '../WhiteLogo.png';
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header class="header grid grid-cols-1">
            <div class="cols-span-1">
                <Link to="/">                    
                    <img class="img logo absolute inset-2" draggable="false" src={ WhiteLogo } alt="Logo Putih"/>
                </Link>
            </div>
        </header>
    );
};

export default Header;