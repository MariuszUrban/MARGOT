import React from 'react';
import "../../../sass/_header/_navigation.scss";
import LangSwitchContainer from '../LangSwitch/LangSwitchContainer';
import TranslationContainer from '../Translation/TranslationContainer'


export default function Navigation() {
    return (
        <div className='navWrap'>
            <ul className="navListWrap"> 
                <li><TranslationContainer translationKey='main' /></li>
                <li><TranslationContainer translationKey='about' /></li>
                <li><TranslationContainer translationKey='experience' /></li>
                <li><TranslationContainer translationKey='contact' /></li>
                <li><LangSwitchContainer /></li>
            </ul>
        </div>
    )
}
