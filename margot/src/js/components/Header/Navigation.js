import React from 'react';
import "../../../sass/_header/_navigation.scss";
import TranslationContainer from '../Translation/TranslationContainer';
import { NavLink as Link } from "react-router-dom";



export default function Navigation() {
    return (
        <div className='navWrap'>
            <ul className="navListWrap"> 
                <li activeClassName='active'><Link exact to='/' ><TranslationContainer translationKey='main' /></Link></li>
                <li activeClassName='active'><Link to='/about'><TranslationContainer translationKey='about' /></Link></li>
                <li activeClassName='active'><Link to='/experience'><TranslationContainer translationKey='experience' /></Link></li>
                <li activeClassName='active'><Link to='/contact'><TranslationContainer translationKey='contact' /></Link></li>
            </ul>
        </div>
    )
}
