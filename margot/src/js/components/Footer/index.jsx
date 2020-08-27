import React from 'react'
import '../../../sass/_footer/_index.scss'

import Consultation from './Consultation/index';
import Logotypes from '../Footer/Logotypes';
import SocialMedia from '../Footer/SocialMedia'; 

export default function Footer() {
    return (
        <div className='footerWrap'>
            <div className='footerInfoWrap'>
                    <div className='col-lg-2' ><Logotypes /></div>
                    <div className='col-lg-2'><SocialMedia /></div>
                    <div className='col-lg-8'><Consultation /></div>
            </div>
            
        </div>
    )
}
