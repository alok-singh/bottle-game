import React, { useState } from 'react';
import Bottle from '../../components/bottle';
import { deepCopy } from '../../utils/deepCopyObject';
import { config, MAX_LIQUID_COUNT } from '../../data/config';
// import { solvePuzzel } from '../../data/autoSolve';
import { isAllBottleHaveOnlyOneColor, isAllBottleEmpty } from '../../utils/bottleUtils';

import backgroundImage from '../../assets/texture-background.jpg';

import './styles.css';

const BottleGame = () => {
  const [bottleList, setBottleList] = useState(config.bottleList);
  const [emptyBottleOnFill, setEmptyBottleOnFill] = useState(false);
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
      const destinationBottle = bottleList.find((bottle) => bottle.id === id);
      if (sourceBottle.liquidList.length === 0) {
        return;
      }
      if (destinationBottle.liquidList.length === MAX_LIQUID_COUNT) {
        return;
      }
      let newBottleList = deepCopy(bottleList);
      newBottleList = newBottleList.map((bottle) => {
        if (bottle.id === sourceBottle.id) {
          bottle.liquidList.pop();
        }
        if (bottle.id === destinationBottle.id) {
          bottle.liquidList.push(sourceBottle.liquidList[sourceBottle.liquidList.length - 1]);
        }
        if (bottle.liquidList.length === MAX_LIQUID_COUNT) {
          // if any bottle full with all one colour empty it
          let isAllSameColour = true;
          let firstColourId = bottle.liquidList[0].color.id;
          bottle.liquidList.forEach((item) => {
            if (firstColourId !== item.color.id) {
              isAllSameColour = false;
            }
          });

          if (isAllSameColour && emptyBottleOnFill) {
            bottle.liquidList = [];
          }
        }
        return bottle;
      });

      // if all bottles empty game over
      setBottleList(newBottleList);
    }

    if (isAllBottleHaveOnlyOneColor(bottleList)) {
      alert('game over you win');
      // window.location.reload();
    }
    if (isAllBottleEmpty(bottleList)) {
      // alert("game over you win");
      // window.location.reload();
    }
    // win if all bottle have same color
  };
  return (
    <>
      <div className="button">
        {/* <button onClick={() => solvePuzzel(bottleList)}>Solve</button> */}
        <input type="checkbox" checked={emptyBottleOnFill} onChange={() => setEmptyBottleOnFill(!emptyBottleOnFill)} />
        <span>Empty Bottle On Fill</span>
      </div>
      <div className="app" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="bottle-list">
          {bottleList.map((bottle) => {
            return <Bottle {...bottle} onClick={onClickBottle} />;
          })}
        </div>
      </div>
    </>
  );
};

export default BottleGame;
