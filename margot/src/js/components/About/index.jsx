import React from "react";
import "../../../sass/_about/_index.scss";

export default function index() {
  return (
    <div className="aboutWrap flex-grid">
      <div className="coll-xs-6 aboutWrapHeader">

        <div className="roww aboutTitle">
          <h1> Zaufanie </h1>
          <h1>To lata doświadczenia</h1>
        </div>

        <div className="roww aboutDescTitle">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
            nostrum quis voluptatibus maxime iste voluptates, consequatur
            consectetur et delectus nulla consequuntur iure eius, doloremque
            eligendi! Laborum ipsam laboriosam nulla maxime? Suscipit itaque
            voluptates nemo voluptate fuga similique voluptatibus ad eligendi.
          </p>
        </div>

        <div className='recommendations'>
                <h1 className='recommendationsTitle'> Oto co mówią o mnie rodziny moich podopiecznych:</h1>
        </div>

        <div className='opinions'>
            karuzela z opiniami
        </div>
      </div>
      <div className="col-xs-6 aboutWrapImage">
        <img
          src="https://i.ibb.co/k0YLkT2/about-1.png"
          alt="about-1"
          border="0"
        />
      </div>
    </div>
  );
}
