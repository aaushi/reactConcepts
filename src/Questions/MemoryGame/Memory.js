import React, { useState, useEffect } from "react";
import "./styles.css";

const TILE_COLORS = ["red", "green", "blue", "yellow"];

export default function Memory() {
  const [boardColors, setBoardColors] = useState(() =>
    shuffle([...TILE_COLORS, ...TILE_COLORS])
  );
  const [selectedTiles, setSelectedTiles] = useState([]);
  const [matchedTiles, setMatchedTiles] = useState([]);

  useEffect(() => {
    if (selectedTiles.length < 2) return;
    if (boardColors[selectedTiles[0]] === boardColors[selectedTiles[1]]) {
      setMatchedTiles([...matchedTiles, ...selectedTiles]);
      setSelectedTiles([]);
    } else {
      const timeOut = setTimeout(() => {
        setSelectedTiles([]);
      }, 1000);
      return () => clearTimeout(timeOut);
    }
  }, [selectedTiles]);
  const selectTile = (index) => {
    
    if (selectedTiles.length >= 2 || matchedTiles.includes(index) || selectedTiles.includes(index)) return;
    else {
      setSelectedTiles([...selectedTiles, index]);
    }
  };
  const restartGame=()=>{
    setMatchedTiles([]);
    setSelectedTiles([]);
    setBoardColors(shuffle([...TILE_COLORS,...TILE_COLORS]))
  }
  const didPlayerWin=matchedTiles.length===boardColors.length;
  return (
    <>
      <h1> {didPlayerWin?'You Win':'Memory'}</h1>
      <div className="board">
        {boardColors.map((tileColor, i) => {
          let isTileClicked =
            selectedTiles.includes(i) || matchedTiles.includes(i);
          let classUsed = isTileClicked ? `tile ${tileColor}` : `tile`;
          console.log(classUsed);
          return (
            <div className={classUsed} onClick={() => selectTile(i)}></div>
          );
        })}
      </div>
      <button onClick={()=>restartGame()}>Restart</button>
    </>
  );
}

/**
 * Returns the array shuffled into a random order.
 * Do not edit this function.
 */
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    // Swap the elements at i and randomIndex
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}
