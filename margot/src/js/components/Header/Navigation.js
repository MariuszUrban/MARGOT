import React from 'react';
import "../../../sass/_header/_navigation.scss";
import LangSwitchContainer from '../LangSwitch/LangSwitchContainer'


export default function Navigation() {
    return (
        <div className='navWrap'>
            <ul className="navListWrap"> 
                <li>Strona główna</li>
                <li>O mnie</li>
                <li>Doświadczenie</li>
                <li>Kontakt</li>
                <li><LangSwitchContainer /></li>
            </ul>
        </div>
    )
}
