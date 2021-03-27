import React, { useState } from "react";
import Bottle from "../../components/bottle";
import { config } from "../../data/config";
import { deepCopy } from "../../utils/deepCopyObject";
import { MAX_LIQUID_COUNT } from "../../vars/constants";

import "./styles.css";

const App = () => {
  const [bottleList, setBottleList] = useState(config.bottleList);
  
  const onClickBottle = (id) => {
    const sourceBottle = bottleList.find((bottle) => bottle.isSelected);
    if (!sourceBottle) {
      const newBottleList = bottleList.map((bottle) => {
        bottle.isSelected = false;
        if (bottle.id === id) {
          bottle.isSelected = true;
        }
        return bottle;
      });
      setBottleList(newBottleList);
    } else if (sourceBottle && sourceBottle.id === id) {
      const newBottleList = bottleList.map((bottle) => {
        bottle.isSelected = false;
        return bottle;
      });
      setBottleList(newBottleList);
    } else if (sourceBottle && sourceBottle.id !== id) {
      const destinationBottle = bottleList.find(bottle => bottle.id === id);
      if(sourceBottle.liquidList.length === 0) {
        return;
      }
      if(destinationBottle.liquidList.length === MAX_LIQUID_COUNT) {
        return;
      }
      let newBottleList = deepCopy(bottleList);
      newBottleList = newBottleList.map(bottle => {
        if(bottle.id === sourceBottle.id) {
          bottle.liquidList.pop();
        }
        if(bottle.id === destinationBottle.id) {
          bottle.liquidList.push(sourceBottle.liquidList[sourceBottle.liquidList.length - 1]);
        }
        if(bottle.liquidList.length === MAX_LIQUID_COUNT) {
          // if any bottle full with all one colour empty it
          let isAllSameColour = true;
          let firstColourId = bottle.liquidList[0].color.id;
          bottle.liquidList.forEach(item => {
            if(firstColourId !== item.color.id) {
              isAllSameColour = false;
            }
          });

          if(isAllSameColour) {
            bottle.liquidList = [];
          }
        }
        return bottle;
      })

      // if all bottles empty game over 
      setBottleList(newBottleList);
    }
    const emptyBottles = bottleList.reduce((acc, bottle) => {
      acc = acc + (bottle.liquidList.length === 0 ? 1 : 0);
      return acc;
    }, 0);
    if(emptyBottles > 4) {
      alert("game over you win");
      window.location.reload();
    }
  };
  return (
    <div className="app">
      <div className="bottle-list">
        {bottleList.map((bottle) => {
          return <Bottle {...bottle} onClick={onClickBottle} />;
        })}
      </div>
    </div>
  );
};

export default App;
