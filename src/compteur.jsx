import { useState, useEffect, useRef } from "react";
import './style.css';

function Compteur() {
  const [targetCount, setTargetCount] = useState(10);
  const [currentCount, setCurrentCount] = useState(10);
  const [water, setWater] = useState(0);
  const [targetWater, setTargetWater] = useState(0);
  const [isFilling, setIsFilling] = useState(false);
  const [isExePressed, setIsExePressed] = useState(false);

  const incrementWater = () => {
    setTargetWater(prevWater => Math.min(prevWater + 1, 100));
  };

  const decrementWater = () => {
    setTargetWater(prevWater => Math.max(prevWater - 1, 0));
  };

  const incrementTemp = () => {
    setTargetCount(prevCount => prevCount + 1);
  };

  const decrementTemp = () => {
    setTargetCount(prevCount => prevCount - 1);
  };

  const reset = () => {
    setTargetCount(10);
    setCurrentCount(10);
    setWater(0);
    setTargetWater(0);
    setIsFilling(false);
    setIsExePressed(false);
  };

  const startFilling = () => {
    if (currentCount === targetCount) {
      setIsFilling(true);
    }
  };

  const stopFilling = () => {
    setIsFilling(false);
  };

  const handleExePress = () => {
    setIsExePressed(true);
  };

  const waterPlusRef = useRef(null);
  let waterInterval = useRef(null);

  const handleMouseDown = () => {
    incrementWater();
    waterInterval.current = setInterval(incrementWater, 100);
  };

  const handleMouseUp = () => {
    clearInterval(waterInterval.current);
  };

  const getTempColor = (temp) => {
    if (temp < 20) return 'blue';
    if (temp >= 20 && temp < 60) return 'lightblue';
    if (temp >= 60 && temp < 80) return 'yellow';
    return 'red';
  };

  useEffect(() => {
    let interval;
    if (isExePressed && currentCount < targetCount) {
      interval = setInterval(() => {
        setCurrentCount((prevCount) => prevCount + 1);
      }, 1000);
    } else if (isExePressed && currentCount > targetCount) {
      interval = setInterval(() => {
        setCurrentCount((prevCount) => prevCount - 1);
      }, 1000);
    }

    if (currentCount === targetCount) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [currentCount, targetCount, isExePressed]);

  useEffect(() => {
    let interval;
    if (isFilling && water < targetWater) {
      interval = setInterval(() => {
        setWater((prevWater) => {
          const newWater = prevWater + 0.1;
          if (newWater >= targetWater) {
            stopFilling();
            return targetWater;
          }
          return newWater;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isFilling, water, targetWater]);

  return (
    <div className="container">
      <div className="tap">🚰</div>
      <div className="main-container">
        <div className="button-container">
          <div className="buttons">
            <div className="water-btns">
              <button
                className="water-plus"
                onClick={incrementWater}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                ref={waterPlusRef}
              >
                Qté +
              </button>
              <button className="water-moins" onClick={decrementWater}>
                Qté -
              </button>
            </div>
            <div className="water-display">
              {Math.max(targetWater - water, 0).toFixed(1)} cl
            </div>
            <div className="temp-btns">
              <button className="plus" onClick={incrementTemp}>
                Chaud
              </button>
              <button className="moins" onClick={decrementTemp}>
                Froid
              </button>
            </div>
            <div className="temp-display">{targetCount}°C</div>
            <button className="close" onClick={reset}>
              Fermer
            </button>
            <button
              className="open"
              onClick={startFilling}
              disabled={isFilling || water >= targetWater || currentCount !== targetCount}
            >
              Ouvrir
            </button>
          </div>
          <button className="exe" onClick={handleExePress}>
            Exe
          </button>
        </div>
        <div className="glass-and-gauge-container">
          <div className="glass-container">
            <div className="graduation">
              {[...Array(21)].map((_, i) => (
                <div key={i} style={{ top: `${i * 5}%` }}></div>
              ))}
            </div>
            <div className="glass">
              <div className="water" style={{ height: `${water}%` }}></div>
            </div>
          </div>
          <div className="temp-gauge-container">
            <div className="temp-gauge" style={{ height: `${(currentCount / 100) * 200}px`, backgroundColor: getTempColor(currentCount) }}></div>
          </div>
          <div className="indicators">
            <div className="indicator-container">
              <div className={`indicator resistor ${isExePressed && currentCount < targetCount ? 'on' : 'off'}`}></div>
              <div className="indicator-label">Resistor</div>
            </div>
            <div className="indicator-container">
              <div className={`indicator compressor ${isExePressed && currentCount > targetCount ? 'on' : 'off'}`}></div>
              <div className="indicator-label">Compressor</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Compteur;
