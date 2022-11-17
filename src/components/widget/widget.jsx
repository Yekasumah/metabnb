import React from "react";
import "./widget.css";

const Widget = ({ value }) => {
  return (
    <div className="widget-wrapper">
      <div className="widget-content">
        <img className="widget-img" src={value.image} alt="" />
        <div className="tem1">
          <p className="text1">{value.label1}</p>
          <p className="text2">{value.label2}</p>
        </div>
        <div className="tem2">
          <p className="text3">{value.label3}</p>
          <p className="text4">{value.label4}</p>
        </div>
        <div className="tem3">
          <img src={value.icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Widget;
