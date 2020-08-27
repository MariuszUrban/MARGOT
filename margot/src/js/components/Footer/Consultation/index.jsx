import React from 'react';
import Description from './Description';
import Form from './Form'
import "../../../../sass/_footer/_consultation/_index.scss";


export default function index() {
    return (
        <div className='consultationWrap col-lg-12'>
        <div className='part col-lg-4'><Description /></div>
        <div className='part col-lg-7'><Form /></div>            
        </div>
    )
}
