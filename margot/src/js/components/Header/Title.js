import React from 'react'
import "../../../sass/_header/_title.scss";
import TranslationContainer from '../Translation/TranslationContainer'

export default function Logo() {
    return (
        <div className='titleWrap'>
            <h1><TranslationContainer translationKey='title' /></h1>
        </div>
    )
}
