import React from "react";
import "../../../sass/_footer/_logotypes.scss";

export default function Logotypes() {
  return (
    <div className="logoCommercialWrap">
    
      <div className="logoCommercialHeader">
        <h1>Aktualnie współpracuje z</h1>
      </div>
      
      <div className="logoCommercialLogo">
        <div className="logoPNGWrap">
          <img
            className="logoPNG"
            src="https://i.ibb.co/hgVQ5NH/aterima.png"
            alt="aterima"
            border="0"
          />
        </div>

        
        <div className='companyName'>
            <h1>
                ATERIMA
            </h1>
        </div>
      </div>
    </div>
  );
}
