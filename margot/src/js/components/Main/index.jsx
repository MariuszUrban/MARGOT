import React from "react";
import "../../../sass/_main/_index.scss";

export default function index() {
  return (
    <>
      <div className="flex-grid mainWrap">
        <div className="col-xs-4 mainWrapImage">
          <img src="https://i.ibb.co/yhbGgwR/main.png" alt="main" border="0" />
        </div>
        <div className="col-xs-4 mainWrapHeader">
            
            <div className='roww HeaderTitle'>
            <h1> Serce</h1>
            <h1>Empatia</h1>
            <h1>Zaangażowanie</h1>
            </div>
           
            <div className='roww DescTitle'>
                <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
                nostrum quis voluptatibus maxime iste voluptates, consequatur
                consectetur et delectus nulla consequuntur iure eius, doloremque
                eligendi! Laborum ipsam laboriosam nulla maxime? Suscipit itaque
                voluptates nemo voluptate fuga similique voluptatibus ad eligendi.
                </span>
          </div>

        <div className='roww buttonMore'>
            <button className='btnMore'>Więcej</button>
        </div>

        </div>
        <div className="col-xs-4 mainWrapImage"> <img
            src="https://i.ibb.co/ZWjswG6/main-window.png"
            alt="main-window"
            border="0"
          /></div>
      </div>
    </>
  );
}
