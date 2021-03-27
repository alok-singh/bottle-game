import React from "react";
import "./styles.css";

const Bottle = (props) => {
  const { liquidList, isSelected, onClick, id } = props;
  return (
    <div className={`bottle ${isSelected ? `selected` : ``}`} onClick={() => onClick(id)}>
      <div className="bottle-cap"></div>
      <div className="bottle-container">
        {liquidList.map((liquid) => {
          const height = `${100 * liquid.proportion}%`;
          return (
            <div
              className="liquid-item"
              style={{ height, background: liquid.color.value }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Bottle;
