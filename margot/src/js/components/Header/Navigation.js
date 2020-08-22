import React from 'react';
import "../../../sass/_header/_navigation.scss";


export default function Navigation() {
    return (
        <div className='navWrap'>
            <ul className="navListWrap"> 
                <li>Strona główna</li>
                <li>O mnie</li>
                <li>Doświadczenie</li>
                <li>Kontakt</li>
                <li>PL/ DE/ ENG</li>
            </ul>
        </div>
    )
}
