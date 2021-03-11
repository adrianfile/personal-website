import React from 'react';
import Logo from '../Logo.png';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header class="header grid grid-cols-1">
            <div class="cols-span-1">
                <Link to="/">
                    <img class="absolute inset-2" draggable="false" src={ Logo } alt="My Logo"/>
                </Link>
            </div>
            <div class="absolute cols-span-1 flex text-center top-9 top-0 right-0 navbar">
                <Link to="/about" class="link mx-8 border-b-2">About</Link>
                <Link to="/journey" class="link mx-8 border-b-2">Journey</Link>
                <Link to="/project" class="link mx-8 border-b-2">Project</Link>
            </div>
        </header>
    );
};

export default Header;