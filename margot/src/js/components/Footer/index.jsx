import React from "react";
import "../../../sass/_footer/_index.scss";

import QuestionContainer from "../Footer/QuestionContainer";
import Logotypes from "../Footer/Logotypes";
import SocialMedia from "../Footer/SocialMedia";
import Form from '../Footer/Form'

export default function Footer({ indexState }) {
  console.log("footer props", indexState);
  return (
    <div className="footerWrap col-lg-12">
      {!indexState && (
        <>
          {" "}
          <div className="LWrap col-lg-3">
            <Logotypes />
          </div>
          <div className="space "></div>
          <div className="LWrap col-lg-3">
            <SocialMedia />
          </div>
          <div className="space "></div>
          <div className="LWrap col-lg-3">
            <QuestionContainer />
          </div>
        </>
      )}
      {indexState && 
    
     ( <>
       <Form />
     </>)}
    </div>
  );
}
